import React from 'react'
import { connect } from 'react-redux'
import { fetchFromServer } from '../actions'

let FetchTodo = ({ dispatch }) => {
    return (
        <button type="button" onClick={ev => {
            ev.preventDefault()
            dispatch(fetchFromServer("foobar!"))
        }}>Fetch from server</button>
    )
}

FetchTodo = connect()(FetchTodo)

export default FetchTodo
