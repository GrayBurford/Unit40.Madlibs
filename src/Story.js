import React from 'react';
import './Story.css';

// Basic component to render a new Madlib generated by MadlibsForm
function Story ({ noun1, noun2, adjective, color }) {
    
    return (
        <div className='Story'>
            <h4>{`There once was a ${color} ${noun1} who loved a ${adjective} ${noun2}`}</h4>
        </div>
    )
}


export default Story;