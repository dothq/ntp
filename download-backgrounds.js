const axios = require('axios');
const fs = require("fs");
const { resolve } = require("path");
const rimraf = require('rimraf').sync;
const sharp = require("sharp");

require('dotenv').config();
const COLLECTIONS = ["67042424","62409852"];
const COLLECTIONSLEN = COLLECTIONS.length;
for (i = 0; i < COLLECTIONSLEN; i++) {
  text += "<li>" + fruits[i] + "</li>";
let totalPages = 0;
let images = new Set();

const getImages = (pageNum) => {
    return new Promise(async (resolve) => {
        const res = await axios.get(`https://api.unsplash.com/collections/${COLLECTIONS[i]}/photos?page=${pageNum}&per_page=30`, { 
            headers: {
                authorization: `Client-ID ${process.env.UNSPLASH_API_KEY}`
            }
        })

        if(res.data.length == 0) return resolve(false);
        console.log(`Downloading page ${pageNum}...`)

        res.data.map((i) => images.add({
            id: `${i.user.username}-${i.links.html.split("unsplash.com/photos/")[1]}`,
            original_url: i.urls.raw,
            author_name: i.user.name,
            author_username: i.user.username,
            url: i.links.html
        }))

        console.log(`Done page ${pageNum}!`)

        resolve(true)
    })
}

const downloadImage = (data) => {
    return new Promise(async (resol) => {
        const url = data.original_url;

        const res = await axios.get(url, { responseType: 'arraybuffer' })

        const filename = `${data.author_username}-${data.url.split("unsplash.com/photos/")[1]}.jpeg`
        console.log("Downloading", filename + "...")

        sharp(Buffer.from(res.data))
            .resize(1920, 1080)
            .toFile(resolve(__dirname, "backgrounds", "unsplash", filename))

        resol(true)
    })
}

const main = async () => {
    rimraf(resolve(__dirname, "backgrounds", "unsplash"))
    fs.mkdirSync(resolve(__dirname, "backgrounds", "unsplash"), { recursive: true })

    await getImages(1);

    let i = 1;

    while(true) {
        ++i;
        const res = await getImages(i);
        if(res == false) break;
    }

    console.log("Saved image URIs.");

    fs.writeFileSync(resolve(__dirname, "src", "backgrounds.ts"), `export default ${JSON.stringify(Array.from(images), null, 4).replace(/"([A-Za-z0-9\-\_]+)":/g, (v) => { return v.replace(/"/g, "") })};`)

    Array.from(images).forEach(async image => {
        await downloadImage(image);
    })
}

main();
}
