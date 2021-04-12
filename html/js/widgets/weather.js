class WeatherWidget {
    constructor() {
        var ls = window.localStorage;
        var settings = 0;
        settings = JSON.parse(ls.getItem('weatherSettings')); 
        if (settings == null) {
            settings = {
                "widget-position": "bottom-left",
                "text-position": "flex-start",
                "unit": "c",
                "city": "London",
                "country": "England",
                "display": true
            };
            ls.setItem('weatherSettings', JSON.stringify(settings));
        }
        var weatherWidgetElement = document.createElement('div');
        console.log(settings);
        if (settings["display"] == false) {
            return;
        } else{
            console.log(settings["widget-position"]);
            weatherWidgetElement.setAttribute("class", `widget ${settings["widget-position"]}`);
            weatherWidgetElement.setAttribute("style", `
                display: flex;
                align-items: ${settings["text-position"]};
                flex-direction: column;
                opacity: 0;
                transition: opacity 0.3s ease;
            `);
            weatherWidgetElement.setAttribute("id", "weatherWidget");
            weatherWidgetElement.innerHTML = `
                <img src='/images/weather/cloud.svg'/>
                <h1 style='color: white; margin: 10px 0px 0px 0px'>Cloudy</h1>
                <p style='color: white; margin: 10px 0px 0px 0px'>London England</p>
            `;
            document.getElementById('widgets-container').appendChild(weatherWidgetElement);
            setTimeout(() => {
                fetch(`https://compass-api.vercel.app/weather/${settings["city"]},${settings["country"]}`)
                .then((response) => {
                if (response.status == 200) {
                    response.json()
                    .then((weatherInfomation) => {
                        var temperature = weatherInfomation.main.temp;
                        if (settings["unit"] == "c") { 
                            temperature = (temperature - 273.15);
                        }
                        if (settings["unit"] == "f") { 
                            temperature = (temperature - 273.15) * 9/5 + 32;
                        }
                        document.getElementById("weatherWidget").innerHTML = `
                            <img src='/images/weather/cloud.svg'/>
                            <h1 style='color: white; margin: 10px 0px 0px 0px'>${Math.floor(temperature)}°${settings["unit"].toUpperCase()}</h1>
                            <p style='color: white; margin: 10px 0px 0px 0px'>${settings["city"]}, ${settings["country"]}</p>
                        `;
                        document.getElementById("weatherWidget").setAttribute("style", `
                            display: flex;
                            align-items: ${settings["text-position"]};
                            flex-direction: column;
                            transition: opacity 0.3s ease;
                        `);
                    })
                }
            });
        }, 0);
        }
    }
}

new WeatherWidget();