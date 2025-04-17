## Instalacion

Instalar dependencias

npm install
### Desarrollo

```bash
npm run dev
```
Your application will be available at `http://localhost:5173`.


## 🔐 Autenticación - DummyJSON API

Esta app utiliza [DummyJSON](https://dummyjson.com/docs/auth) para simular el flujo de autenticación real en desarrollo.

### 🔑 Credenciales de prueba

Puedes usar las siguientes credenciales para iniciar sesión:

👤 Usuario: emilys
🔒 Contraseña: emilyspass

# **Estructura de Carpetas**

Este proyecto está organizado siguiendo una arquitectura **modular basada en features**. Cada funcionalidad principal de la app (auth, tasks, dashboard, etc) tiene su propio espacio aislado para su dominio, infraestructura y UI. Esto facilita la escalabilidad, el testing y el mantenimiento.

### `app/`

Contiene la configuración global de la aplicación, como:

- React Router
- Context Providers
- Temas o estilos globales
- Configuración inicial de la app

### `shared/`

Contiene todo lo **reutilizable** entre features.

#### `components/`

Componentes UI atómicos o genéricos, como:

- Botones (`Button`)
- Inputs (`TextInput`)
- Modales (`Modal`)

### `features/`

Contiene todos los **módulos funcionales** de la app. Cada feature está separada con su propia arquitectura interna:

#### Estructura interna de un feature:

Cada módulo dentro de `features/` sigue un patrón de arquitectura limpia (Clean Architecture adaptada al frontend), separando claramente la lógica de negocio, la infraestructura y la UI:

### 🔍 Descripción de carpetas


| Carpeta          | Propósito                                                                                         |
| ---------------- | -------------------------------------------------------------------------------------------------- |
| `domain/`        | Contiene entidades, interfaces, y casos de uso del dominio. Sin dependencias externas.             |
| `infra/`         | Implementación concreta de repositorios, API clients.                                             |
| `ui/pages/`      | Páginas completas que representan rutas. Se encargan de orquestar lógica y componer componentes. |
| `ui/components/` | Componentes específicos del feature. No deben mezclarse con componentes de otros features.        |

## API Layer: Axios + Manejo Global de Errores

La aplicación utiliza una **instancia personalizada de Axios** para centralizar la configuración de las peticiones HTTP y estandarizar el manejo de errores.


### 🧩 axiosInstance

📍 Ruta: `src/shared/api/axiosInstance.ts`

Esta instancia cuenta con:

- ✅ `baseURL` global configurada.
- ✅ Headers por defecto (`application/json`).
- ✅ Interceptor que inyecta automáticamente el token JWT si está presente en `localStorage`.
- ✅ Interceptor de respuestas que transforma errores técnicos en mensajes amigables.

### 

### ❌ Manejo de errores

📍 Ruta: `src/shared/api/errorHandler.ts`

Contiene la función `handleApiError(error)` que:

* Clasifica errores por código HTTP (`400`, `401`, `404`, `500`, etc).
* Devuelve un objeto `Error` con un mensaje claro para el usuario.
* Mejora la experiencia de usuario y facilita el debug.
