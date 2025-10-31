import EmailSchema from "@/app/components/shema";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const recieverEmail = process.env.RECEIVER_EMAIL!;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validation = EmailSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(validation.error, { status: 400 });
    }
    const { email, message, name, subject } = validation.data;
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [recieverEmail],
      subject: subject,
      html: `
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ message: "send succese", id: data.data?.id });
  } catch (err) {
    return NextResponse.json({ message: "email not sent", error: err });
  }
}
