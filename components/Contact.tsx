"use client";

import { motion } from "framer-motion";
import toast from "react-hot-toast";

import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./SubmitBtn";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="w-[min(100%, 38rem)]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2>Contact me</h2>
      <p className="">
        Please, contact me directly at{" "}
        <a className="underline" href="mailto:sytnikov.alexey@gmail.com">
          sytnikov.alexey@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error)
            return
          }

          toast.success("Email sent successfully.")
        }}
      >
        <input
          name="senderEmail"
          type="email"
          placeholder="Your email"
          required
          maxLength={500}
        />
        <textarea
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
