const BASEURL = "https://jsonplaceholder.typicode.com"
const ENDPOINT = "posts"


const GET_ENDPOINT = `${BASEURL}/${ENDPOINT}`
const list = document.getElementById("posts")

const getPosts = async () => {
    const response = await fetch(GET_ENDPOINT)
    const data = await response.json()
    console.log("data:", data)

    for (let i = 0; i < data.length; i++) {
        const item = document.createElement("li")
        item.innerHTML = data[i].title
        list?.appendChild(item)
    }
}

getPosts()


interface user {
    userID: number;
    id: number;
    title: string
    body: string
}

interface users {
    data: user[]
}