import "./Card.css";

export default function Card(props) {
  //only displaying the badge if these conditions are met
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card__badge">SOLD OUT</div>}
      <img src={props.coverImg} className="card__img" />
      <div className="card__stats">
        <img
          className="card__star"
          src="https://scrimba.com/blobs/sha1:c2f0fa243f3dac7974e0192c560805c581fbd875.png"
        />
        <span>{props.rating}</span>
        <span className="gray">({props.stats.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
      </div>
      <p className="card__title">{props.title}</p>
      <p>
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}
