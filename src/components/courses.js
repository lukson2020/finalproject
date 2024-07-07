import { useState } from "react";
import "./courses.css";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function Courses() {
  
  const [value, setValue] = useState(0);
 

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className="coursesdiv">
      <div className="coursesMain">
        <h1>Course</h1>
        <h2>UI Styleguide With Figma</h2>
        <img src="images/coursesimg.jpg" className="coursesImg" />

        <div className="CoursesSecondDiv">
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
               
              >
                <Tab label="About" />
                <Tab label="Details" />
                <Tab label="Review" />
                <Tab label="Resources" />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <p className="AboutInfoText">
                About this source. action agree absence agreement announcement
                adventure AIDS attract agenda address activate advance assault
                architecture aunt acquit at aquarium application allocation
                appearance affair advocate administration attic
              </p>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              Details
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              Review
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
              Resources
            </CustomTabPanel>
          </Box>
        </div>
      </div>
      <div className="CoursesSecondNavBar">
        <div className="contentDiv">
          <h2>Courses Contnent</h2>
          <Button className="CoursesSecondNavBarBtns" variant="outlined">
            What is UI Design
          </Button>
          <Button className="CoursesSecondNavBarBtns" variant="outlined">
            What is concept
          </Button>
          <Button className="CoursesSecondNavBarBtns" variant="outlined">
            What is Love?
          </Button>
          <Button className="CoursesSecondNavBarBtns" variant="outlined">
            What is Hate?
          </Button>
          <Button className="CoursesSecondNavBarBtns" variant="outlined">
            What is GYM?
          </Button>
        </div>
        <div className="studentsDiv">
          <h2>Student also bought</h2>
          <div className="CoursesSecondNavBarDiv2">
            <img className="coursesSecondNavbarImg" src="images/Art.jpg"></img>
            <div className="infoDiv">
              <p>Complete Web design</p>
              <div className="bestSellerDiv">
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "grey",
                    "&:hover": {
                      backgroundColor: "white",
                      color: "black",
                    },
                  }}
                >
                  BestSeller
                </Button>
                <span style={{ color: "grey" }}>20$</span>
              </div>
            </div>
          </div>
          <div className="CoursesSecondNavBarDiv2">
            <img className="coursesSecondNavbarImg" src="images/Art.jpg"></img>
            <div className="infoDiv">
              <p>Complete Web design</p>
              <div className="bestSellerDiv">
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "grey",
                    "&:hover": {
                      backgroundColor: "white",
                      color: "black",
                    },
                  }}
                >
                  BestSeller
                </Button>
                <span style={{ color: "grey" }}>20$</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Courses;
