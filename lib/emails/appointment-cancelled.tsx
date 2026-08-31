// Email sent to user when appointment is cancelled

interface AppointmentCancelledProps {
  name: string
  sessionType: string
  date: string
  time: string
}

export function generateAppointmentCancelled(props: AppointmentCancelledProps) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Appointment Cancelled</title>
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
              <h2 style="margin: 0 0 16px; font-size: 24px; font-weight: 600; color: #2d3748; text-align: center;">
                Appointment Update
              </h2>
              
              <p style="margin: 0 0 24px; font-size: 16px; line-height: 1.6; color: #4a5568; text-align: center;">
                Hi ${props.name},
              </p>

              <p style="margin: 0 0 24px; font-size: 16px; line-height: 1.6; color: #4a5568; text-align: center;">
                Unfortunately, your appointment request could not be accommodated at this time.
              </p>

              <!-- Cancelled Appointment Details -->
              <div style="background-color: #f7fafc; border-radius: 8px; padding: 24px; margin: 32px 0;">
                <h3 style="margin: 0 0 16px; font-size: 14px; font-weight: 600; color: #718096; text-transform: uppercase; letter-spacing: 0.5px;">
                  Original Request
                </h3>
                
                <table role="presentation" style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; font-size: 14px; color: #718096; width: 40%;">Session Type:</td>
                    <td style="padding: 8px 0; font-size: 14px; color: #2d3748; font-weight: 500;">${props.sessionType}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-size: 14px; color: #718096;">Date:</td>
                    <td style="padding: 8px 0; font-size: 14px; color: #2d3748; font-weight: 500;">${props.date}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-size: 14px; color: #718096;">Time:</td>
                    <td style="padding: 8px 0; font-size: 14px; color: #2d3748; font-weight: 500;">${props.time}</td>
                  </tr>
                </table>
              </div>

              <p style="margin: 24px 0; font-size: 16px; line-height: 1.6; color: #4a5568; text-align: center;">
                We'd love to help you find another time that works better. Please contact us to arrange an alternative appointment.
              </p>

              <div style="text-align: center; margin: 32px 0;">
                <a href="tel:5551234567" style="display: inline-block; padding: 14px 32px; background-color: #667eea; color: #ffffff; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 16px;">
                  Call Us: (555) 123-4567
                </a>
              </div>

              <p style="margin: 24px 0 0; font-size: 14px; line-height: 1.6; color: #718096; text-align: center;">
                Or reply to this email and we'll help you schedule a new appointment.
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
