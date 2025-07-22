import emailjs from 'emailjs-com';

const SERVICE_ID = 'service_placeholder';
const TEMPLATE_ID = 'template_placeholder';
const USER_ID = 'user_placeholder';

export const sendEmail = async (templateParams) => {
  // Check if EmailJS is properly configured
  if (SERVICE_ID === 'service_placeholder' || 
      TEMPLATE_ID === 'template_placeholder' || 
      USER_ID === 'user_placeholder') {
    console.warn('EmailJS not configured. Email notification skipped.');
    return { status: 200, text: 'Email service not configured' };
  }

  try {
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      USER_ID
    );
    return response;
  } catch (error) {
    console.error('EmailJS Error:', error);
    throw error;
  }
};