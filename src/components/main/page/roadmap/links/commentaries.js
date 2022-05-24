import React from 'react';
import './commenataries.css'

const Commentaries = (props) => {
    return (
        <div className="commentaries">
            <div className="commentaries_header">
                <div className="commentaries_user">
                    <div className="commentaries_circle"></div>
                    <div className="commentaries_name">{props.name}</div>
                </div>
                <div className="commentaries_date">{props.date}</div>
            </div>
            <div className="commentaries_text">
                {props.text}
            </div>
        </div>
    );
};

export default Commentaries;