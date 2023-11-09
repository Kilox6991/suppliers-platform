import { Box, Typography, TextField, Button, Grid, CircularProgress, Paper} from "@mui/material";
import { useParams } from "react-router-dom";
import { useState } from "react";

import { helpHttp } from "../../helpers/helpHttp";
import { useData } from "../../data/DataContext";
import { useEffect } from "react";

function SupplierDetail() {
  const [selectedSupplier, setSelectedSupplier] = useState(null);
  const { id } = useParams();
  const api = helpHttp();
  const { suppliers, setSuppliers } = useData();


 
  useEffect(() => {
    const fetchSupplier = async () => {
      const url = `http://localhost:5000/suppliers/${id}`;
      try {
        const data = await api.get(url);
        if (data) {
          setSelectedSupplier(data);
          setEditedName(data.name);
          setEditedNameCommercial(data.commercialName);
          setEditedVat(data.vat);
          setEditedLegalAddress(data.legalAddress);
          setEditedCity(data.city);
          setEditedState(data.state);
          setEditedCountry(data.country);
          setEditedZip(data.zipCode);
        }
      } catch (error) {
        console.error("Error al obtener el proveedor:", error);
      }
    };
  
    fetchSupplier();
  }, [id]);

  const [editedName, setEditedName] = useState("");
  const [editedNameCommercial, setEditedNameCommercial] = useState("");
  const [editedVat, setEditedVat] = useState("");
  const [editedLegalAddress, setEditedLegalAddress] = useState("");
  const [editedCity, setEditedCity] = useState("");
  const [editedState, setEditedState] = useState("");
  const [editedCountry, setEditedCountry] = useState("");
  const [editedZip, setEditedZip] = useState("");

  useEffect(() => {
    const foundSupplier = suppliers.find(
      (supplier) => String(supplier.id) === id
    );
    setSelectedSupplier(foundSupplier);
  
    if (foundSupplier) {
      setEditedName(foundSupplier.name);
      setEditedNameCommercial(foundSupplier.commercialName);
      setEditedVat(foundSupplier.vat);
      setEditedLegalAddress(foundSupplier.legalAddress);
      setEditedCity(foundSupplier.city);
      setEditedState(foundSupplier.state);
      setEditedCountry(foundSupplier.country);
      setEditedZip(foundSupplier.zipCode);
    }
  }, [suppliers, id]);

  

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
      setSuppliers((prevSuppliers) =>
        prevSuppliers.map((supplier) =>
          supplier.id === Number(id) ? data : supplier
        )
      );
    } catch (error) {
      console.error("Error al actualizar el proveedor:", error);
    }
  };

  if (!selectedSupplier) {
    return <CircularProgress color="inherit" />
  }

  return (
    <Box
    component={Paper}
    elevation={15}
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
      <Button
        variant="contained"
        color="secondary"
        onClick={saveChanges}
        sx={{ marginTop: "20px" }}
      >
        Guardar Cambios
      </Button>
    </Box>
  );
}

export default SupplierDetail;
