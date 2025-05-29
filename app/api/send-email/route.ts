import EmailSchema from "@/app/components/shema";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: "Acme <onboarding@resend.dev>",
  to: ["delivered@resend.dev"],
  subject: "hello world",
  html: "<p>it works!</p>",
});
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validation = EmailSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(validation.error, { status: 400 });
    }

    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["delivered@resend.dev"],
      subject: "hello world",
      html: "<p>it works!</p>",
    });

    return NextResponse.json({ message: "send succese", id: data.data?.id });
  } catch (err) {
    return NextResponse.json({ message: "email not sent", error: err });
  }
}
