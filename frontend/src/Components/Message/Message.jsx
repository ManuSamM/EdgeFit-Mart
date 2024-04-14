import './Message.css'
import React from 'react';

function Message() {

    return (
        <>
            <div className='message'>
                <div className='message-img d-flex justify-content-between'>
                    <h1 className='message-text container ps-5'>
                        <b>"The meaning of life <br />
                            is not simply to exist<br />
                            and to survive,<br />
                            but to move ahead,<br />
                            to go up, to acheive<br />
                            and to conquer."<br /><br />
                            -Arnold Schwarzenegger</b>
                    </h1>
                </div>
            </div>
        </>
    )
}

export default Message