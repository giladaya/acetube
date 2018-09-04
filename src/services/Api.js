import * as Auth from './Auth';
const API_URL = 'http://192.168.2.104:5000'

// https://www.youtube.com/watch?v=t7Xt4ObtKas
// https://www.youtube.com/watch?v=RAsN9OVI-vQ

export function getPlaylist() {
    const url = `${API_URL}/items`;
    return fetch(url)
    .then(res => res.json())
    .then(res => Promise.resolve(
        res.map(item => ({
            ...item,
            url: item.uri,
        }))
    ))
}

export function getItemMeta(itemData) {
    const url = `https://www.youtube.com/oembed?url=${encodeURIComponent(itemData.url)}&format=json`;
    return fetch(url)
    .then(res => res.json())
    .then(res => {
        console.log(res);
    })
}

export function addItem(item) {
    const user = Auth.getUserDetails();
    const url = `${API_URL}/item/${user.name}`;
    const data = {
        uri: item.url,
    }
    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers:{
            'Content-Type': 'application/json',
        }
    };

    return fetch(url, options)
    .then(res => res.json())
    .then(res => ({
        ...res,
        url: res.uri,
    }))

} 