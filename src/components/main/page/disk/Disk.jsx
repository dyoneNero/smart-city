import React from 'react'
import './Disk.css'
import ArrowRight from "../../img/arrow_right.png";
import DiskI from '../../img/disk_img.png'

function Disk() {
  return (
    <div className='disk-area'>
        <div className='disk-group-btn'>
            <button className="disk-btn">
                Мой диск
            </button>
            <button className="disk-btn">
                Недавние
            </button>
            <button className="disk-btn">
                Корзина
            </button>
        </div>
        <div class="title-disk">
            <p>Документы</p>
            <img src={ArrowRight} alt=""/> 
            <p>Мой диск</p> 
            <img src={ArrowRight} alt=""/>
            <p>Папка 1</p>
        </div>
        <div className='disk-line'>

        </div>
        <button className='disk-btn-folder'>
            Папка 1
        </button>
        <img className='disk-img' src={DiskI} alt=""/>
    </div>
  )
}

export default Disk