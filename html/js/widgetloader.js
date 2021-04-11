const loadWidgets = () => {
    fetch('/constants/widgets.json')
    .then((response) => {
        if (response.status == 200){
            response.json()
            .then((widgetsArray) => {
                widgetsArray.forEach((item) => {
                    initialiseWidget(item.path, item.entryPoint);
                });
            })
        } else {
            netError(response.status);
        }
    });
}

const initialiseWidget = (widgetURL, widgetEntry) => {
    fetch(widgetURL)
    .then((response) => {
        if (response.status == 200){
            response.text()
            .then((widgetJS) => {
                eval(widgetJS);
                eval(widgetEntry);
            });
        } else {
            netError(response.status);
        }
    });
}