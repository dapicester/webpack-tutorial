const assert = require('chai').assert
import * as actions from '../../app/actions'

describe('actions', () => {
    it('addTodo', () => {
        const text = 'Todo text'
        const expected = { type: 'ADD_TODO', id: 0, text }
        assert.deepEqual(actions.addTodo(text), expected)

        // increment id on subsequent calls
        expected.id = 1
        assert.deepEqual(actions.addTodo(text), expected)
    })

    it('toggleTodo', () => {
        const id = 42
        const expected = { type: 'TOGGLE_TODO', id }
        assert.deepEqual(actions.toggleTodo(id), expected)
    })

    it('setVisibilityFilter', () => {
        const filter = 'SHOW_ALL'
        const expected = { type: 'SET_VISIBILITY_FILTER', filter }
        assert.deepEqual(actions.setVisibilityFilter(filter), expected)
    })
})
