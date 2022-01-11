import MainMenu from "./menu"
import { useState } from "react"
import classNames from "classnames"

export default function MenuBar() {

    const [offcanvas, setOffcanvas] = useState(false)

    return (
        <>
            <a className="relative top-6 right-6 cursor-pointer" onClick={() => setOffcanvas(true)}>
                <svg className="w-9 lg:w-11" width="57" height="40" viewBox="0 0 57 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="3" y1="3" x2="22" y2="3" stroke="black" strokeWidth="6" strokeLinecap="round"/>
                    <line x1="3" y1="20" x2="54" y2="20" stroke="black" strokeWidth="6" strokeLinecap="round"/>
                    <line x1="3" y1="37" x2="43" y2="37" stroke="black" strokeWidth="6" strokeLinecap="round"/>
                </svg>
            </a>
            <div className={classNames("bg-black transition-all w-3/4 sm:w-1/2 lg:w-1/3 h-screen z-10 fixed flex", offcanvas ? "right-0" : "-right-full")}>
                <a className="absolute top-6 right-6 cursor-pointer" onClick={() => setOffcanvas(false)}>
                    <svg className="fill-white w-9" width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M49.5743 1.4257C48.6611 0.512826 47.4228 0 46.1316 0C44.8404 0 43.6021 0.512826 42.6889 1.4257L25.4706 18.644L8.25229 1.4257C7.3339 0.538697 6.10388 0.0478858 4.82713 0.0589804C3.55038 0.070075 2.32906 0.582188 1.42623 1.48502C0.523395 2.38785 0.0112815 3.60917 0.00018692 4.88592C-0.0109077 6.16267 0.479906 7.3927 1.36691 8.31108L18.5852 25.5294L1.36691 42.7477C0.479906 43.6661 -0.0109077 44.8961 0.00018692 46.1729C0.0112815 47.4496 0.523395 48.6709 1.42623 49.5738C2.32906 50.4766 3.55038 50.9887 4.82713 50.9998C6.10388 51.0109 7.3339 50.5201 8.25229 49.6331L25.4706 32.4148L42.6889 49.6331C43.6073 50.5201 44.8373 51.0109 46.1141 50.9998C47.3908 50.9887 48.6121 50.4766 49.515 49.5738C50.4178 48.6709 50.9299 47.4496 50.941 46.1729C50.9521 44.8961 50.4613 43.6661 49.5743 42.7477L32.356 25.5294L49.5743 8.31108C50.4872 7.39793 51 6.15959 51 4.86839C51 3.57719 50.4872 2.33886 49.5743 1.4257Z" />
                    </svg>
                </a>
                <MainMenu />
            </div>
        </>
    )
}