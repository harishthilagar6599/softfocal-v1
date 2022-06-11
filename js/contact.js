window.onload = () => {
    const form = document.getElementById('sf-contact-form')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
    })
}

const submitForm = () => {
    const btn = document.getElementById('sf-submit-btn')
    btn.value = "Please wait..."
    btn.disabled = true
    Toastify({
        text: "Our team will contact you soon...",
        duration: 2000,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to bottom right,rgba(55, 236, 186, 0.8) 0%,rgba(24, 106, 105, 0.95) 100%)",
        },
    }).showToast()
    setTimeout(() => {
        window.location.reload()
    }, 1500)
}