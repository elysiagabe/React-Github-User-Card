import React from 'react';

const UserCard = ({userInfo}) => {
    console.log("user card props:", userInfo)

    return (
        <div>
            <h1>UserCard </h1>
            <img src={userInfo.avatar_url} alt={`${userInfo.name} avatar`} />
            <h2>{userInfo.name}</h2>
            <h3>{userInfo.login}</h3>
            <p>Location: {userInfo.location}</p>
            <p>Profile: {userInfo.html_url}</p>
            <p>Followers: {userInfo.followers}</p>
            <p>Following: {userInfo.following}</p>
            {userInfo.bio ? <p>Bio: {userInfo.bio}</p> : null}
        </div>
    )
}

export default UserCard;