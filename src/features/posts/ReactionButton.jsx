import React from 'react'
import { useDispatch } from 'react-redux'
import { postReactions } from './postsSlice'
const reactionEmoji = {
    thubmsUp: '👍',
    wow: '😲',
    heart: '💖',
    rocket: '🚀',
    coffee: '☕',
}
const ReactionButton = ({ post }) => {
    const dispatch = useDispatch();
    // let sample = Object.entries(reactionEmoji).map((name) => console.log(name));
    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
            <button 
                key={name} 
                type='button'
                onClick={() => dispatch(postReactions({ postId: post.id, reaction: name }))} >
                {emoji} 
                {post.reactions[name]}
            </button>
        )
    })
    return (
        <div>{reactionButtons}</div>
    )
}

export default ReactionButton
