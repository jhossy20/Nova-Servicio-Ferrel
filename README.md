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

## Examen Parcial

### 12. Planificación y modelo conceptual

#### Brief de 5 dimensiones

- **Usuario:** Personas que utilizan Nova Servicios para solicitar soporte.
- **Necesidad:** Consultar servicios y registrar una solicitud de soporte simulada.
- **Problema:** Se necesita una forma clara y rápida de solicitar ayuda.
- **Solución:** Portal responsive con servicios, formulario, estados, preguntas frecuentes y contacto.
- **Valor:** Facilita el acceso al soporte y organiza la información de manera clara.

#### Historias de usuario

1. **Consultar servicios:** el portal muestra 4 tarjetas de servicio y permite acceder al formulario.
2. **Registrar solicitud:** el formulario solicita nombre, correo, tipo, prioridad y descripción.
3. **Seleccionar prioridad:** la prioridad se selecciona mediante una opción única y obligatoria.
4. **Consultar estados:** se muestran los estados Pendiente, En proceso, Resuelto y Cerrado/Cancelado.
5. **Usar diferentes dispositivos:** el portal fue comprobado a 320, 768 y 1440 px y a 200 % de zoom.

#### Prioridades MoSCoW

- **Must:** navegación, 4 servicios, formulario validado, prioridades, estados, FAQ y contacto.
- **Should:** foco visible, zoom 200 % y comprobaciones responsive.
- **Could:** mejoras visuales y contenido complementario.
- **Won't:** backend, base de datos real, almacenamiento o envío real de tickets.

#### Wireframe

El wireframe contiene seis zonas:

1. Encabezado y navegación.
2. Presentación principal.
3. Catálogo de servicios.
4. Formulario.
5. Estados de ejemplo.
6. Pie de página.

#### Modelo conceptual

El modelo se encuentra en `docs/modelo-datos.pdf`.

Entidades:

- **Usuario:** PK `id_usuario`.
- **Servicio:** PK `id_servicio`.
- **Solicitud:** PK `id_solicitud`, FK `id_usuario`, FK `id_servicio`.
- **Actualización:** PK `id_actualizacion`, FK `id_solicitud`.
- **Auditoría:** PK `id_auditoria`, FK `id_usuario`.

Relaciones:

- Usuario 1:N Solicitud.
- Servicio 1:N Solicitud.
- Solicitud 1:N Actualización.
- Usuario 1:N Auditoría.

Los estados de una solicitud son Pendiente, En proceso, Resuelto y Cerrado/Cancelado. Solo el rol técnico puede cambiar el estado. Cada cambio de estado genera una Actualización y un registro de Auditoría con actor, acción, fecha y entidad afectada.

### 13. Análisis de casos

#### Solicitudes 1001 y 1005

Para determinar si pueden ser duplicadas se compararían:

- Usuario y correo.
- Servicio y tipo de solicitud.
- Descripción del problema.
- Fecha y hora.
- Prioridad y estado.

Se conservaría la información más completa y se mantendría el registro relacionado para conservar el historial.

#### Cambio de prioridad de la solicitud 1002

El registro de auditoría `5004` indica:

- `user_id = 9`
- Acción: `CAMBIO_PRIORIDAD`
- Fecha: `2026-09-30 14:32`
- Cambio: Media → Alta.

El evento se relacionaría con la solicitud mediante la entidad afectada y el identificador del registro. Para investigar la autorización se verificaría quién es el usuario 9, su rol, sus permisos y si existe una autorización o motivo registrado para realizar el cambio.

No se implementa una base de datos real.
