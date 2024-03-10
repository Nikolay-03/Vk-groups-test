import React from 'react';
import {IUser} from "../../types/User";
import FriendCard from "../FriendCard/FriendCard";
import styles from "./style.module.css"

const FriendsList = ({friends} : {friends : IUser[]}) => {
    return (
        <div className={styles.friends__list__modal__wrapper}>
            {friends.map(friend =>
                <FriendCard friend={friend} key={Math.random()}/>
            )}
        </div>
    );
};

export default FriendsList;