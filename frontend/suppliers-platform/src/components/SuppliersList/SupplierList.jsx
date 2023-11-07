import React, { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import SupplierCard from "./SupplierCard";
import { suppliers}  from "../../data/json";

function SupplierList() {
  
  return (
    <Box sx={{ marginTop: "50px", marginLeft: "100px" }}>
      <Button sx={{ marginBottom: "20px" }}>Supplier List V1</Button>
      {suppliers.map((suppliers) => (
        <SupplierCard
          key={suppliers.id} 
          id={suppliers.id}
          name={suppliers.name}
          vat={suppliers.vat}
          date={suppliers.date}
          country={suppliers.country}
        />
      ))}
    </Box>
  );
}

export default SupplierList;
