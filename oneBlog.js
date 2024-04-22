const blogContainer = document.getElementById("blog")
const query = location.search
const param = new URLSearchParams(query)
const id = param.get("id")
const editBtn = document.getElementById("editBtn")


const API_ENDPOINT = `https://v1.appbackend.io/v1/rows/t2Y4FDhEucMu/${id}`;

editBtn.href = `editBlog.html?id=${id}`

async function getBlog() {
    const res = await fetch(API_ENDPOINT)
    const data = await res.json()
    return data
}

async function buildApp() {
    const blog = await getBlog()

    const title = document.createElement("h1")
    const author = document.createElement("p")
    const content = document.createElement("p")

    title.textContent = blog.name
    content.textContent = blog.content
    author.textContent = `Created By ${blog.author}`

    title.classList.add("text-4xl", "font-bold")
    author.classList.add("font-bold")

    content.classList.add("whitespace-pre-line")


    blogContainer.append(title, author, content)
}

buildApp()