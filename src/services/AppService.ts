import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com"
const IMG_BASE_URL = "https://placehold.co"

function getPosts() {
    return axios.get(`${BASE_URL}/posts`)
}

function getPostsById(postId: string) {
    return axios.get(`${BASE_URL}/posts/${postId}`)
}

function getComments(postId: string) {
    return axios.get(`${BASE_URL}/posts/${postId}/comments`)
}

function getAuthor(userId: number) {
    return axios.get(`${BASE_URL}/users/${userId}`)
}

function getImagePlaceholder(text: string, size?: string, backgroundColor?: string) {
    return `${IMG_BASE_URL}/${size || "600x400"}/${backgroundColor || "000"}/FFF/?text=${text}`
}

const AppService = {
    getPosts,
    getPostsById,
    getComments,
    getAuthor,
    getImagePlaceholder
}

export default AppService;