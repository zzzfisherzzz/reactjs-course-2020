import React, { useContext } from 'react';
import PropTypes from 'prop-types'
import Context from '../../context'

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItemd: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #000',
        borderRadius: '4px',
        marginBottom: '.5rem'
    },
    input: {
        marginRight: '1rem'
    }
}

function TodoItem({ todo, index, onChange }) {
    const { removeTodo } = useContext(Context)
    const classes = [];

    if (todo.completed) {
        classes.push('done')
    }

    return (
        <li style={styles.li}>
            <span className={classes.join(' ')}>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    style={styles.input}
                    onChange={() => onChange(todo.id)}
                />
                {index + 1}
                &nbsp;
                {todo.title}
            </span>
            <button className="remove" onClick={removeTodo.bind(null, todo.id)}>&times;</button>
        </li>
    );
};

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}


export default TodoItem;



