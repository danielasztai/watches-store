import { Fragment, useState } from 'react';
import classes from './WatchDetails.module.css';
import Sidebar from '../Sidebar/Sidebar';

const WatchDetails = props => {
  const [isInfoHovered, setIsInfoHovered] = useState(false);

  const infoOpenHandler = () => {
    setIsInfoHovered(true);
  };

  const infoCloseHandler = () => {
    setIsInfoHovered(false);
  };

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
                <p>
                  {props.watchDetails.condition}
                  <a
                    className={classes.info}
                    onMouseOver={infoOpenHandler}
                    onMouseOut={infoCloseHandler}
                  >
                    ⓘ
                  </a>
                </p>
                {isInfoHovered && (
                  <div className={classes['condition-box']}>
                    <div className={classes['condition-line']}>
                      <h3>New</h3>
                      <p>Brand new, without any signs of wear</p>
                    </div>
                    <div className={classes['condition-line']}>
                      <h3>Unworn</h3>
                      <p>Mint condition, without signs of wear</p>
                    </div>
                    <div className={classes['condition-line']}>
                      <h3>Very good</h3>
                      <p>Worn with little to no signs of wear</p>
                    </div>
                    <div className={classes['condition-line']}>
                      <h3>Good</h3>
                      <p>Light signs of wear or scratches</p>
                    </div>
                    <div className={classes['condition-line']}>
                      <h3>Fair</h3>
                      <p>Obvious signs of wear or scratches</p>
                    </div>
                    <div className={classes['condition-line']}>
                      <h3>Poor</h3>
                      <p>Heavy signs of wear or scratches</p>
                    </div>
                    <div className={classes['condition-line']}>
                      <h3>Incomplete</h3>
                      <p>Components missing, non-functional</p>
                    </div>
                  </div>
                )}
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
