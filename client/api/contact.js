import { getDB } from "./_lib/db.js";
import nodemailer from "nodemailer";

// --------------------
// Validation helper
// --------------------
const validateInput = (data) => {
  const { name, email, stage } = data;

  if (!name || !email || !stage) {
    return { valid: false, error: "All fields are required" };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { valid: false, error: "Invalid email format" };
  }

  const validStages = [
    "Idea / Pre-Revenue",
    "Early Traction ($1k - $10k MRR)",
    "Growth Stage ($10k - $100k MRR)",
    "Scaling ($100k+ MRR)",
  ];

  if (!validStages.includes(stage)) {
    return { valid: false, error: "Invalid stage selected" };
  }

  return { valid: true };
};

// --------------------
// Main handler
// --------------------
export default async function handler(req, res) {
  console.log("🔥 /api/contact hit");
  // CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, error: "Method not allowed. Use POST." });
  }

  try {
    // Validate input
    const validation = validateInput(req.body);
    if (!validation.valid) {
      return res
        .status(400)
        .json({ success: false, error: validation.error });
    }

    const { name, email, stage } = req.body;

    // ✅ CONNECT VIA SHARED CLIENT
    const db = await getDB();

    const result = await db.collection("contacts").insertOne({
      name,
      email,
      stage,
      createdAt: new Date(),
      source: "discovery_call_form",
    });

    // --------------------
    // OPTIONAL: EMAIL (keep disabled for now)
    // --------------------
    /*
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: process.env.MAIL_USER,
      subject: "🔔 New Discovery Call Request - CRESIA",
      text: `
Name: ${name}
Email: ${email}
Stage: ${stage}
      `,
    });
    */

    return res.status(200).json({
      success: true,
      id: result.insertedId.toString(),
      message: "Form submitted successfully",
    });
  } catch (error) {
    console.error("❌ Contact API error:", error);

    return res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
}
