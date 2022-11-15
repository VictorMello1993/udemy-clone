import shell from "shelljs";
import { createWriteStream } from "fs";
import fs from "fs/promises";
import path from "path";
import { faker } from "@faker-js/faker";
import request from "follow-redirects";
import slugify from "slugify";

const https = request.https;

const markdownLookupTypes = {
  0: "h1",
  1: "h1",
  2: "p",
  3: "p",
  4: "p",
  5: "p",
  6: "ul",
  7: "q",
};

function generateMarkdown(lines = 10) {
  return Array.from({ length: lines }, () => {
    const randomType = Math.round(Math.random() * 7).toString();
    const type = markdownLookupTypes[randomType];
    switch (type) {
      case "h1":
        return `# ${faker.lorem.sentence()}`;
      case "p":
        faker.lorem.text();
        break;
      case "ul":
        return Array.from({ length: Math.round(Math.random() * 3 + 3) }, () => `- ${faker.lorem.text()}`).join("\n");
      case "q":
        return Array.from({ length: Math.round(Math.random() * 3 + 5) }, () => `> ${faker.lorem.text()}`).join("\n");
    }
  }).join("\n");
}

async function generatePost(
  { description, src, instructorName, price, ratingClassification, totalRate },
  { title, slug, postPath, author, authorImageUrl, authorImageFileName, imageFileName },
  directory,
) {
  const date = faker.date.recent();
  const text = generateMarkdown(Math.round(Math.random() * 12 + 3));

  const dirPath = path.join("courses", directory);

  const markDownFile = [
    "---",
    `title: "${title}"`,
    `slug: "${slug}"`,
    `date: "${date.toJSON()}"`,
    `author: "${author}"`,
    `authorImage: "${authorImageFileName}"`,
    `image: "${imageFileName}"`,
    `description: "${description}"`,
    `instructorName: "${instructorName}"`,
    `price: "${price}"`,
    `ratingClassification: "${ratingClassification}"`,
    `totalRate: "${totalRate}"`,
    "---",
    text,
  ].join("\n");

  await fs.writeFile(path.join(dirPath, "index.md"), markDownFile);

  console.log(`Generated post at ${postPath}`);
}

async function downloadImage(url, imagePath) {
  const imageStream = createWriteStream(imagePath);
  https.get(url, (request) => {
    request.pipe(imageStream);
    imageStream.on("finish", () => {
      imageStream.close();
    });
  });
}

async function createDirectories(courses) {
  const directoriesInfo = [];

  for (let i = 0; i < courses.length; i++) {
    const title = faker.lorem.sentence();
    const slug = slugify(title, {
      strict: true,
    }).toLowerCase();

    const postPath = path.join("courses", slug);

    const imageFileName = slugify(faker.lorem.slug(), {
      strict: true,
    })
      .toLowerCase()
      .concat(".jpg");

    const author = faker.internet.userName().toLowerCase();
    const authorImageUrl = faker.internet.avatar();
    const authorImageFileName = slugify(author, {
      strict: true,
    }).concat(".jpg");

    directoriesInfo.push({ title, slug, postPath, author, authorImageUrl, authorImageFileName, imageFileName });

    await fs.mkdir(postPath);
  }

  return directoriesInfo;
}

(async function generateCourses() {
  console.log("Starting process...");

  const json = await fs.readFile("./data/course.json", "utf-8", (data) => {
    return data;
  });

  const { courses } = JSON.parse(json);

  shell.rm("-rf", "courses");
  shell.mkdir("courses");

  const directoriesInfo = await createDirectories(courses);
  const directories = await fs.readdir("courses");

  await Promise.all(
    courses.map(async (course, index) => {
      await generatePost(course, directoriesInfo[index], directories[index]);
      await downloadImage(course.src, path.join("courses", directories[index], directoriesInfo[index].imageFileName));
      await downloadImage(directoriesInfo[index].authorImageUrl, path.join("courses", directories[index], directoriesInfo[index].authorImageFileName));
    }),
  );

  console.log("Success!");
})();
