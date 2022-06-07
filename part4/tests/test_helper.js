const Blog = require('../models/blog')
const User = require('../models/user')

const initialBlogs = [
    { _id: '5a422a851b54a676234d17f7', title: 'No mow May could backfire', author: 'Erin', url: 'https://www.theimpatientgardener.com/no-mow-may/', likes: 1, __v: 0 },
    { _id: '5a422aa71b54a676234d17f8', title: 'Wine and weeds', author: 'Evan Embree', url: 'https://wellfedgarden.org/2018/04/25/farm-dinner/', likes: 100, __v: 0 }
 
  ]
  const initialUsers = [
    { _id: '6274d665d304c0d5d490b1c0', username:'username', name:'Superuser', passwordHash:'$2b$10$0nzRHT2r7YevIedLGY7S0OHr07fS8ge9x8xNYQxXDs8k2w7RS0Tta' }
  ]
  
  const blogsInDb = async () => {
    const blogs = await Blog.find({})
    return blogs.map(blog => blog.toJSON())
  }

const usersInDb = async () => {
  const users = await User.find({})
  return users.map(u => u.toJSON())
}

module.exports = {
  initialBlogs,
  blogsInDb,
  usersInDb,
  usersInDb,
}