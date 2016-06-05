import React from 'react'
import Footer from './Footer'
import FetchTodo from '../containers/FetchTodo'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
    <div>
        <AddTodo />
        <FetchTodo />
        <VisibleTodoList />
        <Footer />
    </div>
)

export default App
