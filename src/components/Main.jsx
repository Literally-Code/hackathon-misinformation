import { useState, useRef, useEffect } from "react";

const Main = () => 
{
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

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

    return <>
        <div ref={ref} className="flex pt-48 justify-center align-middle font-mono h-[100vh]">
            <form className={`flex flex-col gap-4 p-4 w-[80vw] h-full ${isVisible ? 'animate-fadein' : 'invisible'}`}>
                <h1 className="p-2 text-2xl text-black">Find out if it's true:</h1>
                <input className="border-l p-2 h-12 border-black focus:animate-background focus:outline-none" type="text"></input>
                <button className="bg-black rounded-s text-white p-2" type="submit">Check Information</button>
            </form>
        </div>
    </>
};

export default Main;
