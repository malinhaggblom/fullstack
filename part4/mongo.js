const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =
    `mongodb+srv://fullstack-part4:${password}@cluster0.o3lx24c.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(url)

const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number,
})

const Blog = mongoose.model('Blog', blogSchema)

const blog = new Blog({
  title: process.argv[3],
  author: process.argv[4],
  url: process.argv[5],
  likes: process.argv[6],
  important: false,
})

if ( blog.important === false ) {
  blog.save().then(() => {
    console.log('blog saved!')
    mongoose.connection.close()
  })
}

else{
  Blog.find({}).then(result => {
    result.forEach(blog => {
      console.log(blog.title, blog.author)
    })
    mongoose.connection.close()
  })
}