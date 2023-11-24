# TestCafeTest-TP-FrankMansilla


# Automatización con TestCafe para Hotel California

 - Este repositorio contiene la automatización de pruebas utilizando TestCafe para el proyecto Hotel California.

  https://github.com/orgs/hotelesGrupo2/repositories

## Instalación de TestCafe

Para ejecutar los scripts de prueba, primero debes instalar TestCafe globalmente o localmente en el proyecto. Puedes hacerlo utilizando npm (Node Package Manager) si tienes Node.js instalado.

### Instalación global (recomendado):

 - Si deseas instalar TestCafe de forma global, ejecuta el siguiente comando en tu terminal:

 ```bash
 npm install -g testcafe
 ```
 - Si prefieres instalar TestCafe localmente en el proyecto, ejecuta este comando en la carpeta del proyecto:

```bash
npm install testcafe --save-dev
```
 - Ejecutar un test
```
testcafe chrome TestReservation.js
```