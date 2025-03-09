import React from "react";
import { Card, CardContent } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate, Link } from "react-router-dom";

const StyledCard = styled(Card)({
  background: "#1e1e2e",
  color: "#ffffff",
  borderRadius: "10px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
  padding: "20px",
  marginBottom: "20px"
});

const PageContainer = styled("div")({
  backgroundColor: "var(--color-gray-900)",
  minHeight: "100vh",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center"
});

export default function ApiBestPractices() {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <div className="flex flex-col w-full p-6 max-w-5xl mx-auto text-white">
        <nav className="mb-4">
          <Link to="/" className="text-blue-500 hover:underline">Home</Link> &gt; API Documentation
        </nav>
      </div>
      <StyledCard>
        <CardContent>
          <h1 className="text-3xl font-bold">API Documentation</h1>
          <h2 className="text-2xl font-bold mt-4">Overview</h2>
          <p className="text-gray-400 mt-2">
            This document outlines the API structure, including endpoints, response formats, and general guidelines.
          </p>
          <h2 className="text-2xl font-bold mt-4">General Guidelines</h2>
          <ul className="list-disc pl-5 mt-2 text-gray-300">
            <li>Endpoints must be written using `-` (e.g., `/user-profile`).</li>
            <li>The API must return responses in JSON format.</li>
            <li>CORS policy must allow requests from `localhost`, `127.0.0.1`, and `0.0.0.0` by default.</li>
            <li>Open ports by default: `3000`, `3001`, `3002`, `4200`.</li>
            <li>Parameter names in JSON responses must use `_` (e.g., `short_description`).</li>
            <li>`/articles` endpoint must include all fields as per documentation. Additional fields may be added, but existing fields must not be altered.</li>
            <li>HTTP methods must be properly utilized (GET, POST, PUT, DELETE).</li>
            <li>Images must be stored in the database by default. Cloud storage is out of scope but can be integrated separately.</li>
            <li>The database schema must follow the default structure mentioned. Additional fields may be added, but existing fields must not be modified.</li>
          </ul>
          <h2 className="text-2xl font-bold mt-4">HTTP methods usage example</h2>
          <ul className="list-disc pl-5 mt-2 text-gray-300">
            <li><strong>GET /articles</strong>: Fetches a list of articles available in the system.</li>
            <li><strong>POST /articles</strong>: Creates a new article.</li>
            <li><strong>PUT /articles/{'{article_id}'}</strong>: Updates an existing article.</li>
            <li><strong>DELETE /articles/{'{article_id}'}</strong>: Deletes an article by its ID.</li>
          </ul>
          <h2 className="text-2xl font-bold mt-4">Database Schema</h2>
          <p className="text-gray-400 mt-2">
            Additional fields may be added but default fields must remain unaltered. The system must ensure consistency in naming and data structure.
          </p>
          <h2 className="text-2xl font-bold mt-4">CORS Policy</h2>
          <p className="text-gray-400 mt-2">The API must allow the following origins by default:</p>
          <ul className="list-disc pl-5 mt-2 text-gray-300">
            <li>localhost</li>
            <li>127.0.0.1</li>
            <li>0.0.0.0</li>
          </ul>
          <p className="text-gray-400 mt-2">
            If additional domains need to be allowed, they can be configured separately.
          </p>
          <h2 className="text-2xl font-bold mt-4">Open Ports</h2>
          <p className="text-gray-400 mt-2">The API must be accessible via the following ports by default:</p>
          <ul className="list-disc pl-5 mt-2 text-gray-300">
            <li>3000</li>
            <li>3001</li>
            <li>3002</li>
            <li>4200</li>
          </ul>
          <p className="text-gray-400 mt-2">
            These ports can be modified as needed for different environments.
          </p>
          <h2 className="text-2xl font-bold mt-4">Additional Guidelines</h2>
          <ul className="list-disc pl-5 mt-2 text-gray-300">
            <li>New endpoints must follow the same format.</li>
            <li>Ensure proper use of HTTP methods.</li>
            <li>Example JSON responses must be included for all endpoints.</li>
            <li>Images must be stored in the database by default; cloud storage is optional and can be configured separately.</li>
          </ul>
          <h2 className="text-2xl font-bold mt-4">Conclusion</h2>
          <p className="text-gray-400 mt-2">
            This document provides a structured format for API development. Consistency must be maintained across all endpoints to ensure proper integration and usability.
          </p>
        </CardContent>
      </StyledCard>
    </PageContainer>
  );
}