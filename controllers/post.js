// Modern mongoose does not use callback function but rather makes use of asynchronous programming where a function is given a stste of pending and receives other latter states ie fulfiled or rejected if the code inside a promise method eg .then is either fulfilled or rejected and when the promise is rejected ,the code inside .catch is ran.
const Post = require('../models/post');
const getPosts = (req, res) => {
   const posts=Post.find()
   .select("id title body")
   .then(post=>{
    res.json({
        post
    })
   })
   .catch(err=>console.log(err))
  };
  const createPost = (req, res) => {
    const post = new Post(req.body);
    // console.log('CREATINGPOST:', req.body);
    post.save()
      .then(result => {
        res.json({
          post: result
        });
      })
    //   .catch(err => {
    //     res.status(404).json({
    //       error: err
    //     });
    //   });
  };
  module.exports = {
    getPosts,
    createPost
  };
  