import SocialIcon from "./social-icon";
import MenuBar from "./menu-bar";
import MailButton from "./mail-abs";

export default function Background() {

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
            <MailButton/>
            <MenuBar/>
        </div>
    )
}