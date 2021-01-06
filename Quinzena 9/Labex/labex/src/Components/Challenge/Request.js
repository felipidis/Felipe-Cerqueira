import axios from "axios";

export const RequestPost =(url, body, header ) => {
    axios
        .post(url, body, header)
        .then(response => {})
        .catch(error => {});
}

export const RequestGet = (url, body) => {
    axios
        .get(url, body)
        .then(response => {})
        .catch(error => {})
}