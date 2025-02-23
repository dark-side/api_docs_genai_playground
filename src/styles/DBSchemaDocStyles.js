import { Card } from "@mui/material";
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

export const PageContainer = styled("div")({
  backgroundColor: "var(--color-gray-900)",
  minHeight: "100vh",
  padding: "20px"
});
