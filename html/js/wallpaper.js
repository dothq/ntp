const getRandomArbitrary = (min, max) => {
    return Math.random() * (max - min) + min;
}

const selectAndLoadWallpaper = () => {
    var backgroundjson = new XMLHttpRequest();
    backgroundjson.open('GET', '/constants/backgrounds.json');
    backgroundjson.onreadystatechange = function (e) {
        
        if (this.readyState == 4) { 
            if (this.status == 200) {
                const b = JSON.parse(this.responseText);
                const backgroundNum = Math.floor(getRandomArbitrary(0, b.length));
                downloadWallpaper(`/images/unsplash/${b[backgroundNum].id}.jpeg`);
            } else { 
                netError(this.status);
            }
        }
    }

    backgroundjson.send();


    // fetch('/constants/backgrounds.json')
    // .then((response) => {

    //     if (response.status == 200){
    //         response.json()
    //         .then((backgrounds) => {
    //             const backgroundNum = Math.floor(getRandomArbitrary(0, backgrounds.length));
    //             downloadWallpaper(`/images/unsplash/${backgrounds[backgroundNum].id}.jpeg`);
    //         });
    //     } else{
    //         netError(response.status);
    //     }
    // });
};

const downloadWallpaper = (uri) => {
    var background = new XMLHttpRequest();
    background.open('GET', uri);
    background.responseType = "blob";
    background.onreadystatechange = function (e) {

        if (this.readyState == 4) {

            if (this.status == 200) {
                window["temp_wallpaperBlob"] = URL.createObjectURL(this.response);
                placeWallpaper(window["temp_wallpaperBlob"]);
            }
        }
    }
    background.send();

    // fetch(uri)
    // .then((response) => {

    //     if (response.status == 200){
    //         response.blob()
    //         .then((image) => {
    //             window["temp_wallpaperBlob"] = URL.createObjectURL(image);
    //             placeWallpaper(window["temp_wallpaperBlob"]);
    //         });
    //     } else{
    //         netError(response.status);
    //     }
    // });
};

const placeWallpaper = (blob) => {
    document.getElementById("resting-app").setAttribute(
        "style",
        `
            background: linear-gradient(180deg, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 53.65%, rgba(0, 0, 0, 0.35) 100%),
                        url(${blob}) no-repeat center/cover;
        `
    );
}

window.addEventListener("beforeunload", () => {
  URL.revokeObjectURL(window["temp_wallpaperBlob"]);
})