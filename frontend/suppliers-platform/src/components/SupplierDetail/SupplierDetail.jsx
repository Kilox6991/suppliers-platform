import { Box, Typography, TextField, Button, Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { suppliers } from "../../data/json";

function SupplierDetail() {
  const { id } = useParams();

  const selectedSupplier = suppliers.find(
    (supplier) => supplier.id === Number(id)
  );

  if (!selectedSupplier) {
    return <div>Proveedor no encontrado</div>;
  }

  
  const [editedName, setEditedName] = useState(selectedSupplier.name);
  const [editedNameCommercial, setEditedNameCommercial] = useState(selectedSupplier.commercialName);
  const [editedVat, setEditedVat] = useState(selectedSupplier.vat);

  const [editedLegalAddress, setEditedLegalAddress] = useState(selectedSupplier.legalAddress);
  const [editedCity, setEditedCity] = useState(selectedSupplier.city);
  const [editedState, setEditedState] = useState(selectedSupplier.state);
  const [editedCountry, setEditedCountry] = useState(selectedSupplier.country);
  const [editedZip, setEditedZip] = useState(selectedSupplier.zipCode);
  
  const saveChanges = () => {
    
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
          sx={{ backgroundColor: "white", "& .MuiInputBase-input": { padding: "8px 10px" } }}
        />
      </Grid>
      <Grid item xs={6}>
        <Typography>Commercial Name:</Typography>
        <TextField
          value={editedNameCommercial}
          onChange={(e) => setEditedNameCommercial(e.target.value)}
          variant="outlined"
          sx={{ backgroundColor: "white", "& .MuiInputBase-input": { padding: "8px 10px" } }}
        />
      </Grid>
      <Grid item xs={6}>
        <Typography>VAT:</Typography>
        <TextField
          value={editedVat}
          onChange={(e) => setEditedVat(e.target.value)}
          variant="outlined"
          sx={{ backgroundColor: "white", "& .MuiInputBase-input": { padding: "8px 10px" } }}
        />
      </Grid>
      <Grid item xs={6}>
        <Typography>Legal Address:</Typography>
        <TextField
          value={editedLegalAddress}
          onChange={(e) => setEditedLegalAddress(e.target.value)}
          variant="outlined"
          sx={{ backgroundColor: "white", "& .MuiInputBase-input": { padding: "8px 10px" } }}
        />
      </Grid>
      <Grid item xs={6}>
        <Typography>City:</Typography>
        <TextField
          value={editedCity}
          onChange={(e) => setEditedCity(e.target.value)}
          variant="outlined"
          sx={{ backgroundColor: "white", "& .MuiInputBase-input": { padding: "8px 10px" } }}
        />
      </Grid>
      <Grid item xs={6}>
        <Typography>State:</Typography>
        <TextField
          value={editedState}
          onChange={(e) => setEditedState(e.target.value)}
          variant="outlined"
          sx={{ backgroundColor: "white", "& .MuiInputBase-input": { padding: "8px 10px" } }}
        />
      </Grid>
      <Grid item xs={6}>
        <Typography>Country:</Typography>
        <TextField
          value={editedCountry}
          onChange={(e) => setEditedCountry(e.target.value)}
          variant="outlined"
          sx={{ backgroundColor: "white", "& .MuiInputBase-input": { padding: "8px 10px" } }}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography>ZIP Code:</Typography>
        <TextField
          value={editedZip}
          onChange={(e) => setEditedZip(e.target.value)}
          variant="outlined"
          sx={{ backgroundColor: "white", "& .MuiInputBase-input": { padding: "8px 10px" } }}
        />
      </Grid>
    </Grid>
    <Button onClick={saveChanges}>Guardar Cambios</Button>
  </Box>
  );
}

export default SupplierDetail;