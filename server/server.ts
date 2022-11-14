import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();

app.use(express.json());
app.use(cors());

app.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const { ...values } = req.body;
    const result = await fetch("https://webhook.site/6c31099c-7914-4842-8cb2-315e13de7148", {
      method: "POST",
      body: JSON.stringify(req.body),
    });

    console.log(result);

    return res.json({ message: "Dados enviados ao servidor!" });
  } catch (error) {
    console.log(error);
  }
});

app.listen(3001, () => console.log("server is running at 3001"));
