import React, { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import SupplierCard from "./SupplierCard";



function SupplierList() {
  
  return (
    <Box sx={{ marginTop: "50px", marginLeft: "100px" }}>
      <Button sx={{ marginBottom: "20px" }}>Supplier List V1</Button>
      <Button sx={{ marginBottom: "20px", marginLeft:"400px" }}>New Supplier</Button>
        <SupplierCard/>
    </Box>
  );
}

export default SupplierList;
