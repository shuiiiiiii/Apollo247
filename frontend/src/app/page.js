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
                  <input type="checkbox" name="onetofive" id="onetofive" />
                  <label htmlFor="onetofive">100-500</label>
                </div>
                <div>
                  <input type="checkbox" name="fivetoten" id="fivetoten" />
                  <label htmlFor="fivetoten">500-1000</label>
                </div>
                <div>
                  <input type="checkbox" name="ten" id="ten" />
                  <label htmlFor="ten">1000+</label>
                </div>
              </div>
            </div>
            <div className={styles.filterMOD}>
              <h1>Language</h1>
              <div className={styles.MOD}>
                <div>
                  <input type="checkbox" name="eng" id="eng" />
                  <label htmlFor="eng">English</label>                </div>
                <div>
                  <input type="checkbox" name="hin" id="hin" />
                  <label htmlFor="hin">Hindi</label>
                </div>
                <div>
                  <input type="checkbox" name="tel" id="tel" />
                  <label htmlFor="tel">Telugu</label>
                </div>
              </div>
            </div>
            <div className={styles.filterMOD}>
              <h1>Facility</h1>
              <div className={styles.MOD}>
                <div>
                  <input type="checkbox" name="HV" id="HV" />
                  <label htmlFor="HV">Apollo Hospitals</label>
                </div>
                <div>
                  <input type="checkbox" name="OC" id="OC" />
                  <label htmlFor="OC">Other Clinics</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.middleSection}>
          <div className={styles.addressLinks}>
            <span>Home</span>
            <span>
              <Image src="/dropdown.svg" width={15} height={15} alt="right" />
            </span>
            <span>Doctors</span>
            <span>
              <Image src="/dropdown.svg" width={15} height={15} alt="right" />
            </span>
            <span>General Physicians</span>
          </div>
          <div className={styles.contentHeading}>
            <div>
              <h1>Consult General Physicians Online - Internal Medicine Specialists</h1>
              <h3>(763 doctors)</h3>
            </div>
            <div className={styles.dropdownFilter}>
              <div>
                <Image src="/sort.svg" width={24} height={24} alt="sort" />
                <span>Relevance</span>
                <Image src="/dropdown.svg" width={12} height={12} alt="dropdown" />
              </div>
            </div>
          </div>
          <div className={styles.doctors}>
            <div className={styles.doctor}>
              <div>
                <img src="https://images.apollo247.in/doctors/6e145672-2cb8-4695-9a32-f8317c192dfc-1741071710933.jpg?tr=w-74,c-at_max,f-auto,q=80,dpr-2" alt="doctor" />
              </div>
              <div>
                <h1>Dr. D Bhanu Prakash
                  <Image src="/info.svg" width={14} height={14} alt="info"/>
                </h1>
                <span className={styles.pos}>General Practioner</span>
                <span className={styles.exp}>10 Years • MBBS, AFIH, Advanced Certificate</span>
                <span className={styles.place}>Hyderabad</span>
                <span className={styles.hos}>Apollo 24|7 Virtual Clinic - Telangana, Hyderabad</span>
              </div>
              <div>
                <section className={styles.price}>
                  ₹1200
                </section>
                <section>
                  <button>
                    <span className={styles.co}>Consult Online</span>
                    <span className={styles.avail}>Available at 01:40 AM</span>
                  </button>
                </section>
              </div>
            </div>
            <div className={styles.doctor}>
              <div>
                <img src="https://images.apollo247.in/doctors/6e145672-2cb8-4695-9a32-f8317c192dfc-1741071710933.jpg?tr=w-74,c-at_max,f-auto,q=80,dpr-2" alt="doctor" />
              </div>
              <div>
                <h1>Dr. D Bhanu Prakash
                  <Image src="/info.svg" width={14} height={14} alt="info"/>
                </h1>
                <span className={styles.pos}>General Practioner</span>
                <span className={styles.exp}>10 Years • MBBS, AFIH, Advanced Certificate</span>
                <span className={styles.place}>Hyderabad</span>
                <span className={styles.hos}>Apollo 24|7 Virtual Clinic - Telangana, Hyderabad</span>
              </div>
              <div>
                <section className={styles.price}>
                  ₹1200
                </section>
                <section>
                  <button>
                    <span className={styles.co}>Consult Online</span>
                    <span className={styles.avail}>Available at 01:40 AM</span>
                  </button>
                </section>
              </div>
            </div>
            <div className={styles.doctor}>
              <div>
                <img src="https://images.apollo247.in/doctors/6e145672-2cb8-4695-9a32-f8317c192dfc-1741071710933.jpg?tr=w-74,c-at_max,f-auto,q=80,dpr-2" alt="doctor" />
              </div>
              <div>
                <h1>Dr. D Bhanu Prakash
                  <Image src="/info.svg" width={14} height={14} alt="info"/>
                </h1>
                <span className={styles.pos}>General Practioner</span>
                <span className={styles.exp}>10 Years • MBBS, AFIH, Advanced Certificate</span>
                <span className={styles.place}>Hyderabad</span>
                <span className={styles.hos}>Apollo 24|7 Virtual Clinic - Telangana, Hyderabad</span>
              </div>
              <div>
                <section className={styles.price}>
                  ₹1200
                </section>
                <section>
                  <button>
                    <span className={styles.co}>Consult Online</span>
                    <span className={styles.avail}>Available at 01:40 AM</span>
                  </button>
                </section>
              </div>
            </div>
            <div className={styles.doctor}>
              <div>
                <img src="https://images.apollo247.in/doctors/6e145672-2cb8-4695-9a32-f8317c192dfc-1741071710933.jpg?tr=w-74,c-at_max,f-auto,q=80,dpr-2" alt="doctor" />
              </div>
              <div>
                <h1>Dr. D Bhanu Prakash
                  <Image src="/info.svg" width={14} height={14} alt="info"/>
                </h1>
                <span className={styles.pos}>General Practioner</span>
                <span className={styles.exp}>10 Years • MBBS, AFIH, Advanced Certificate</span>
                <span className={styles.place}>Hyderabad</span>
                <span className={styles.hos}>Apollo 24|7 Virtual Clinic - Telangana, Hyderabad</span>
              </div>
              <div>
                <section className={styles.price}>
                  ₹1200
                </section>
                <section>
                  <button>
                    <span className={styles.co}>Consult Online</span>
                    <span className={styles.avail}>Available at 01:40 AM</span>
                  </button>
                </section>
              </div>
            </div>
            <div className={styles.doctor}>
              <div>
                <img src="https://images.apollo247.in/doctors/6e145672-2cb8-4695-9a32-f8317c192dfc-1741071710933.jpg?tr=w-74,c-at_max,f-auto,q=80,dpr-2" alt="doctor" />
              </div>
              <div>
                <h1>Dr. D Bhanu Prakash
                  <Image src="/info.svg" width={14} height={14} alt="info"/>
                </h1>
                <span className={styles.pos}>General Practioner</span>
                <span className={styles.exp}>10 Years • MBBS, AFIH, Advanced Certificate</span>
                <span className={styles.place}>Hyderabad</span>
                <span className={styles.hos}>Apollo 24|7 Virtual Clinic - Telangana, Hyderabad</span>
              </div>
              <div>
                <section className={styles.price}>
                  ₹1200
                </section>
                <section>
                  <button>
                    <span className={styles.co}>Consult Online</span>
                    <span className={styles.avail}>Available at 01:40 AM</span>
                  </button>
                </section>
              </div>
            </div>
            <div className={styles.doctor}>
              <div>
                <img src="https://images.apollo247.in/doctors/6e145672-2cb8-4695-9a32-f8317c192dfc-1741071710933.jpg?tr=w-74,c-at_max,f-auto,q=80,dpr-2" alt="doctor" />
              </div>
              <div>
                <h1>Dr. D Bhanu Prakash
                  <Image src="/info.svg" width={14} height={14} alt="info"/>
                </h1>
                <span className={styles.pos}>General Practioner</span>
                <span className={styles.exp}>10 Years • MBBS, AFIH, Advanced Certificate</span>
                <span className={styles.place}>Hyderabad</span>
                <span className={styles.hos}>Apollo 24|7 Virtual Clinic - Telangana, Hyderabad</span>
              </div>
              <div>
                <section className={styles.price}>
                  ₹1200
                </section>
                <section>
                  <button>
                    <span className={styles.co}>Consult Online</span>
                    <span className={styles.avail}>Available at 01:40 AM</span>
                  </button>
                </section>
              </div>
            </div>
          </div>
          <div className={styles.pagination}>
            <ul>
              <li>&#60;</li>
              <li className={styles.active}>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>5</li>
              <li>...</li>
              <li>&#62;</li>
            </ul>
          </div>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.ad}>
            <div>
              <Image src="/docs.webp" width={172} height={82} alt="docs" />
            </div>
            <div className={styles.NH}>
              Need help consult the right doctor?
            </div>
            <div className={styles.call}>
              Call +91-8040245807 to book instantly
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}