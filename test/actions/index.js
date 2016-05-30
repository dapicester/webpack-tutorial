const assert = require('chai').assert
import * as actions from '../../app/actions'

import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [ thunk ]
const mockStore = configureStore(middlewares)

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

    it('fetchFromServer', (done) => {
        const text = 'Todo text'
        const expected = [{ type: 'ADD_TODO', id: 2, text }]

        const initialState = { todos: [] };
        const store = mockStore(initialState);

        let unsubscribe = store.subscribe(() => {
            assert.deepEqual(store.getActions(), expected)
            done()
        })
        store.dispatch(actions.fetchFromServer(text))
    })
})
