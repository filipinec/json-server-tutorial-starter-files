// javascript for create.html
const form = document.querySelector('form')

const createPost = async(e) => {
  e.preventDefault()

 const doc = {
  title: form.title.value,
  body: form.body.value,
  likes: 0
 }
 axios.post('http://localhost:3000/posts', doc).then(resp => {
  console.log(resp)
 })

window.location.replace('/index.html')
}



form.addEventListener("submit", createPost)