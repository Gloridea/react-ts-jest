import * as React from 'react';
import {TodoList} from '../TodoList';
import {TodoStore} from '../../stores/TodoStore';
import * as renderer from 'react-test-renderer';


// jest.mock('../../stores/TodoStore');

describe('TodoList', () => {
    it('should contain added todo item', () => {
        // Given
        const todoStore = new TodoStore();
        const component = renderer.create(<TodoList todoStore={todoStore}/>);

        // When
        todoStore.addTodo('hello');

        // Then
        expect(component.toJSON()).toMatchSnapshot();
    });
});
