import { Button, Typography} from "@mui/material";
import { Link } from "react-router-dom";

function SupplierCard({ name, vat, date, country, id }) {
  return (
    <Link to={`/supplier/${id}`} style={{textDecoration:"none"}}>
    <Button
      sx={{
        display: "flex",
        gap: "50px",
        backgroundColor: "#eaeaea",
        width: "700px",
        height: "80px",
        border: "1px solid black",
        borderRadius: "2px",
        padding: "0px 20px",
        marginBottom:"10px",
        
      }}
    >
      <Typography >{name}</Typography>
      <Typography>{vat}</Typography>
      <Typography>{date}</Typography>
      <Typography>{country}</Typography>
    </Button>
    </Link>
  );
}

export default SupplierCard;
