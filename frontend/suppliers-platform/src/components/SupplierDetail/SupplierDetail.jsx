import { Box, Typography, TextField, Button, Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import { useState } from "react";

import { helpHttp } from "../../helpers/helpHttp";
import { useData } from "../../data/DataContext";


function SupplierDetail() {
  const { suppliers, setSuppliers } = useData();
  const { id } = useParams();
  const api = helpHttp();
  const selectedSupplier = suppliers.find(
    (supplier) => supplier.id === Number(id)
  );

  if (!selectedSupplier) {
    return <div>Proveedor no encontrado</div>;
  }

  const [editedName, setEditedName] = useState(selectedSupplier.name);
  const [editedNameCommercial, setEditedNameCommercial] = useState(
    selectedSupplier.commercialName
  );
  const [editedVat, setEditedVat] = useState(selectedSupplier.vat);

  const [editedLegalAddress, setEditedLegalAddress] = useState(
    selectedSupplier.legalAddress
  );
  const [editedCity, setEditedCity] = useState(selectedSupplier.city);
  const [editedState, setEditedState] = useState(selectedSupplier.state);
  const [editedCountry, setEditedCountry] = useState(selectedSupplier.country);
  const [editedZip, setEditedZip] = useState(selectedSupplier.zipCode);

  const saveChanges = async () => {
    const url = `http://localhost:5000/suppliers/${id}`;
    const updatedSupplier = {
      name: editedName,
      commercialName: editedNameCommercial,
      vat: editedVat,
      legalAddress: editedLegalAddress,
      city: editedCity,
      state: editedState,
      country: editedCountry,
      zipCode: editedZip,
    };
    const options = {
      body: updatedSupplier,
      headers: { "Content-Type": "application/json" },
    };
    try {
      const data = await api.put(url, options);
      console.log("Proveedor actualizado con éxito:", data);
      setEditedName(data.name);
      setEditedNameCommercial(data.commercialName);
      setEditedVat(data.vat);
      setEditedLegalAddress(data.legalAddress);
      setEditedCity(data.city);
      setEditedState(data.state);
      setEditedCountry(data.country);
      setEditedZip(data.zipCode);
      setSuppliers(suppliers.map(supplier => supplier.id === Number(id) ? data : supplier))
    } catch (error) {
      console.error("Error al actualizar el proveedor:", error);
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "#eaeaea",
        margin: "100px",
        width: "600px",
        padding: "20px",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography>Company Name / Freelance Name:</Typography>
          <TextField
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
            variant="outlined"
            sx={{
              backgroundColor: "white",
              "& .MuiInputBase-input": { padding: "8px 10px" },
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography>Commercial Name:</Typography>
          <TextField
            value={editedNameCommercial}
            onChange={(e) => setEditedNameCommercial(e.target.value)}
            variant="outlined"
            sx={{
              backgroundColor: "white",
              "& .MuiInputBase-input": { padding: "8px 10px" },
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography>VAT:</Typography>
          <TextField
            value={editedVat}
            onChange={(e) => setEditedVat(e.target.value)}
            variant="outlined"
            sx={{
              backgroundColor: "white",
              "& .MuiInputBase-input": { padding: "8px 10px" },
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography>Legal Address:</Typography>
          <TextField
            value={editedLegalAddress}
            onChange={(e) => setEditedLegalAddress(e.target.value)}
            variant="outlined"
            sx={{
              backgroundColor: "white",
              "& .MuiInputBase-input": { padding: "8px 10px" },
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography>City:</Typography>
          <TextField
            value={editedCity}
            onChange={(e) => setEditedCity(e.target.value)}
            variant="outlined"
            sx={{
              backgroundColor: "white",
              "& .MuiInputBase-input": { padding: "8px 10px" },
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography>State:</Typography>
          <TextField
            value={editedState}
            onChange={(e) => setEditedState(e.target.value)}
            variant="outlined"
            sx={{
              backgroundColor: "white",
              "& .MuiInputBase-input": { padding: "8px 10px" },
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography>Country:</Typography>
          <TextField
            value={editedCountry}
            onChange={(e) => setEditedCountry(e.target.value)}
            variant="outlined"
            sx={{
              backgroundColor: "white",
              "& .MuiInputBase-input": { padding: "8px 10px" },
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography>ZIP Code:</Typography>
          <TextField
            value={editedZip}
            onChange={(e) => setEditedZip(e.target.value)}
            variant="outlined"
            sx={{
              backgroundColor: "white",
              "& .MuiInputBase-input": { padding: "8px 10px" },
            }}
          />
        </Grid>
      </Grid>
      <Button onClick={saveChanges}>Guardar Cambios</Button>
    </Box>
  );
}

export default SupplierDetail;
