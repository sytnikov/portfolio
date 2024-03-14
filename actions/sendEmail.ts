"use server";

import React from "react";
import { Resend } from "resend";

import { getErrorMessage, validateString } from "@/lib/utils";
import ContactFormEmail from "@/email/ContactFormEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const message = formData.get("message");
  const senderEmail = formData.get("senderEmail");

  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <info@sytnikov.dev>",
      to: "sytnikov.alexey@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
}
