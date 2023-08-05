import Link from 'next/link';

import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href="/" className={classes.logo}>
        Amazing Watches
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/watches" className={classes.menu}>
              All Watches
            </Link>
          </li>
          <li>
            <Link href="/new-watch" className={classes.menu}>
              Add New Watch
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
