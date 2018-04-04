import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

import fontawesome from '@fortawesome/fontawesome';
import faAngleDown from '@fortawesome/fontawesome-pro-light/faAngleDown';

fontawesome.library.add(faAngleDown);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
