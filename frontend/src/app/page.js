'use client'

import Image from "next/image";
import { Truculenta } from "next/font/google";

const addDoc = () => {
  const docName = document.querySelector("#docName").value;
  const docExp = document.querySelector("#docExp").value;
  const docDeg = document.querySelector("#docDeg").value;
  const docCity = document.querySelector("#docCity").value;
  const docCost = document.querySelector("#docCost").value;
  const docImg = document.querySelector("#docImg").value;
  const docOc = document.querySelector("#docOc").checked;
  const docHv = document.querySelector("#docHv").checked;
  const docHin = document.querySelector("#docHin").checked;
  const docEng = document.querySelector("#docEng").checked;
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
    english: docEng,
    apollo: docApollo,
    otherC: docOther
  };

  fetch('http://localhost:9000/adddoc', {
    method: 'POST',
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(docObj),
  })
    .then(res => res.json()
      .then(data => console.log('Doctor Added:', data))
      .catch(err => console.error("Error: ", err)));

  docForm.style.display = "none";
};

const toggleAddDocPage = () => {
  const docForm = document.querySelector("#addDocForm");

  if (docForm.style.display == "none" || docForm.style.display == "") {
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
  const eng = document.querySelector("#eng").checked;
  const hin = document.querySelector("#hin").checked;
  const AH = document.querySelector("#AH").checked;
  const oC = document.querySelector("#oClinic").checked;

  let filters = {
  };

  if (HV == true) filters.hv = true;
  if (OC == true) filters.oc = true;
  if (eng == true) filters.eng = true;
  if (hin == true) filters.hin = true;
  if (oC == true) filters.otherC = true, filters.apollo = false;
  if (AH == true) filters.apollo = true, filters.otherC = false;
  if (y5 == true) filters.exp = 5;
  if (y60 == true) filters.exp = 10;
  if (y11 == true) filters.exp = 16;
  if (y16 == true) filters.exp = 17;
  if (onetofive == true) filters.fees = 500;
  if (fivetoten == true) filters.fees = 1000;
  if (ten == true) filters.fees = 5000;

  const query = new URLSearchParams(filters).toString();

  const docs = await fetch(`http://localhost:9000/getdoctor?${query}`, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "applicaion/json"
    }
  });

  const response = await docs.json();
  console.log(response);

  const container = document.getElementById('doctorContainer');
  const childDivs = container.querySelectorAll('div');

  childDivs.forEach(div => div.remove());

  // for(let i = 0; i < response.doctors.length; i++) {
  //   const doctor = document.createElement('div');
  //   doctor.className = "doctor";

  //   const div = document.createElement('div');
  //   const img = document.createElement('img');

  //   const div2 = document.createElement('div');
  //   const h1 = document.createElement('h1');
  //   const span = document.createElement('span');
  //   span.className = "pos";
  //   const span2 = document.createElement('span');
  //   span2.className = "exp";
  //   const span3 = document.createElement('span');
  //   span3.className = "place";
  //   const span4 = document.createElement('span');
  //   span4.className = hos;

  //   const div3 = document.createElement('div');
  //   const section = document.createElement('section');
  //   section.className = "price";
  //   const section2 = document.createElement('section');
  //   const button = document.createElement('button');
  //   const span5 = document.createElement('span');
  //   span5.className = "co";
  //   const span6 = document.createElement('span');
  //   span6.className = "avail";

  //   h1.innerText = response.doctors[i];
  // };
};

const leti = () => {
  console.log("LMDAO");
};

export default function Home() {
  return (
    <div className='container'>
      <div className='header'>
        <div className='navbar'>
          <Image src="/apollo247.svg" width={70} height={48} alt="Apollo24x7" />
          <div className='locationContainer'>
            <Image className='locationIcon' src="/location.svg" width={24} height={24} alt="Location" />
            <div>
              <h5 className='SL'>Select Location</h5>
              <div className='SAC'>
                <h4 className='SA'>Select Address</h4>
                <Image src="/dropdown.svg" width={20} height={20} alt="dropdown" />
              </div>
            </div>
          </div>
          <div className='searchBar'>
            <div className='searchInputBar'>
              <Image className='searchIcon' src="/search.svg" width={16} height={16} alt="search" />
              <input className='searchInput' type="text" placeholder="Search Doctors, Speacialities, Conditions etc." />
            </div>
          </div>
          <div className='loginBtn'>
            <button onClick={toggleAddDocPage} className='loginButton'>
              <span>Add Doctor</span>
              <Image src="/user.svg" alt="user" width={26} height={26} />
            </button>
          </div>
        </div>
        <div className='separator'></div>
        <div className='links'>
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
      <div className='content'>
        <div className='leftSection'>
          <div className='filters'>
            <div className='filterHeading'>
              <span>
                Filters
              </span>
              <span>
                Clear All
              </span>
            </div>
            <div className='selectedFilter'>
              <div className='SF'>
                Near Me
                <Image src="/close.svg" width={20} height={20} alt="close" />
              </div>
              <div className='SF'>
                0-500
                <Image src="/close.svg" width={20} height={20} alt="close" />
              </div>
              <div className='SF'>
                11-16
                <Image src="/close.svg" width={20} height={20} alt="close" />
              </div>
              <div className='SF'>
                6-10
                <Image src="/close.svg" width={20} height={20} alt="close" />
              </div>
            </div>
          </div>
          <div className='filterOptions'>
            <div className='showDoc'>
              <button onClick={fetchDoc}>Show Doctors</button>
            </div>
            <div className='filterMOD'>
              <h1>Mode of Consult</h1>
              <div className='MOD'>
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
            <div className='filterMOD'>
              <h1>Experience (In Years)</h1>
              <div className='MOD'>
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
            <div className='filterMOD'>
              <h1>Fees (In Rupees)</h1>
              <div className='MOD'>
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
            <div className='filterMOD'>
              <h1>Language</h1>
              <div className='MOD'>
                <div>
                  <input type="checkbox" name="eng" id="eng" />
                  <label htmlFor="eng">English</label>                </div>
                <div>
                  <input type="checkbox" name="hin" id="hin" />
                  <label htmlFor="hin">Hindi</label>
                </div>
              </div>
            </div>
            <div className='filterMOD'>
              <h1>Facility</h1>
              <div className='MOD'>
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
        <div className='middleSection'>
          <div className='addressLinks'>
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
          <div className="contentHeading">
            <div>
              <h1>Consult General Physicians Online - Internal Medicine Specialists</h1>
              <h3>(763 doctors)</h3>
            </div>
            <div className="dropdownFilter">
              <div>
                <Image src="/sort.svg" width={24} height={24} alt="sort" />
                <span>Relevance</span>
                <Image src="/dropdown.svg" width={12} height={12} alt="dropdown" />
              </div>
            </div>
          </div>
          <div className="doctors" id="doctorContainer">
            <div className="doctor">
              <div>
                <img src="https://images.apollo247.in/doctors/6e145672-2cb8-4695-9a32-f8317c192dfc-1741071710933.jpg?tr=w-74,c-at_max,f-auto,q=80,dpr-2" alt="doctor" />
              </div>
              <div>
                <h1>Dr. D Bhanu Prakash
                  <Image src="/info.svg" width="14px" height="14px" alt="info" />
                </h1>
                <span className="pos">General Practioner</span>
                <span className="exp">10 Years • MBBS, AFIH, Advanced Certificate</span>
                <span className="place">Hyderabad</span>
                <span className="hos">Apollo 24|7 Virtual Clinic - Telangana, Hyderabad</span>
              </div>
              <div>
                <section className="price">
                  ₹1200
                </section>
                <section>
                  <button>
                    <span className="co">Consult Online</span>
                    <span className="avail">Available at 01:40 AM</span>
                  </button>
                </section>
              </div>
            </div>
          <div className="pagination">
            <ul>
              <li>&#60;</li>
              <li className="active">2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>5</li>
              <li>...</li>
              <li>&#62;</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="rightSection">
          <div className="ad">
            <div>
              <Image src="/docs.webp" width={172} height={82} alt="docs" />
            </div>
            <div className="NH">
              Need help consult the right doctor?
            </div>
            <div className="call">
              Call +91-8040245807 to book instantly
            </div>
          </div>
        </div>
      <div className="addDoc" id="addDocForm">
        <h1>Add Doctor</h1>
        <div>
          <input required type="text" placeholder="Name" id="docName" />
          <input required type="number" placeholder="Years of Experience" id="docExp" />
        </div>
        <div>
          <input required type="text" placeholder="Degree" id="docDeg" />
          <input required type="text" placeholder="City" id="docCity" />
        </div>
        <div>
          <input required type="number" placeholder="Cost of Consultation" id="docCost" />
          <input required type="text" placeholder="Link of the Image of the Doctor" id="docImg" />
        </div>
        <div>
          <input required type="text" placeholder="Speciality" id="docSpec" />
        </div>
        <div className="checkboxes">
          <label>
            Online Consult
            <input type="checkbox" id="docOc" />
          </label>
          <label>
            Hospita Visit
            <input type="checkbox" id="docHv" />
          </label>
        </div>
        <div className="checkboxes">
          <label>
            Hindi
            <input type="checkbox" id="docHin" />
          </label>
          <label>
            English
            <input type="checkbox" id="docEng" />
          </label>
        </div>
        <div className="checkboxes">
          <label>
            Apollo
            <input type="checkbox" id="docApollo" />
          </label>
          <label>
            Other Clinic
            <input type="checkbox" id="docOther" />
          </label>
        </div>
        <div>
          <button onClick={addDoc}>Add Doctor</button>
        </div>
      </div>
    </div>
  </div>
  );
}