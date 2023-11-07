import React, { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import SupplierCard from "./SupplierCard";
import { suppliers as initialSuppliers } from "../../data/json";

function SupplierList() {
  const [suppliers, setSuppliers] = useState([]);

  
  useEffect(() => {
    setSuppliers(initialSuppliers);
  }, []);

  return (
    <Box sx={{ marginTop: "50px", marginLeft: "100px" }}>
      <Button sx={{ marginBottom: "20px" }}>Supplier List V1</Button>
      {suppliers.map((supplier) => (
        <SupplierCard
          key={supplier.id}
          name={supplier.name}
          vat={supplier.vat}
          date={supplier.date}
          country={supplier.country}
        />
      ))}
    </Box>
  );
}

export default SupplierList;
