import Time from '../plugins/date-and-time';
import Search from '../plugins/search';

export default {
  'date-and-time': {
    component: Time,
    defaultPosition: 'top-left'
  },
  'search':{
    component: Search,
    defaultPosition: 'center-left'
  }
};
