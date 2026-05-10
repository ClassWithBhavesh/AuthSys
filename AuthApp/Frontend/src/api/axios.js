import axios from 'axios';

// const loginBaseURI = 'http://localhost:2468/api/v1/auth/login';
// const registerBaseURI = 'http://localhost:2468/api/v1/auth/register';

const BASE_URL = 'http://localhost:2468/api/v1/auth';

export default axios.create({
    baseURL: BASE_URL,  
    withCredentials: true
})

