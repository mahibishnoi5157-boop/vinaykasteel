import express from 'express'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

// Contact form submission - stores in memory for demo; replace with DB or email service
const submissions = []

app.post('/api/contact', (req, res) => {
  try {
    const { name, email, phone, inquiryType, message } = req.body

    if (!name || !email || !phone || !inquiryType) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, phone, and inquiry type are required.'
      })
    }

    const submission = {
      id: Date.now(),
      name,
      email,
      phone,
      inquiryType,
      message: message || '',
      createdAt: new Date().toISOString()
    }

    submissions.push(submission)

    // In production: send email (e.g. Nodemailer), save to DB, or notify Sunil Kumar
    console.log('New contact submission:', submission)

    res.status(201).json({
      success: true,
      message: 'Thank you! We will get back to you soon.'
    })
  } catch (err) {
    console.error(err)
    res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again or call 9606079929.'
    })
  }
})

// Optional: health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' })
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
