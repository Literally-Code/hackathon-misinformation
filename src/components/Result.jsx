import { useEffect, useState } from "react";

const Main = () => 
    {
        const [isFadedIn, setIsFadedIn] = useState(false);
        const [resultText, setResultText] = useState('');

        const slow_write = (text, interval) => {
            console.log('called')
            let i = 0;
            let final_text = '';

            let writer = setInterval(() => {
                if (i == text.length - 1)
                {
                    clearInterval(writer);
                }
                final_text = final_text + text[i];
                setResultText(final_text);
                i++;
            }, interval)
        }

        useEffect(() => {
            setTimeout(() => {
                setIsFadedIn(true);
            }, 1000)
            slow_write(
                "This is just a demo, so we are not performing any magic yet. However, if we got everything in order, this page would give a wonderfully detailed description of your information, and whether or not it is true!", 
                30);
        }, [])

        return <div className='items-center overflow-hidden'>
            <div className={`flex items-center justify-center font-mono mt-28 animate-fadein`}>
                <div className="text-center font-bold text-4xl">
                    Your results:
                </div>
            </div>
            <div className={`flex items-center justify-center font-mono mt-10 ${isFadedIn ? 'animate-fadein' : 'invisible'}`}>
                <div className="text-center font-semibold text-xl">
                    {resultText}
                </div>
            </div>
        </div>
    };
    
    export default Main;
    