import React from 'react';
import { TbFlag } from 'react-icons/tb'; // Importa ícones das bandeiras
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoBox}>
        <span className={styles.logoText}>LOGO DA EMPRESA</span>
      </div>
      <div className={styles.languageBox}>
        <div className={styles.flag} title="Idioma Japonês">
          <TbFlag style={{ color: 'red' }} className={styles.flagIcon} />
        </div>
        <div className={styles.flag} title="Idioma Português">
          <TbFlag style={{ color: 'green' }} className={styles.flagIcon} />
        </div>
      </div>
    </header>
  );
}
