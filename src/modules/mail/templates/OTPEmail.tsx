import * as React from "react";

interface Props { otp: string; expiresIn?: string; }

export const OTPEmail = ({ otp, expiresIn = "10 minutes" }: Props) => (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: 600, margin: "0 auto" }}>
        <h1 style={{ color: "#4F46E5" }}>Your OTP Code</h1>
        <div style={{
            background: "#F3F4F6", padding: 20, borderRadius: 8,
            fontSize: 32, fontWeight: "bold", textAlign: "center", letterSpacing: 8
        }}>
            {otp}
        </div>
        <p style={{ color: "#6B7280" }}>This code expires in <strong>{expiresIn}</strong>.</p>
    </div>
);