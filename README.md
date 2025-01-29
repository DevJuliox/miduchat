# 🌦️ Miduchat: 🧠 Proyecto AI SDK RAG - Chatbot con Recuperación de Información

Este es el proyecto de inicio basado en la guía de **AI SDK RAG de Vercel**, diseñado para construir un chatbot con capacidad de recuperación aumentada de generación (RAG).

El chatbot responderá únicamente con información que tenga almacenada en su base de conocimientos, permitiéndole almacenar y recuperar información de manera eficiente. Su aplicación abarca múltiples casos de uso, como atención al cliente o un sistema de notas inteligentes.
## 🏗 Tecnologías utilizadas
Este proyecto se construye con la siguiente pila tecnológicas:  
- **[Next.js](https://nextjs.org) 14 →** Framework para la interfaz web
- **[Vercel AI SDK](https://sdk.vercel.ai/docs) →** Manejo de modelos de IA

- **[OpenAI](https://openai.com) →** Generación de respuestas con IA
- **[Drizzle ORM](https://orm.drizzle.team) →** Gestión de base de datos
- **[Postgres](https://www.postgresql.org/) with [ pgvector ](https://github.com/pgvector/pgvector) →** Base de datos con soporte para búsqueda semántica
- **[shadcn-ui](https://ui.shadcn.com) and [TailwindCSS](https://tailwindcss.com) →** Estilos y componentes de UI
## 🚀 Funcionamiento del chatbot
### Almacenamiento de conocimiento:

**La API /api/load** permite cargar información en la base de conocimientos de PostgreSQL utilizando pgvector para almacenar embeddings semánticos.
Recuperación de información:

**La API /api/chat** recibe una pregunta del usuario, consulta en la base de datos usando embeddings y envía una respuesta utilizando OpenAI.
Interfaz web:

**Construida con Next.js 14 y TailwindCSS,** permite interactuar con el chatbot de forma visual.
Personalización y escalabilidad:

El proyecto está diseñado para ser fácilmente ampliado con nuevos modelos de IA, bases de datos o integraciones adicionales.
## 🎯 Casos de uso posibles
  - ✅ Atención al cliente automatizada
  - ✅ Base de conocimientos interactiva
  - ✅ Sistema de preguntas y respuestas
  - ✅ Gestión de información empresarial
  - ✅ "Segundo cerebro" para notas y aprendizaje

## 📂 Estructura del Proyecto
```
root/
├── .next/  # Archivos generados por Next.js
├── app/
│   ├── api/
│   │   ├── chat/
│   │   │   └── route.ts
│   │   ├── load/
│   │   │   └── route.ts
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   └── label.tsx
│   ├── AssistantMessage.tsx
│   ├── icons.tsx
│   ├── Loading.tsx
│   └── VideoCard.tsx
├── lib/
│   ├── actions/
│   │   └── resources.ts
│   ├── ai/
│   │   └── embedding.ts
│   ├── db/
│   │   ├── migrations/
│   │   ├── schema/
│   │   ├── index.ts
│   │   └── migrate.ts
│   ├── env.mjs
│   └── utils.ts
├── transcripciones/
│   ├── _HiEIoCVLQY.json
│   ├── _Ho7zkD1eJA.json
│   ├── -0UYMmplimA.json
├── node_modules/
├── public/
├── .env.example
├── .eslintrc.json
├── components.json
├── drizzle.config.ts
├── next.config.mjs
├── package.json
├── README.md
├── tailwind.config.ts
└── tsconfig.json

```
## 🛠️ Instalación y Ejecución

Sigue estos pasos para clonar y ejecutar el proyecto localmente:

### ⚙️ Configuración Adicional

1. **Agrega tu API Key:**
   - Renombra el archivo `.env.example` a `.env`.
   - Dentro de este archivo, configura la URL de la base de datos y otras variables necesarias, como la clave de API:

   ```bash
   root/
   ├── /.env
   DATABASE_URL=postgres://postgres:postgres@localhost:5432/{DB_NAME}
   # Añade tu Base de datos
   ```

### 📥 Pasos de Instalación
**1. Clona el repositorio:**

Primero, clona este repositorio en tu máquina local utilizando el siguiente comando:
```bash
  git clone https://github.com/DevJuliox/miduchat.git
```
**2. Instala las dependencias:**
Dirígete al directorio del proyecto y ejecuta el siguiente comando para instalar todas las dependencias necesarias:
```bash
npm install
```
**3. Inicia el servidor de desarrollo:**
Una vez instaladas las dependencias, puedes iniciar el servidor de desarrollo. Tienes dos opciones para hacerlo:
- Usando el comando:
```bash
  npm run dev
```
O alternativamente:
```bash
  npm start
```
Esto iniciará el servidor en modo desarrollo y podrás acceder a la aplicación en tu navegador usando  http://localhost:3000

**¡Con esto deberías poder configurar y correr el proyecto sin problemas! Si tienes algún problema durante la instalación o ejecución, no dudes en abrir un issue en el repositorio o contactar al equipo de soporte.**

## 🎥 Créditos y Agradecimientos  

Este proyecto fue desarrollado en directo a través de  
**[TikTok](https://www.tiktok.com)**, **[Twitch](https://www.twitch.tv)** y **[YouTube](https://www.youtube.com)**,  
donde compartimos todo el proceso en tiempo real.  

Además, en YouTube se encuentra disponible un video detallado con el paso a paso de la creación del proyecto y su funcionalidad.  

📺 **Mira el video en YouTube:**  
🔗 [Enlace al video de YouTube](#)  

📱 **Explicación y demostración en TikTok:**  
🔗 [Enlace al video de TikTok](#)  

Agradecemos a todos los que siguieron el desarrollo en vivo, dejaron comentarios y contribuyeron con ideas. ¡Este proyecto es para ustedes! 🚀  
