// javascript for details.html
const id = new URLSearchParams(window.location.search).get('id')
console.log(id);
const container = document.querySelector(".details")

const renderDetails = async () => {
  let url = ('http://localhost:3000/posts/' + id)
  
  axios.get(url).then(res => {
  const post = res.data
  console.log(post)
  
  const template = `
  <h1>${post.title}</h2>
  <p>${post.body}</p>
  `
  container.innerHTML = template
})



}


window.addEventListener('DOMContentLoaded', (e) => renderDetails());