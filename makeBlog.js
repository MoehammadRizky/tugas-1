const blogContainer = document.getElementById("blog")

const API_ENDPOINT = `https://v1.appbackend.io/v1/rows/t2Y4FDhEucMu`;

const form = document.getElementById("form")

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target)

    const title = formData.get("name");
    const author = formData.get("author");
    const category = formData.get("category");
    const cover = formData.get("cover");
    const content = formData.get("content");

    await createBlog(title, content, author, cover, category)
    location.replace("/")

})


async function createBlog(title, content, author, cover, category) {
    const res = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        }, body: JSON.stringify([{ "name": title, "cover": cover, "content": content, "author": author, "category": "blog" }])
    })
    const data = await res.json()
    return data
}

