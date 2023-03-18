import fileServices from "../shared-services/file-services.js";
import { BlogPost } from "../entities/blog-post.js";

class BlogModel {
  async getAllBlogPosts() {
    const rawBlogPosts = await fileServices.readFile("./db/blog.json");
    const blogPosts = JSON.parse(rawBlogPosts);

    return blogPosts;
  }

  async createBlogPost(title, body, author, date, tags) {
    const rawBlogPosts = await fileServices.readFile("./db/blog.json");
    const blogPosts = JSON.parse(rawBlogPosts);
    const newBlogPost = new BlogPost(title, body, author, date, tags);
    blogPosts.push(newBlogPost);
    await fileServices.writeFile(
      "./db/blog.json",
      JSON.stringify(blogPosts, null, 2)
    );
  }
}

export default BlogModel;
