interface AppointmentEmailProps {
  sessionType: string
  therapist: string
  date: string
  time: string
  name: string
  email: string
  phone: string
  isNewClient: boolean
  notes: string
}

export function generateAppointmentEmail(data: AppointmentEmailProps): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Appointment Request</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8f9fa;">
      <table role="presentation" style="width: 100%; border-collapse: collapse;">
        <tr>
          <td align="center" style="padding: 40px 0;">
            <table role="presentation" style="width: 600px; max-width: 100%; border-collapse: collapse; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
              <!-- Header -->
              <tr>
                <td style="padding: 40px 40px 24px; background: linear-gradient(135deg, #b37048 0%, #8b5a3c 100%); border-radius: 12px 12px 0 0;">
                  <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 300; letter-spacing: 0.5px;">
                    Root & Reflect
                  </h1>
                  <p style="margin: 8px 0 0; color: rgba(255,255,255,0.9); font-size: 14px;">
                    New Appointment Request
                  </p>
                </td>
              </tr>
              
              <!-- Content -->
              <tr>
                <td style="padding: 40px;">
                  <p style="margin: 0 0 24px; color: #1f2937; font-size: 16px; line-height: 1.6;">
                    A new appointment has been requested through the website.
                  </p>
                  
                  <!-- Appointment Details -->
                  <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f8fafc; border-radius: 8px; padding: 24px; margin-bottom: 24px;">
                    <tr>
                      <td>
                        <h2 style="margin: 0 0 20px; color: #1f2937; font-size: 18px; font-weight: 600;">
                          Appointment Details
                        </h2>
                        
                        <table role="presentation" style="width: 100%; border-collapse: collapse;">
                          <tr>
                            <td style="padding: 8px 0; color: #6b7280; font-size: 14px; width: 40%;">Session Type:</td>
                            <td style="padding: 8px 0; color: #1f2937; font-size: 14px; font-weight: 500;">${data.sessionType}</td>
                          </tr>
                          <tr>
                            <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Therapist:</td>
                            <td style="padding: 8px 0; color: #1f2937; font-size: 14px; font-weight: 500;">${data.therapist}</td>
                          </tr>
                          <tr>
                            <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Date:</td>
                            <td style="padding: 8px 0; color: #1f2937; font-size: 14px; font-weight: 500;">${data.date}</td>
                          </tr>
                          <tr>
                            <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Time:</td>
                            <td style="padding: 8px 0; color: #1f2937; font-size: 14px; font-weight: 500;">${data.time}</td>
                          </tr>
                          <tr>
                            <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Client Type:</td>
                            <td style="padding: 8px 0; color: #1f2937; font-size: 14px; font-weight: 500;">${data.isNewClient ? 'New Client' : 'Returning Client'}</td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                  
                  <!-- Client Information -->
                  <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f8fafc; border-radius: 8px; padding: 24px; margin-bottom: 24px;">
                    <tr>
                      <td>
                        <h2 style="margin: 0 0 20px; color: #1f2937; font-size: 18px; font-weight: 600;">
                          Client Information
                        </h2>
                        
                        <table role="presentation" style="width: 100%; border-collapse: collapse;">
                          <tr>
                            <td style="padding: 8px 0; color: #6b7280; font-size: 14px; width: 40%;">Name:</td>
                            <td style="padding: 8px 0; color: #1f2937; font-size: 14px; font-weight: 500;">${data.name}</td>
                          </tr>
                          <tr>
                            <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Email:</td>
                            <td style="padding: 8px 0; color: #1f2937; font-size: 14px; font-weight: 500;">
                              <a href="mailto:${data.email}" style="color: #b37048; text-decoration: none;">${data.email}</a>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Phone:</td>
                            <td style="padding: 8px 0; color: #1f2937; font-size: 14px; font-weight: 500;">
                              ${data.phone ? `<a href="tel:${data.phone}" style="color: #b37048; text-decoration: none;">${data.phone}</a>` : 'Not provided'}
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                  
                  ${data.notes ? `
                  <!-- Additional Notes -->
                  <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #fef3c7; border-left: 4px solid #f59e0b; border-radius: 4px; padding: 16px; margin-bottom: 24px;">
                    <tr>
                      <td>
                        <p style="margin: 0 0 8px; color: #92400e; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                          Additional Notes
                        </p>
                        <p style="margin: 0; color: #78350f; font-size: 14px; line-height: 1.6;">
                          ${data.notes}
                        </p>
                      </td>
                    </tr>
                  </table>
                  ` : ''}
                  
                  <p style="margin: 24px 0 0; color: #6b7280; font-size: 14px; line-height: 1.6;">
                    Please review and confirm this appointment at your earliest convenience.
                  </p>
                </td>
              </tr>
              
              <!-- Footer -->
              <tr>
                <td style="padding: 24px 40px; background-color: #f8fafc; border-radius: 0 0 12px 12px; border-top: 1px solid #e5e7eb;">
                  <p style="margin: 0; color: #9ca3af; font-size: 12px; text-align: center;">
                    This is an automated notification from Root & Reflect Psychotherapy<br>
                    <a href="https://rootandreflect.ca" style="color: #b37048; text-decoration: none;">rootandreflect.ca</a>
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `
}
