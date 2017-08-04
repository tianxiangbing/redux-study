import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './contains/App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import TodoApp from './reduces';

let store = createStore(TodoApp);
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
