# Shrek Characters - CRUD App en Angular

Aplicación web desarrollada en Angular que permite gestionar personajes del universo de Shrek mediante un CRUD completo conectado a una API REST con MockAPI.

---

## Descripcion

La aplicacion permite listar, ver, crear, editar y eliminar personajes del universo de Shrek. Desarrollada con Angular standalone components, reactive forms, HttpClient y una estetica medieval con pergaminos y pantanos.

---

## Caracteristicas

- Listado de personajes con tarjetas de pergamino animadas
- Vista detalle de cada personaje
- Crear nuevos personajes con validaciones
- Editar personajes existentes con formulario reactivo
- Eliminar personajes al instante sin recargar la pagina
- Diseno responsive para movil, tablet y escritorio

---

## Tecnologias

| Tecnologia | Uso |
|---|---|
| Angular 17+ | Framework principal |
| TypeScript | Lenguaje de programacion |
| HttpClient | Peticiones HTTP a la API |
| Reactive Forms | Formularios con validaciones |
| Angular Router | Navegacion entre paginas |
| MockAPI | API REST simulada |
| CSS3 | Estilos medievales con animaciones |

---

## Estructura del Proyecto

```
src/
└── app/
    ├── components/
    │   ├── add-character-component/
    │   ├── character-details-component/
    │   ├── delete-character-component/
    │   ├── edit-character-component/
    │   ├── header-component/
    │   ├── home/
    │   └── listed-character-component/
    ├── Models/
    │   └── character.ts
    ├── pages/
    │   ├── add-character-page/
    │   ├── character-details-page/
    │   ├── edit-page/
    │   ├── home-page/
    │   └── list-page/
    ├── services/
    │   └── api-service.ts
    ├── app.routes.ts
    └── app.config.ts
```

---

## Rutas

| Ruta | Descripcion |
|---|---|
| `/` | Pantalla de inicio |
| `/list-page` | Listado de personajes |
| `/character-details/:index` | Detalle de un personaje |
| `/edit-page/:index` | Editar un personaje |
| `/add-character-page` | Crear un nuevo personaje |

---

## Modelo de datos

```typescript
export interface Character {
  id: number | string;
  nombre: string;
  especie: string;
  rol: string;
  personalidad: string;
  tiempo_en_pantalla_s: number;
}
```

---

## API

La aplicacion consume una API REST simulada con MockAPI.

URL base: `https://699098e66279728b0152d393.mockapi.io/Shrek_Characters`

| Metodo | Endpoint | Descripcion |
|---|---|---|
| GET | `/Shrek_Characters` | Obtener todos los personajes |
| GET | `/Shrek_Characters/:id` | Obtener un personaje por id |
| POST | `/Shrek_Characters` | Crear un personaje |
| PUT | `/Shrek_Characters/:id` | Actualizar un personaje |
| DELETE | `/Shrek_Characters/:id` | Eliminar un personaje |

---

## Instalacion

1. Clona el repositorio

```bash
git clone https://github.com/tu-usuario/shrek-characters.git
```

2. Instala las dependencias

```bash
npm install
```

3. Arranca el servidor de desarrollo

```bash
ng serve -o
```

La aplicacion estara disponible en `http://localhost:4200`

---

## Validaciones del formulario

Todos los campos son obligatorios. El nombre requiere un minimo de 2 caracteres. El tiempo en pantalla debe ser mayor a 0. El boton de envio permanece deshabilitado mientras haya errores en el formulario.

---
