import { Card, Tabs } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledCard = styled(Card)({
  background: "#1e1e2e",
  color: "#ffffff",
  borderRadius: "10px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
  padding: "20px",
  textAlign: "center",
  marginBottom: "20px"
});

export const PageContainer = styled("div")({
  backgroundColor: "var(--color-gray-900)",
  minHeight: "100vh",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center"
});

export const StyledTabs = styled(Tabs)({
  "& .MuiTab-root": {
    color: "gray"
  },
  "& .Mui-selected": {
    color: "#ffffff"
  }
});
