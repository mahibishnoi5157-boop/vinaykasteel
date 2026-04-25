import { useState } from 'react'
import './ContactForm.css'

const inquiryTypes = [
  'Balcony Railing',
  'Staircase Railing',
  'Glass Railing',
  'MS Fabrication',
  'CNC Laser Cutting',
  'Gates & Grills',
  'Custom Project',
  'Other'
]

export default function ContactForm() {
  const [status, setStatus] = useState('') // 'sending' | 'success' | 'error'
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', phone: '', inquiryType: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name *</label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          placeholder="Your name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email *</label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          placeholder="your@email.com"
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone Number *</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          required
          placeholder="e.g. 9036348560"
        />
      </div>
      <div className="form-group">
        <label htmlFor="inquiryType">Type of Inquiry *</label>
        <select
          id="inquiryType"
          name="inquiryType"
          value={form.inquiryType}
          onChange={handleChange}
          required
        >
          <option value="">Select...</option>
          {inquiryTypes.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          placeholder="Brief description of your project or question"
        />
      </div>
      {status === 'success' && (
        <p className="form-message success">Thank you! We will get back to you soon.</p>
      )}
      {status === 'error' && (
        <p className="form-message error">Something went wrong. Please call us at 9036348560.</p>
      )}
      <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}
