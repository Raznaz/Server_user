import express from 'express';
import mongoose from 'mongoose';
import Post from './Post.js';

const PORT = 3000;
const DB_URL = `mongodb+srv://user:user@cluster0.sbri7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const app = express();

// app.get('/', (req, res) => {
//   console.log(req.query);
//   res.status(200).json('Server is OK !!!');
// });

app.use(express.json());

app.post('/', async (req, res) => {
  try {
    console.log(req.body);
    const { author, title, content, picture } = req.body;
    const post = await Post.create({ author, title, content, picture });
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
    console.error(error);
  }
});

async function startApp() {
  try {
    await mongoose.connect(DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
}

startApp();
