import React, { useState } from 'react'

function ClickEvent() {
    const [Text, setText] = useState("Not Clicked");

    const handleClick = () => {
        setText("Clicked")
    };


    return (
        <>
            <div>
                <p>{Text}</p>

                <button onClick={handleClick} className='btn btn-success'>Click Here</button>
            </div >


        </>
    )
}

export default ClickEvent
