import { useState } from "react";

import toast from "react-hot-toast";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/submit-form", {
      method: 'POST',
      body: JSON.stringify({ name, email, message }),
    });

    if (res.status === 201) {
      toast("Message sent", { type: "success" });
      setName("")
      setEmail("")
      setMessage("")
    } else {
      toast("sorry error", { type: "error" });
      console.log('error')
    }
  };

  return (
    <>
      <h1 className="font-bold font-serif text-5xl sm:text-6xl">Contact Me</h1>
      <p className="font-serif lg:text-lg leading-none">
        fill the form below and click send to go to my mail box.
      </p>
      <form onSubmit={submitForm}>
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
          className="bg-black text-white p-2 w-20 lg:w-2/12 rounded font-bold text-lg mt-4"
          type="submit"
        >
          Send
        </button>
      </form>
    </>
  );
}
