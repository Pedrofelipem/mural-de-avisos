module.exports = {
    posts: [
        {
            id: "1",
            title: "post01", 
            description: "<p>bla bla bla bla bla bla</p>"
        }
    ],

    getAll() {
        return this.posts
    },

    newPost(title, description){
        this.posts.push({id: generateID(), title, description})
    }
}

const generateID = () =>{
    let id = Math.random().toString().substring(2,9)
    return id
}