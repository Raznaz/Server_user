import Post from './Post.js';

class PostService {
  async create(post) {
    const createdPost = await Post.create(post);
    return createdPost;
  }

  async getAll() {
    const posts = await Post.find();
    return posts;
  }

  async getOne(id) {
    if (!id) {
      throw new Error('Not ID');
    }
    const post = await Post.findById(id);
    return post;
  }

  async update(currentPost) {
    const updPost = await Post.findByIdAndUpdate(currentPost._id, currentPost, {
      new: true,
    });
    return updPost;
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

export default new PostService();
