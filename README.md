# ⚖️ Dircel Abogados Asociados S.A.S

Sitio web corporativo desarrollado para **Dircel Abogados Asociados S.A.S**, una firma especializada en asesoría jurídica y temas pensionales.  
El proyecto está compuesto por un **frontend en React** y un **backend con Node.js + Express**, integrados para manejar formularios de contacto funcionales que envían correos electrónicos directamente al cliente mediante **Nodemailer**.

---

## 🚀 Tecnologías utilizadas

### 🖥️ Frontend
- **React.js** (Vite)
- **CSS modular**
- Diseño responsive y profesional
- Secciones: Inicio, Nosotros, Servicios, Contacto

### ⚙️ Backend
- **Node.js + Express**
- **Nodemailer** para envío de correos
- **dotenv** para variables de entorno
- **CORS** habilitado para comunicación con el frontend

---

## 🧩 Estructura del proyecto

```
/mi-proyecto
 ├── /frontend
 │   ├── /src
 │   │   ├── /components
 │   │   ├── /images
 │   │   └── App.jsx
 │   ├── package.json
 │   └── .env
 │
 ├── /backend
 │   ├── server.js
 │   ├── package.json
 │   ├── .env
 │   └── /node_modules
 │
 ├── .gitignore
 └── README.md
```

---

## 🔐 Variables de entorno

Para mantener seguras las credenciales del correo y evitar exponer información sensible, se utilizan variables de entorno.

En el archivo `.env` del **backend**, define:

```env
EMAIL_USER=tu_correo@gmail.com
EMAIL_PASS=tu_contraseña_de_aplicacion
EMAIL_TO=correo_destinatario@gmail.com
```

> ⚠️ Importante: **nunca subas tu archivo `.env` a GitHub**.  
> Ya está protegido mediante el archivo `.gitignore`.

---

## 🧰 Instrucciones de instalación

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/tuusuario/dircel-abogados.git
cd dircel-abogados
```

### 2️⃣ Instalar dependencias

#### Frontend
```bash
cd frontend
npm install
```

#### Backend
```bash
cd ../backend
npm install
```

---

## ▶️ Ejecución en desarrollo

### Iniciar el backend
```bash
cd backend
npm run dev
```

Por defecto corre en: **http://localhost:5000**

### Iniciar el frontend
```bash
cd ../frontend
npm run dev
```

Por defecto corre en: **http://localhost:5173**

---

## 🌐 Despliegue

### Frontend
Se recomienda usar:
- **Render**
- **Netlify**
- **Vercel**

### Backend
Desplegar en:
- **Render** (recomendado)
- **Railway**
- **Cyclic**

Durante el despliegue en Render, recuerda configurar las variables de entorno en la pestaña **Environment** del servicio.

---

## ✉️ Formulario de contacto

El formulario de contacto envía los datos ingresados por el usuario al backend mediante una petición `POST` a:

```
/send-email
```

Luego, el servidor utiliza **Nodemailer** para reenviar el mensaje al correo del cliente configurado en el `.env`.

---

## 👨‍💻 Desarrollado por

**Ernesto De La Torre Soto**  
💼 Desarrollador Frontend / Full Stack  
🚀 Proyecto desarrollado con fines profesionales para **Dircel Abogados Asociados S.A.S**
