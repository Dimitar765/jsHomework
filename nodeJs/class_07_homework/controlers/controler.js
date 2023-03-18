import BlogModel from "../model/blog-model.js";

const blogModel = new BlogModel();

class Controler {
  async listBlogPosts() {
    const listBlogPosts = await blogModel.getAllBlogPosts();
    return listBlogPosts;
  }

  async createBlogPost(title, body, author, date, tags) {
    await blogModel.createBlogPost(title, body, author, date, tags);
  }
}

export default Controler;
