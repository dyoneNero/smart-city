import React from 'react';
import './Message.css'

function Message(props){


    return (
        <div className="messageye_block">
            <div className="messageye_oval">
                <div className="messageye_photo"></div>
                <div className="messageye_text">
                    <div className="messageye_text_oval"></div>
                    <div className="messageye_text_oval"></div>
                    <div className="messageye_text_oval"></div>
                </div>
            </div>
        </div>
    );
};

export default Message;