exports.getPosts = (req, res, next) => {
  res.status(200).json({
    post: [
      {
        title: "First Post",
        content: "This is the first post!",
      },
    ],
  });
};

exports.createPost = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  console.log(title, content);
  //Create post in DB
  res.status(201).json({
    message: "Post Creado",
    post: { id: new Date().toISOString(), title: title, content: content },
  });
};
