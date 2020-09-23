import React, { useState } from 'react';
import PropTypes from 'prop-types'


function useInputValue(defaulValue = '') {
    const [value, setValue] = useState(defaulValue)
    return {
        bind: {
            value,
            onChange: event => setValue(event.target.value)
        },
        clear: () => setValue(''),
        value: () => value
    }
}

function AddTodo({ onCreate }) {
    // const [value, setValue] = useState('')
    const input = useInputValue('')

    function submitHandler(event) {
        event.preventDefault();

        // if (value.trim()) {
        //     onCreate(input.value)
        //     setValue('')
        // } 
        if (input.value().trim()) {
            onCreate(input.value())
            input.clear()
            // setValue('')
        } else {
            alert('Введите задание! Поле не должно быть пустым!')
        }
    }

    return (
        <form style={{ marginBottom: '1rem' }} onSubmit={submitHandler}>
            {/* <input value={value} onChange={event => setValue(event.target.value)} /> */}
            <input {...input.bind} />
            <button type="submit">Add todo</button>
        </form>
    )
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddTodo;