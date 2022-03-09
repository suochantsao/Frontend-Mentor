import classes from "./NFT.module.css";

// Pic
import cardPic from "../img/image-equilibrium.jpg";

function NFTCard() {
  return (
    <div className={classes.card}>
      <img className={classes.img} src={cardPic} alt="" />

      <div className={classes.text}>
        <p className={classes.name}> Equilibrium #3429</p>

        <p className={classes.description}>
          Our Equilibrium collection promotes balance and calm.
        </p>
      </div>
    </div>
  );
}

export default NFTCard;
