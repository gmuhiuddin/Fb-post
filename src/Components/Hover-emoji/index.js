import './style.css'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faThumbsUp, faFaceSadTear, faFaceLaugh, faFaceAngry } from '@fortawesome/free-solid-svg-icons';

function HoverEmojis({ state, emojeeName }) {

    const iconClicked = (icons) => {
        emojeeName(icons)
        setTimeout(() => {
            state(false)
        }, 500);
    }

    return (
        <div onMouseLeave={() => {
            setTimeout(() => {
                state(false)
            }, 500);
        }} className='emoji-container'>
            <FontAwesomeIcon onClick={() => iconClicked(<span className='txt'><FontAwesomeIcon className='like-beside-icon heart-icon' icon={faHeart} />
            Heart</span>
            )} className='icon heart-icon' icon={faHeart} />
            <FontAwesomeIcon onClick={() => iconClicked(<span className='txt'><FontAwesomeIcon className='like-beside-icon thumbsUp-icon' icon={faThumbsUp} /> Like</span>)} className='icon thumbsUp-icon' icon={faThumbsUp} />
            <FontAwesomeIcon onClick={() => iconClicked(<span className='txt'><FontAwesomeIcon className='like-beside-icon laugh-icon' icon={faFaceLaugh} />Haha</span>)} className='icon laugh-icon' icon={faFaceLaugh} />
            <FontAwesomeIcon onClick={() => iconClicked(<span className='txt'><FontAwesomeIcon className='like-beside-icon sad-icon' icon={faFaceSadTear} />Sad</span>)} className='icon sad-icon' icon={faFaceSadTear} />
            <FontAwesomeIcon onClick={() => iconClicked(<span className='txt'><FontAwesomeIcon className='like-beside-icon angry-icon' icon={faFaceAngry} />Angry</span>)} className='icon angry-icon' icon={faFaceAngry} />
        </div>
    )
}

export default HoverEmojis;