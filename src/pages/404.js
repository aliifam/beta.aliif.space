import Link from "next/link"
import Head from "next/head"

export default function Custom404() {
    return (
        <>
            <Head>
                <title>404 Page Not Found!</title>
                <link rel="icon" href="/favicon.svg" />
            </Head>
            <div className="h-screen w-screen bg-line flex items-center justify-center">
                <div className="bg-white container flex flex-col items-center justify-center w-fit h-fit filter shadow p-8 hover:shadow-xl transition-all rounded-xl" data-aos="zoom-in">
                    <h1 className="font-sans text-6xl font-black">404</h1>
                    <p className="">I am sorry but page you looking for is not found</p>
                    <Link href="/">
                        <a className="underline font-bold mt-5">Return to the Home.</a>
                    </Link>
                </div>
            </div>
        </>
    )
}