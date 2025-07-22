import emailjs from 'emailjs-com';

const SERVICE_ID = 'your_service_id';
const TEMPLATE_ID = 'your_template_id';
const USER_ID = 'your_user_id';

export const sendEmail = async (templateParams: {
  from_name: string;
  from_email: string;
  message: string;
}) => {
  try {
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      USER_ID
    );
    return response;
  } catch (error) {
    throw error;
  }
};