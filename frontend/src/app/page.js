'use client'

import Image from "next/image";
import styles from "./page.module.css";
import { Truculenta } from "next/font/google";

const addDoc = () => {
  const docName = document.querySelector("#docName").value;
  const docExp  = document.querySelector("#docExp").value;
  const docDeg  = document.querySelector("#docDeg").value;
  const docCity = document.querySelector("#docCity").value;
  const docCost = document.querySelector("#docCost").value;
  const docImg  = document.querySelector("#docImg").value;
  const docOc   = document.querySelector("#docOc").checked;
  const docHv   = document.querySelector("#docHv").checked;
  const docHin  = document.querySelector("#docHin").checked;
  const docEng  = document.querySelector("#docEng").checked;
  const docApollo = document.querySelector("#docApollo").checked;
  const docOther = document.querySelector("#docOther").checked;
  const docSpec = document.querySelector("#docSpec").value;

  const docForm = document.querySelector("#addDocForm");

  const docObj = {
    name: docName,
    speciality: docSpec,
    exp: docExp,
    degree: docDeg,
    city: docCity,
    ocPrice: docCost,
    onlineConsult: docOc,
    hvPrice: docCost,
    hosVisit: docHv,
    img: docImg,
    hindi: docHin,
    english :docEng,
    apollo: docApollo,
    otherC: docOther
  };

  fetch('http://localhost:9000/adddoc', {
    method: 'POST',
    mode: "cors",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(docObj),
  })
  .then( res => res.json()
  .then(data => console.log('Doctor Added:', data))
  .catch(err => console.error("Error: ", err)));

  docForm.style.display = "none";
};

const toggleAddDocPage = () => {
  const docForm = document.querySelector("#addDocForm");

  if(docForm.style.display == "none" ||  docForm.style.display == ""){
    docForm.style.display = "block";
  } else {
    docForm.style.display = "none";
  }
};

const fetchDoc = async () => {
  const HV = document.querySelector("#HV").checked;
  const OC = document.querySelector("#OC").checked
  const y5 = document.querySelector("#fivey").checked;
  const y60 = document.querySelector("#sixtyy").checked;
  const y11 = document.querySelector("#sixteeny").checked;
  const y16 = document.querySelector("#sixteenmorey").checked;
  const onetofive = document.querySelector("#onetofive").checked;
  const fivetoten = document.querySelector("#fivetoten").checked;
  const ten = document.querySelector("#ten").checked;
  const eng= document.querySelector("#eng").checked;
  const hin = document.querySelector("#hin").checked;
  const AH = document.querySelector("#AH").checked;
  const oC = document.querySelector("#oClinic").checked;

  let filters = {
  };

  if(HV == true) filters.hv = true;
  if(OC == true) filters.oc = true;
  if(eng == true) filters.eng = true;
  if(hin == true) filters.hin = true;
  if(oC == true) filters.otherC = true, filters.apollo = false;
  if(AH == true) filters.apollo = true, filters.otherC = false;
  if(y5 == true) filters.exp = 5;
  if(y60 == true) filters.exp = 10;
  if(y11 == true) filters.exp = 16;
  if(y16 == true) filters.exp = 17 ;
  if(onetofive == true) filters.fees = 500;
  if(fivetoten == true) filters.fees = 1000;
  if(ten == true) filters.fees = 5000;
 
  const query = new URLSearchParams(filters).toString();

  const docs = await fetch(`http://localhost:9000/getdoctor?${query}`, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type" : "applicaion/json"
    }
  });

  const response = await docs.json();
  console.log(filters);
  console.log(response);;
};

const leti = () => {
  console.log("LMDAO");
};

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
              <button onClick={toggleAddDocPage}  className={styles.loginButton}>
                  <span>Add Doctor</span>
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
            <div className={styles.showDoc}>
              <button onClick={fetchDoc}>Show Doctors</button>
            </div>
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
                  <input type="checkbox" name="exp" id="fivey" />
                  <label htmlFor="fivey">0-5</label>
                </div>
                <div>
                  <input type="checkbox" name="exp" id="sixtyy" />
                  <label htmlFor="sixtyy">6-10</label>
                </div>
                <div>
                  <input type="checkbox" name="exp" id="sixteeny" />
                  <label htmlFor="sixteeny">11-16</label>
                </div>
                <div>
                  <input type="checkbox" name="exp" id="sixteenmorey" />
                  <label htmlFor="sixteenmorey">16+</label>
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
              </div>
            </div>
            <div className={styles.filterMOD}>
              <h1>Facility</h1>
              <div className={styles.MOD}>
                <div>
                  <input type="checkbox" name="HV" id="AH" />
                  <label htmlFor="AH">Apollo Hospitals</label>
                </div>
                <div>
                  <input type="checkbox" name="OC" id="oClinic" />
                  <label htmlFor="oClinic">Other Clinics</label>
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
      <div className={styles.addDoc} id="addDocForm">
        <h1>Add Doctor</h1>
        <div>
          <input required type="text" placeholder="Name" id="docName"/>
          <input required type="number" placeholder="Years of Experience" id="docExp"/>
        </div>
        <div>
          <input required type="text" placeholder="Degree" id="docDeg"/>
          <input required type="text" placeholder="City" id="docCity"/>
        </div>
        <div>
          <input required type="number" placeholder="Cost of Consultation" id="docCost"/>
          <input required type="text" placeholder="Link of the Image of the Doctor" id="docImg"/>
        </div>
        <div>
          <input required type="text" placeholder="Speciality" id="docSpec"/>
        </div>
        <div className={styles.checkboxes}>
          <label>
            Online Consult
            <input type="checkbox" id="docOc"/>
          </label>
          <label>
            Hospita Visit
            <input type="checkbox" id="docHv"/>
          </label>
        </div>
        <div className={styles.checkboxes}>
        <label>
            Hindi
            <input type="checkbox" id="docHin"/>
          </label>
          <label>
            English
            <input type="checkbox" id="docEng"/>
          </label>
        </div>
        <div className={styles.checkboxes}>
        <label>
            Apollo
            <input type="checkbox" id="docApollo"/>
          </label>
          <label>
            Other Clinic
            <input type="checkbox" id="docOther"/>
          </label>
        </div>
        <div>
          <button onClick={addDoc}>Add Doctor</button>
        </div>
      </div>
    </div>

  );
}