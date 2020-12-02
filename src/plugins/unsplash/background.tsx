import axios from "axios"
import localforage from 'localforage';

const url = "https://api.unsplash.com/photos/random?collections=67042424&count=1"

const unsplashKey = process.env.GATSBY_UNSPLASH_KEY

export const getBackground = async () => {
    return new Promise(async (resolve, reject) => {
        localforage.getItem("background-cache").then((value: any) => {
            if(value == null || Date.now() >= value.exp) return resolve(getFreshBackground())
                
            resolve(value)
        }).catch((err) => {
            console.log(err)
            getFreshBackground();
            resolve(true)
        });
    })
}

const getFreshBackground = () => {
    return axios.get(url, { headers: { "Authorization": `Client-ID ${unsplashKey}`} }).then(metadata => {
        return axios.get(`${metadata.data.url}&w=1920&h=1080`)
            .then(async images => await addToCache(images.data, metadata.data))
            .catch(e => {
                console.log(e.message)
                return ""
            })
    }).catch(e => {
        console.log(e.message)
        return ""
    })
}

const createObjectURL = (data) => {
    const blob = new Blob([data]);
    const imageURI = URL.createObjectURL(blob);

    return imageURI;
}

const addToCache = (image, metadata) => {
    return new Promise((resolve, reject) => {
        const exp = Date.now()+24*60*60*1000

        localforage.setItem("background-cache", { exp, data: image, ...metadata }).then(data => resolve(data)).catch(function(err) {
            console.log(err);
            reject(err);
        });
    })
}

// export const getBackgroundAsBase64 = async () => {
//     const url = process.env.NODE_ENV == "development" ? "http://localhost:3000/integration/unsplash/daily-wallpaper" : "/integrations/unsplash/daily-wallpaper"

//     const image = await axios.get(url).then(d => d.data.url);

//     return axios.get(image, { responseType: "arraybuffer" }).then(d => {
//         const { data } = d;

//         const base64 = `data:${d.headers["content-type"]};base64,` + Buffer.from(data).toString("base64");

//         return base64;
//     })
// }