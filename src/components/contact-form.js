import { useState } from "react";
import classNames from "classnames";

import toast from "react-hot-toast";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const submitForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch("/api/submit-form", {
      method: 'POST',
      body: JSON.stringify({ name, email, message }),
    });

    if (res.status === 201) {
      toast("Message sent", { type: "success" });
      setLoading(false);
      setName("")
      setEmail("")
      setMessage("")
    } else {
      toast("sorry error", { type: "error" });
      setLoading(false);
      console.log('error')
    }
  };

  return (
    <>
      <h1 className="font-bold font-serif text-5xl sm:text-6xl">Contact Me</h1>
      <p className="font-serif lg:text-lg leading-none">
        fill the form below and click send to go to my mail box.
      </p>
      <form className="mt-6" onSubmit={submitForm}>
        <label className="block" htmlFor="name">
          Name :
        </label>
        <input
          className="h-11 w-full lg:w-7/12 border-2 border-gray-300 rounded p-2 mb-3"
          type="text"
          name="nama"
          id="name"
          placeholder="your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label className="block" htmlFor="email">
          Email :
        </label>
        <input
          className="h-11 w-full lg:w-7/12 border-2 border-gray-300 rounded p-2 mb-3"
          type="email"
          name="email"
          id="email"
          placeholder="email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label className="block" htmlFor="message">
          Message :
        </label>
        <textarea
          className="block max-h-40 w-full lg:w-7/12 border-2 border-gray-300 rounded p-2 mb-3"
          name="message"
          id="message"
          placeholder="your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button
          className="flex items-center bg-black text-white px-4 py-2 w-fit rounded font-bold text-lg mt-4"
          type="submit"
          disabled={loading}
        >
          <svg className={classNames("animate-spin -ml-1 mr-2 h-5 w-5 text-white", loading ? "" : "hidden")} viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span className={classNames(loading ? "" : "hidden")}>Sending</span>
          <span className={classNames(loading ? "hidden" : "")}>Send</span>
          <svg xmlns="http://www.w3.org/2000/svg" className={classNames("h-5 w-5 ml-2", loading ? "hidden" : "")} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </form>
    </>
  );
}
