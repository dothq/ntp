const getRandomArbitrary = (min, max) => {
    return Math.random() * (max - min) + min;
}

const loadWallpaper = () => {
    fetch('/constants/backgrounds.json')
    .then((response) => {

        if (response.status == 200){
            response.json()
            .then((backgrounds) => {
                const backgroundNum = Math.floor(getRandomArbitrary(0, backgrounds.length));
                console.log(backgrounds[backgroundNum]);
            })
        } else{
            netError(response.status);
        }
    })
};