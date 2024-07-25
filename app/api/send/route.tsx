import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!); // Non-null assertion operator
const fromEmail = process.env.FROM_EMAIL!; // Non-null assertion operator

export async function POST(req: Request) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: ["mujin990417@gmail.com", email],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <h2>{email}</h2>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
