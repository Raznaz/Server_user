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
    if (!currentPost._id) {
      throw new Error('no Post !');
    }
    const updPost = await Post.findByIdAndUpdate(currentPost._id, currentPost, {
      new: true,
    });
    return updPost;
  }

  async removePost(id) {
    if (!id) {
      throw new Error('Dont have your  ID');
    }
    const remPost = await Post.findByIdAndDelete(id);
    return remPost;
  }
}

export default new PostService();
