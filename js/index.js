// javascript for index.html
const container = document.querySelector(".blogs")
const renderPosts = async () => {
  let url = 'http://localhost:3000/posts'
  
  axios.get(url).then(res => {
  const posts = res.data
  console.log(posts)
  let template = '';
  posts.forEach(post => {
    template +=  `
    <div class="post">
    <h2>${post.title}</h2>
    <p><small>${post.likes} likes</small></p>
    <p>${post.body.slice(0,200)}</p>
    <a href="/details.html?id=${post.id}">read more...</a>
    </div>
    `
  })
  container.innerHTML = template
})


}

window.addEventListener('DOMContentLoaded', (e) => renderPosts());