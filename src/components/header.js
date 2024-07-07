import "./header.css";

function Header() {
  return (
    <div className="headerDiv">
      <div className="logoDiv">
        {" "}
        <img
          className="navbarImg"
          src="https://cryptologos.cc/logos/omni-omni-logo.png?v=032"
        ></img>
        <h1>JAP.</h1>
      </div>
      <div className="searchdiv">
        <img  className='searchicon'src="images/search.png"/>
        <input placeholder="type here..." className="searchbar"></input>
        </div>
      
      <div className="headerbtns">
      <img className='headerIcons'src="/images/comment.png"></img>
      <img className='headerIcons' src="/images/bell.png"></img>
      <img  className="userIcon" alt="Luka Kurdadze" src="/images/userimg.jpg"/> 
      </div>
    </div>
  );
}
export default Header;
