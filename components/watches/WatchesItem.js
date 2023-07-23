import { Fragment } from 'react';

import { useRouter } from 'next/router';

import classes from './WatchesItem.module.css';

const WatchesItem = props => {
  const router = useRouter();

  const showDetailsHandler = () => {
    router.push('/watches/' + props.id);
  };

  return (
    <Fragment>
      <li onClick={showDetailsHandler}>
        <img src={props.image} className={classes.img} />
        <div
          className={
            router.pathname === '/watches'
              ? classes['card-bottom']
              : classes['card-bottom-details']
          }
        >
          <h3>{props.title}</h3>
          <p>Checkout the details</p>
        </div>
      </li>
    </Fragment>
  );
};

export default WatchesItem;
