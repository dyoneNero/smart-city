import React from 'react';
import './Message.css'

function Message(props){


    return (
        <div className="messagege_block">
            <div className="messagege_oval">
                <div className="messagege_photo"></div>
                <div className="messagege_text">
                    <div className="messagege_text_oval"></div>
                    <div className="messagege_text_oval"></div>
                    <div className="messagege_text_oval"></div>
                </div>
            </div>
        </div>
    );
};

export default Message;