export default function ContactForm() {
    return (
        <>
        <h1 className="font-bold font-serif text-5xl sm:text-6xl">Contact Me</h1>
        <p className="font-serif text-lg leading-none">fill the form below and click send to go to my mail box.</p>
        <form action="" method="post" className="font-sans mt-4">
            <label className="block" htmlFor="nama">Name :</label>
            <input className="h-11 w-full lg:w-7/12 border-2 border-gray-300 rounded p-2 mb-3" type="text" name="nama" id="" placeholder="your name"/>
            <label className="block" htmlFor="email">Email :</label>
            <input className="h-11 w-full lg:w-7/12 border-2 border-gray-300 rounded p-2 mb-3" type="email" name="email" id="" placeholder="email address"/>
            <label className="block" htmlFor="message">Message :</label>
            <textarea className="block max-h-40 w-full lg:w-7/12 border-2 border-gray-300 rounded p-2 mb-3" name="message" id="" placeholder="your message"/>
            <button className="bg-black text-white p-2 w-20 lg:w-2/12 rounded font-bold text-lg mt-4" type="submit">Send</button>
        </form>
        </>
    )
}