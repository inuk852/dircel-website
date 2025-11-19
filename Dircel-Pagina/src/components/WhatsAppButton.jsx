import './WhatsAppButton.css';

function WhatsAppButton() {
  const phone = "573117026584"; // ← Cambia por tu número (sin espacios)

  return (
    <a
      href={`https://wa.me/${phone}`}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="/whatsapp.png"  /* Si quieres usa un PNG tuyo */
        alt="WhatsApp"
      />
    </a>
  );
}

export default WhatsAppButton;