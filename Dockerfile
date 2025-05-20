# Usa una imagen ligera de Node.js
FROM node:18-alpine

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de configuración (package.json, package-lock.json)
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del proyecto
COPY . .

# Construye la aplicación para producción
RUN npm run build

# Expone el puerto donde corre Vite (normalmente 5173)
EXPOSE 5173

# Comando para iniciar el servidor de desarrollo (opcional)
# CMD ["npm", "run", "dev"]

# O, para servir la versión de producción (recomendado)
CMD ["npm", "run", "preview"]
