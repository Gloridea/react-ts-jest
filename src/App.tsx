import * as React from 'react';
import './App.css';
import {TodoList} from './components/TodoList';
import {TodoStore} from './stores/TodoStore';
import {inject, observer} from 'mobx-react';
import {TodoInput} from './components/TodoInput';

const logo = require('./logo.svg');

interface AppProps {
    todoStore?: TodoStore;
}

@inject('todoStore')
@observer
class App extends React.Component<AppProps, {}> {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <TodoInput />
                <TodoList />
            </div>
        );
    }
}

export default App;
