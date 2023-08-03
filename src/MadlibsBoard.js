import React, { useState } from 'react';
import './MadlibsBoard.css';
import MadlibsForm from './MadlibsForm.js';
import Story from './Story';
import { v4 as uuid } from 'uuid';

// Main board for Madlibs game
// Displays MadlibsForm component, and list of Story components
function MadlibsBoard () {
    const INITIAL_STATE = []
    const [stories, setStories] = useState(INITIAL_STATE);


    function addStory (newStory) {
        setStories(stories => [...stories, {...newStory, id : uuid() }])
    }

    function refreshStories () {
        setStories(INITIAL_STATE)
    }

    return (
        <div className='MadlibsBoard'>
            <div>
                <h1>Play Madlibs!</h1>

                <MadlibsForm addStory={addStory} />
            </div>
            <div>
                <h2><u>Your Madlibs: </u></h2>
                <button className='MadlibsBoard-refresh' onClick={refreshStories}>Refresh List</button>
                {stories.map(story => 
                    <Story 
                        noun1={story.noun1} 
                        noun2={story.noun2} 
                        adjective={story.adjective} 
                        color={story.color} 
                        key={story.id} 
                    />
                )}
            </div>
        </div>
    )
}

export default MadlibsBoard;
