"use server";


import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: {
  name: string;
  email: string;
  message: string;
}) {
   console.log("Received form:", formData);
  console.log("API key exists:", !!process.env.RESEND_API_KEY);
  try {
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "manvendrachaturvedi99@gmail.com ", // Replace with your email
      subject: `Portfolio Contact from ${formData.name}`,
      replyTo: formData.email,
      html: `
        <h2>New Portfolio Contact</h2>

        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>

        <p><strong>Message:</strong></p>
        <p>${formData.message}</p>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false };
  }
}
