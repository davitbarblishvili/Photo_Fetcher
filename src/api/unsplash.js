import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {Authorization:
         'Client-ID v9peMTbRkbvol-tjDAJoOnvZI9-jziKuYcKjMYTg6OY'
}
});