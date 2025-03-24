import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Intro from './components/Result'

const App = () => 
{
    return <>
    <Navbar></Navbar>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main/>}></Route>
            <Route path="/result" element={<Intro/>}></Route>
        </Routes>
    </BrowserRouter>
    </>
};

export default App;
