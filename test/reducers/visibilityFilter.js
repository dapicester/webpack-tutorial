import { assert } from 'chai'
import reducer from '../../app/reducers/visibilityFilter'

describe('visibilityFilter reducer', () => {
    it('returns the initial state', () => {
        const expected = 'SHOW_ALL';
        assert.deepEqual(reducer(undefined, {}), expected)
    })

    it('sets visibility filter', () => {
        const action = { type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_SOME' }
        const expected = action.filter
        assert.deepEqual(reducer(undefined, action), expected)
    })
})
