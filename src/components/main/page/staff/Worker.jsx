import React from 'react'
import "./Worker.css"

function Worker() {

  return (
    <div className='worker-area'>
        <table cellspacing="0">
              <tr>
                <td className='top-cell left-cell'><div className='_cc'><div className='up-cell'>№</div></div></td>
                <td className='top-cell'><div className='_cc'><div className='up-cell'>Подразделение</div></div></td>
                <td className='top-cell'><div className='_cc'><div className='up-cell'>ФИО</div></div></td>
                <td className='top-cell'><div className='_cc'><div className='up-cell'>Количество проектов</div></div></td>
                <td className='top-cell'><div className='_cc'><div className='up-cell'>Количество задач</div></div></td>
                <td className='top-cell'><div className='_cc'><div className='up-cell'>KPI оценка сотрудника</div></div></td>
                <td className='top-cell right-cell'><div className='_cc'><div className='up-cell'>Отчёт</div></div></td>
              </tr>
              <tr>
                <td className='left-cell'><div className='empty-cell'></div></td>
                <td><div className='empty-cell'></div></td>
                <td><div className='empty-cell'></div></td>
                <td><div className='empty-cell'></div></td>
                <td><div className='empty-cell'></div></td>
                <td><div className='empty-cell'></div></td>
                <td className='right-cell'><div className='empty-cell'></div></td>
              </tr>
              <tr>
                <td className='left-cell'><div className='empty-cell'></div></td>
                <td><div className='empty-cell'></div></td>
                <td><div className='empty-cell'></div></td>
                <td><div className='empty-cell'></div></td>
                <td><div className='empty-cell'></div></td>
                <td><div className='empty-cell'></div></td>
                <td className='right-cell'><div className='empty-cell'></div></td>
              </tr>
              <tr>
                <td className='left-cell'><div className='empty-cell'></div></td>
                <td><div className='empty-cell'></div></td>
                <td><div className='empty-cell'></div></td>
                <td><div className='empty-cell'></div></td>
                <td><div className='empty-cell'></div></td>
                <td><div className='empty-cell'></div></td>
                <td className='right-cell'><div className='empty-cell'></div></td>
              </tr>
              {/* сюды вставку */}
              <tr>
                <td className='left-cell bottom-cell'><div className='empty-cell'></div></td>
                <td className='bottom-cell'><div className='empty-cell'></div></td>
                <td className='bottom-cell'><div className='empty-cell'></div></td>
                <td className='bottom-cell'><div className='empty-cell'></div></td>
                <td className='bottom-cell'><div className='empty-cell'></div></td>
                <td className='bottom-cell'><div className='empty-cell'></div></td>
                <td className='right-cell bottom-cell'></td>
              </tr>
        </table>
    </div>
  )
}

export default Worker