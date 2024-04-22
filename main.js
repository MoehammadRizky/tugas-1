const blogsContainer = document.getElementById("blogs");
const API_ENDPOINT = "https://v1.appbackend.io/v1/rows/t2Y4FDhEucMu";
const editBtn = document.getElementById("editBtn")
editBtn.href = `makeBlog.html`

async function getAllBlogs() {
    const res = await fetch(API_ENDPOINT)
    const data = await res.json();
    return data;
}

async function deleteBlog(id) {
    const res = await fetch(API_ENDPOINT, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify([id])
    })
    location.reload()

}

async function BuildApp() {
    const { data: blogs } = await getAllBlogs()
    console.log(blogs)

    blogs.forEach(blog => {
        const blogContainer = document.createElement("div")
        const blogDivBtn = document.createElement("div")
        const blogCover = document.createElement("img")
        const blogTitle = document.createElement("h2")
        const blogContent = document.createElement("p")
        const blogBtn = document.createElement("a")
        const deleteBlogBtn = document.createElement("button")

        //cover
        blogCover.src = blog.cover
        blogCover.classList.add("w-[300]", "h-[75px]")
        //title
        blogTitle.textContent = blog.name
        blogTitle.classList.add("text-sm", "font-bold", "mt-2")
        //content
        blogContent.textContent = blog.content
        //div untuk menyatukan btn
        blogDivBtn.classList.add("mt-10", "flex", "justify-between", "gap-1")
        //baca artikel
        blogBtn.textContent = "Baca Artikel!"
        blogBtn.href = `blog.html?id=${blog._id}`
        blogBtn.classList.add("bg-black", "text-white", "py-3", "px-[10px]", "rounded-xl", "text-xs", "font-medium")
        //delete
        deleteBlogBtn.textContent = "Delete"
        deleteBlogBtn.classList.add("bg-rose-500", "text-white", "py-3", "px-[10px]", "text-xs", "font-medium", "rounded-lg")


        // "grid", "grid-cols-1", "md:grid-cols-3", "gap-4"

        blogContainer.classList.add("bg-slate-100", "p-6", "rounded-xl",)
        deleteBlogBtn.addEventListener("click", async () => {
            deleteBlog(blog._id)
        })
        blogDivBtn.append(blogBtn, deleteBlogBtn)

        blogContainer.append(blogCover, blogTitle, blogDivBtn)
        blogsContainer.append(blogContainer)
    });
}

BuildApp()
