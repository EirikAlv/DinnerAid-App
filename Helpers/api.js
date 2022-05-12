import axios from 'axios';
import Config from 'react-native-config';
import SInfo from 'react-native-sensitive-info';

const baseUrl = Config.APIBASEURL;

export async function get_groceries() {return await get_async('groceries');}
export async function orderGrocery(body) {return await post_async('orderGrocery', body);}


async function get_async(endpoint) {
    const token = await SInfo.getItem('accessToken', {});
    console.log(token);

    let res = {};
    console.log(`${baseUrl}${endpoint}`);
    await axios.get(`${baseUrl}${endpoint}`, {
        headers: {
            Authorization: `Bearer ${token}`    // send the access token through the 'Authorization' header
        }
    }).then(response => res = response);
    return res.data;
}

async function post_async(endpoint, body) {
    const token = await SInfo.getItem('accessToken', {});

    return await axios.post(`${baseUrl}${endpoint}`, body, {
        headers: {
            Authorization: `Bearer ${token}`    // send the access token through the 'Authorization' header
        }
    });
}