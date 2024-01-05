import FbImageLibrary from 'react-fb-image-grid'
import './style.css';
import ShowMoreTxt from '../ShowMoreTxt'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faShareSquare, faComment, faFaceLaugh, faFaceSadTear, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import HoverEmojis from '../Hover-emoji'
function FbPosts(props) {

    const [isLiked, setIsLiked] = useState(false);
    const [emoji, setEmoji] = useState(false);
    const [emojiName, setEmojiName] = useState('');
    const [inputValue, setInputValue] = useState('');

    const likeBtnClicked = () => {
        setIsLiked(!isLiked)
        setEmoji(false)
    }

    return (

        <div className='post-container'>
            <div className='img-name-container'>
                <img className='logo-img' src={props.postObj.thumbnail} alt='user image' />
                <spna className='user-name'>{props.postObj.brand}</spna>
            </div>
            <span className='desc-txt'><ShowMoreTxt text={props.postObj.description} maxLength='65' /></span>
            <div style={{ position: 'relative', borderTop: '1px solid black' }}>
                <div className='grid-img-container'>
                    <FbImageLibrary images={props.postObj.images} />
                </div>
                {emoji ? <HoverEmojis emojeeName={setEmojiName} state={setEmoji} /> : ''}
            </div>
            <br />
            <div className='icon-container'>

                <div onMouseEnter={() => {
                    setTimeout(() => {
                        setEmoji(true)
                    }, 700);
                }} className='like-icon' onClick={likeBtnClicked}>
                   {emojiName?emojiName:<span className='txt'><FontAwesomeIcon className={!isLiked ? 'like-img' : 'liked-img'} icon={faThumbsUp} /> Like</span>}
                </div>
                <div className='comment-icon'>
                    <FontAwesomeIcon className='comment-img' icon={faComment} />
                    <span className='txt'>Comment</span>
                </div>
                <div className='share-icon'>
                    <FontAwesomeIcon className='share-img' icon={faShareSquare} />
                    <span className='txt'>Share</span>
                </div>
            </div>
            <br />
            <div className='txt-input-container'>
                <img className='comment-user-img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7vB-49_BT-dirwttYZaeE_VByjlQ3raVJZg&usqp=CAU' alt='user image' />
                    <input onChange={(e) => setInputValue(e.target.value)} value={inputValue} placeholder='Write a comment...' type='text' className='user-comment-txt' />
                    <input style={{ display: 'none' }} id='sumbit-btn' type='submit' />
                    <label onClick={() => setInputValue('')} for='sumbit-btn'><FontAwesomeIcon className='comment-btn' icon={faPaperPlane} /></label>
            </div>
        </div>
    )
}

export default FbPosts; 