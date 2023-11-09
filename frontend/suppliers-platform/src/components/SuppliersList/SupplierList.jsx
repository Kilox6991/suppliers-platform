import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Table,
  TextField,
  Typography,
} from "@mui/material";
import SupplierCard from "./SupplierCard";
import { useData } from "../../data/DataContext";
import { helpHttp } from "../../helpers/helpHttp";

function SupplierList() {
  const { suppliers: inicialSuppliers, setNewlyAddedSupplier } = useData();
  const [suppliers, setSuppliers] = useState([]);
  const [open, setOpen] = useState(false);
  const [newSupplier, setNewSupplier] = useState({});
  const api = helpHttp();

  useEffect(() => {
    setSuppliers(inicialSuppliers);
  }, [inicialSuppliers]);

  const updateSuppliersList = (newSuppliers) => {
    setSuppliers(newSuppliers);
  };

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

  const addSupplierAndUpdateList = async () => {
    const url = `http://localhost:5000/suppliers`;
    const lastSupplierId = suppliers[suppliers.length - 1]?.id || 0;
    const newSupplierWithId = { ...newSupplier, id: lastSupplierId + 1 };
    const options = {
      body: newSupplierWithId,
      headers: { "Content-Type": "application/json" },
    };
    setOpen(false);
    try {
      await api.post(url, options);
      setSuppliers([...suppliers, newSupplierWithId]);
      setNewlyAddedSupplier(newSupplierWithId);
      console.log("Recurso creado con éxito:", newSupplierWithId)
      handleClose();
    } catch (error) {
      console.error("Error al añadir el proveedor:", error);
    }
  };
  

  const handleDelete = async (id) => {
    const url = `http://localhost:5000/suppliers/${id}`;
    const options = {
      method: "DELETE",
    };
    try {
      const data = await api.del(url, options);
      console.log("Recurso eliminado con éxito:", data);
      updateSuppliersList(suppliers.filter((supplier) => supplier.id !== id));
    } catch (error) {
      console.error("Error al eliminar el recurso:", error);
    }
  };

  return (
    <Box
      sx={{
        marginTop: "50px",
        marginLeft: "100px",
        color: "#333",
        fontFamily: "Arial",
      }}
    >
      <Typography
        sx={{ marginBottom: "20px", fontSize: "24px", fontWeight: "bold" }}
      >
        Supplier List
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <Typography sx={{ fontSize: "18px" }}>
          There are {suppliers.length} suppliers
        </Typography>
        <Button
          sx={{
            marginBottom: "20px",
            marginRight: "50px",
            backgroundColor: "#007BFF",
            color: "#fff",
            padding: "10px 20px",
            "&:hover": {
              backgroundColor: "#A1CEEB",
            },
          }}
          onClick={handleOpen}
        >
          New Supplier
        </Button>
      </Box>
      {suppliers.map((supplier) => (
        <SupplierCard
          key={supplier.id}
          supplier={supplier}
          updateSuppliersList={updateSuppliersList}
          handleDelete={handleDelete}
        />
      ))}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Supplier</DialogTitle>
        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            width: "500px",
          }}
        >
          <TextField
            name="name"
            label="Name"
            onChange={handleChange}
            fullWidth
          />
          <TextField
            name="commercialName"
            label="Commercial Name"
            onChange={handleChange}
            fullWidth
          />
          <TextField name="vat" label="VAT" onChange={handleChange} fullWidth />
          <TextField
            name="legalAddress"
            label="Legal Address"
            onChange={handleChange}
            fullWidth
          />
          <TextField
            name="city"
            label="City"
            onChange={handleChange}
            fullWidth
          />
          <TextField
            name="state"
            label="State"
            onChange={handleChange}
            fullWidth
          />
          <TextField
            name="country"
            label="Country"
            onChange={handleChange}
            fullWidth
          />
          <TextField
            name="zipCode"
            label="Zip Code"
            onChange={handleChange}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{ color: "black" }}>
            Cancel
          </Button>
          <Button onClick={addSupplierAndUpdateList} sx={{ color: "black" }}>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default SupplierList;
