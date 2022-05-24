import React from 'react'
import "./Analytics.css"

function Analytics() {
  return (
    <div className='analytics-area'>
        <div className="analytics-head">
            <input type="text" name="" id="" className="analytics-head-search" placeholder="Тип категорий"/>
            <button className='analytics-head-btn'>Настройка полей</button>
        </div>
        <div className='analytics-time'>
            <div className='analytics-time-block'>
                <p>Период</p>
                <p>30.02.2021</p>
                <p>30.08.22</p>
            </div>
            <div className='analytics-time-block'>
            </div>
            <div className='analytics-time-block'>
            </div>
            <div className='analytics-time-block'>
            </div>
            <div className='analytics-time-block'>
            </div>
            <div className='analytics-time-block'>
            </div>
        </div>
        <div className='analytics-dkiq'>
            <div className='analytics-dk'>
                <p>ДК</p>
                <div className="analytics-dk-block"></div>
                <div className="analytics-dk-block"></div>
                <div className="analytics-dk-block"></div>
                <div className="analytics-dk-block"></div>
            </div>
            <div className='analytics-line'></div>
            <div className='analytics-iq'>
                <p>IQ</p>
                <div className="analytics-iq-blocks"><div className="analytics-iq-block"></div><input type="checkbox" className="analytics-iq-checkbox"/></div>
                <div className="analytics-iq-blocks"><div className="analytics-iq-block"></div><input type="checkbox" className="analytics-iq-checkbox"/></div>
                <div className="analytics-iq-blocks"><div className="analytics-iq-block"></div><input type="checkbox" className="analytics-iq-checkbox"/></div>
                <div className="analytics-iq-blocks"><div className="analytics-iq-block"></div><input type="checkbox" className="analytics-iq-checkbox"/></div>
            </div>
        </div>
    </div>
  )
}

export default Analytics