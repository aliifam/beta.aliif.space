import ContactForm from "../components/contact-form";
import MenuBar from "../components/menu-bar";
import Head from "next/head";

export default function ContactPage() {
    return (
        <>
        <Head>
            <title>Contact Me | Aliif Arief's Homepage</title>
            <meta name="description" content="page for contact me" />
            <link rel="icon" href="/favicon.svg" />
        </Head>
        <div className="bg-line h-screen flex">
            <div className="container max-w-4xl h-screen mx-auto flex items-center">
                <div className="container flex flex-col mx-4 lg:mx-0" data-aos="fade-down" data-aos-delay="200">
                <ContactForm/>
                </div>
            </div>
            <MenuBar/>
        </div>
        </>
    )
}