import { Button, Box, Typography } from "@mui/material";

function Sidebar() {
  const handleBackClick = () => {
    window.location.href = "/";
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "200px",
        height: "100vh",
        backgroundColor: "#212529",
        gap: "20px",
      }}
    >
      <Button
        onClick={handleBackClick}
        sx={{
            borderRadius: "100px",
            backgroundColor: "#c7c8c9",
            marginTop:"20px",
            width: "200px",
            color: "black",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#eea925",
            },
          }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
          width={24}
          height={24}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
          />
        </svg>
      </Button>
      <Typography
        sx={{
          color: "#c7c8c9",
          fontSize: "10px",
          textDecoration: "underline",
          textDecorationColor: "gray",
          marginLeft: "50px",
        }}
      >
        AVAILABLE APPS
      </Typography>
      <Button
        sx={{
          borderRadius: "100px",
          backgroundColor: "#c7c8c9",
          width: "200px",
          color: "black",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#eea925",
          },
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
          width={24}
          height={24}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>
        Profile
      </Button>
      <Button
        sx={{
          borderRadius: "100px",
          backgroundColor: "#c7c8c9",
          width: "200px",
          color: "black",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#eea925",
          },
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
          width={24}
          height={24}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12l-3-3m0 0l-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
          />
        </svg>
        Suppliers Admin
      </Button>
      <Button
        sx={{
          borderRadius: "100px",
          backgroundColor: "#c7c8c9",
          width: "200px",
          color: "black",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#eea925",
          },
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
          width={24}
          height={24}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
          />
        </svg>
        Logout
      </Button>
    </Box>
  );
}

export default Sidebar;
