document.addEventListener("DOMContentLoaded", () => {
    updatePosts()
})

const updatePosts = () => {

    fetch("http://localhost:5000/api/all")
    .then(res => {
        return res.json()
    })
    .then(res => {
        let postElements = ''

        const posts = JSON.parse(res)

        posts.forEach((post) => {
            let postElement = `
            <div id=${post.id} class="card mb-4">
                <div class="card-header">
                    <h5 class="card-title">${post.title}</h5>
                </div>
                <div class="card-body">
                    <div class="card-text">${post.description}</div>
                </div>
            </div>
            `
            postElements += postElement
        })

        document.getElementById("posts").innerHTML = postElements
    })
}

const newPost = () => {
    const title = document.getElementById("title").value
    const description = document.getElementById("desc").value

    let post = {title, description}

    const options = {
        method: "POST",
        headers: new Headers ({ "content-type" : "application/json" }),
        body: JSON.stringify(post)
    }

    fetch("http://localhost:5000/api/new", options)
    .then(res => {
        console.log(res)
        updatePosts()
        document.getElementById("title").value = ""
        document.getElementById("desc").value = ""
    })
}
