import React from 'react';

const UserCard = ({userInfo}) => {
    //console.log("user card props:", userInfo)

    return (
        <div>
            <h2>{userInfo.name}'s GitHub Profile</h2>
            <div className="user-card">
                <div className="user-img">
                  <img src={userInfo.avatar_url} alt={`${userInfo.name} avatar`} />
                </div>
                <div className="user-info">
                    <h2>{userInfo.name}</h2>
                    <h3>{userInfo.login}</h3>
                    <p>Location: {userInfo.location}</p>
                    <p>Profile: <a href={userInfo.html_url}>{userInfo.html_url}</a></p>
                    <p>Followers: {userInfo.followers}</p>
                    <p>Following: {userInfo.following}</p>
                    {userInfo.bio ? <p>Bio: {userInfo.bio}</p> : null}
                </div>
            </div>
        </div>
    )
}

export default UserCard;