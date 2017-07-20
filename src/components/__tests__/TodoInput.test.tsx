import * as React from 'react';
import {TodoStore} from '../../stores/TodoStore';
import {TodoInput} from '../TodoInput';
import {mount} from 'enzyme';

describe('TodoInput', () => {
    it('should add todo', () => {
        // Given
        const todoStore = new TodoStore();
        const wrapper = mount(<TodoInput todoStore={todoStore}/>);

        // When
        const input = wrapper.find('input').first();
        const button = wrapper.find('button').first();

        input.simulate('change', {target: {value: 'hello world'}});
        button.simulate('click');

        // Then
        expect(todoStore.todos.length).toBe(1);
        expect((input.getDOMNode() as HTMLInputElement).value).toBe('');
        expect(wrapper.find('div')).toMatchSnapshot();
    });
});
