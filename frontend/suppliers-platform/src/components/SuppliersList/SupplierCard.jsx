import { Button, Typography } from "@mui/material";

function SupplierCard({ name, vat, date, country }) {
    return (
        <Button sx={{ display: "flex", gap: "50px", backgroundColor: "#eaeaea",width:"700px", height: "80px", border: "1px solid black", borderRadius: "2px", padding: "0px 20px" }}>
            <Typography>{name}</Typography>
            <Typography>{vat}</Typography>
            <Typography>{date}</Typography>
            <Typography>{country}</Typography>
        </Button>
    )
}

export default SupplierCard;

