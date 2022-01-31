import axios from "axios";
export default class PostService {
    

    static async getAll () {

        try {
            const response = await axiosOptions().get('tasks')
            return response.data
    
        } catch (e) {
            console.log(e);
        }
    }
}


function axiosOptions () {

    const instance = axios.create({
        baseURL: 'http://localhost:3000/api/',
        headers: {'access_token': localStorage.getItem('access_token')}
    });

    return instance;
}
