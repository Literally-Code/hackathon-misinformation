import Navbar from './components/Navbar';
import Main from './components/Main';
import Intro from './components/Intro'

const App = () => 
{
    return <>
    <Navbar></Navbar>
    <div className='items-center overflow-hidden '>
        <Intro></Intro>
        <div className="flex items-center justify-center font-mono">
                <div className="text-center font-bold text-4xl">
                    People say whatever they want on the internet...
                </div>
            </div>
        <Main></Main>
    </div>
    </>
};

export default App;
