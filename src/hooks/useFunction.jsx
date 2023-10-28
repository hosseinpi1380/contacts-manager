import axios from "axios"

export const useFetch = url => {
    return axios.get(url);
}

