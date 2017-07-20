import * as React from 'react';
import App from '../App';
import {TodoStore} from '../stores/TodoStore';
import {shallow} from 'enzyme';

describe('App', () => {
    it('renders without crashing', () => {
        // Given
        const todoStore = new TodoStore();
        todoStore.addTodo('hello');

        // When
        const component = shallow(<App todoStore={todoStore}/>);

        // Then
        expect(component).toMatchSnapshot();
    });
});
