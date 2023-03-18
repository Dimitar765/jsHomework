import express from "express";
import controler from "../controlers/controler.js";

const blogControler = new controler();

const router = express.Router();

router.get("/", async (req, res) => {
  const blogPosts = await blogControler.listBlogPosts();
  res.send(blogPosts);
});

router.post("/", async (req, res) => {
  const body = req.body;
  res.send(body);

  await blogControler.createBlogPost(
    body.title,
    body.body,
    body.author,
    body.date,
    body.tags
  );
});

export default router;
