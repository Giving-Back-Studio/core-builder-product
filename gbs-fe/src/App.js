import { Routes, Route } from 'react-router-dom';
import BuilderPage from './pages/BuilderPage';
import InspiringInnovations from './pages/InspiringInnovations'; // Import the new page

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/builder-demo" element={<BuilderPage />} />
        <Route path="/inspiring-innovations" element={<InspiringInnovations />} /> {/* Add the new route */}
        {/* Add other routes here */}
      </Routes>
    </div>
  );
}

export default App;
