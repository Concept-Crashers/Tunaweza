import { FaWhatsapp } from 'react-icons/fa'

function WhatsAppFloat() {
  const message = encodeURIComponent('Hello Tunaweza, I have a question.')

  return (
    <a
      className="whatsapp-float"
      href={`https://wa.me/256787197884?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Ask Tunaweza a question on WhatsApp"
    >
      <FaWhatsapp aria-hidden="true" size={27} />
      <span>Chat with us</span>
    </a>
  )
}

export default WhatsAppFloat
