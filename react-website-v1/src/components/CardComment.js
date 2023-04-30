import React from 'react';

import Avatar from '@mui/material/Avatar';
import './CardComment.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faReply } from '@fortawesome/free-solid-svg-icons'



function CardComment(props) {
    return (
        <>
            <div className='replay-comment'>
                <div class="avatar-left">
                    <Avatar
                        className="avatar-reply"
                        alt="avatar"
                        src={props.avarTar}
                        sx={{ width: 40, height: 40 }} /></div>
                <div class="avatar-right">
                    <h3>{props.fullName}</h3>
                    <p><FontAwesomeIcon icon={faClock} />
                        20-25-2002</p>
                    <div className='body-loadcomment'>
                        {props.content}
                    </div>

                </div>

                <div className='footer-loadcomment'>
                    <div className='icon-like'><FontAwesomeIcon icon={faThumbsUp} /> {props.numOfLikes}</div>
                    <FontAwesomeIcon icon={faReply} /> 

                </div>
                <br></br>
            </div>



        </>
    );
}

export default CardComment;
