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
    <div className={classes.container}>
      <h1>Fill out the form, to add a new watch!</h1>
      <form onSubmit={submitHandler} className={classes.form}>
        <div className={classes.lines}>
          <label htmlFor="title">
            Brand and type of the watch
            <span className={classes.asterisk}>*</span>
          </label>
          <input type="text" id="title" required ref={titleRef}></input>
        </div>
        <div className={classes.lines}>
          <label htmlFor="image">
            Image<span className={classes.asterisk}>*</span>
          </label>
          <input type="url" id="image" required ref={imageRef}></input>
        </div>
        <div className={classes.lines}>
          <label htmlFor="price">
            Price<span className={classes.asterisk}>*</span>
          </label>
          <input type="number" id="price" required ref={priceRef}></input>
        </div>
        <div className={classes.lines}>
          <label htmlFor="material">
            Material<span className={classes.asterisk}>*</span>
          </label>
          <input type="text" id="material" required ref={materialRef}></input>
        </div>
        <button type="submit" className={classes.submit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewWatchForm;
