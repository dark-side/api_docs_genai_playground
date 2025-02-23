import { Card, TextField, MenuItem, Select, Drawer } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledCard = styled(Card)({
  background: "#1e1e2e",
  color: "#ffffff",
  borderRadius: "10px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
  padding: "20px",
  marginBottom: "20px"
});

export const StyledPre = styled("pre")({
  background: "#282a36",
  color: "#f8f8f2",
  padding: "15px",
  borderRadius: "5px",
  overflowX: "auto"
});

export const Sidebar = styled(Drawer)({
  width: "250px",
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: "250px",
    background: "#1e1e2e",
    color: "#ffffff",
    padding: "10px"
  }
});

export const StyledSearchField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    color: "#fff",
    borderRadius: "5px",
    "& fieldset": {
      borderColor: "#555"
    },
    "&:hover fieldset": {
      borderColor: "#aaa"
    },
    "&.Mui-focused fieldset": {
      borderColor: "#fff"
    }
  },
  "& .MuiInputLabel-root": {
    color: "#aaa"
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#fff"
  }
});

export const StyledSelect = styled(Select)({
  "& .MuiOutlinedInput-root": {
    color: "#aaa",
    borderRadius: "5px",
    backgroundColor: "#2a2a3a",
    "& fieldset": {
      borderColor: "#555"
    },
    "&:hover fieldset": {
      borderColor: "#aaa"
    },
    "&.Mui-focused fieldset": {
      borderColor: "#aaa"
    }
  },
  "& svg": {
    color: "#aaa"
  }
});

export const StyledMenuItem = styled(MenuItem)({
  color: "#fff",
  backgroundColor: "#fff",
  "&:hover": {
    backgroundColor: "#333"
  }
});
