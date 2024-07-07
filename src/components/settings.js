import "./settings.css";
import { BrowserRouter, Link, Routes, Route, NavLink } from "react-router-dom";

function Settings() {
  return (
    <div className="settingsdiv">
      <div className="settingsNavBar">
        <h2>Settings</h2>
        <div className="buttonsDiv">
          <div className="settingsNavBarButtons">
            <img className="settingsbtnimg" src="/images/appearence.png"></img>
            <NavLink to="/appearence">
            <button className="SettingsBtn">appearance</button>
            </NavLink> 
          </div>
          <div className="settingsNavBarButtons">
            <img className="settingsbtnimg" src="/images/info.png"></img>
            <NavLink to="/info">
            <button className="SettingsBtn">Personal information</button>
            </NavLink>
          </div>
          <div className="settingsNavBarButtons">
            <img className="settingsbtnimg" src="/images/sec.png"></img>
            <NavLink to="/security">
            <button className="SettingsBtn">Security</button>
            </NavLink>
          </div>
          <div className="settingsNavBarButtons">
            <img className="settingsbtnimg" src="/images/bill.png"></img>
            <NavLink to="/bill">
            <button className="SettingsBtn">Billing information</button>
            </NavLink>
          </div>
          <div className="settingsNavBarButtons">
            <img className="settingsbtnimg" src="/images/messages.png"></img>
            <NavLink to="/messages">
            <button className="SettingsBtn">Messages</button>
            </NavLink>
          </div>
          <div className="settingsNavBarButtons">
            <img className="settingsbtnimg" src="/images/import.png"></img>
            <NavLink to='/dataimport'>
            <button className="SettingsBtn">Data import</button>
            </NavLink>
          </div>
        </div>
      </div>
      
      <div className="settingsInfoDiv">
        <h2> Personal Information</h2>
        <hr className='settingshr'/>
        <div className="infocontent">
          <h3>profile</h3>
          <p style={{ color: "gray" }}>
            {" "}
            This information will be shared to everyone,so be careful!
          </p>
        </div>
        <input className="settingsInput" />
        <input className="settingsInput" />
        <input className="settingsInput" />
        <h3>About</h3>
        <input className="aboutinput" />
        <p style={{ color: "gray" }}>brief description for your profile.</p>
        <h3>Personal Information</h3>
        <p style={{ color: "gray" }}>
          This information will be shared to everyone,so be careful!
        </p>
        <div className="inputDiv">
          <div className="inputdiv_1">
            <div className="inputdiv_div">
              <label>Email Adress</label>
              <input className="settingsInput" />
            </div>
            <div className="inputdiv_div">
              <label>Phone Number</label>
              <input className="settingsInput" />
            </div>
          </div>
          <div className="inputdiv_2">
            <div className="inputdiv_div">
              <label>Country</label>
              <input className="settingsInput" />
            </div>

            <div className="inputdiv_div">
              <label>Language</label>
              <input className="settingsInput" />
            </div>
          </div>
        </div>
        <hr className='settingshr'/>
        <div className='savebuttons'>
            <button className='savebtn'>Save</button>
            <button className='cancelbtn'>Cancel</button>
        </div>
      </div>
    </div>
  );
}
export default Settings;
