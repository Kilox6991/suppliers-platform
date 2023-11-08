import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SupplierDetail from './SupplierDetail/SupplierDetail';

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
      {value === index && (
        <Box sx={{marginLeft:"10px"}}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100hv"}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{ color:"black"}} TabIndicatorProps={{ style: { backgroundColor: "black" } }}>
          <Tab label="General Data" {...a11yProps(0)} sx={{
            "&:hover": {
              backgroundColor: "#FFF7D7",
            },"&.Mui-selected": {
              color: "black",
            },
          }}/>
          <Tab label="Company Data" {...a11yProps(1)} sx={{
            "&:hover": {
              backgroundColor: "#FFF7D7",
            },"&.Mui-selected": {
              color: "black",
            },
          }} />
          <Tab label="Create Documents" {...a11yProps(2)} sx={{
            "&:hover": {
              backgroundColor: "#FFF7D7",
            },"&.Mui-selected": {
              color: "black",
            },
          }}/>
          <Tab label="Contracts" {...a11yProps(3)} sx={{
            "&:hover": {
              backgroundColor: "#FFF7D7",
            },"&.Mui-selected": {
              color: "black",
            },
          }}/>
          <Tab label="Contracts CM" {...a11yProps(4)} sx={{
            "&:hover": {
              backgroundColor: "#FFF7D7",
            },"&.Mui-selected": {
              color: "black",
            },
          }}/>
          <Tab label="Contracts CEO" {...a11yProps(5)} sx={{
            "&:hover": {
              backgroundColor: "#FFF7D7",
            },"&.Mui-selected": {
              color: "black",
            },
          }}/>
          <Tab label="SFR Data" {...a11yProps(6)} sx={{
            "&:hover": {
              backgroundColor: "#FFF7D7",
            },"&.Mui-selected": {
              color: "black",
            },
          }}/>
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        General Data
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <SupplierDetail></SupplierDetail>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Create Documents
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        Contracts
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        Contracts CM
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        Contracts CEO
      </CustomTabPanel>
      <CustomTabPanel value={value} index={6}>
        SFR Data
      </CustomTabPanel>
    </Box>
  );
}