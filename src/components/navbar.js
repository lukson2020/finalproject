import { BrowserRouter, Link, Routes, Route, NavLink } from "react-router-dom";
import "./navbar.css";
import Courses from "./courses";
import HomePage from "./homepage";
import Planning from "./planning";
import Statistics from "./statistics";
import Messages from "./messages";
import Settings from "./settings";
function NavBar() {
  return (
    <BrowserRouter>
      <div className="navbardiv">
        <div className="navbarcontent">
          <p>Menu</p>
          <div className="navButtonsDiv">
          <img className='navIcons'src="/images/home.png"/>
          <NavLink to="/">
            {" "}
           <button className="navbtn">OverView</button>{" "}
            </NavLink> 
          </div>

          <div className="navButtonsDiv">
          <img className='navIcons'src="/images/book.png"/>
          <NavLink to="/Courses">
            {" "}
           <button className="navbtn">Courses</button>{" "}
            </NavLink>
          </div>
         
          <div className="navButtonsDiv">
          <img className='navIcons'src="/images/planning.png"/>
          <NavLink to="/Planning">
            {" "}
           <button className="navbtn">Planning</button>{" "}
            </NavLink>
          </div>
         
          <div className="navButtonsDiv">
          <img className='navIcons'src="/images/statistics.png"/>
          <NavLink to="/Statistics">
            {" "}
           <button className="navbtn">Statistics</button>{" "}
            </NavLink>
          </div> 
          <hr style={{ width: "85%" }} />
          <p>Account</p>
          <div className="navButtonsDiv">
          <img className='navIcons'src="/images/messages.png"/>
          <NavLink to="/Messages">
            {" "}
           <button className="navbtn">Messages</button>{" "}
            </NavLink>
          </div>
          <div className="navButtonsDiv">
          <img className='navIcons'src="/images/settings.png"/>
          <NavLink to="/Settings">
            {" "}
           <button className="navbtn">Settings</button>{" "}
            </NavLink>
          </div>
          <div className="inviteDiv">
            <img className='inviteImg'src="/images/invite.png"/>
            <label>Invite Friend</label>
            <button className="invitebtn"> Get a link</button>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/Planning" element={<Planning />} />
        <Route path="/Statistics" element={<Statistics />} />
        <Route path="/Messages" element={<Messages />} />
        <Route path="/Settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}
export default NavBar;
