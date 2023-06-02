import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com"
const IMG_BASE_URL = "https://placehold.co"

function getPosts() {
    return axios.get(`${BASE_URL}/posts`)
}

function getComments(postId: number) {
    return axios.get(`${BASE_URL}/posts/${postId}/comments`)
}

function getAuthor(userId: number) {
    return axios.get(`${BASE_URL}/users/${userId}`)
}

function getImagePlaceholder(text: string) {
    return `${IMG_BASE_URL}/600x400/000/FFF/?text=${text}`
}

const AppService = {
    getPosts,
    getComments,
    getAuthor,
    getImagePlaceholder
}

export default AppService;