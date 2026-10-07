import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));

export async function POST(req: Request) {
  try {
    const b = await req.json();
    const { name, email, phone, room, checkIn, checkOut, guests, message } = b;

    if (!name || !email || !phone || !room || !checkIn || !checkOut || !guests) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Azure Bay Bookings" <${process.env.GMAIL_USER}>`,
      to: process.env.BOOKING_TO_EMAIL,
      replyTo: email,
      subject: `New booking request: ${room} (${checkIn} to ${checkOut})`,
      html: `
        <h2>New Booking Request</h2>
        <table cellpadding="6">
          <tr><td><b>Name</b></td><td>${esc(String(name))}</td></tr>
          <tr><td><b>Email</b></td><td>${esc(String(email))}</td></tr>
          <tr><td><b>Phone</b></td><td>${esc(String(phone))}</td></tr>
          <tr><td><b>Room</b></td><td>${esc(String(room))}</td></tr>
          <tr><td><b>Check-in</b></td><td>${esc(String(checkIn))}</td></tr>
          <tr><td><b>Check-out</b></td><td>${esc(String(checkOut))}</td></tr>
          <tr><td><b>Guests</b></td><td>${esc(String(guests))}</td></tr>
          <tr><td><b>Requests</b></td><td>${esc(String(message || "-"))}</td></tr>
        </table>`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}