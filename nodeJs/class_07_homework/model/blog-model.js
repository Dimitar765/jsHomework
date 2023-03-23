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

  async editBlogPost(id, title, body, tags) {
    const rawBlogPosts = await fileServices.readFile("./db/blog.json");
    const blogPosts = JSON.parse(rawBlogPosts);
    blogPosts.map((blogPost) => {
      if (blogPost.id === id) {
        blogPost.title = title;
        blogPost.body = body;
        blogPost.tags = tags;
        return blogPost;
      }
    });
    await fileServices.writeFile(
      "./db/blog.json",
      JSON.stringify(blogPosts, null, 2)
    );
  }

  async deleteBlogPost(id) {
    const rawBlogPosts = await fileServices.readFile("./db/blog.json");
    const blogPosts = JSON.parse(rawBlogPosts);
    const blogPost = blogPosts.find((blogPost) => blogPost.id === id);
    if (blogPost) {
      blogPosts.splice(blogPosts.indexOf(blogPost), 1);
      await fileServices.writeFile(
        "./db/blog.json",
        JSON.stringify(blogPosts, null, 2)
      );
    }
  }
}

export default BlogModel;
