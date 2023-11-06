import { Box, Button } from "@mui/material";
import SupplierCard from "./SupplierCard";
import { suppliers } from "../../data/json";

function SupplierList() {
  return (
    <Box sx={{ marginTop: "50px", marginLeft: "100px"}}>
      <Button sx={{ marginBottom: "20px" }}>Supplier List V1</Button>
      {suppliers.map((suppliers, index) => (
        <SupplierCard
          sx={{}}
          key={index}
          name={suppliers.name}
          vat={suppliers.vat}
          date={suppliers.date}
          country={suppliers.country}
          id={suppliers.id}
        />
      ))}
    </Box>
  );
}

export default SupplierList;
