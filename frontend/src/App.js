import { Button } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import Chatpage from './pages/Chatpage';
import Homepage from './pages/Homepage';
import './App.css'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/chats" element={<Chatpage/>}/>
      </Routes>
    </div>
  );
}

export default App;
