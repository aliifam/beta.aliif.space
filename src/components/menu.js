import toast, { Toaster } from 'react-hot-toast';

export default function MainMenu() {

    /*const [close, setClose] = useState("");

    const changeClose = () => {
        setClose("hidden");
    };*/

    return(
        <>
            <div className="ml-8 container flex items-center">
                <div className="container flex flex-col font-sans">
                <Toaster/>
                <p className="cursor-pointer text-4xl md:text-6xl text-white mb-2 underline" onClick={() => {toast("Still Under Construction!",{icon: '🚧', position: 'bottom center', style: {background: 'rgba(0, 0, 0, 0.8)', color: 'white',},duration: 2000,});}}>Home</p>
                <p className="cursor-pointer text-4xl md:text-6xl text-white mb-2" onClick={() => {toast("Still Under Construction!",{icon: '🚧', position: 'bottom center', style: {background: 'rgba(0, 0, 0, 0.8)', color: 'white',},duration: 2000,});}}>Blog</p>
                <p className="cursor-pointer text-4xl md:text-6xl text-white mb-2" onClick={() => {toast("Still Under Construction!",{icon: '🚧', position: 'bottom center', style: {background: 'rgba(0, 0, 0, 0.8)', color: 'white',},duration: 2000,});}}>Projects</p>
                <p className="cursor-pointer text-4xl md:text-6xl text-white mb-2" onClick={() => {toast("Still Under Construction!",{icon: '🚧', position: 'bottom center', style: {background: 'rgba(0, 0, 0, 0.8)', color: 'white',},duration: 2000,});}}>Contact</p>
                </div>
            </div>
        </>
    )
}