import React from "react";
import { List, ListItem, ListItemText, InputAdornment } from "@mui/material";
import { StyledSearchField, StyledSelect, StyledMenuItem, Sidebar as StyledSidebar } from "../styles/StyledComponents";
import { availableLanguages } from "../data/apiData";
import SearchIcon from "@mui/icons-material/Search";

export default function Sidebar({ search, setSearch, language, setLanguage, filteredEndpoints, setSelectedEndpoint }) {
  return (
    <StyledSidebar variant="permanent" anchor="left">
      <h2 className="text-xl font-bold px-4 mb-8">Sports Hub</h2>
      <StyledSearchField
        label="Search"
        variant="outlined"
        fullWidth
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon style={{ color: "#aaa" }} />
            </InputAdornment>
          )
        }}
      />
      <StyledSelect
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="mb-8 mt-4"
        fullWidth
        style={{ color: "#aaa" }}
      >
        {availableLanguages.map((lang) => (
          <StyledMenuItem style={{ color: "#aaa" }} key={lang} value={lang}>{lang.toUpperCase()}</StyledMenuItem>
        ))}
      </StyledSelect>
      <List>
        {filteredEndpoints.map((endpoint) => (
          <ListItem style={{ color: "#aaa" }} button key={endpoint.name} onClick={() => setSelectedEndpoint(endpoint)}>
            <ListItemText primary={endpoint.name} />
          </ListItem>
        ))}
      </List>
    </StyledSidebar>
  );
}
