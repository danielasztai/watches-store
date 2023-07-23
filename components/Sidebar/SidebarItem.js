import classes from './SidebarItem.module.css';

const SidebarItem = props => {
  console.log(props.title, props.id);
  return (
    <li className={classes.box}>
      <img src={props.image} />
      <h3>{props.title}</h3>
      <p>Checkout the details</p>
    </li>
  );
};

export default SidebarItem;

// TODO
// TODO
// TODO NOT USED ANYWHERE
