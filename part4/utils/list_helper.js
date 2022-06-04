const dummy = (blogs) => {
    return 1
  }
  
  const totalLikes = (blogs) => {
    const reducer = (sum, blog) => {
      return sum + blog.likes
    }
    return blogs.length === 0 ? 0 : blogs.reduce(reducer, 0)
  }
  
  const favoriteBlog = (blogs) => {
    let like = blogs.map(blog => blog.likes)
    let indexOfHighest = like.indexOf(Math.max(...like))
    return blogs[indexOfHighest]
  }
  
  const mostBlogs = (blogs) => {
    let authors = blogs.map(blog => blog.author)
    authors = [...new Set(authors)]
    let amount = new Array(authors.length).fill(0)
    blogs.map(blog =>
      amount[authors.indexOf(blog.author)] += 1
    )
    let index = amount.indexOf(Math.max(...amount))
  
    return {
      author: authors[index],
      blogs: amount[index]
    }
  }
  
  const mostLikes = (blogs) => {
    let authors = blogs.map(blog => blog.author)
    authors = [...new Set(authors)]
  
    let likes = new Array(authors.length).fill(0)
    blogs.map(blog =>
      likes[authors.indexOf(blog.author)] += blog.likes
    )
  
    let index = likes.indexOf(Math.max(...likes))
  
    return {
      author: authors[index],
      likes: likes[index]
    }
  }
  
  module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs,
    mostLikes
  }