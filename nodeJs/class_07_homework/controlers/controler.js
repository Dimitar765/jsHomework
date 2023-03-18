import BlogModel from "../model/blog-model.js";

const blogModel = new BlogModel();

class Controler {
  async listBlogPosts() {
    const listenBlogPosts = await blogModel.getAllBlogPosts();
    return listenBlogPosts;
  }

  async createBlogPost(title, body, author, date, tags) {
    await blogModel.createBlogPost(title, body, author, date, tags);
  }
}

export default Controler;
