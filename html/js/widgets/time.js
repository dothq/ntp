class TimeWidget {
    constructor() {
        var ls = window.localStorage;
        var settings = 0;
        settings = JSON.parse(ls.getItem('timeSettings')); 
        if (settings == null) {
            settings = {
                "widget-position": "top-left",
                "time-format": "hh:mm",
                "24-hour": true,
                "display": true
            };
            ls.setItem('timeSettings', JSON.stringify(settings));
        }
        if (settings["display"] == false) {
            return;
        } else {
            const getOrdinalNum = (number) => {
            let selector;

            if (number <= 0) {
                selector = 4;
            } else if ((number > 3 && number < 21) || number % 10 > 3) {
                selector = 0;
            } else {
                selector = number % 10;
            }
            return number + ['th', 'st', 'nd', 'rd', ''][selector];
            };

            const timeWidgetWorker = new Date();

            const nth = getOrdinalNum(timeWidgetWorker.getDate());
            const months = [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December'
            ];

            const days = [
                'Sunday',
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday'
            ];

            const TimeWidgetTick = () => {
                const timeWidgetWorker = new Date();
                settings = JSON.parse(ls.getItem('timeSettings')); 
                const timeFormat = settings["time-format"].replace("hh", timeWidgetWorker.getHours().toString().padStart(2, '0')).replace("mm", timeWidgetWorker.getMinutes().toString().padStart(2, '0')).replace("ss", timeWidgetWorker.getSeconds().toString().padStart(2, '0')).replace("ms", timeWidgetWorker.getMilliseconds().toString().padStart(2, '0'));
                const timeWidgetElementFormat = `
                    <time
                    style='color: var(--backg-text-color); font-size: 5rem; font-weight: 600;'>
                        ${timeFormat}
                    </time>
                    <time
                    style='display: block; color: var(--backg-text-color); font-size: 1.5rem;font-weight: 400; opacity: 0.7;'>
                        ${days[timeWidgetWorker.getDay()]}, ${nth} ${months[timeWidgetWorker.getMonth()]}
                    </time>`;
                document.getElementById('time@dothq.co').innerHTML = timeWidgetElementFormat;
            }

            var timeWidgetElement = document.createElement('div');
            timeWidgetElement.setAttribute('id', 'time@dothq.co');
            timeWidgetElement.setAttribute('class', `widget ${settings["widget-position"]}`);
            document.getElementById('widgets-container').appendChild(timeWidgetElement);
            TimeWidgetTick();
            setInterval(TimeWidgetTick, 15);
        }
    }
}

new TimeWidget();