import './FloatingActions.css'

const PHONE = '9036348560'
const WHATSAPP_NUMBER = '919036348560'

export default function FloatingActions() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi Vinayaka Steel, I would like a quotation.')}`

  return (
    <div className="floating-actions" aria-label="Quick contact actions">
      <a className="floating-action whatsapp" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        WhatsApp
      </a>
      <a className="floating-action call" href={`tel:${PHONE}`}>
        Call
      </a>
    </div>
  )
}
