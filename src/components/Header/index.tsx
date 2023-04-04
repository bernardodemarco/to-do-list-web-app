import styles from './Header.module.css';

import headerLogo from './../../assets/header-logo.svg';

export function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <img
        className={styles.logo}
        src={headerLogo}
        alt="Application's main logo"
      />
    </header>
  );
}
