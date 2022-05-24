import React from 'react';
import './Message.css'

function Message(props){


    return (
        <div className="messagegr_block">
            <div className="messagegr_oval">
                <div className="messagegr_photo"></div>
                <div className="messagegr_text">
                    <div className="messagegr_text_oval"></div>
                    <div className="messagegr_text_oval"></div>
                    <div className="messagegr_text_oval"></div>
                </div>
            </div>
        </div>
    );
};

export default Message;