import { validateConfig } from 'next/dist/server/config-shared';
import WatchesItem from './WatchesItem';

import classes from './WatchesList.module.css';
import { Fragment } from 'react';

const WatchesList = props => {
  return (
    <Fragment>
      <h1 className={classes.header}>Our Collection</h1>
      <div className={classes.container}>
        <ul className={classes['watches-list']}>
          {props.watches.map(watch => (
            <WatchesItem
              key={watch.id}
              id={watch.id}
              brand={watch.brand}
              price={watch.price}
              image={watch.image}
            />
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default WatchesList;
