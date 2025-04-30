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
                  <Image src="/user.svg" alt="user" width={26} height={26} />
              </button>
          </div>
        </div>
        <div className={styles.separator}></div>
        <div className={styles.links}>
            <ul>
              <li>Buy Medicines</li>
              <li>Find Doctors</li>
              <li>Lab Tests</li>
              <li>Circle Membership</li>
              <li>Health Records</li>
              <li>Diabetes Reversal</li>
              <li>Buy Insurance</li>
            </ul>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.leftSection}>
          <div className={styles.filters}>
            <div className={styles.filterHeading}>
              <span>
                Filters
              </span>
              <span>
                Clear All
              </span>
            </div>
            <div className={styles.selectedFilter}>
              <div className={styles.SF}>
                  Near Me
                <Image src="/close.svg" width={20} height={20} alt="close" />
              </div>
              <div className={styles.SF}>
                  0-500
                <Image src="/close.svg" width={20} height={20} alt="close" />
              </div>
              <div className={styles.SF}>
                  11-16
                <Image src="/close.svg" width={20} height={20} alt="close" />
              </div>
              <div className={styles.SF}>
                  6-10
                <Image src="/close.svg" width={20} height={20} alt="close" />
              </div>
            </div>
          </div>
          <div className={styles.filterOptions}>
            <div className={styles.filterMOD}>
              <h1>Mode of Consult</h1>
              <div className={styles.MOD}>
                <div>
                  <input type="checkbox" name="HV" id="HV" />
                  <label htmlFor="HV">Hospital Visit</label>
                </div>
                <div>
                  <input type="checkbox" name="OC" id="OC" />
                  <label htmlFor="OC">Online Consult</label>
                </div>
              </div>
            </div>
            <div className={styles.filterMOD}>
              <h1>Experience (In Years)</h1>
              <div className={styles.MOD}>
                <div>
                  <input type="checkbox" name="05" id="05y" />
                  <label htmlFor="05y">0-5</label>
                </div>
                <div>
                  <input type="checkbox" name="60" id="60y" />
                  <label htmlFor="60y">6-10</label>
                </div>
                <div>
                  <input type="checkbox" name="16" id="16y" />
                  <label htmlFor="16y">11-16</label>
                </div>
                <div>
                  <input type="checkbox" name="16+" id="16+y" />
                  <label htmlFor="16+y">16+</label>
                </div>
              </div>
            </div>
            <div className={styles.filterMOD}>
              <h1>Fees (In Rupees)</h1>
              <div className={styles.MOD}>
                <div>
                  <input type="checkbox" name="HV" id="HV" />
                  <label htmlFor="HV">Hospital Visit</label>
                </div>
                <div>
                  <input type="checkbox" name="OC" id="OC" />
                  <label htmlFor="OC">Online Consult</label>
                </div>
              </div>
            </div>
            <div className={styles.filterMOD}>
              <h1>Language</h1>
              <div className={styles.MOD}>
                <div>
                  <input type="checkbox" name="HV" id="HV" />
                  <label htmlFor="HV">Hospital Visit</label>
                </div>
                <div>
                  <input type="checkbox" name="OC" id="OC" />
                  <label htmlFor="OC">Online Consult</label>
                </div>
              </div>
            </div>
            <div className={styles.filterMOD}>
              <h1>Facility</h1>
              <div className={styles.MOD}>
                <div>
                  <input type="checkbox" name="HV" id="HV" />
                  <label htmlFor="HV">Hospital Visit</label>
                </div>
                <div>
                  <input type="checkbox" name="OC" id="OC" />
                  <label htmlFor="OC">Online Consult</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.middleSection}>
          <h1>IS</h1>
        </div>
        <div className={styles.rightSection}>
          <h1>CUTE</h1>
        </div>
      </div>
    </div>
  );
}