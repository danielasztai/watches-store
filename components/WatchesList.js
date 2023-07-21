import Link from 'next/link';
import classes from './WatchesList.module.css';

const WatchesList = props => {
  return (
    <div className={classes.container}>
      <ul className={classes['watches-list']}>
        {props.watches.map(watch => (
          <Link href="/" key={watch.id}>
            <img src={watch.image} />
            <h3>{watch.title}</h3>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default WatchesList;
