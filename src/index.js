import React from 'react';
import ReactDOM from 'react-dom';
import HomeClasses from './components/HomeClasses';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<HomeClasses />, document.getElementById('root'));
registerServiceWorker();
