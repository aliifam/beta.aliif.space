import toast, { Toaster } from 'react-hot-toast';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames';

export default function MainMenu() {

    const router = useRouter();

    return(
        <>
            <div className="ml-8 container flex sm:items-center">
                <div className="container flex flex-col mt-20 sm:mt-0 gap-y-6 font-sans">
                <Link href="/">
                    <p className={classNames("cursor-pointer text-4xl md:text-6xl text-white hover:underline", router.pathname == "/" ? "underline pointer-events-none" : "")}>Home</p>
                </Link>
                <Toaster/>
                <p className="cursor-pointer text-4xl md:text-6xl text-white" onClick={() => {toast("Still Under Construction!",{icon: '🚧', position: 'bottom center', style: {background: 'rgba(0, 0, 0, 0.8)', color: 'white',},duration: 2000,});}}>Blog</p>
                <p className="cursor-pointer text-4xl md:text-6xl text-white" onClick={() => {toast("Still Under Construction!",{icon: '🚧', position: 'bottom center', style: {background: 'rgba(0, 0, 0, 0.8)', color: 'white',},duration: 2000,});}}>Projects</p>
                <Link href="/contact">
                    <p className={classNames("cursor-pointer text-4xl md:text-6xl text-white hover:underline", router.pathname == "/contact" ? "underline pointer-events-none" : "")}>Contact</p>
                </Link>
                </div>
            </div>
        </>
    )
}