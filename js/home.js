window.onload = () => {
    const pTag = document.getElementById('home-img-changing-text')
    const texts = [
        "Full Stack Development",
        "Mobile Development",
        "Devops",
        "Quality Assurance",
        "PMO Services"
    ]
    let i = 0;
    setInterval(() => {
        if (i === texts.length - 1) {
            i = 0
        } else {
            i = i + 1
        }
        pTag.innerText = texts[i]
    }, 900);
}