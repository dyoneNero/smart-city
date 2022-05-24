import React, {Component} from 'react';
import './taskwrite_style.css'


class TaskWrite extends Component {
    render() {
        return (
            <div data-item={this.props.di} id={this.props.idTasks} draggable="true" className="tasks-block"> {/* блок дропа */}
                <div className='tasks-block-deadline'>
                    <h1>20/04/2022</h1>
                    <p>1 д.</p>
                </div>
                <div className="tasks-block-description">
                    <h1>Ответственный: Данил Староминский</h1>
                    <p>Задача должна была быть решена 19/04/2022. Написать объяснение о причине не выполнения работы до 21/04/2022.</p>
                </div>
            </div>
        );
    }
}

export default TaskWrite;