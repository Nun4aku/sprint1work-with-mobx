import axios from "axios";

export default class PostService {
    

    static async getAll () {

        const access_token = localStorage.getItem('access_token');

        try {
            const response = await axios.get(`http://localhost:3000/api/tasks?access_token=${access_token}`)
            //console.log(response.data)
            return response.data
    
        } catch (e) {
            console.log(e);
        }
    }

}