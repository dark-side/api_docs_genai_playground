import React from "react";
import { CardContent } from "@mui/material";
import { StyledCard, StyledPre } from "../styles/StyledComponents";

export default function EndpointDetails({ selectedEndpoint, language }) {
  return (
    <div>
      <StyledCard>
        <CardContent>
          <h2 className="text-xl font-semibold">{selectedEndpoint.name}</h2>
          <p className="text-gray-400 mb-2">{selectedEndpoint.description}</p>
          <p><strong>Method:</strong> {selectedEndpoint.method}</p>
          <p><strong>Path:</strong> {selectedEndpoint.path}</p>
        </CardContent>
      </StyledCard>
      <StyledCard>
        <CardContent>
          <h3 className="text-lg font-semibold">Request Example ({language})</h3>
          <StyledPre>
            {selectedEndpoint.requestExamples[language] || "No example available"}
          </StyledPre>
          <h3 className="text-lg font-semibold mt-4">Response Example</h3>
          <StyledPre>
            {selectedEndpoint.responseExample}
          </StyledPre>
        </CardContent>
      </StyledCard>
    </div>
  );
}
