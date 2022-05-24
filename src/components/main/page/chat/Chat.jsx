import React from 'react';
import './Chat.css'
import Interlocutor from "./interlocutor";
import searchChat from "../../img/search_chat.png";
import settingsChat from "../../img/settings_chat.png";
import chatArrow from '../../img/chat_arrow.png'

const Chat = () => {
    return (
        <div className="chat_area">
            <div className="chat_column_interlocutor">
                <Interlocutor text="Виктор Борисыч"/>
                <Interlocutor text="Ольга Шотовна"/>
                <Interlocutor text="Николай Кол"/>
                <Interlocutor text="Юрий Бикоз"/>
                <Interlocutor text="Юлия Сорока"/>
                <Interlocutor text="Анна Родога"/>
                <Interlocutor text="Эдуард Львович"/>
                <Interlocutor text="Елена Одессовна"/>
                <Interlocutor text="Данил Староминский"/>
            </div>
            <div className="chat_block_talks">
                <div className="chat_header">
                    <div className="chat_header_column">
                        <div className="chat_header_circle"></div>
                        <div className="chat_header_text">
                            <p className="chat_header_namechannel">Рабочий канал</p>
                            <p className="chat_header_countpeople">33 участника</p>
                        </div>
                    </div>
                    <div className="chat_header_column">
                        <a href="src/components/main/area/chat/Chat"><img className="chat_header_search" src={searchChat} alt=""/></a>
                        <a href="src/components/main/area/chat/Chat"><img className="chat_header_settings" src={settingsChat} alt=""/></a>
                    </div>
                </div>
                <div className="chat_message_block">

                </div>
                <div className="chat_talks_send">
                    <input type="text" className="chat_talks_input" placeholder="Ввести текст сообщения"/>
                    <a href="src/components/main/area/chat/Chat" className="chat_talks_button">
                        <img src={chatArrow} alt=""/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Chat;