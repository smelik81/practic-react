const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <>
      <div>
        <img src={image} alt={`${name}`} />
        <p>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>
      <ul>
        <li>
          <p>Followers</p>
          <p>{stats.followers}</p>
        </li>
        <li>
          <p>Views</p>
          <p>{stats.views}</p>
        </li>
        <li>
          <p>Likes</p>
          <p>{stats.likes}</p>
        </li>
      </ul>
    </>
  );
};

export default Profile;
