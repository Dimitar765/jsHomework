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
  res.send("new blog post");

  await blogControler.createBlogPost(
    body.title,
    body.body,
    body.author,
    body.tags
  );
});

router.patch("/:id", async (req, res) => {
  const body = req.body;
  const id = req.params.id;
  await blogControler.editBlogPost(id, body.title, body.body, body.tags);
  console.log(body.tags);
  res.send("Blog post edited");
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  await blogControler.deleteBlogPost(id);
  res.send("Blog post deleted");
});

export default router;
