import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import APIDocumentation from "./components/APIDocumentation";
import DbSchemaDocumentation from './components/DBSchemaDoc';
import HubPage from './components/Hub';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HubPage />} />
        <Route path="/api-documentation" element={<APIDocumentation />} />
        <Route path="/db-schema" element={<DbSchemaDocumentation />} />
        <Route path="/api-best-practices" element={<DbSchemaDocumentation />} />
      </Routes>
    </Router>
  )
}

export default App