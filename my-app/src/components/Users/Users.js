import React from 'react'
import styles from './Users.module.css';

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1,
                    photoUrl: 'https://image.flaticon.com/icons/png/512/147/147144.png',
                    followed: false,
                    fullName: 'Dmitriy',
                    status: 'I am a boss',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 2,
                    photoUrl: 'https://image.flaticon.com/icons/png/512/147/147144.png',
                    followed: true,
                    fullName: 'Alexandr',
                    status: 'I am a boss too',
                    location: {city: 'Moscow', country: 'Russia'}
                },
                {
                    id: 3,
                    photoUrl: 'https://image.flaticon.com/icons/png/512/147/147144.png',
                    followed: false,
                    fullName: 'Andrew',
                    status: 'I am a boss too',
                    location: {city: 'Kiev', country: 'Ukraine'}
                },
                {
                    id: 4,
                    photoUrl: 'https://image.flaticon.com/icons/png/512/147/147144.png',
                    followed: false,
                    fullName: 'Sue',
                    status: 'I am a boss too',
                    location: {city: 'London', country: 'Great Britain'}
                },
            ]
        )
    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users