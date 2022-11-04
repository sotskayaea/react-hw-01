import css from './FriendList.module.css';
import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';



const FriendList = ({friends}) => {
    return(
        <ul className={css.friend__list}>
        {friends.map(friend => (
            <FriendListItem 
             key = {friend.id}
             avatar ={friend.avatar}
             name = {friend.name}
             status = {friend.isOnline}
            />
        ))}
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.exact({
       id: PropTypes.number.isRequired,
       name: PropTypes.string.isRequired,
       avatar:PropTypes.string.isRequired,
       isOnline: PropTypes.bool
    }))
}

export default FriendList

