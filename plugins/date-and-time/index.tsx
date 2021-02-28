import React from 'react';
import { StyledTime, StyledDate } from './style';

class Time extends React.Component {
  public state = { time: '', formattedDate: '' };

  componentDidMount() {
    const tick = () => {
      const d = new Date();
      const nth = getOrdinalNum(d.getDate());
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
      this.setState({
        time: `${d
          .getHours()
          .toString()
          .padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`,
        formattedDate: `${days[d.getDay()]}, ${nth} ${months[d.getMonth()]}`
      });
    };

    tick();

    setInterval(tick, 995); // 995? Better than 500 that's for sure.
  }

  render() {
    return (
      <div style={{ textAlign: 'left' }}>
        <StyledTime>{this.state.time}</StyledTime>
        <StyledDate>{this.state.formattedDate}</StyledDate>
      </div>
    );
  }
}

const getOrdinalNum = (number: number) => {
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

export default Time;
