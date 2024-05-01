![Landing_Page](img/landing_page.png)
# IX CONANDINO - Congreso Internacional de Administracion

Este proyecto es una landing page para el IX CONANDINO Congreso Internacional de Administración, que se llevará a cabo en Cusco, Perú, del 20 al 22 de junio de 2024. La página web está diseñada para informar a los posibles asistentes sobre el congreso, su tema, sus oradores y cómo registrarse.

## 🧑‍💻 Tecnologias utilizadas
- **Astro:** Un framework de React para crear aplicaciones web estáticas y dinámicas.
- **pnpm:** Un instalador y administrador de paquetes rápido y confiable.
- **TypeScript:** Un lenguaje de programación superconjunto de JavaScript que añade tipado estático.
- **Tailwind CSS:** Un framework CSS de bajo nivel para la creación de interfaces de usuario personalizadas.


## 🔨 Instrucciones de instalación:

1. Clonar el repositorio:
```bash
git clone https://github.com/user/repo.git
```
2. Instalar las dependencias:
```bash
pnpm install
```
3. Iniciar el servidor de desarrollo:
```bash
pnpm run dev
```
4. Abrir la página web en `http://localhost:4321/`


## 🚀 Estructura del proyecto

El proyecto está estructurado de la siguiente manera:
* `src`: Contiene el código fuente de la aplicación.
  * `components`: Contiene los componentes reutilizables de la aplicación.
  * `pages`: Contiene las páginas de la aplicación.
  * `styles`: Contiene los estilos CSS de la aplicación.
  * `utils`: Contiene utilidades que se utilizan en la aplicación.
* `public`: Contiene los archivos estáticos de la aplicación, como imágenes y fuentes.
* `package.json`: Contiene las dependencias del proyecto y los scripts de ejecución.
* `pnpm-lock.yaml`: Contiene la lista de dependencias instaladas y sus versiones exactas.

## 🧞 Comandos

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Instala las dependencias                            |
| `pnpm run dev`             | Inicia el servidor de desarrollo local en `localhost:4321`      |
| `pnpm run build`           | Construye la pagina de producción en `./dist/`          |
| `pnpm run preview`         | Previsualiza tu compilación localmente antes de implementarla     |
| `pnpm run astro ...`       | Ejecuta los CLI commands como `astro add`, `astro check` |
| `pnpm run astro -- --help` | Obten ayuda usando el CLI de Astro                     |
