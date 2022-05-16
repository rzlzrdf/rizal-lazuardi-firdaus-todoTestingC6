import React from 'react'

import style from './TodoFooter.module.css'

const TodoFooter = props => {
  return (
    <div className={style.todoFooter} data-testid='todo-footer-element'>
        { !props.todoLength &&
            <p>Awesome!! You have free time!!</p>
        }
        {props.todoLength > 0 &&
            <p>You have {props.todoLength} {props.todoLength > 1 ? 'tasks' : 'task' }</p>
        }
    </div>
  )
}

export default TodoFooter