# Sección 7: Generando el build de producción y despliegues en Github Pages

> npm run build

- crea carpeta build con los archivos necesarios para producción
- Al ejecutar index.html se producen errores ya que la App está preparada para ser arrancada desde un Servidor

> Creando un servidor LOCAL [https://www.npmjs.com/package/http-server]

- En Windows en consola como Adm:
  - npm install --global http-server

> Ejecutar una App desde server Local

- Ubicado en el directorio build de la App
- http-server -o
- CTRL-C to stop the server

> GitHub: Desplegando la App en Github Pages

- verificar github en equipo: > git --version
- Ya instalado git, configurar Git Global en mi equipo:
  - https://docs.github.com/en/enterprise/2.13/user/articles/setting-your-username-in-git
- Configurando: Name y Email:
  - git config --global user.name "Rodrigo-RM"
  - git config --global user.email "rexcelsolutions@gmail.com"

> Creando Repositorio de Git

- 1. git init
- 2. git add .
- 3. git commit -m "First commit GifExpert"
- 4. renombrar carpeta "build" por "docs" :git puede desplegar aplicaciones desde build o docs
- 5. por cambio de nombre de build: git commit -m "GifExpert: docs agregado"

> Cargar APP en GitHub:

- Crear Repositorio para la App: react-gifexpertapp
- git remote add origin https://github.com/Rodrigo-RM/react-gifexpertapp.git
- git branch -M main
- git push -u origin main

> Posible error de Git Aplicar los 2 y volver a git remote add origin....

- git remote set-url origin https://github.com/Rodrigo-RM/react-gifexpertapp.git
- git remote remove origin

> en GitHUB:

- Settings
- GitHub Pages
- branch: main /docs
  - SAVE
  * esperar que quede en verde el mensaje:
  * Esperar: Cuando indique: y Refrescar
  * Your site is ready to be published at https://rodrigo-rm.github.io/react-gifexpertapp/
  * luego dar click para ver la aplicación
