import React, { useState } from "react";
import { apiEndpoints } from "../data/apiData";
import Sidebar from "./Sidebar";
import EndpointDetails from "./EndpointDetails";
import { Link } from "react-router-dom";

export default function ApiDocumentation() {
  const [search, setSearch] = useState("");
  const [selectedEndpoint, setSelectedEndpoint] = useState(apiEndpoints[0]);
  const [language, setLanguage] = useState("js");
  const filteredEndpoints = apiEndpoints.filter(endpoint =>
    endpoint.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-gray-900">
      <Sidebar
        search={search}
        setSearch={setSearch}
        language={language}
        setLanguage={setLanguage}
        filteredEndpoints={filteredEndpoints}
        setSelectedEndpoint={setSelectedEndpoint}
      />
      <div className="flex flex-col w-full p-6 max-w-5xl mx-auto text-white">
        <nav className="mb-4">
          <Link to="/" className="text-blue-500 hover:underline">Home</Link> &gt; API Documentation
        </nav>
        <h1 className="text-3xl font-bold mb-4">API Documentation</h1>
        {selectedEndpoint && (
          <EndpointDetails selectedEndpoint={selectedEndpoint} language={language} />
        )}
      </div>
    </div>
  );
}
