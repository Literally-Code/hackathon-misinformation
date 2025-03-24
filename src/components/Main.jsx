import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Main = () => 
{
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(ref.current);
                }
            },
            { threshold: 0.7 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    const handleSubmit = (form) => {
        form.preventDefault();
        navigate('/result');
    }

    return <>
        <div className='items-center overflow-hidden'>
            <div className="flex items-center justify-center font-mono h-[100vh]">
                <div className="text-center font-bold text-4xl">
                    Misinformation is a problem.
                </div>
            </div>
            <div className="flex items-center justify-center font-mono">
                <div className="text-center font-bold text-4xl">
                    People say whatever they want on the internet...
                </div>
            </div>
            <div ref={ref} className="flex pt-48 justify-center align-middle font-mono h-[100vh]">
                <form className={`flex flex-col gap-4 p-4 w-[80vw] h-full ${isVisible ? 'animate-fadein' : 'invisible'}`} onSubmit={handleSubmit}>
                    <h1 className="p-2 text-2xl text-black">Find out if it's true:</h1>
                    <input className="border-l p-2 h-12 border-black focus:animate-background focus:outline-none" type="text"></input>
                    <button className="bg-black rounded-s text-white p-2" type="submit">Check Information</button>
                </form>
            </div>
        </div>
    </>
};

export default Main;
