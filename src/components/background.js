import MainMenu from "./menu";
import SocialIcon from "./social-icon";

import { useState } from "react/cjs/react.development";
import classNames from "classnames";

export default function Background({}) {

    const [offcanvas, setOffcanvas] = useState(false);

    return (
        <div className="bg-line h-screen flex">
            <div className="container max-w-4xl h-screen mx-auto flex items-center">
                <div className="container flex flex-col mx-4 lg:mx-0" data-aos="fade-up" data-aos-delay="200">
                    <h1 className="font-bold font-serif text-5xl sm:text-6xl mb-4">Aliif Arief</h1>
                    <p className="font-serif text-xl sm:text-2xl">Hello, you can call me Aliif and I am <a href="https://trpl.sv.ugm.ac.id/" target="_blank" rel="noopener noreferrer" className="underline font-bold">Software Engineering</a> student at Gadjah Mada University, I am Enjoyed coding with JavaScript and Python.</p>
                    <div className="grid grid-cols-6 max-w-xs mt-6">
                       <SocialIcon/>
                    </div>
                </div>
            </div>
            <a className="fixed top-6 right-6 cursor-pointer" onClick={() => setOffcanvas(true)}>
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
            <div className={classNames("bg-black transition-all w-screen sm:w-1/2 lg:w-1/3 h-screen z-10 fixed flex", offcanvas ? "right-0" : "-right-full")}>
                <a className="absolute top-6 right-6 cursor-pointer" onClick={() => setOffcanvas(false)}>
                    <svg className="fill-white w-9" width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M49.5743 1.4257C48.6611 0.512826 47.4228 0 46.1316 0C44.8404 0 43.6021 0.512826 42.6889 1.4257L25.4706 18.644L8.25229 1.4257C7.3339 0.538697 6.10388 0.0478858 4.82713 0.0589804C3.55038 0.070075 2.32906 0.582188 1.42623 1.48502C0.523395 2.38785 0.0112815 3.60917 0.00018692 4.88592C-0.0109077 6.16267 0.479906 7.3927 1.36691 8.31108L18.5852 25.5294L1.36691 42.7477C0.479906 43.6661 -0.0109077 44.8961 0.00018692 46.1729C0.0112815 47.4496 0.523395 48.6709 1.42623 49.5738C2.32906 50.4766 3.55038 50.9887 4.82713 50.9998C6.10388 51.0109 7.3339 50.5201 8.25229 49.6331L25.4706 32.4148L42.6889 49.6331C43.6073 50.5201 44.8373 51.0109 46.1141 50.9998C47.3908 50.9887 48.6121 50.4766 49.515 49.5738C50.4178 48.6709 50.9299 47.4496 50.941 46.1729C50.9521 44.8961 50.4613 43.6661 49.5743 42.7477L32.356 25.5294L49.5743 8.31108C50.4872 7.39793 51 6.15959 51 4.86839C51 3.57719 50.4872 2.33886 49.5743 1.4257Z" />
                    </svg>
                </a>
                <MainMenu />
            </div>
        </div>
    )
}