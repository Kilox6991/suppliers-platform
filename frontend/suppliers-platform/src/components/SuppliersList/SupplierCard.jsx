import { Box, Button, Typography } from "@mui/material";

function SupplierCard() {
    return (
        <Button sx={{ display: "flex", gap: "50px", backgroundColor: "#eaeaea", height: "80px", justifyContent: "center", alignItems: "center", border:"1px solid black", borderRadius:"2px", padding:"0px 20px" }}>
            <Typography>Nombre del Proveedor</Typography>
            <Typography>VAT</Typography>
            <Typography>fecha</Typography>
            <Typography>Pais</Typography>
        </Button>
    )
}

export default SupplierCard;
