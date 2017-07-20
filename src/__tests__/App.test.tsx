import * as React from 'react';
import App from '../App';
import {createRenderer} from 'react-test-renderer/shallow';
import {TodoStore} from '../stores/TodoStore';

describe('App', () => {
    it('renders without crashing', () => {
        // Given
        const todoStore = new TodoStore();
        todoStore.addTodo('hello');
        const renderer = createRenderer();

        // When
        renderer.render(<App todoStore={todoStore}/>);

        // Then
        expect(renderer.getRenderOutput()).toMatchSnapshot();
    });
});
