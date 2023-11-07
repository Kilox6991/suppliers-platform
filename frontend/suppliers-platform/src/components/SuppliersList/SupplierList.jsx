import React, { useState } from "react";
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import SupplierCard from "./SupplierCard";
import { useData } from "../../data/DataContext";
import { helpHttp } from "../../helpers/helpHttp";

function SupplierList() {
  const { suppliers, setSuppliers } = useData();
  const api = helpHttp();
  const [open, setOpen] = useState(false);
  const [newSupplier, setNewSupplier] = useState({});

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setNewSupplier({
      ...newSupplier,
      [event.target.name]: event.target.value,
    });
  };

  const addSupplier = async () => {
    const url = `http://localhost:5000/suppliers`;
    const lastSupplierId = suppliers[suppliers.length - 1]?.id || 0;
    const newSupplierWithId = { ...newSupplier, id: lastSupplierId + 1 };
    const options = {
      body: newSupplierWithId,
      headers: { "Content-Type": "application/json" },
    };
    setOpen(false);
    try {
      const data = await api.post(url, options);
      console.log("Proveedor añadido con éxito:", data);
      setSuppliers(prevSuppliers => [...prevSuppliers, data]);
      handleClose();
    } catch (error) {
      console.error("Error al añadir el proveedor:", error);
    }
  };

  return (
    <Box sx={{ marginTop: "50px", marginLeft: "100px" }}>
      <Button sx={{ marginBottom: "20px" }}>Supplier List V1</Button>
      <Button sx={{ marginBottom: "20px", marginLeft:"400px" }} onClick={handleOpen}>New Supplier</Button>
      <SupplierCard/>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Supplier</DialogTitle>
        <DialogContent>
          <TextField name="name" label="Name" onChange={handleChange} fullWidth />
          <TextField name="commercialName" label="Commercial Name" onChange={handleChange} fullWidth />
          <TextField name="vat" label="VAT" onChange={handleChange} fullWidth />
          <TextField name="legalAddress" label="Legal Address" onChange={handleChange} fullWidth />
          <TextField name="city" label="City" onChange={handleChange} fullWidth />
          <TextField name="state" label="State" onChange={handleChange} fullWidth />
          <TextField name="country" label="Country" onChange={handleChange} fullWidth />
          <TextField name="ZipCode" label="Zip Code" onChange={handleChange} fullWidth />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={addSupplier}>Add</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default SupplierList;