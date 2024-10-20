"use client";

import styles from "../../../styles/main.module.scss";
import Link from "next/link";
import React, { useState } from "react";
export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const menuFunction = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <React.Fragment>
      <header id="header" className={styles.header}>
        <div className={styles.logo}>
          <Link href="/" className={styles.logo}>
            ハンバーガー
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link href="/">メニュー</Link>
            </li>
            <li>
              <Link href="/">メニュー</Link>
            </li>
            <li>
              <Link href="/">メニュー</Link>
            </li>
            <li>
              <Link href="/">メニュー</Link>
            </li>
          </ul>
        </nav>
        <div className={styles.container}>
          <div className={styles.humburger} onClick={() => menuFunction()}>
            <span className={openMenu ? styles.open : undefined}></span>
            <span className={openMenu ? styles.open : undefined}></span>
            <p className={openMenu ? styles.open : undefined}>Menu</p>
          </div>
        </div>
      </header>
      <div
        className={`${styles.drawerMenu} ${openMenu ? styles.open : undefined}`}
      >
        <ul>
          <div className={styles.close} onClick={() => menuFunction()}>
            <span></span>
            <span></span>
            <p>Close</p>
          </div>
          <li>
            <Link href="/">
              <p className={styles.mainTitle}>メニュー</p>
              <p className={styles.subTitle}>私のメニュー</p>
            </Link>
          </li>
          <li>
            <Link href="/">
              <p className={styles.mainTitle}>メニュー</p>
              <p className={styles.subTitle}>私のメニュー</p>
            </Link>
          </li>
          <li>
            <Link href="/">
              <p className={styles.mainTitle}>メニュー</p>
              <p className={styles.subTitle}>私のメニュー</p>
            </Link>
          </li>
          <li>
            <Link href="/">
              <p className={styles.mainTitle}>メニュー</p>
              <p className={styles.subTitle}>私のメニュー</p>
            </Link>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}
