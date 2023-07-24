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
            <div className={classes['detail-container']}>
              <div className={classes.detail}>
                <p>Brand</p>
                <p>{props.watchDetails.brand}</p>
              </div>
              <div className={classes.detail}>
                <p className={classes.model}>Model</p>
                <p className={classes.model}>{props.watchDetails.model}</p>
              </div>
              <div className={classes.detail}>
                <p>Material</p>
                <p>{props.watchDetails.material}</p>
              </div>
              <div className={classes.detail}>
                <p>Condition</p>
                <p>{props.watchDetails.condition}</p>
              </div>
              <div className={classes.detail}>
                <p>Year of production</p>
                <p>{props.watchDetails.year}</p>
              </div>
              <div className={classes.detail}>
                <p>Movement</p>
                <p>{props.watchDetails.movement}</p>
              </div>
              <div className={classes.detail}>
                <p>Diameter</p>
                <p>{props.watchDetails.diameter}mm</p>
              </div>
              <div className={classes.detail}>
                <p>Gender</p>
                <p>{props.watchDetails.gender}</p>
              </div>
              <div className={classes.detail}>
                <p>Price</p>
                <p>{props.watchDetails.price.toLocaleString()}$</p>
              </div>
            </div>
          </div>
        </div>
        <Sidebar listOfWatches={props.listOfWatches} />
      </div>
    </Fragment>
  );
};

export default WatchDetails;
