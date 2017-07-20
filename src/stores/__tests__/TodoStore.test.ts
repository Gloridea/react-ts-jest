import {TodoStore} from '../TodoStore';
import * as assert from 'assert';

describe('TodoStore', () => {
    describe('addTodo()', () => {
        it('should add Todo', () => {
            const todoStore = new TodoStore();
            todoStore.addTodo('hello');
            assert.equal(todoStore.todos.length, 1);
        });
    });
});