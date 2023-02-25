import logo from './logo.svg';
import './App.css';
import Flowers from './components/Flowers';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import SendObj from './components/SendObj';
import UseEffectUseState from './components/UseEffectUseState';


function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Flowers />} />
          <Route path="/passingobjects" element={<SendObj />} />
          <Route path="/inputoutput" element={<UseEffectUseState />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
