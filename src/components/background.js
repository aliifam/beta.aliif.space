import MainMenu from "./menu";
import SocialIcon from "./social-icon";
import toast, { Toaster } from 'react-hot-toast';

export default function Background() {
    return (
        <div className="bg-line h-screen flex">
            <div className="container max-w-4xl h-screen mx-auto flex items-center">
                <div className="container flex flex-col mx-4 lg:mx-0">
                    <h1 className="font-bold font-serif text-5xl sm:text-6xl mb-4">Aliif Arief</h1>
                    <p className="font-serif text-2xl">Hello, you can call me Aliif and I am <a href="https://trpl.sv.ugm.ac.id/" target="_blank" rel="noopener noreferrer" className="underline font-bold">Software Engineering</a> student at Gadjah Mada University, I am Enjoyed coding with JavaScript and Python.</p>
                    <div className="grid grid-cols-6 max-w-xs mt-6">
                       <SocialIcon/>
                    </div>
                </div>
            </div>
            <Toaster/>
            <a className="fixed top-6 right-6 cursor-pointer" onClick={() => {toast("Still Under Construction!",{icon: '🚧', position: 'bottom center', style: {background: 'rgba(0, 0, 0, 0.8)', color: 'white',},duration: 2000,});}}>
                <svg className="w-9 lg:w-11" width="57" height="40" viewBox="0 0 57 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="3" y1="3" x2="22" y2="3" stroke="black" strokeWidth="6" strokeLinecap="round"/>
                    <line x1="3" y1="20" x2="54" y2="20" stroke="black" strokeWidth="6" strokeLinecap="round"/>
                    <line x1="3" y1="37" x2="43" y2="37" stroke="black" strokeWidth="6" strokeLinecap="round"/>
                </svg>
            </a>
            <a className="fixed bottom-2 right-4" href="mailto:me@aliif.space">
                <svg className="w-14" width="83" height="83" viewBox="0 0 83 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M41.5 0C18.5802 0 0 18.5802 0 41.5C0 64.4198 18.5802 83 41.5 83C64.4198 83 83 64.4198 83 41.5C83 18.5802 64.4198 0 41.5 0ZM21 52V34.633V31C21 29.1435 21.7375 27.363 23.0503 26.0503C24.363 24.7375 26.1435 24 28 24H56C57.8565 24 59.637 24.7375 60.9497 26.0503C62.2625 27.363 63 29.1435 63 31V52C63 53.8565 62.2625 55.637 60.9497 56.9497C59.637 58.2625 57.8565 59 56 59H28C26.1435 59 24.363 58.2625 23.0503 56.9497C21.7375 55.637 21 53.8565 21 52ZM56 27.5H28C27.0717 27.5 26.1815 27.8687 25.5251 28.5251C24.8687 29.1815 24.5 30.0717 24.5 31V33.59L42 43.012L59.5 33.59V31C59.5 30.0717 59.1312 29.1815 58.4749 28.5251C57.8185 27.8687 56.9283 27.5 56 27.5ZM41.1705 46.54L24.5 37.566V52C24.5 52.9283 24.8687 53.8185 25.5251 54.4749C26.1815 55.1312 27.0717 55.5 28 55.5H56C56.9283 55.5 57.8185 55.1312 58.4749 54.4749C59.1312 53.8185 59.5 52.9283 59.5 52V37.566L42.8295 46.54C42.5746 46.6772 42.2895 46.7491 42 46.7491C41.7105 46.7491 41.4254 46.6772 41.1705 46.54Z" fill="black"/>
                </svg>
            </a>
            
        </div>
    )
}