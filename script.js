function initFormValidation() {
  const formulario = document.getElementById("formulario")
  if (formulario) {
    formulario.addEventListener("submit", (e) => {
      const apellido = document.getElementById("apellido").value.trim()
      const mensaje = document.getElementById("mensaje").value.trim()

      if (apellido.length < 3) {
        alert("El apellido debe tener al menos 3 caracteres.")
        e.preventDefault()
        return
      }
      if (/\d/.test(apellido)) {
        alert("El apellido no puede contener números.")
        e.preventDefault()
        return
      }
      if (mensaje.length < 10) {
        alert("El mensaje debe tener al menos 10 caracteres.")
        e.preventDefault()
        return
      }
    })
  }
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((enlace) => {
    enlace.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        e.preventDefault()
        target.scrollIntoView({
          behavior: "smooth",
        })
      }
    })
  })
}

function initDarkMode() {
  const btnTema = document.getElementById("toggle-tema")

  if (!btnTema) {
    console.error("Botón #toggle-tema no encontrado")
    return
  }
  const currentTheme = localStorage.getItem("theme") || "light"

  if (currentTheme === "dark") {
    document.body.classList.add("oscuro")
  }
  btnTema.textContent = document.body.classList.contains("oscuro") ? "☀️ Tema claro" : "🌙 Tema oscuro"

  btnTema.addEventListener("click", () => {
    document.body.classList.toggle("oscuro")

    const theme = document.body.classList.contains("oscuro") ? "dark" : "light"
    localStorage.setItem("theme", theme)

    btnTema.textContent = document.body.classList.contains("oscuro") ? "☀️ Tema claro" : "🌙 Tema oscuro"
  })
}

document.addEventListener("DOMContentLoaded", () => {
  initFormValidation()
  initSmoothScroll()
  initDarkMode()
})