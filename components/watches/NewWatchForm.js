import { useRef } from 'react';

import classes from './NewWatchForm.module.css';

const NewWatchForm = props => {
  const titleRef = useRef();
  const imageRef = useRef();
  const priceRef = useRef();
  const materialRef = useRef();

  const submitHandler = e => {
    e.preventDefault();

    const enteredTitle = titleRef.current.value;
    const enteredImage = imageRef.current.value;
    const enteredPrice = +priceRef.current.value;
    const enteredMaterial = materialRef.current.value;

    const watchData = {
      title: enteredTitle,
      image: enteredImage,
      price: enteredPrice,
      material: enteredMaterial,
    };

    props.onAddNewWatch(watchData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.container}>
        <label htmlFor="title">Brand and type of the watch:</label>
        <input type="text" id="title" required ref={titleRef}></input>
      </div>
      <div className={classes.container}>
        <label htmlFor="image">Image:</label>
        <input type="url" id="image" required ref={imageRef}></input>
      </div>
      <div className={classes.container}>
        <label htmlFor="price">Price:</label>
        <input type="number" id="price" required ref={priceRef}></input>
      </div>
      <div className={classes.container}>
        <label htmlFor="material">Material:</label>
        <input type="text" id="material" required ref={materialRef}></input>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewWatchForm;
