import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import './Poste.css'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from './StateProvider';
import firebase from "firebase";
import db from './Firebase'
function Poste() {
    const [{ user }, dispatch] = useStateValue();
    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl,
        });
        setInput('')
        setImageUrl('')
    }
    return (
        <div className='poste'>
            <div className='poste_top'>
                <Avatar src={user.photoURL} />
                <form>
                    <input value={input} onChange={(e) => setInput(e.target.value)} className='poste_input' placeholder={`Que voulez-vous dire, ${user.displayName} ?`} />
                    <input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder='image URL (Optionel)' />
                    <button onClick={handleSubmit} type='submit'>Submit cachée</button>
                </form>
            </div>
            <div className='poste_bottom'>
                <div className='poste_option'>
                    <VideocamIcon style={{ color: "red" }} fontSize="small" />
                    <h3>Live Vidéo</h3>
                </div>
                <div className='poste_option'>
                    <PhotoLibraryIcon fontSize="small" style={{ color: "green" }} />
                    <h3>Photos/Vidéos</h3>
                </div>
                <div className='poste_option'>
                    <InsertEmoticonIcon style={{ color: "orange" }} fontSize="small" />
                    <h3>Emotions/Activitées</h3>
                </div>
            </div>
        </div>
    )
}

export default Poste
