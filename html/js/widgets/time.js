class TimeWidget {
    constructor() {
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

        const timeWidgetElementFormat = `
        <time
        style='color: var(--backg-text-color); font-size: 5rem; font-weight: 600;'>
            ${timeWidgetWorker.getHours().toString().padStart(2, '0')}:${timeWidgetWorker.getMinutes().toString().padStart(2, '0')}
        </time>
        <time
        style='display: block; color: var(--backg-text-color); font-size: 1.5rem;font-weight: 400; opacity: 0.7;'>
            ${days[timeWidgetWorker.getDay()]}, ${nth} ${months[timeWidgetWorker.getMonth()]}
        </time>`;

        const TimeWidgetTick = () => {
            const timeWidgetWorker = new Date();
            document.getElementById('time@dothq.co').innerHTML = timeWidgetElementFormat;
        }

        var timeWidgetElement = document.createElement('div');
        timeWidgetElement.setAttribute('id', 'time@dothq.co');
        timeWidgetElement.setAttribute('class', 'widget top-left');
        timeWidgetElement.innerHTML = timeWidgetElementFormat;
        document.getElementById('widgets-container').appendChild(timeWidgetElement);
        setInterval(TimeWidgetTick, 995);
    }
}

new TimeWidget();