import Stripe from 'stripe';
import express from 'express';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const router = express.Router();

router.post('/create-checkout-session/:id', async (req, res) => {
  const frontend = process.env.WEB_APP_URL;
  const { id } = req.params;
  const { client_email } = req.body;
  if (!id || !client_email) {
    return res
      .status(400)
      .json({ error: 'missing required session parameters' });
  }
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card', 'us_bank_account'],
      mode: 'payment',
      line_items: {},
      customer_email: client_email,
      success_url: `${domainUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${domainUrl}/canceled`,
    });
    res.status(200).json({ sessionId: session.id });
  } catch (error) {
    res.status(500).json({ error: e.message });
  }
});
