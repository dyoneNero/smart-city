import React from 'react'
import './Commerce.css';
import Message from "./message/Message";
import Message_green from "./message/Message_green";
import Message_gray from "./message/Message_gray";
import Message_yellow from "./message/Message_yellow";

function Commerce() {

  

  return (
    <div className='commerce_area'>
        <div className="commerce_columns">
            <div className="commerce_title">
                <p>Входящие обращения</p>
            </div>
            <div className="commerce_list">
                <div className="commerce_countmsg">
                    <a>Количество входящих сообщений</a>
                    <a className="commerce_countmsgnum"> (99+)</a>
                </div>
                <Message/>
                <Message/>
                <Message/>
                <Message/>
                <Message/>
                <Message/>
                <Message/>
            </div>
        </div>
        <div className="commerce_columns">
            <div className="commerce_title">
                <p>Назначенный ответсвенный</p>
            </div>
            <div className="commerce_list">
                <div className="commerce_countmsg">
                    <a>Количество входящих сообщений</a>
                    <a className="commerce_countmsgnum"> (99+)</a>
                </div>
                <Message/>
                <Message/>
                <Message/>
                <Message/>
                <Message/>
                <Message/>
                <Message/>
            </div>
        </div>
        <div className="commerce_columns">
            <div className="commerce_title">
                <p>Согласование с руководителем</p>
            </div>
            <div className="commerce_list">
                <div className="commerce_item">
                    <div className="commerce_countmsgs">
                        <a>Количество писем</a>
                        <a className="commerce_countmsgnum"> (10)</a>
                    </div>
                    <Message_green/>
                    <Message_yellow/>
                </div>
                <div className="commerce_item">
                    <div className="commerce_item_title">Корзина</div>
                    <div className="commerce_countmsgs">
                        <a>Количество писем</a>
                        <a className="commerce_countmsgnum"> (540)</a>
                    </div>
                    <Message_gray/>
                    <Message_gray/>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Commerce;