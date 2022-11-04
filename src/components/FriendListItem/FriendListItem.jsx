import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';


const FriendListItem = ({avatar,name,status}) => {
    return (

        <li className={css.item}>
        {status ? (
            <span className = {css.status__online}></span>
        ):(
            <span className = {css.status__offline}></span>
        )}
        <img className={css.avatar} src={avatar} alt={name} width="48" />
        <p className={css.name}>{name}</p>
        </li>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.bool
}


export default FriendListItem