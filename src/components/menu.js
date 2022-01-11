import toast, { Toaster } from 'react-hot-toast';
import Link from 'next/link';

export default function MainMenu() {

    return(
        <>
            <div className="ml-8 container flex items-center">
                <div className="container flex flex-col font-sans">
                <Link href="/">
                    <p className="cursor-pointer text-4xl md:text-6xl text-white mb-2 underline">Home</p>
                </Link>
                <Toaster/>
                <p className="cursor-pointer text-4xl md:text-6xl text-white mb-2" onClick={() => {toast("Still Under Construction!",{icon: '🚧', position: 'bottom center', style: {background: 'rgba(0, 0, 0, 0.8)', color: 'white',},duration: 2000,});}}>Blog</p>
                <p className="cursor-pointer text-4xl md:text-6xl text-white mb-2" onClick={() => {toast("Still Under Construction!",{icon: '🚧', position: 'bottom center', style: {background: 'rgba(0, 0, 0, 0.8)', color: 'white',},duration: 2000,});}}>Projects</p>
                <Link href="/contact">
                    <p className="cursor-pointer text-4xl md:text-6xl text-white mb-2" href='/contact'>Contact</p>
                </Link>
                </div>
            </div>
        </>
    )
}