import React from 'react';
import './interlocutor.css';

const Interlocutor = (props) => {
    return (
        <div className="interlocutor">
            <div className="interlocutor_circle"></div>
            <p>{props.text}</p>
        </div>
    );
};

export default Interlocutor;