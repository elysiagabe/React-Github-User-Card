import React from 'react';

const FollowerCard = props => {
    console.log('Follower card props', props)
    return (
        <div>
            <img src={props.imgSrc} alt={`${props.name} avatar`} />
            <h2>{props.name}</h2>
            <h3>{props.username}</h3>
            <p>Location: {props.location}</p>
            <p>Profile: {props.profileUrl}</p>
            <p>Followers: {props.followersCount}</p>
            <p>Following: {props.followingCount}</p>
            {props.bio ? <p>Bio: {props.bio}</p> : null}
        </div>
    )
}

export default FollowerCard;