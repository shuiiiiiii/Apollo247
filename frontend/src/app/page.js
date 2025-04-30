'use client'

import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return(
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.navbar}>
          <Image src="/apollo247.svg" width={70} height={48} alt="Apollo24x7"/>
          <div className={styles.locationContainer}>
              <Image className={styles.locationIcon} src="/location.svg" width={24} height={24} alt="Location" />
            <div>
              <h5 className={styles.SL}>Select Location</h5>
              <div className={styles.SAC}>
                <h4 className={styles.SA}>Select Address</h4>
                <Image src="/dropdown.svg" width={20} height={20} alt="dropdown" />
              </div>
            </div>
          </div>
          <div className={styles.searchBar}>
            <div className={styles.searchInputBar}>
              <Image className={styles.searchIcon} src="/search.svg" width={16} height={16} alt="search" />
              <input className={styles.searchInput} type="text" placeholder="Search Doctors, Speacialities, Conditions etc." />
            </div>
          </div>
          <div className={styles.loginBtn}>
              <button className={styles.loginButton}>
                  <span>Login</span>
                  <Image src="/user.svg" width={26} height={26} />
              </button>
          </div>
        </div>
      </div>
    </div>
  );
}