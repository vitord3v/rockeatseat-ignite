import styles from './Header.module.css'

import igniteLogo from '../assets/Ignite-simbol.svg'

export function Header () {
    return (
        <header className={styles.header}>
        <img src={igniteLogo} ></img>
        <strong>Ignite Feed</strong>
        </header>
    );
}