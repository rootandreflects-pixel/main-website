// Email sent to user when admin confirms their appointment

interface AppointmentConfirmedProps {
  name: string
  sessionType: string
  therapist: string
  date: string
  time: string
}

export function generateAppointmentConfirmed(props: AppointmentConfirmedProps) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Appointment Confirmed</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f8f9fa;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" style="max-width: 600px; width: 100%; background-color: #ffffff; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          
          <!-- Header -->
          <tr>
            <td style="padding: 40px 40px 30px; text-align: center; border-bottom: 1px solid #e9ecef;">
              <h1 style="margin: 0; font-size: 28px; font-weight: 300; color: #2d3748; letter-spacing: -0.5px;">
                Root & Reflect
              </h1>
              <p style="margin: 8px 0 0; font-size: 14px; color: #718096;">
                Psychotherapy & Counseling
              </p>
            </td>
          </tr>

          <!-- Main Content -->
          <tr>
            <td style="padding: 40px;">
              <div style="text-align: center; margin-bottom: 30px;">
                <div style="display: inline-block; width: 64px; height: 64px; background-color: #d4edda; border-radius: 50%; line-height: 64px;">
                  <span style="font-size: 32px;">✓</span>
                </div>
              </div>

              <h2 style="margin: 0 0 16px; font-size: 24px; font-weight: 600; color: #2d3748; text-align: center;">
                Appointment Confirmed
              </h2>
              
              <p style="margin: 0 0 24px; font-size: 16px; line-height: 1.6; color: #4a5568; text-align: center;">
                Hi ${props.name},
              </p>

              <p style="margin: 0 0 24px; font-size: 16px; line-height: 1.6; color: #4a5568; text-align: center;">
                Great news! Your appointment has been <strong>confirmed</strong>. We look forward to seeing you.
              </p>

              <!-- Appointment Details -->
              <div style="background-color: #d4edda; border-left: 4px solid #28a745; border-radius: 8px; padding: 24px; margin: 32px 0;">
                <h3 style="margin: 0 0 16px; font-size: 14px; font-weight: 600; color: #155724; text-transform: uppercase; letter-spacing: 0.5px;">
                  Appointment Details
                </h3>
                
                <table role="presentation" style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; font-size: 14px; color: #155724; width: 40%;">Session Type:</td>
                    <td style="padding: 8px 0; font-size: 14px; color: #155724; font-weight: 600;">${props.sessionType}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-size: 14px; color: #155724;">Therapist:</td>
                    <td style="padding: 8px 0; font-size: 14px; color: #155724; font-weight: 600;">${props.therapist}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-size: 14px; color: #155724;">Date:</td>
                    <td style="padding: 8px 0; font-size: 14px; color: #155724; font-weight: 600;">${props.date}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-size: 14px; color: #155724;">Time:</td>
                    <td style="padding: 8px 0; font-size: 14px; color: #155724; font-weight: 600;">${props.time}</td>
                  </tr>
                </table>
              </div>

              <div style="background-color: #fff3cd; border-radius: 8px; padding: 16px; margin: 24px 0;">
                <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #856404;">
                  <strong>Important:</strong> Please arrive 10 minutes early for your first visit to complete any necessary paperwork.
                </p>
              </div>

              <p style="margin: 24px 0 0; font-size: 14px; line-height: 1.6; color: #718096; text-align: center;">
                If you need to reschedule or have any questions, please contact us at (555) 123-4567 or reply to this email.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 30px 40px; background-color: #f7fafc; border-top: 1px solid #e9ecef; border-radius: 0 0 12px 12px;">
              <p style="margin: 0; font-size: 12px; line-height: 1.5; color: #a0aec0; text-align: center;">
                Root & Reflect Psychotherapy<br>
                123 Healing Lane, Suite 200, Wellness City, WC 12345<br>
                <a href="tel:5551234567" style="color: #667eea; text-decoration: none;">(555) 123-4567</a> · 
                <a href="mailto:hello@rootandreflect.com" style="color: #667eea; text-decoration: none;">hello@rootandreflect.com</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim()
}
