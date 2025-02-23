import React from "react";
import { CardContent, Tabs, Tab } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { StyledCard, PageContainer, StyledTabs } from "./HubStyles";

export default function HubPage() {
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    if (newValue === 0) navigate("/api-best-practices");
    if (newValue === 1) navigate("/db-schema");
    if (newValue === 2) navigate("/api-documentation");
  };

  return (
    <PageContainer>
      <StyledCard>
        <CardContent>
          <h1 className="text-4xl font-bold">Welcome to the Sports Hub</h1>
          <p className="text-gray-400 mt-2">Choose a section to explore</p>
        </CardContent>
      </StyledCard>
      <StyledTabs onChange={handleChange} textColor="inherit" indicatorColor="primary">
        <Tab label="API Best Practices" />
        <Tab label="DB Schema" />
        <Tab label="API Documentation" />
      </StyledTabs>
    </PageContainer>
  );
}
