import React from "react";
import { Button, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import '@fontsource/roboto';

function SupplierCard({ supplier, updateSuppliersList, handleDelete }) {
  return (
    <Box
      key={supplier.id}
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "20px",
      }}
    >
      <Link
        to={`/supplier/${supplier.id}`}
        style={{ textDecoration: "none" }}
      >
        <Button
          sx={{
            display: "flex",
            gap: "50px",
            justifyContent: "flex-start",
            backgroundColor: "#f5f5f5",
            width: "700px",
            height: "80px",
            border: "1px solid #ddd",
            borderRadius: "4px",
            padding: "0px 20px",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.15)",
          }}
        >
          <Typography variant="h6" sx={{ color: "#333", fontWeight: "bold", flexBasis: "30%" }}>
        {supplier.name}
      </Typography>
      <Typography variant="body1" sx={{ color: "#555"}}>{supplier.vat}
      </Typography>
      <Typography variant="body1" sx={{ color: "#555"}}>
      {supplier.date}
      </Typography>
      <Typography variant="body1" sx={{ color: "#555" }}>
      {supplier.country}
      </Typography>
        </Button>
      </Link>
      <Button
  onClick={() => handleDelete(supplier.id)}
  sx={{
    marginLeft: "10px",
    backgroundColor: "#f5f5f5",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.15)",
  }}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
    width={40}
    height={40}
    color="grey"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
    />
  </svg>
</Button>
</Box>
);
}

export default SupplierCard;