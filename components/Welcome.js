import { Fragment } from 'react';

import classes from './Welcome.module.css';

import Image from 'next/image';
import welcomeImg from '../assets/welcome-img_1.jpg';
import Link from 'next/link';

const Welcome = () => {
  return (
    <Fragment>
      <div className={classes.container}>
        <Image
          src={welcomeImg}
          alt="Picture of an Omega Seamaster sunken in water"
        />
        <div className={classes['text-container']}>
          <div className={classes.text}>
            <h1>Amazing Watches</h1>
            <p>Precision on the highest level</p>
          </div>
          <Link href="/watches" className={classes.discover}>
            Discover Our Collection <span className={classes.arrow}>🡢</span>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Welcome;
