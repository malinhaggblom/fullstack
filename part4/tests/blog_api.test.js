const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const Blog = require('../models/blogs')
const api = supertest(app)
const helper = require('./test_helper')
const bcrypt = require('bcrypt')
const User = require('../models/user')

jest.setTimeout(10000)

beforeEach(async () => {
  await Blog.deleteMany({})
  helper.initialBlogs.forEach(async (blog) => {
    let blogObject = new Blog(blog)
    await blogObject.save()
  })
})

//test 4.8
test('blogs are returned as json', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
}, 100000)

//test 4.9
test('verify unique identifier property as id', async () => {
  const response = await api.get('/api/blogs')
  expect(response.body[0].id).toBeDefined()
})

//test 4.10
test('successfully creating new blog post', async () => {
  const user = await helper.initialUsers[0]._id
  console.log(user)
  const newBlog = {
    title: 'Something',
    author: 'Me',
    url: 'https://something.com/',
    likes: 100,
    userId: user
  }
  console.log(newBlog.userId)
  await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(201)
    .expect('Content-Type', /application\/json/)

  const blogsAtEnd = await helper.blogsInDb()
  expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length + 1)

  const title = blogsAtEnd.map(n => n.title)
  expect(title).toContain(
    'Something'
  )
})

//test 4.11
test('if likes property missing, default value 0', async () => {
  const newBlog ={
    title: 'Something',
    author: 'Me',
    url: 'https://something.com/',
  }
  await api
    .post('/api/blogs')
    .send(newBlog)

  const blogsAtEnd = await helper.blogsInDb()
  const blogLikes = blogsAtEnd.pop()
  expect(blogLikes.likes).toBe(0)
})

//test 4.12
test('if title and url missing, status code 400 Bad Request', async () => {
  const newBlog ={
    author: 'Me',
    likes: 2,
    userId: user
  }
  await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(400)

  const blogsAtEnd = await helper.blogsInDb()
  expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length)
})

//test 4.13
test('deleting blog post', async () => {
  const newBlog = {
    title: 'Something',
    author: 'Me',
    url: 'https://something.com/',
    likes: 0
  }
  await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(201)

  const blogsAtEnd = await helper.blogsInDb()
  const blogToDelete = blogsAtEnd[0]

  await api
    .delete(`/api/blogs/${blogToDelete.id}`)
    .expect(204)

  const blogsAtEndAfter = await helper.blogsInDb()

  expect(blogsAtEndAfter.length).toBe(
    helper.initialBlogs.length
  )
  const urls = blogsAtEndAfter.map(b => b.url)

  expect(urls).not.toContain(blogToDelete.url)
})

//test 4.14
test('update blog post', async () => {
  const newBlog = {
    title: 'Something',
    author: 'Me',
    url: 'https://something.com/',
    likes: 0
  }
  const result = await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(201)

  newBlog.likes += 1

  await api
    .put(`/api/blogs/${result.body.id}`)
    .send(newBlog)

  const blogsAtEnd = await helper.blogsInDb()
  expect(blogsAtEnd[6].likes).toBe(1)
})

afterAll(() => {
  mongoose.connection.close()
})