import React, { useReducer, useEffect } from 'react';
import { todoReducer } from './todoReducer';

import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import './styles.css';

const init = () => {

    return JSON.parse(localStorage.getItem('todos')) || [];

}

export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, [], init);
    
    useEffect( ()=> {
        localStorage.setItem('todos', JSON.stringify( todos ) );
    }, [todos]);


    const handleDelete = ( todoId ) => {

        const action = {
            type: 'delete',
            payload: todoId
        }

        dispatch( action );
    }

    const handleToggle = ( todoId ) =>{
        
        dispatch({
            type: 'toggle',
            payload: todoId
        });

    }

    const handleAddTodo = ( newTodo ) => {
        
        dispatch({
            type: 'add',
            payload: newTodo
        });

    }


    return (
        <div className='p-1'>
            <h3>Lista de Tareas <small>( { todos.length } )</small> </h3>
            <hr />
            <div className="row">
                <div className="col-12">
                    <TodoAdd 
                        handleAddTodo={ handleAddTodo }
                    />
                </div>
                <div className="col-12">
                    <TodoList 
                        todos={ todos }
                        handleDelete={ handleDelete }
                        handleToggle={ handleToggle }
                    />
                </div>
            </div>
        </div>
    )
}
