import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Dashboard from './Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from './components/Form';

function App() {
  return (
    <div className="App">


      <BrowserRouter>
        <Routes>
          {/* <Form /> is the different one which is not connected with this project */}
          {/* <Route path="/" element={<Form />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
