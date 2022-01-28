import axios from "axios";

export default class PostService {
    
    static async getAll () {
        try {
            const response = await axios.get('http://localhost:3000/api/tasks?access_token=vkXFokDADQDFunWPRlCpLxPaVbECCR80B5S8S6LGmqHokgGihFMffuijmcE21A5T')
            return response.data
    
        } catch (e) {
            console.log(e);
        }
    }

}