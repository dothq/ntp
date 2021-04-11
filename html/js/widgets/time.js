const initialiseTimeWidget = () => {
    var timeWidgetElement = document.createElement('div');
    const timeWidgetWorker = new Date();
    timeWidgetElement.innerHTML = `
    <time>
        ${timeWidgetWorker.getHours().toString().padStart(2, '0')}:${timeWidgetWorker.getMinutes().toString().padStart(2, '0')}
    </time>`;
    document.getElementById('widgets-container').appendChild(timeWidgetElement);
}