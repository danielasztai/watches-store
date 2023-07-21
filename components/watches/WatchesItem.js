import { Fragment } from 'react';

import { useRouter } from 'next/router';

const WatchesItem = props => {
  const router = useRouter();

  const showDetailsHandler = () => {
    router.push('/watches/' + props.id);
  };

  return (
    <Fragment>
      <li onClick={showDetailsHandler}>
        <img src={props.image} />
        <h3>{props.title}</h3>
      </li>
    </Fragment>
  );
};

export default WatchesItem;
