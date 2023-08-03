import React, { useState } from 'react';
import './MadlibsForm.css';


// Form component for Madlibs game
// Will generate re-render of the MadlibsBoard component and add new Story component
function MadlibsForm ({ addStory }) {
    const INITIAL_STATE = {
        noun1 : "",
        noun2 : "",
        adjective : "",
        color : ""
    }
    const [formData, setFormData] = useState(INITIAL_STATE);

    function handleSubmit (evt) {
        evt.preventDefault();
        addStory({...formData})
        setFormData(INITIAL_STATE);
    }

    function handleChange (evt) {
        const { name, value } = evt.target;
        setFormData(data => ({...data, [name] : value }))
    }

    return (
        <form className='MadlibsForm' onSubmit={handleSubmit}>
            <div>
                <label htmlFor='noun1'>Noun1</label>
                <input 
                    id='noun1'
                    name='noun1'
                    type='text'
                    placeholder='first noun'
                    value={formData.noun1}
                    onChange={handleChange}
                />
            </div>            
            <div>
                <label htmlFor='noun2'>Noun2</label>
                <input 
                    id='noun2'
                    name='noun2'
                    type='text'
                    placeholder='second noun'
                    value={formData.noun2}
                    onChange={handleChange}
                />
            </div>            
            <div>
                <label htmlFor='adjective'>Adjective</label>
                <input 
                    id='adjective'
                    name='adjective'
                    type='text'
                    placeholder='adjective'
                    value={formData.adjective}
                    onChange={handleChange}
                />                
            </div>
            <div>
                <label htmlFor='color'>Color</label>
                <input 
                    id='color'
                    name='color'
                    type='text'
                    placeholder='color'
                    value={formData.color}
                    onChange={handleChange}
                />                
            </div>
            <button className='MadlibsForm-submit'>Create Madlib!</button>
        </form>
    )
}

export default MadlibsForm;