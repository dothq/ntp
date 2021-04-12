document.getElementsByClassName('settings-skel')[0].innerHTML = atob('PGRpdiBjbGFzcz0ibG9hZGluZyIgc3R5bGU9IndpZHRoOiAxMzBweDsgaGVpZ2h0OiAzNXB4O2JvcmRlci1yYWRpdXM6IDZweDsiPjwvZGl2PiA8ZGl2IGNsYXNzPSJsb2FkaW5nIiBzdHlsZT0id2lkdGg6IDExNXB4OyBoZWlnaHQ6IDE5cHg7Ym9yZGVyLXJhZGl1czogNXB4O21hcmdpbi10b3A6IDIycHg7bWFyZ2luLWJvdHRvbTogMTVweCI+PC9kaXY+IDxkaXYgY2xhc3M9ImxvYWRpbmciIHN0eWxlPSJoZWlnaHQ6IDExMnB4OyB3aWR0aDogMTgycHg7IG1hcmdpbi1ib3R0b206IDVweDsgYm9yZGVyLXJhZGl1czogNXB4OyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7Ij48L2Rpdj4gPGRpdiBjbGFzcz0ibG9hZGluZyIgc3R5bGU9ImhlaWdodDogMTEycHg7IHdpZHRoOiAxODJweDsgbWFyZ2luLWJvdHRvbTogNXB4OyBib3JkZXItcmFkaXVzOiA1cHg7IG1hcmdpbi1sZWZ0OiA1cHg7IGRpc3BsYXk6IGlubGluZS1ibG9jazsgYW5pbWF0aW9uLWRlbGF5OiAxczsiPiA8L2Rpdj4gPGRpdiBjbGFzcz0ibG9hZGluZyIgc3R5bGU9IndpZHRoOiAxMTVweDsgaGVpZ2h0OiAxOXB4O2JvcmRlci1yYWRpdXM6IDVweDttYXJnaW4tdG9wOiAyMnB4O21hcmdpbi1ib3R0b206IDE1cHgiPjwvZGl2PiA8ZGl2IGNsYXNzPSJsb2FkaW5nIiBzdHlsZT0iaGVpZ2h0OiAxMTJweDsgd2lkdGg6IDEwMCU7IG1hcmdpbi1ib3R0b206IDVweDsgYm9yZGVyLXJhZGl1czogNXB4OyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7Ij48L2Rpdj4gPGRpdiBjbGFzcz0ibG9hZGluZyIgc3R5bGU9IndpZHRoOiAxNzdweDsgaGVpZ2h0OiAyOHB4O2JvcmRlci1yYWRpdXM6IDVweDttYXJnaW4tdG9wOiAyMnB4O21hcmdpbi1ib3R0b206IDE1cHgiPjwvZGl2PiA8ZGl2IGNsYXNzPSJsb2FkaW5nIiBzdHlsZT0id2lkdGg6IDE1MHB4OyBoZWlnaHQ6IDI4cHg7Ym9yZGVyLXJhZGl1czogNXB4O21hcmdpbi10b3A6IDVweDttYXJnaW4tYm90dG9tOiAxNXB4Ij48L2Rpdj4=');


const settingsOpen = () => {
    document.getElementById('settings-container').setAttribute('class', 'settings-container settings-open');
    setTimeout(() => {
    fetch('/constants/settings.html')
    .then((response) => {
        if (response.status == 200) {
            response.text()
            .then((settingsHTML) => {
                document.getElementById('settings-loaded').innerHTML = settingsHTML;
                document.getElementById('settings-loaded').setAttribute('style', '');
                document.getElementById('settings-loaded').setAttribute('style', '');
                document.getElementsByClassName('settings-skel')[0].setAttribute('style', 'display: none');
                postSettingsInit();
            });
        } else { 
            netError(response.status);
        }
    });
}, 0);
}
const settingsClose = () => {
    document.getElementById('settings-container').setAttribute('class', 'settings-container settings-close');
}
const postSettingsInit = () => {
    window["checked"] = 0;
    refreshChecks();
}

const refreshChecks = () => {
    if (window["checked"] == 0) {
        document.getElementsByClassName("checkbox-big")[0].setAttribute("class", "checkbox-big");
        document.getElementsByClassName("checkbox-big")[1].setAttribute("class", "checkbox-big checkbox-inactive");
    }
    if (window["checked"] == 1) {
        document.getElementsByClassName("checkbox-big")[1].setAttribute("class", "checkbox-big");
        document.getElementsByClassName("checkbox-big")[0].setAttribute("class", "checkbox-big checkbox-inactive");
    }
}