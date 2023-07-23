import { useRef } from 'react';

import classes from './NewWatchForm.module.css';

const NewWatchForm = props => {
  const brandRef = useRef();
  const imageRef = useRef();
  const priceRef = useRef();
  const materialRef = useRef();
  const modelRef = useRef();
  const movementRef = useRef();

  const submitHandler = e => {
    e.preventDefault();

    const enteredBrand = brandRef.current.value;
    const enteredImage = imageRef.current.value;
    const enteredPrice = +priceRef.current.value;
    const enteredMaterial = materialRef.current.value;
    const enteredModel = modelRef.current.value;
    const enteredMovement = movementRef.current.value;

    const watchData = {
      brand: enteredBrand,
      image: enteredImage,
      price: enteredPrice,
      material: enteredMaterial,
      model: enteredModel,
      movement: enteredMovement,
    };

    props.onAddNewWatch(watchData);
  };

  return (
    <div className={classes.container}>
      <h1>Fill out the form, to add a new watch!</h1>
      <form onSubmit={submitHandler} className={classes.form}>
        <div className={classes.lines}>
          <label htmlFor="brand">
            Brand
            <span className={classes.asterisk}>*</span>
          </label>
          <input type="text" id="brand" required ref={brandRef}></input>
        </div>
        <div className={classes.lines}>
          <label htmlFor="model">
            Model<span className={classes.asterisk}>*</span>
          </label>
          <input type="text" id="model" required ref={modelRef}></input>
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
        <div className={classes.lines}>
          <label htmlFor="movement">
            Movement<span className={classes.asterisk}>*</span>
          </label>
          <input type="text" id="movement" required ref={movementRef}></input>
        </div>
        <button type="submit" className={classes.submit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewWatchForm;
