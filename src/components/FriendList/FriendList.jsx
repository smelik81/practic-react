import FriendListItem from "../friendListItem/friendListItem.jsx";
import friendListItem from "../friendListItem/friendListItem.jsx";

const FriendList = ({ friends }) => {
  return (
    <>
      <ul>
        {friends.map(({ avatar, name, isOnline, id }) => {
          return (
            <li key={id}>
              <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default FriendList;
