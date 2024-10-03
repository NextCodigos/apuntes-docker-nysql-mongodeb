# Usa la imagen oficial de Node.js 18
FROM node:18

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el archivo package.json y package-lock.json (si existe)
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Expone el puerto que usará la aplicación (ajústalo según el puerto que use tu app)
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["node", "index.js"]
