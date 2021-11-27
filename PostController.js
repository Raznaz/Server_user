import PostService from './PostService.js';

class PostController {
  async create(req, res) {
    try {
      const post = await PostService.create(req.body);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getAll(req, res) {
    try {
      const posts = await PostService.getAll();
      return res.json(posts);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getOne(req, res) {
    try {
      const post = await PostService.getOne(req.params.id);
      res.json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async update(req, res) {
    try {
      const currentPost = req.body;
      console.log(currentPost);
      const newPost = await PostService.update(currentPost);
      res.json(newPost);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new PostController();
