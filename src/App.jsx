import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import APIDocumentation from "./components/APIDocumentation";
import DbSchemaDocumentation from './components/DBSchemaDoc';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<APIDocumentation />} />
        <Route path="/db" element={<DbSchemaDocumentation />} />
      </Routes>
    </Router>
  )
}

export default App