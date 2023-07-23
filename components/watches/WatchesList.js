import { validateConfig } from 'next/dist/server/config-shared';
import WatchesItem from './WatchesItem';

import classes from './WatchesList.module.css';

const WatchesList = props => {
  return (
    <div className={classes.container}>
      <h1 className={classes.header}>Our Collection</h1>
      <ul className={classes['watches-list']}>
        {props.watches.map(watch => (
          <WatchesItem
            key={watch.id}
            id={watch.id}
            title={watch.title}
            price={watch.price}
            image={watch.image}
          />
        ))}
      </ul>
    </div>
  );
};

export default WatchesList;
