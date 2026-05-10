import * as React from "react";

interface Props { name: string; }

export const WelcomeEmail = ({ name }: Props) => (
  <div style={{ fontFamily: "Arial, sans-serif", maxWidth: 600, margin: "0 auto" }}>
    <h1 style={{ color: "#4F46E5" }}>Welcome, {name}! 🎉</h1>
    <p>We're thrilled to have you on board. Start exploring today.</p>
    <p style={{ color: "#6B7280", fontSize: 14 }}>If you didn't sign up, ignore this email.</p>
  </div>
);

