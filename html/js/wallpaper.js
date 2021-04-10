const getRandomArbitrary = (min, max) => {
    return Math.random() * (max - min) + min;
}

const selectandloadWallpaper = () => {
    fetch('/constants/backgrounds.json')
    .then((response) => {

        if (response.status == 200){
            response.json()
            .then((backgrounds) => {
                const backgroundNum = Math.floor(getRandomArbitrary(0, backgrounds.length));
                downloadWallpaper(`/images/unsplash/${backgrounds[backgroundNum].id}.jpeg`);
            });
        } else{
            netError(response.status);
        }
    });
};

const downloadWallpaper = (uri) => {
    fetch(uri)
    .then((response) => {

        if (response.status == 200){
            response.blob()
            .then((image) => {
                window["temp_wallpaperBlob"] = URL.createObjectURL(image);
                placeWallpaper(window["temp_wallpaperBlob"]);
            });
        } else{
            netError(response.status);
        }
    });
};

const placeWallpaper = (blob) => {
    document.getElementById("resting-app").setAttribute(
        "style",
        `background-image: url(${blob});`
    )
}

window.addEventListener("beforeunload", () => {
  URL.revokeObjectURL(window["temp_wallpaperBlob"]);
})