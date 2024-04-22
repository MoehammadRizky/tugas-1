const blogContainer = document.getElementById("blog")
const query = location.search
const param = new URLSearchParams(query)
const id = param.get("id")

const API_ENDPOINT = `https://v1.appbackend.io/v1/rows/t2Y4FDhEucMu/${id}`;

const titleInput = document.getElementById("name");
const authorInput = document.getElementById("author");
const coverInput = document.getElementById("cover");
const contentInput = document.getElementById("content");
const form = document.getElementById("form")

form.addEventListener("submit", async (event) => {

    event.preventDefault();

    await fetch("https://v1.appbackend.io/v1/rows/t2Y4FDhEucMu", {
        method: "PUT", headers: {
            'Content-Type': 'application/json'
        }, body: JSON.stringify({ "_id": id, "name": titleInput.value, "cover": cover, "content": contentInput.value, "author": authorInput.value, })

    })

    location.replace(`/blog.html?id=${id}`)

})

async function getBlog() {
    const res = await fetch(API_ENDPOINT)
    const data = await res.json()
    return data
}

async function buildApp() {
    const blog = await getBlog()

    titleInput.value = blog.name;
    authorInput.value = blog.author;
    contentInput.value = blog.content;

}
buildApp()