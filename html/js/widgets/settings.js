class SettingsWidget {
    constructor() {
        var settingsButtonElement = document.createElement('div');
        settingsButtonElement.setAttribute('id', 'settingsButton');
        settingsButtonElement.setAttribute('class', 'widget top-right');
        settingsButtonElement.setAttribute('style', 'padding: 7px; margin: 50px;');
        settingsButtonElement.innerHTML = `
            <div
                style='height: 20px; width: 18px; background-color: white; -webkit-mask: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPHBhdGggZD0iTTEyLjU5MDkgMi41ODQ5MkMxMi43NzYzIDIuMzk5NDggMTIuOTk2NCAyLjI1MjM4IDEzLjIzODcgMi4xNTIwMUMxMy40ODEgMi4wNTE2NSAxMy43NDA3IDIgMTQuMDAzIDJDMTQuMjY1MiAyIDE0LjUyNDkgMi4wNTE2NSAxNC43NjcyIDIuMTUyMDFDMTUuMDA5NSAyLjI1MjM4IDE1LjIyOTYgMi4zOTk0OCAxNS40MTUxIDIuNTg0OTJDMTUuNjAwNSAyLjc3MDM2IDE1Ljc0NzYgMi45OTA1MSAxNS44NDggMy4yMzI4QzE1Ljk0ODMgMy40NzUwOSAxNiAzLjczNDc4IDE2IDMuOTk3MDNDMTYgNC4yNTkyOCAxNS45NDgzIDQuNTE4OTcgMTUuODQ4IDQuNzYxMjZDMTUuNzQ3NiA1LjAwMzU1IDE1LjYwMDUgNS4yMjM3IDE1LjQxNTEgNS40MDkxNUwxNC4yMDIzIDYuNjIxOTJMNS44ODMzMSAxNC45NDA5TDIgMTZMMy4wNTkwOSAxMi4xMTY3TDExLjM0MzQgMy44MzI0MkwxMi41OTA5IDIuNTg0OTJaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPiA8L3N2Zz4g); mask: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPHBhdGggZD0iTTEyLjU5MDkgMi41ODQ5MkMxMi43NzYzIDIuMzk5NDggMTIuOTk2NCAyLjI1MjM4IDEzLjIzODcgMi4xNTIwMUMxMy40ODEgMi4wNTE2NSAxMy43NDA3IDIgMTQuMDAzIDJDMTQuMjY1MiAyIDE0LjUyNDkgMi4wNTE2NSAxNC43NjcyIDIuMTUyMDFDMTUuMDA5NSAyLjI1MjM4IDE1LjIyOTYgMi4zOTk0OCAxNS40MTUxIDIuNTg0OTJDMTUuNjAwNSAyLjc3MDM2IDE1Ljc0NzYgMi45OTA1MSAxNS44NDggMy4yMzI4QzE1Ljk0ODMgMy40NzUwOSAxNiAzLjczNDc4IDE2IDMuOTk3MDNDMTYgNC4yNTkyOCAxNS45NDgzIDQuNTE4OTcgMTUuODQ4IDQuNzYxMjZDMTUuNzQ3NiA1LjAwMzU1IDE1LjYwMDUgNS4yMjM3IDE1LjQxNTEgNS40MDkxNUwxNC4yMDIzIDYuNjIxOTJMNS44ODMzMSAxNC45NDA5TDIgMTZMMy4wNTkwOSAxMi4xMTY3TDExLjM0MzQgMy44MzI0MkwxMi41OTA5IDIuNTg0OTJaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPiA8L3N2Zz4g) no-repeat; mask-size: 18px; -webkit-mask-size: 18px;'
            >
            </div>
        `;
        document.getElementById('widgets-container').appendChild(settingsButtonElement);
        document.getElementById('settingsButton').addEventListener('click', settingsOpen);
    }
}

new SettingsWidget();