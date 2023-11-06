import { Box, Button } from "@mui/material";
import SupplierCard from "./SupplierCard";
import { suppliers } from "../../data/json";

function SupplierList() {
  return (
    <Box sx={{ marginTop: "50px", marginLeft: "100px" }}>
      <Button sx={{ marginBottom: "20px" }}>Supplier List V1</Button>
      {suppliers.map((suppliers, index) => (
        <SupplierCard
          sx={{widht:"200px"}}
          key={index}
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
