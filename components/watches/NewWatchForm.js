import { useRef } from 'react';

import classes from './NewWatchForm.module.css';

const NewWatchForm = props => {
  const brandRef = useRef();
  const imageRef = useRef();
  const priceRef = useRef();
  const materialRef = useRef();
  const modelRef = useRef();
  const movementRef = useRef();
  const conditionRef = useRef();
  const yearRef = useRef();
  const genderRef = useRef();
  const diameterRef = useRef();

  const submitHandler = e => {
    e.preventDefault();

    const enteredBrand = brandRef.current.value;
    const enteredImage = imageRef.current.value;
    const enteredPrice = +priceRef.current.value;
    const enteredMaterial = materialRef.current.value;
    const enteredModel = modelRef.current.value;
    const enteredMovement = movementRef.current.value;
    const enteredCondition = conditionRef.current.value;
    const enteredYear = yearRef.current.value;
    const enteredGender = genderRef.current.value;
    const enteredDiameter = diameterRef.current.value;

    const watchData = {
      brand: enteredBrand,
      image: enteredImage,
      price: enteredPrice,
      material: enteredMaterial,
      model: enteredModel,
      movement: enteredMovement,
      condition: enteredCondition,
      year: enteredYear,
      gender: enteredGender,
      diameter: enteredDiameter,
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
          <input
            type="text"
            id="brand"
            required
            ref={brandRef}
            autoFocus
          ></input>
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
          <label htmlFor="year">
            Year<span className={classes.asterisk}>*</span>
          </label>
          <input type="number" id="year" required ref={yearRef}></input>
        </div>
        <div className={classes.lines}>
          <label htmlFor="material">
            Material<span className={classes.asterisk}>*</span>
          </label>
          <select type="text" id="material" required ref={materialRef}>
            <option value="Aluminium">Aluminium</option>
            <option value="Bronze">Bronze</option>
            <option value="Carbon">Carbon</option>
            <option value="Ceramic">Ceramic</option>
            <option value="Gold/Steel">Gold/Steel</option>
            <option value="Palladium">Palladium</option>
            <option value="Plastic">Plastic</option>
            <option value="Platinum">Platinum</option>
            <option value="Red gold">Red gold</option>
            <option value="Rose gold">Rose gold</option>
            <option value="Silver">Silver</option>
            <option value="Steel">Steel</option>
            <option value="Tantalum">Tantalum</option>
            <option value="Titanium">Titanium</option>
            <option value="Tungsten">Tungsten</option>
            <option value="White gold">White gold</option>
            <option value="Yellow gold">Yellow gold</option>
          </select>
        </div>
        <div className={classes.lines}>
          <label htmlFor="movement">
            Movement<span className={classes.asterisk}>*</span>
          </label>
          <select id="movement" required ref={movementRef}>
            <option value="Automatic">Automatic</option>
            <option value="Quartz">Quartz</option>
            <option value="Manual Winding">Manual Winding</option>
          </select>
        </div>
        <div className={classes.lines}>
          <label htmlFor="condition">
            Condition<span className={classes.asterisk}>*</span>
          </label>
          <select type="text" id="condition" required ref={conditionRef}>
            <option value="New (Brand new, without any signs of wear)">
              New (Brand new, without any signs of wear)
            </option>
            <option value="Unworn (Mint condition, without signs of wear)">
              Unworn (Mint condition, without signs of wear)
            </option>
            <option value="Very good (Worn with little to no signs of wear)">
              Very good (Worn with little to no signs of wear)
            </option>
            <option value="Good (Light signs of wear or scratches)">
              Good (Light signs of wear or scratches)
            </option>
            <option value="Fair (Obvious signs of wear or scratches)">
              Fair (Obvious signs of wear or scratches)
            </option>
            <option value="Poor (Heavy signs of wear or scratches)">
              Poor (Heavy signs of wear or scratches)
            </option>
            <option value="Incomplete (Components missing, non-functional)">
              Incomplete (Components missing, non-functional)
            </option>
          </select>
        </div>
        <div className={classes.lines}>
          <label htmlFor="gender">
            Gender<span className={classes.asterisk}>*</span>
          </label>
          <select id="gender" required ref={genderRef}>
            <option value="Men's watch/Unisex">Men's watch/Unisex</option>
            <option value="Women's watch">Women's watch</option>
          </select>
        </div>
        <div className={classes.lines}>
          <label htmlFor="diameter">
            Diameter (mm)<span className={classes.asterisk}>*</span>
          </label>
          <input type="number" id="diameter" required ref={diameterRef}></input>
        </div>
        <div className={classes.lines}>
          <label htmlFor="price">
            Price<span className={classes.asterisk}>*</span>
          </label>
          <input type="number" id="price" required ref={priceRef}></input>
        </div>
        <button type="submit" className={classes.submit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewWatchForm;
