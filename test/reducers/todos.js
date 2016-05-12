import { assert } from 'chai'
import reducer from '../../app/reducers/todos'

describe('todos reducer', () => {
    it('returns the initial state', () => {
        const expected = [];
        assert.deepEqual(reducer(undefined, {}), expected)
    })

    it('adds todo', () => {
        const add_first = { type: 'ADD_TODO', text: 'this is a test', id: 0 }
        const expected1= [{ id: add_first.id, text: add_first.text, completed: false }]
        assert.deepEqual(reducer([], add_first), expected1)

        const add_second = { type: 'ADD_TODO', text: 'this is another test', id: 1 }
        const expected2 = [...expected1, { id: add_second.id, text: add_second.text, completed: false }]
        assert.deepEqual(reducer(expected1, add_second), expected2)
    })

    it('toggles todo', () => {
        const state = [
            { id: 0, text: 'todo1', completed: false },
            { id: 1, text: 'todo2', completed: false }
        ]
        const expected = [
            { id: 0, text: 'todo1', completed: false },
            { id: 1, text: 'todo2', completed: true }
        ]
        assert.deepEqual(reducer(state, { type: 'TOGGLE_TODO', id: 1 }), expected)
    })
})
