# Sección 7: Generando el build de producción y despliegues en Github Pages

> npm run build

- crea carpeta build con los archivos necesarios para producción
- Al ejecutar index.html se producen errores ya que la App está preparada para ser arrancada desde un Servidor

> Creando un servidor LOCAL [https://www.npmjs.com/package/http-server]

- En Windows consola como Administrador:
  - npm install --global http-server

> Ejecutar una App desde server Local

- Ubicado en el directorio build de la App
- http-server -o
- CTRL-C to stop the server

> GitHub: Desplegando la App en Github Pages

- verificar github en equipo: > git --version
- Ya instalado git, accesar y enlazar desde consola a Git con el proyecto:
  - https://docs.github.com/en/enterprise/2.13/user/articles/setting-your-username-in-git
- Enlace:
  > git config --global user.name "Rodrigo-RM"
  > git config --global user.email "rexcelsolutions@gmail.com"
