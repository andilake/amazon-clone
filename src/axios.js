//npm i axios

import axios from "axios";

const instance = axios.create({
    baseURL:'https://us-central1-clone-c1075.cloudfunctions.net/api'

    //baseURL:'http://localhost:5001/clone-c1075/us-central1/api' // The API (cloud function) URL
});

export default instance;