const openURL = (url) => {
    if (!url.startsWith('http')) {
        console.log('i open');
        launchBrowser(url);
    } else {
        console.log('i no open');
    }
}

const launchBrowser = (uri) => {
    var overlay = document.createElement('div');
    overlay.setAttribute('style',`
        width: 100%;
    `);
    overlay.innerHTML = `
        <div class="webBrowser">
        </div>
        <style>
        .webBrowser {
            background-color: white;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            width: 60%;
            height: 70vh;
        }
        </style>
    `;
    document.body.appendChild(overlay);
}