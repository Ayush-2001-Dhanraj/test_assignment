const BASEURL = "https://jsonplaceholder.typicode.com"
const ENDPOINT = "posts"


const GET_ENDPOINT = `${BASEURL}/${ENDPOINT}`
const list = document.getElementById("posts")
const filteredList = document.getElementById("filteredPosts")

const getPosts = async () => {
    const response = await fetch(GET_ENDPOINT)
    const data = await response.json()
    for (let i = 0; i < data.length; i++) {
        const item = document.createElement("li")
        item.innerHTML = data[i].title
        list?.appendChild(item)
    }

    // filtered data
    const filteredData = data.filter((d: user) => d.title.includes("in"))
    for (let i = 0; i < filteredData.length; i++) {
        const item = document.createElement("li")
        item.innerHTML = filteredData[i].title
        filteredList?.appendChild(item)
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