# Cómo desplegar este portfolio

Tres caminos, de más simple a más completo.

---

## Opción A — Netlify (Recomendado, 100% gratis)

Frontend + formulario funcional, sin escribir backend.

### Pasos

1. **Sube el código a GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/BRUSKYMIL/portfolio.git
   git push -u origin main
   ```

2. **Conecta Netlify**
   - Entra en https://www.netlify.com y regístrate con GitHub
   - "Add new site" → "Import an existing project" → elige `portfolio`
   - **Build command**: déjalo vacío
   - **Publish directory**: `.`
   - "Deploy site"

3. **Renombra el dominio** (opcional)
   - Site settings → Domain management → "Options" → "Edit site name"
   - Pon algo como `luis-moreno-torres`
   - URL final: `luis-moreno-torres.netlify.app`

4. **El formulario ya funciona**
   - Cada mensaje aparece en el panel de Netlify (sección "Forms")
   - Recibirás email automáticamente si configuras notificaciones en Forms → Notifications
   - Límite gratis: 100 envíos/mes (más que suficiente)

### Cómo funciona el formulario sin backend
Netlify detecta el atributo `data-netlify="true"` en el HTML y se encarga del resto. Ya está añadido al archivo `portfolio.html`. No necesitas hacer nada más.

---

## Opción B — GitHub Pages (Solo frontend, sin formulario funcional)

Más simple aún, pero el formulario no envía nada.

1. Sube el código a GitHub (igual que arriba)
2. En el repo: Settings → Pages → Source: "Deploy from a branch" → `main` → `/ (root)`
3. URL: `bruskymil.github.io/portfolio`

Útil si solo quieres mostrar el portfolio y aceptas que el contacto sea por LinkedIn.

---

## Opción C — Backend Spring Boot real (Render.com)

Si quieres mantener tu backend Java + Vue original con base de datos y todo, esto es lo que necesitas.

### Estructura recomendada
```
portfolio-backend/   ← repo de Spring Boot (en Render)
portfolio-frontend/  ← este repo (en Netlify)
```

### Pasos
1. **Backend**: el archivo `backend/PortfolioApplication.java` y `pom.xml` que te dejo abajo
2. **Subir a GitHub** como repo separado (`portfolio-backend`)
3. **Render.com**:
   - Regístrate con GitHub
   - "New Web Service" → conecta el repo `portfolio-backend`
   - **Runtime**: Java
   - **Build command**: `./mvnw clean package`
   - **Start command**: `java -jar target/portfolio-0.0.1-SNAPSHOT.jar`
   - **Plan**: Free
4. **CORS**: el backend ya está configurado para aceptar peticiones desde Netlify
5. **Variables de entorno** en Render (Settings → Environment):
   - `MAIL_HOST=smtp.gmail.com`
   - `MAIL_PORT=587`
   - `MAIL_USER=tuemail@gmail.com`
   - `MAIL_PASS=` (contraseña de aplicación de Gmail, NO tu contraseña normal)
   - `MAIL_TO=luismtmdam@gmail.com`

⚠️ **Aviso del plan gratuito de Render**: el servicio se "duerme" tras 15 min de inactividad. La primera petición tras dormirse tarda ~30 segundos en arrancar. Para un portfolio personal está bien.

### Apuntar el frontend al backend
En `app.jsx`, cambia el handler del formulario para hacer `fetch` a tu URL de Render:
```js
const res = await fetch("https://tu-backend.onrender.com/api/contact", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(form)
});
```

---

## Mi recomendación

**Empieza con la Opción A (Netlify)**. Es lo que hace el 90% de los portfolios profesionales hoy en día. Si más adelante quieres practicar despliegue de Spring Boot para el currículum, montas la Opción C como proyecto aparte y tienes la mejor de las dos.
