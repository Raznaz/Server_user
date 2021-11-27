import Post from './Post.js';

class PostController {
  async create(req, res) {
    try {
      const { author, title, content, picture } = req.body;
      const post = await Post.create({ author, title, content, picture });
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getAll(req, res) {
    try {
      const posts = await Post.find();
      return res.json(posts);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getOne(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).json({ message: 'ID incorrect' });
      }
      const post = await Post.findById(id);
      return res.json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async update(req, res) {
    try {
      const post = req.body;
      if (!post._id) {
        res.status(400).json({ message: 'ID not fined' });
      }
      const updPost = await Post.findByIdAndUpdate(post._id, post, {
        new: true,
      });
      return res.json(updPost);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async removePost(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).json({ message: 'ID not fined' });
      }
      const remPost = await Post.findByIdAndDelete(id);
      return res.json(remPost);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new PostController();
