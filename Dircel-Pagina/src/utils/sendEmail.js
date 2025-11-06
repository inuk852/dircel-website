export async function sendEmail(formData) {
  try {
    const res = await fetch("http://localhost:5000/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    if (data.success) {
      return { success: true, message: "✅ ¡Mensaje enviado con éxito!" };
    } else {
      return { success: false, message: "❌ Hubo un error al enviar el mensaje." };
    }
  } catch (error) {
    console.error("Error:", error);
    return { success: false, message: "❌ No se pudo conectar con el servidor." };
  }
}