import ReactGA from 'react-ga';
ReactGA.initialize('UA-000000-01');
ReactGA.pageview(window.location.pathname + window.location.search);

const EventTracker = (category = 'Portfolio') => {
  const eventTracker = (action = 'action', label = 'label') => {
    ReactGA.event({ category, action, label });
  };
  return eventTracker;
};

export default EventTracker;
