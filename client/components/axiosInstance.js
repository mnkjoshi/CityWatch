// Create a custom axious isntance wiht a custom url
import axios from 'axios';

const instance = axios.create({
    baseURL: '',
});

export default instance;
