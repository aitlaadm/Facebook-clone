import React, { useEffect, useState } from 'react'
import './Feed.css'
import Stories from './Stories'
import Poste from './Poste'
import Postes from './Postes'
import db from './Firebase'

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').orderBy("timestamp", "desc").onSnapshot((snapshot) =>
            setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
        );
    }, []);
    return (
        <div className="feed">
            <Stories />
            <Poste />
            {posts.map((post) => (
                <Postes
                    key={post.id}
                    profile={post.data.profilePic}
                    message={post.data.message}
                    timestamp={post.data.timestamp}
                    username={post.data.username}
                    image={post.data.image}
                />
            ))}
        </div>
    )
}

export default Feed;
