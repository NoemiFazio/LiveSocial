import "./index.css";

const FriendCard = ({ friendData, deleteFriendBtn }) => {
  const { photo, name } = friendData;

  return (
    <div className="FriendCard">
      <img className="FriendCard__photo" src={photo} alt={name} />
      <p className="FriendCard__name">{name}</p>
      <button className="FriendCard__delete-btn" onClick={deleteFriendBtn}>
        x
      </button>
    </div>
  );
};

export default FriendCard;
