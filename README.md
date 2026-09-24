# Portal de Soporte TI — ejemplo resuelto

Ejemplo completo de la Guía de aprendizaje 2, sesiones 3 y 4. Incluye navbar mobile first, hero, cuatro tarjetas con Grid y formulario con validación nativa. Usa datos ficticios: Ana Prueba y ana@example.test. El botón confirma una simulación; no crea un ticket.

## Requisitos y ejecución

Instala Node.js LTS (22 o superior; el flujo de clase usa 24), Git y VS Code.
La carpeta correcta es la que contiene package.json. Ábrela con VS Code.

```bash
npm ci
npm run dev
```

Abre http://127.0.0.1:5500. Guarda los cambios y recarga el navegador.
Detén el servidor con Ctrl+C. El servidor local no tiene recarga automática.
Para ver la página sin instalar dependencias puedes usar Live Server sobre public/index.html.
Si PowerShell bloquea npm.ps1, usa npm.cmd con los mismos argumentos.

```bash
npm run format
npm run check
npm run check:syntax
npm test
```

npm ci instala la versión fijada en package-lock.json. No necesitas npm init ni
instalar Prettier otra vez: la preparación de la sección 11 de la guía ya está hecha.

## Archivos

- public/index.html: estructura y formulario.
- public/assets/css/styles.css: estilos responsive.
- public/assets/js/ui.js: apoyo para menú y simulación, sin llamadas a una API.
- docs/actividades.md: trabajo de las sesiones 3 y 4.
- docs/pruebas.md: evidencia que debe completar el equipo.
- .github/pull_request_template.md: plantilla del PR.
- .github/workflows/calidad.yml: comprobaciones de calidad.
- vercel.json: configuración para servir public.
- scripts/ y tests/: servidor local y sus pruebas, ya preparados.

Trabaja en los archivos de public y en la documentación. No necesitas modificar
el servidor para desarrollar esta semana.

## Alcance de las comprobaciones

Actions comprueba formato, sintaxis de JavaScript y las pruebas del servidor local.
También debes probar manualmente la interfaz, el teclado, las restricciones del formulario
y los anchos de pantalla. Que el check pase no significa que completaste todas las actividades.
Vercel publica el sitio por su integración con GitHub; este workflow no despliega.

## Despliegue y ramas

Sigue [la preparación del repositorio y de Vercel](docs/git-y-vercel.md).
No se incluyen repositorios Git inicializados, URLs de Preview inventadas ni credenciales.
Al publicar, completa README y el PR con tu repositorio, equipo y Preview reales.

## Correspondencia con la guía

Los capítulos 3 a 5 construyen la landing; 6 añade Grid; 7 a 9 completan el formulario;
10 y 11 cubren Preview y calidad; 12 a 15 preparan la revisión y la entrega.
El código ui.js añade guardas para funcionar mientras faltan elementos en el proyecto base.
No requiere React, Vite, Supabase ni base de datos en esta semana.

## Referencias

- [Prettier: instalación reproducible](https://prettier.io/docs/install)
- [Vercel: configuración](https://vercel.com/docs/project-configuration/vercel-json)
- [Vercel: ambientes](https://vercel.com/docs/deployments/environments)
