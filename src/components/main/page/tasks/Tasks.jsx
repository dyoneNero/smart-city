import React, {useEffect} from 'react'
import "./Tasks.css"
import TaskWrite from "./TaskWrite";

function Tasks(){
    const dragAndDrop = () => {
        const cards = document.querySelectorAll(".tasks-block");
        const cells = document.querySelectorAll(".tasks_cells");

        const dragStart = function (e){
            e.dataTransfer.setData("dragItem", this.dataset.item)
            setTimeout(() => {
                this.classList.add('hide');
            }, 0)
        };
        const dragEnd = function (){
            this.classList.remove('hide');
        };

        const dragOver = function (e){
            e.preventDefault();
        };
        const dragEnter = function (e){
            e.preventDefault();
            this.classList.add('hovered');
        };
        const dragLeave = function (){
            this.classList.remove('hovered');
        };
        //------------------
        const drop = function (event){
            const dragFlag = event.dataTransfer.getData("dragItem")
            const dragItem = document.querySelector(`[data-item="${dragFlag}"]`)

            this.append(dragItem);

            this.classList.remove('hovered');
        };

        cells.forEach((cell) =>{
            cell.addEventListener('dragover', dragOver)
            cell.addEventListener('dragenter', dragEnter)
            cell.addEventListener('dragleave', dragLeave)
            cell.addEventListener('drop', drop)
        });

        cards.forEach((card) =>{
            card.addEventListener('dragstart', dragStart)
            card.addEventListener('dragend', dragEnd)
        });
    }
    useEffect(() => {
        dragAndDrop();
    }, []);
    return (
      <div className='area-tasks'>
          <div className="column-tasks">
            <div className="title-tasks">
                <h1>Просроченные задачи</h1>
                <p>3 задачи</p>
            </div>
            <div className='tasks-container tasks_cells'> {/* контейнер дропа */}
                <TaskWrite di="1"/>
                <TaskWrite di="2"/>
                <TaskWrite di="3"/>
                <TaskWrite di="4"/>
                <TaskWrite di="5"/>
                <TaskWrite di="6"/>
            </div>
          </div>
          <div className="column-tasks">
            <div className="title-tasks">
                <h1>Задачи на сегодня</h1>
                <p>2 задачи</p>
            </div>
            <div className='tasks-container tasks_cells'> {/* контейнер дропа */}

            </div>
          </div>
          <div className="column-tasks">
              <div className="title-tasks">
                <h1>Задачи на следующую неделю</h1>
                <p>1 задача</p>
              </div>
              <div className='tasks-container tasks_cells'> {/* контейнер дропа */}

              </div>
          </div>
      </div>
    )
}

export default Tasks;