import { Fragment } from 'react';
import classes from './WatchDetails.module.css';
import Sidebar from '../Sidebar/Sidebar';

const WatchDetails = props => {
  return (
    <Fragment>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <img src={props.watchDetails.image} />
          <div className={classes.details}>
            <div className={classes.left}>
              <h1>Brand:</h1>
              <p>Material:</p>
              <p>Price:</p>
            </div>
            <div className={classes.right}>
              <h1>{props.watchDetails.title}</h1>
              <p>{props.watchDetails.material}</p>
              <p>{props.watchDetails.price}$</p>
            </div>
          </div>
        </div>
        <Sidebar listOfWatches={props.listOfWatches} />
      </div>
    </Fragment>
  );
};

export default WatchDetails;
