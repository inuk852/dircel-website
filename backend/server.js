import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.post("/send-email", async (req, res) => {
  // Usa los mismos nombres del frontend
  const { name, email, message } = req.body;

  try {
    await resend.emails.send({
      from: "Dircel Abogados <contacto@dircelabogados.com>",
      to: process.env.EMAIL_TO,
      subject: `Nuevo mensaje de ${name}`,
      html: `
        <h2>Nuevo mensaje del formulario de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Correo:</strong> ${email}</p>
        <p><strong>Mensaje:</strong><br>${message}</p>
      `,
    });

    console.log("Correo enviado con Resend ✅");
    res.status(200).json({ success: true, message: "Correo enviado correctamente" });
  } catch (error) {
    console.error("Error al enviar correo:", error);
    res.status(500).json({ success: false, message: "Error al enviar el correo", error });
  }
});


// Ruta base (útil para probar que Render responde)
app.get("/", (req, res) => {
  res.send("🚀 Servidor backend de Dircel funcionando correctamente");
});

app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en puerto ${PORT}`);
});
