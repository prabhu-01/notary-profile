import React, { useEffect, useState } from 'react';
import { fetchCustomerDetails } from '../services/api';
import './Profile.css';
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const Loader = () => (
  <div className="loader-container">
    <div className="spinner"></div>
    <p>Loading...</p>
  </div>
);
const Profile = () => {
  const [profileData, setProfileData] = useState(null);
  const [expanded, setExpanded] = useState({});
  const [allCollapsed, setAllCollapsed] = useState(true);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const data = await fetchCustomerDetails('nandha');
        setProfileData(data);

        // Dynamically initialize `expanded` state based on available sections
        const initialExpandedState = {
          nameAndCompany: true,
          billing: true,
          shipping: true,
          pricingInformation: true,
          spokenLanguages: true,
          websites: true,
          customFields: true,
          phoneNumbers: true,
          emailAddresses: true,
          documentLinks: true,
          stateLicenses: true,
          insurances: true,
          backgroundChecks: true,
          capabilities: true,
          availability: true,
        };

        // Set the dynamically created state
        setExpanded(initialExpandedState);
      } catch (error) {
        console.error('Failed to load profile data:', error);
      }
    };

    loadProfile();
  }, []);

  const toggleCard = (key) => {
    setExpanded((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const toggleAllCards = () => {
    setAllCollapsed(!allCollapsed);
    setExpanded((prev) => {
      const newState = {};
      Object.keys(prev).forEach((key) => {
        newState[key] = !allCollapsed;
      });
      return newState;
    });
  };

  if (!profileData) {
    return <Loader />;
  }

  const { details, profileInfo } = profileData;

  return (
    <div className="container mx-auto p-4 maincontainer">
      {/* Profile Header Card */}
      <div className="profile-header-card">
        <div className='mainprofile'>
          <img
            src={profileInfo.imageURL}
            alt={profileInfo.name}
            className="w-50 h-50 rounded-full border-4 border-orange-500"
          />
          <div className="profile-info">
            <h1 style={{ display: 'flex', alignItems: 'center' , color: '#4A4A4A'}}>{profileInfo.name} &nbsp; &nbsp; <div className='promember'><MdOutlineWorkspacePremium size={15} />PRO</div></h1>
            <p style={{ color: '#8b8c89'}}>{profileInfo.bio}</p>
          </div>
        </div>
        <div className='extra-info'>
          <p>Zip codes: 94117, 94114, 94102, 94103</p>
          <p>Pro member until: 08/12/2024</p>
          <p>Membership status: Active</p>
          <p>ID: 12345</p>
        </div>
      </div>
      <div className='sendemail'>
        <h2 style={{ marginTop: '0' , color: '#333333'}}>Send an Email</h2>
        <div className='formsection'>
          <div className='form'>
            <input type="text" placeholder="Name"></input>
            <input type="text" placeholder="Your Email"></input>
          </div>
          <div className='form'>
            <input type="text" className="message" placeholder="Your Message" size={50} height={50}></input>
          </div>
          <div className='send'>
            <button>Send</button>
          </div>
        </div>
      </div>
      <div className="collapse-all">
        <button onClick={toggleAllCards} className="collapse-button">
          {!allCollapsed ? "Expand All" : "Collapse All"}
        </button>
      </div>
      <div className='sidebyside'>
        <div className='oneside' style={{ width: "25vw" }}>
          <div className="card-section">
            <div className="card-header">
              <h2>Name & Company</h2>
              <button onClick={() => toggleCard('nameAndCompany')} className="collapse-icon">
                {expanded.nameAndCompany ? <FiChevronUp /> : <FiChevronDown />}
              </button>
            </div>
            {expanded.nameAndCompany && (
              <div className="card">
                <div className="cardleft">
                  <p>Name:</p>
                  <p>Company Name:</p>
                  <p>In Business Since:</p>
                </div>
                <div className="cardright">
                  <p>{profileInfo.name}</p>
                  <p>Notary Cafe</p>
                  <p>01/17/2006</p>
                </div>
              </div>
            )}
          </div>


          <div className="card-section">
            <div className="card-header">
              <h2>Billing</h2>
              <button onClick={() => toggleCard('billing')} className="collapse-icon">
                {expanded.billing ? <FiChevronUp /> : <FiChevronDown />}
              </button>
            </div>
            {expanded.billing && (
              <>
                <div className="preferred" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '0.5rem' }}>
                  <p style={{ fontSize: '0.7rem', margin: '0' }}>Preferred</p>
                  <input type="checkbox" checked></input>
                </div>
                <div className='card'>
                  <div className='cardleft'>
                    <p>Address 1:</p>
                    <p>Address 2:</p>
                    <p>City:</p>
                    <p>Zip:</p>
                  </div>
                  <div className='cardright'>
                    <p>{details.billingAddress.address1}</p>
                    <p><br></br></p>
                    <p>{details.billingAddress.city}</p>
                    <p>{details.billingAddress.zip}</p>
                  </div>
                </div>
              </>
            )
            }
          </div>

          <div className="card-section">
            <div className="card-header">
              <h2>Shipping</h2>
              <button onClick={() => toggleCard('shipping')} className="collapse-icon">
                {expanded.shipping ? <FiChevronUp /> : <FiChevronDown />}
              </button>
            </div>
            {expanded.shipping && (
              <>
                <div className="preferred" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '0.5rem' }}>
                  <p style={{ fontSize: '0.7rem', margin: '0' }}>Same as Billing</p>
                  <input type="checkbox"></input>
                  <p style={{ fontSize: '0.7rem', margin: '0' }}> Preferred</p>
                  <input type="checkbox" checked></input>
                </div>
                <div className='card'>
                  <div className='cardleft'>
                    <p>Address 1:</p>
                    <p>Address 2:</p>
                    <p>City:</p>
                    <p>Zip:</p>
                  </div>
                  <div className='cardright'>
                    <p>{details.shippingAddress.address1}</p>
                    <p><br></br></p>
                    <p>{details.shippingAddress.city}</p>
                    <p>{details.shippingAddress.zip}</p>
                  </div>
                </div>
              </>)}
          </div>

          <div className="card-section">
            <div className="card-header">
              <h2>Pricing Information</h2>
              <button onClick={() => toggleCard('pricingInformation')} className="collapse-icon">
                {expanded.pricingInformation ? <FiChevronUp /> : <FiChevronDown />}
              </button>
            </div>
            {expanded.pricingInformation && (<>
              <div className="card">
                <div className="cardleft">
                  <p style={{ marginBottom: '20px' }}>Description</p>
                  <p>1. Single loan refi w/edocs</p>
                  <p>2. Single loan refi w/overnight edocs</p>
                  <p>3. Seller edocs</p>
                  <p>4. Reverse Mortage</p>
                  <p>5. Scan-backs + $25.00</p>
                  <p>6. Reverse Mortage w/edocs</p>
                  <p>7. HELOC w/edocs</p>
                </div>
                <div className="cardright">
                  <p style={{ marginBottom: '20px' }}>Amount</p>
                  <p>$125.00</p>
                  <p>$100.00</p>
                  <p>$100.00</p>
                  <p>$150.00</p>
                  <p>$25.00</p>
                  <p>$150.00</p>
                  <p>$100.00</p>
                </div>

              </div>
              <p style={{ fontSize: '0.7rem', margin: '0' }}>Rates are flexible and vary depending on distance and time of day. <br></br>Rates may be renegotiated at time of hiring.</p>
            </>

            )}

          </div>

          <div className="card-section">
            <div className="card-header">
              <h2>Spoken Languages</h2>
              <button onClick={() => toggleCard('spokenLanguages')} className="collapse-icon">
                {expanded.spokenLanguages ? <FiChevronUp /> : <FiChevronDown />}
              </button>
            </div>
            {expanded.spokenLanguages && (
              <div className="card">
                {details.spokenLanguages.map((language, index) => (
                  <p style={{ margin: '0' }} key={index}>{language}</p>
                ))}
              </div>
            )}
          </div>

          <div className="card-section">
            <div className="card-header">
              <h2>Websites</h2>
              <button onClick={() => toggleCard('websites')} className="collapse-icon">
                {expanded.websites ? <FiChevronUp /> : <FiChevronDown />}
              </button>
            </div>
            {expanded.websites && (
              <div className="card">
                {details.websites.map((website, index) => (
                  <p style={{ margin: '0' }} key={index}>
                    {website}
                  </p>
                ))}
              </div>
            )}
          </div>

          <div className="card-section">
            <div className="card-header">
              <h2>Custom Fields</h2>
              <button onClick={() => toggleCard('customFields')} className="collapse-icon">
                {expanded.customFields ? <FiChevronUp /> : <FiChevronDown />}
              </button>
            </div>
            {expanded.customFields && (
              <div>
                {Object.entries(details.customFields).map(([key, value], index) => (
                  <div key={index} className="custom-field-item">
                    <p>{key}: &nbsp; {value}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>


        <div className='oneside' style={{ width: "32vw" }}>
          <div className="card-section">
            <div className="card-header">
              <h2>Phone Numbers</h2>
              <button onClick={() => toggleCard('phoneNumbers')} className="collapse-icon">
                {expanded.phoneNumbers ? <FiChevronUp /> : <FiChevronDown />}
              </button>
            </div>
            {expanded.phoneNumbers && (
              <div className="card">
                <div className="cardleft">
                  <p>Type</p>
                  <p>Work</p>
                  <p>Home</p>
                  <p>Mobile</p>
                  <p>Alternate</p>
                </div>
                <div className="cardright">
                  <p>Number</p>
                  <p>415-123-4567</p>
                  <p>415-123-4567</p>
                  <p>415-123-4567</p>
                  <p>415-123-4567</p>
                </div>
                <div className="cardright">
                  <p>Ext.</p>
                </div>
                <div className="cardright">
                  <p>Pref.</p>
                  <input type="checkbox"></input>
                  <input type="checkbox" checked></input>
                  <input type="checkbox"></input>
                  <input type="checkbox"></input>
                </div>
                <div className="cardright">
                  <p>Text.</p>
                  <input type="checkbox"></input>
                  <input type="checkbox"></input>
                  <input type="checkbox"></input>
                  <input type="checkbox" checked></input>
                </div>
              </div>
            )}
          </div>


          <div className="card-section">
            <div className="card-header">
              <h2>Email Addresses</h2>
              <button onClick={() => toggleCard('emailAddresses')} className="collapse-icon">
                {expanded.emailAddresses ? <FiChevronUp /> : <FiChevronDown />}
              </button>
            </div>
            {expanded.emailAddresses && (
              <div className="card">
                <div className="cardleft">
                  <p>Type</p>
                  {details.emailAddresses.map((email, index) => (
                    <p key={index}>{email.type}</p>
                  ))}
                </div>
                <div className="cardright">
                  <p>Address</p>
                  {details.emailAddresses.map((email, index) => (
                    <p style={{ margin: '0' }} key={index}>
                      {email._id}
                    </p>
                  ))}
                </div>
                <div className="cardright">
                  <p>Preferred</p>
                  {details.emailAddresses.map((email, index) => (
                    <input
                      key={index}
                      type="checkbox"
                      checked={email.preferred}
                      style={{ margin: '0', position: 'relative', top: '-5px' }}
                      readOnly
                    />
                  ))}
                </div>
              </div>
            )}
          </div>


          <div className="card-section">
            <div className="card-header">
              <h2>Document Links</h2>
              <button onClick={() => toggleCard('documentLinks')} className="collapse-icon">
                {expanded.documentLinks ? <FiChevronUp /> : <FiChevronDown />}
              </button>
            </div>
            {expanded.documentLinks && (
              <div className="card">
                <div className="cardleft">
                  <p>Type</p>
                  {details.documentLinks.map((document, index) => (
                    <p key={index}>{document.documentType}</p>
                  ))}
                </div>
                <div className="cardright">
                  <p>URL</p>
                  {details.documentLinks.map((document, index) => (
                    <p
                      key={index}
                      style={{
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        width: '100px',
                      }}
                    >
                      {document.url}
                    </p>
                  ))}
                </div>
                <div className="cardright">
                  <p>Description</p>
                  {details.documentLinks.map((document, index) => (
                    <p key={index}>{document.description}</p>
                  ))}
                </div>
              </div>
            )}
          </div>


          <div className="card-section">
            <div className="card-header">
              <h2>State Licenses</h2>
              <button onClick={() => toggleCard('stateLicenses')} className="collapse-icon">
                {expanded.stateLicenses ? <FiChevronUp /> : <FiChevronDown />}
              </button>
            </div>
            {expanded.stateLicenses && (
              <div className="card">
                <div className="cardleft">
                  <p>State</p>
                  {details.stateLicenses.map((document, index) => (
                    <p key={index}>{document.state}</p>
                  ))}
                </div>
                <div className="cardright">
                  <p>Licence No.</p>
                  {details.stateLicenses.map((document, index) => (
                    <p key={index}>{document.licenseNumber}</p>
                  ))}
                </div>
                <div className="cardright">
                  <p>Expiration Date</p>
                  {details.stateLicenses.map((document, index) => (
                    <p key={index}>
                      {new Date(document.expirationDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>


          <div className="card-section">
            <div className="card-header">
              <h2>Insurances</h2>
              <button onClick={() => toggleCard('insurances')} className="collapse-icon">
                {expanded.insurances ? <FiChevronUp /> : <FiChevronDown />}
              </button>
            </div>
            {expanded.insurances && (
              <div className="card">
                <div className="cardleft">
                  <p>Carrier</p>
                  {details.insurances.map((document, index) => (
                    <p key={index}>{document.carrier}</p>
                  ))}
                </div>
                <div className="cardright">
                  <p>Amount</p>
                  {details.insurances.map((document, index) => (
                    <p key={index}>{document.amount}</p>
                  ))}
                </div>
              </div>
            )}
          </div>


          <div className="card-section">
            <div className="card-header">
              <h2>Background Checks</h2>
              <button onClick={() => toggleCard('backgroundChecks')} className="collapse-icon">
                {expanded.backgroundChecks ? <FiChevronUp /> : <FiChevronDown />}
              </button>
            </div>
            {expanded.backgroundChecks && (
              <div className="card">
                <div className="cardleft">
                  <p>Provider</p>
                  {details.backgroundChecks.map((document, index) => (
                    <p key={index}>{document.provider}</p>
                  ))}
                </div>
                <div className="cardright">
                  <p>Conducted</p>
                  {details.backgroundChecks.map((document, index) => (
                    <p key={index}>
                      {new Date(document.conductedDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                  ))}
                </div>
                <div className="cardright">
                  <p>Expiration</p>
                  {details.backgroundChecks.map((document, index) => (
                    <p key={index}>
                      {new Date(document.expirationDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                  ))}
                </div>
                <div className="cardright">
                  <p>Ref. No.</p>
                  {details.backgroundChecks.map((document, index) => (
                    <p key={index}>{document.referenceNumber}</p>
                  ))}
                </div>
              </div>
            )}
          </div>


          <div className="card-section">
            <div className="card-header">
              <h2>Capabilities</h2>
              <button onClick={() => toggleCard('capabilities')} className="collapse-icon">
                {expanded.capabilities ? <FiChevronUp /> : <FiChevronDown />}
              </button>
            </div>
            {expanded.capabilities && (<>
              <div className="card">
                <div className="capabilities-grid">
                  {Object.entries(details.capabilities).map(([key, value], index) => (
                    <label key={index} className="capability-item">
                      <input type="checkbox" checked={value} readOnly />
                      <span>{key}</span>
                    </label>
                  ))}
                </div>
              </div>
              <p style={{ fontSize: '0.7rem', marginBottom: '0', marginTop: '1rem' }}>
                Two HP Dual tray laser printers and scanners.
              </p>
            </>
            )}
          </div>


          <div className="card-section">
            <div className="card-header">
              <h2>Availability</h2>
              <button onClick={() => toggleCard('availability')} className="collapse-icon">
                {expanded.availability ? <FiChevronUp /> : <FiChevronDown />}
              </button>
            </div>
            {expanded.availability && (<>
              <div className="card">
                <div className="capabilities-grid">
                  {Object.entries(details.availability).map(([key, value], index) => (
                    <label key={index} className="capability-item">
                      <input type="checkbox" checked={value} readOnly />
                      <span>{key}</span>
                    </label>
                  ))}
                </div>
              </div>
              <p style={{ fontSize: '0.7rem', marginBottom: '0' }}>Weekdays Mon-Fri 10AM-6AM</p>
              </>
            )}
          </div>


        </div>
      </div>
    </div>
  );
};

export default Profile;
