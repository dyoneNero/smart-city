import React, { Component } from 'react'
import "./IQ.css"

export default class IQ extends Component {
  render() {
    return (
      <div className='area-iq'>
          <table cellSpacing="0">
              <tr>
                  <td className='left-cell top-cell'><div className='pad'><div className='block'>Показатель</div></div></td>
                  <td className='top-cell' colSpan="2"><div>Количество / Качество</div><div className='two-column'><div className='block'>План</div><div className='block'>Факт.</div></div></td>
                  <td className='top-cell right-cell'><div className='pad'><div className='block'>Проекты</div></div></td>
              </tr>
              <tr>
                  <td className='left-cell'><p className='tt'>Показатель 1</p></td>
                  <td>1000</td>
                  <td>900</td>
                  <td className='right-cell'><div className='gsg'><p className='ff'>Создание безопасных и комфортных мест ожидания общественного транспорта</p></div></td>
              </tr>
              <tr>
                  <td className='left-cell'><p className='tt'>Показатель 1</p></td>
                  <td>1000</td>
                  <td>900</td>
                  <td className='right-cell'><div className='gsg'><p className='ff'>Создание безопасных и комфортных мест ожидания общественного транспорта</p></div></td>
              </tr>
              <tr>
                  <td className='left-cell'><p className='tt'>Показатель 1</p></td>
                  <td>1000</td>
                  <td>900</td>
                  <td className='right-cell'><div className='gsg'><p className='ff'>Создание безопасных и комфортных мест ожидания общественного транспорта</p></div></td>
              </tr>
          </table>
      </div>
    )
  }
}
