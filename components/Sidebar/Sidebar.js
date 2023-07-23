import WatchesItem from '../watches/WatchesItem';
import classes from './Sidebar.module.css';

const Sidebar = props => {
  return (
    <ul className={classes.container}>
      {props.listOfWatches.map(watch => (
        <WatchesItem
          key={watch.id}
          id={watch.id}
          title={watch.title}
          image={watch.image}
        />
      ))}
    </ul>
  );
};

export default Sidebar;
