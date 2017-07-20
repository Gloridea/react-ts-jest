import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {Provider} from 'mobx-react';
import {TodoStore} from './stores/TodoStore';

const todoStore = new TodoStore();

ReactDOM.render(
    <Provider todoStore={todoStore}>
        <App/>
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
