const sgMail = require('@sendgrid/mail');
const rateLimit = require('express-rate-limit');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const runtime = 'edge';

const apiLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 2,
  message: 'Too many requests from this IP, please try again after 10 minutes',
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

async function handler(req, res) {
  await runMiddleware(req, res, apiLimiter);
  if (req.method === 'POST') {
    const { emailId: from, subject, message } = req.body;
    try {
      const msg = {
        to: 'dev.sivaramp@gmail.com',
        from: {
          name: from,
          email: 'me@sivaramp.com',
        },
        subject,
        text: message,
      };
      await sgMail.send(msg);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message || error });
    }
  } else {
    res.status(404).json({ error: 'Not Found' });
  }
}

export default handler;
