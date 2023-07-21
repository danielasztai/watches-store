import { Fragment } from 'react';
import classes from './WatchDetails.module.css';

const WatchDetails = props => {
  return (
    <Fragment>
      <div className={classes.container}>
        <img src={props.watchDetails.image} />
        <div className={classes.details}>
          <h1>{props.watchDetails.title}</h1>
          <p>Material: {props.watchDetails.material}</p>
          <p>Price: {props.watchDetails.price}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default WatchDetails;
