import { Fragment } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import classes from './Welcome.module.css';

import welcomeImg from '../../public/images/welcome-img_1.jpg';

const Welcome = () => {
  return (
    <Fragment>
      <div className={classes.container}>
        <Image
          src={welcomeImg}
          alt="Elegant man wearing a nice watch."
          height={1080}
          width={960}
        />
        <div className={classes['text-container']}>
          <div className={classes.text}>
            <h1>Amazing Watches</h1>
            <p>Precision on the highest level</p>
          </div>
          <Link href="/watches" className={classes.discover}>
            Discover Our Collection <span className={classes.arrow}>→</span>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Welcome;
