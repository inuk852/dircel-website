function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>© 2025 Dircel Abogados Asociados S.A.S — Todos los derechos reservados.</p>
      </div>

      <style jsx>{`
        .footer {
          background-color: #0f172a; /* azul marino profundo */
          color: #f1f5f9; /* texto claro */
          padding: 40px 20px;
          text-align: center;
          font-family: "Merriweather", "Times New Roman", serif;
          border-top: 2px solid #c5a157; /* línea dorada superior */
        }

        .footer .container {
          max-width: 900px;
          margin: 0 auto;
        }

        .footer p {
          font-size: 0.95rem;
          letter-spacing: 0.5px;
          color: #94a3b8;
          margin: 0;
          transition: color 0.3s ease;
        }

        .footer p:hover {
          color: #c5a157; /* efecto dorado al pasar el cursor */
        }

        @media (max-width: 600px) {
          .footer {
            padding: 30px 15px;
          }

          .footer p {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </footer>
  );
}

export default Footer;
