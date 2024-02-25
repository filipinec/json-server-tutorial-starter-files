// javascript for details.html
const id = new URLSearchParams(window.location.search).get('id')
console.log(id);
const container = document.querySelector(".details")
const deleteBtn = document.querySelector(".delete")

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

deleteBtn.addEventListener("click", async(e) => {
axios.delete('http://localhost:3000/posts/' + id).then(() => alert("data has deleted"))
 window.location.replace('/index.html')
})

window.addEventListener('DOMContentLoaded', (e) => renderDetails());