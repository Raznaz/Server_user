import post from './Post.js';

class PostController {
  async create(req, res) {
    async (req, res) => {
      try {
        const { author, title, content, picture } = req.body;
        const post = await post.create({ author, title, content, picture });
        res.status(200).json(post);
      } catch (error) {
        res.status(500).json(error);
      }
    };
  }
}

export default new PostController();
