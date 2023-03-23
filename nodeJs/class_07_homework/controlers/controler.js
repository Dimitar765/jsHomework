import BlogModel from "../model/blog-model.js";

const blogModel = new BlogModel();

class Controler {
  async listBlogPosts() {
    const listBlogPosts = await blogModel.getAllBlogPosts();
    return listBlogPosts;
  }

  async createBlogPost(title, body, author, tags) {
    await blogModel.createBlogPost(title, body, author, tags);
  }

  async editBlogPost(title, body, tags) {
    await blogModel.editBlogPost(title, body, tags);
  }

  async deleteBlogPost(id) {
    await blogModel.deleteBlogPost(id);
  }
}

export default Controler;
