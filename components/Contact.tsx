import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const[name , setName]=useState("")
    const[email , setEmail]=useState("")
    const[message , setMessage]=useState("")

  const formRef = useRef<HTMLFormElement | null>(null);
  useEffect(() => {
    formRef.current = document.querySelector("form");
  }, []);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    const currentForm = formRef.current;
    // this prevents sending emails if there is no form.
    // in case currentForm cannot possibly ever be null,
    // you could alert the user or throw an Error, here 
    if (currentForm == null) return;

    emailjs
      .sendForm(
        "service_u600vr6",
        "template_utlwu09",
        currentForm,
        "OCohwIeK8HYPMgoM1"
      )
      .then(
        (result) => {
          console.log("result")
        },
        (error) => {
          // show the user an error
        }
      );
  };


  const handleSubmit = (e: any) => {
    e.preventDefault();
     sendEmail(e);
     setName("")
     setEmail("")
     setMessage("")
  };

  return (
    <>
      <div
        className="flex flex-col items-center 
    justify-center lg:ml-10
    transition
    duration
    "
      >
        <motion.div className="mt-10 flex flex-row justify-center  lg:justify-around w-[80%] ">
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            className="flex flex-col w-[80%] lg:w-[40%] "
          >
            <motion.h3
              initial={{ y: -100, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
              className="text-background-color text-center text-3xl mt-2 mb-8 font-bold uppercase flex flex-col font-[Poppins] items-center justify-start gap-1"
            >
              {/* <svg
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
            >
              <path
                d="M14.5.5l-6 6m0 0V3m0 3.5H12M2.5.5h2.22a1 1 0 01.97.757l.585 2.345a1 1 0 01-.654 1.19l-1.108.37a1.21 1.21 0 00-.804 1.385 6.047 6.047 0 004.744 4.744 1.21 1.21 0 001.385-.804l.297-.893a1 1 0 011.396-.578l2.416 1.208a1 1 0 01.553.894V12.5a2 2 0 01-2 2h-2c-5.523 0-10-4.477-10-10v-2a2 2 0 012-2z"
                stroke="currentColor"
              ></path>
            </svg> */}
              Contact us
              <p className="font-light text-base normal-case">
                We'd love to hear from you!
              </p>
            </motion.h3>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: { duration: 0.5, delay: 0.15 },
              }}
              className="w-full flex flex-col font-[Poppins]"
            >
              <label htmlFor="name" className="text-xl mb-2">
                Name:
              </label>
              <input
                onChange={(e) => {
                  setName(e.target.value)
                }}
                value={name}
                autoComplete="off"
                name="name"
                id="name"
                className="text-black rounded-lg border-2 p-2 md:mb-9 mb-4 text-xl outline-none"
                type="text"
              />
            </motion.div>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: { duration: 0.5, delay: 0.3 },
              }}
              className="w-full flex flex-col font-[Poppins]"
            >
              <label htmlFor="email" className="text-xl mb-2">
                Email:
              </label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                value={email}
                autoComplete="off"
                name="email"
                id="email"
                className="text-black rounded-lg border-2  p-2 md:mb-9 mb-4 text-xl outline-none"
                type="email"
              />
            </motion.div>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: { duration: 0.5, delay: 0.45 },
              }}
              className="w-full flex flex-col font-[Poppins]"
            >
              <label htmlFor="message" className="text-xl mb-2">
                Message:
              </label>
              <textarea
                onChange={(e) => {
                  setMessage(e.target.value)
                }}
                value={message}
                id="message"
                name="message"
                className="text-black rounded-lg border-2  p-1 mb-9 text-xl outline-none"
                rows={5}
                cols={5}
              />
            </motion.div>
            <motion.button
              type="submit"
              onClick={handleSubmit}
              viewport={{ once: true }}
              whileInView={{ scale: 1.1 }}
              whileHover={{ scale: 1.2 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 6,
              }}
              className="bg-[#425cee] text-[#fffffffb] shadow-lg hover:text-white hover:bg-background-color text-xl rounded px-9 py-2 w-max mx-auto font-[Poppins]"
            >
              Submit
            </motion.button>
          </motion.form>
          <motion.div
            initial={{ x: 100 }}
            viewport={{ once: true }}
            whileInView={{ x: 0, transition: { duration: 1 } }}
            className="text-white hidden lg:flex ml-10"
          >
            <Image
              src="/images/undraw_contact_us_re_4qqt.svg"
              height={400}
              width={600}
              alt="Contact"
            />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Contact;
