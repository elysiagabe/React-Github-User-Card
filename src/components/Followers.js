import React from 'react';
import FollowerCard from './FollowerCard';

const Followers = (props) => {
    //console.log('Followers:', props)
    return (
        <div>
            <h1>followers</h1>
            {props.followers.map(follower => {
                return (
                    <FollowerCard 
                        key={follower.id}
                        imgSrc={follower.avatar_url}
                        name={follower.name}
                        username={follower.login}
                        location={follower.location}
                        profileUrl={follower.html_url}
                        followersCount={follower.followers}
                        followingCount={follower.following}
                        bio={follower.bio}
                    />
                )
            })}
        </div>
    )
}

export default Followers;