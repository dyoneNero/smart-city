import React from 'react';
import './Message.css'

function Message(props){


    return (
        <div className="message_block">
            <div className="message_oval">
                <div className="message_photo"></div>
                <div className="message_text">
                    <div className="message_text_oval"></div>
                    <div className="message_text_oval"></div>
                    <div className="message_text_oval"></div>
                </div>
            </div>
            <div className="message_circle"></div>
        </div>
    );
};

export default Message;