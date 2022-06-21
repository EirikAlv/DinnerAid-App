import axios from 'axios';
import Config from 'react-native-config';
import SInfo from 'react-native-sensitive-info';

const baseUrl = Config.APIBASEURL;
// const baseUrl = Config.LOCALURL;

export async function get_groceries() { return await get_async('groceries'); }
export async function get_recipes() { return await get_async('recipes'); }
export async function get_uom() { return await get_async('uom'); }

export async function orderGrocery(body) { return await post_async('orderGrocery', body); }
export async function orderRecipe(body) { return post_async('orderRecipe', body); }
export async function saveGrocery(body) { return post_async('saveGrocery', body); }
export async function searhRecipes(body) { return post_async('searchRecipes', body); }


async function get_async(endpoint) {
    const token = await SInfo.getItem('accessToken', {});

    let res = {};
    console.log(`${baseUrl}${endpoint}`);
    await axios.get(`${baseUrl}${endpoint}`, {
        headers: {
            Authorization: `Bearer ${token}`,    // send the access token through the 'Authorization' header
        },
    }).then(response => { res = response; });
    return res.data;
}

async function post_async(endpoint, body) {
    const token = await SInfo.getItem('accessToken', {});

    let res = await axios.post(`${baseUrl}${endpoint}`, body, {
        headers: {
            Authorization: `Bearer ${token}`,   // send the access token through the 'Authorization' header
        },
    }).then(response => { return response.data; })
    .catch(error => {
        return error.message;
    });

    return res;
}
