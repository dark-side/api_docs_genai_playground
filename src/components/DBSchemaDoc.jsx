import React from "react";
import { Card, CardContent } from "@mui/material";
import { StyledCard, StyledPre, PageContainer } from "../styles/DBSchemaDocStyles";
import { dbSchema } from "../data/dbSchemaData";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

export default function DbSchemaDocumentation() {
  return (
    <PageContainer>
      <div className="flex flex-col w-full p-6 max-w-5xl mx-auto text-white">
        <h1 className="text-3xl font-bold mb-4">Database Schema Documentation</h1>
        <StyledCard>
          <CardContent>
            <h2 className="text-xl font-semibold">Database Diagram</h2>
            <div className="bg-gray-800 p-4 rounded mt-2">
              <Zoom>
                <img src={dbSchema.diagram} alt="Database Diagram" />
              </Zoom>
            </div>
          </CardContent>
        </StyledCard>
        <StyledCard>
          <CardContent>
            <h2 className="text-xl font-semibold">Pseudo Code</h2>
            <StyledPre>{dbSchema.pseudoCode}</StyledPre>
          </CardContent>
        </StyledCard>
        <StyledCard>
          <CardContent>
            <h2 className="text-xl font-semibold">PlantUML Code</h2>
            <StyledPre>{dbSchema.plantUmlCode}</StyledPre>
          </CardContent>
        </StyledCard>
      </div>
    </PageContainer>
  );
}