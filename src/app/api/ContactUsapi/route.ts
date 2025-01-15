import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    // Parse the request body
    const data = await req.json();
    console.log(JSON.stringify(data, null, 2))

    // Configure the email transport using SMTP (for example, using Gmail)
    const transporter = nodemailer.createTransport({
      host: "smtp.titan.email",
      port: 465,
      secure: true,
      auth: {
        user: "info@innate-nw.com",
        pass: "Innate@123",
      },
    });

    // Create a dynamic HTML email template
    const emailTemplate = `
    <div
      style="
        min-height: 100vh;
       
        padding-left: 70px;
        max-width: 900px;
        color: white;
        background: linear-gradient(to left, #0e1637 0%, #080a1c 25%, #000000 100%);
      "
    >
      <!-- Logo at the top -->
     
       <p
        style="
          font-size: 62px;
          font-weight: 600;
          color: #ffffffe5;
          max-width: 900px;
          padding-top: 40px;
          text-align: center;
        "
      >
       Innate
      </p>
  
      <p style="font-size: 32.59px; font-weight: 600; ">Dear Client,</p>
      <p
        style="
          font-size: 22px;
          font-weight: 400;
          color: #ffffffe5;
          max-width: 900px;
          margin-top: 10px;
        "
      >
        Thank you for starting your project with Innate. We look forward to working with you! Below, you will find the details of your project. A team member will be reaching out to you soon to book a consultation.
      </p>
      <p style="font-size: 38.59px; font-weight: 600; margin-top: 40px;">Consultation Details</p>
      <div
        style="
          background-color: #ffffff33;
          height: 1px;
          width: 100%;
          margin-top: 20px;
          margin-bottom: 20px;
        "
      ></div>
  
      <div style="display: flex; margin-bottom: 20px;">
        <p
          style="
            font-size: 22px;
            min-width: 300px;
            font-weight: 500;
            color: #ffffffb2;
          "
        >
          Created on:
        </p>
        <p style="font-size: 22px; font-weight: 500;">${new Date().toLocaleDateString()}</p>
      </div>
  
      <div style="display: flex; margin-bottom: 20px;">
        <p
          style="
            font-size: 22px;
            min-width: 300px;
            font-weight: 500;
            color: #ffffffb2;
          "
        >
          Name:
        </p>
        <p style="font-size: 22px; font-weight: 500;">${data.name}</p>
      </div>
  
      <div style="display: flex; margin-bottom: 20px;">
        <p
          style="
            font-size: 22px;
            min-width: 300px;
            font-weight: 500;
            color: #ffffffb2;
          "
        >
          Email Address:
        </p>
        <p style="font-size: 22px; font-weight: 500;">${data.email}</p>
      </div>
  
      <div style="display: flex; margin-bottom: 20px;">
  <p
    style="
      font-size: 22px;
      min-width: 300px;
      font-weight: 500;
      color: #ffffffb2;
    "
  >
    Phone Number:
  </p>
  <p style="font-size: 22px; font-weight: 500;">${data.phone}
  </p>
</div>

  
     <div style="display: flex; margin-bottom: 20px;">
        <p
          style="
            font-size: 22px;
            min-width: 300px;
            font-weight: 500;
            color: #ffffffb2;
          "
        >
          Project Address:
        </p><br/>
        <p style="font-size: 22px; font-weight: 500;">${data.projectAddress}</p>
      </div>
  
      <div style="display: flex; margin-bottom: 20px;">
        <p
          style="
            font-size: 22px;
            min-width: 300px;
            font-weight: 500;
            color: #ffffffb2;
          "
        >
          Project Type:
        </p>
        <p style="font-size: 22px; font-weight: 500;">${data.projectType}</p>
      </div>
  
      <div style="margin-bottom: 20px;">
        <p
          style="
            font-size: 22px;
            min-width: 300px;
            font-weight: 500;
            color: #ffffffb2;
          "
        >
         Message:
        </p>
        <p style="font-size: 22px; font-weight: 500;">${data.message}</p>
      </div>
      
  
      <div
        style="
          background-color: #ffffff33;
          height: 1px;
          width: 100%;
          margin-top: 20px;
          margin-bottom: 20px;
        "
      ></div>
  
      <p style="font-size: 22px; font-weight: 500;">
        If you have any questions or need assistance, please contact our support
        team at <a style="color: #4591ca;" href="mailto:info@innate-nw.com">info@innate-nw.com</a>
      </p>
  
      <p style="font-size: 22px; font-weight: 500; padding-bottom:20px;">
        www.innate-nw.com
        <span style="margin: 0 20px;"> | </span>
        info@innate-nw.com
      </p>
  
      <!-- Social Media Links at the Bottom with Inline SVG Logos -->
    <!-- Social Media Links at the Bottom with Inline SVG Logos -->
<div style="text-align: left; margin-top: 30px; padding-bottom:50px;">
  <a href="https://www.facebook.com/innateaec" style="margin: 0 10px;">
    Facebook
  </a>
  <a href="https://www.linkedin.com/company/innate-nw/" style="margin: 0 10px;">
    Instagaram
  </a>
  <a href="https://www.instagram.com/innate_aec/" style="margin: 0 10px;">
   Linkedin
  </a>
</div>


    </div>
  `;

    // Set up email options
    const mailOptions = {
      from: "info@innate-nw.com", // Sender's email (from form submission)
      to: "info@innate-nw.com",
      subject: "New Form Submission",
      html: emailTemplate,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Return success response
    return NextResponse.json({
      success: true,
      message: "Data received and email sent successfully",
    });
  } catch (error: unknown) {
    // Cast error as `unknown`
    if (error instanceof Error) {
      // Check if error is an instance of Error
      console.error("Error sending email:", error);
      return NextResponse.json(
        { message: "Error processing request", error: error.message },
        { status: 400 }
      );
    } else {
      console.error("Unexpected error:", error);
      return NextResponse.json(
        { message: "Unexpected error", error: "Unknown error occurred" },
        { status: 400 }
      );
    }
  }
}
