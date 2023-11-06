import { Box, Typography, TextField, Button } from "@mui/material";
import { useParams } from "react-router-dom";
import { useState } from "react"; // Importa useState para manejar el estado local
import { suppliers } from "../../data/json";

function SupplierDetail() {
  const { id } = useParams();

  const selectedSupplier = suppliers.find(
    (supplier) => supplier.id === Number(id)
  );

  if (!selectedSupplier) {
    return <div>Proveedor no encontrado</div>;
  }

  // Establece un estado local para cada campo
  const [editedName, setEditedName] = useState(selectedSupplier.name);
  const [editedNameCommercial, setEditedNameCommercial] = useState(selectedSupplier.commercialName);
  const [editedVat, setEditedVat] = useState(selectedSupplier.vat);

  const [editedLegalAddress, setEditedLegalAddress] = useState(selectedSupplier.legalAddress);
  const [editedCity, setEditedCity] = useState(selectedSupplier.city);
  const [editedState, setEditedState] = useState(selectedSupplier.state);
  const [editedCountry, setEditedCountry] = useState(selectedSupplier.country);
  const [editedZip, setEditedZip] = useState(selectedSupplier.zipCode);
  // Función para guardar los cambios
  const saveChanges = () => {
    // Aquí puedes implementar la lógica para guardar los cambios en tus datos de proveedores
  };

  return (
    <Box sx={{ backgroundColor: "#eaeaea", margin: "100px" }}>
      <Typography>Company Name / Freelance Name</Typography>
      <TextField
        value={editedName}
        onChange={(e) => setEditedName(e.target.value)}
        sx={{ backgroundColor: "white" }}
      />
      <Typography>Commercial Name</Typography>
      <TextField
        value={editedNameCommercial}
        onChange={(e) => setEditedNameCommercial(e.target.value)}
        sx={{ backgroundColor: "white" }}
      />
      <Typography>VAT:</Typography>
      <TextField
        value={editedVat}
        onChange={(e) => setEditedVat(e.target.value)}
        sx={{ backgroundColor: "white" }}
      />

      <Typography>Legal Address</Typography>
      <TextField
        value={editedLegalAddress}
        onChange={(e) => setEditedLegalAddress(e.target.value)}
        sx={{ backgroundColor: "white" }}
      />

      <Typography>City</Typography>
      <TextField
        value={editedCity}
        onChange={(e) => setEditedCity(e.target.value)}
        sx={{ backgroundColor: "white" }}
      />

        <Typography>State</Typography>
      <TextField
        value={editedState}
        onChange={(e) => setEditedState(e.target.value)}
        sx={{ backgroundColor: "white" }}
      />

      <Typography>Country</Typography>
      <TextField
        value={editedCountry}
        onChange={(e) => setEditedCountry(e.target.value)}
        sx={{ backgroundColor: "white" }}
      />

        <Typography>ZIP Code</Typography>
      <TextField
        value={editedZip}
        onChange={(e) => setEditedZip(e.target.value)}
        sx={{ backgroundColor: "white" }}
      />

      <Button onClick={saveChanges}>Guardar Cambios</Button>
    </Box>
  );
}

export default SupplierDetail;
