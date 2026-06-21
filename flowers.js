// Sistema de flores estéticas al hacer clic en pantalla
const diseñosFlores = [
    `<svg viewBox="0 0 100 100" width="50" height="50"><circle cx="50" cy="50" r="15" fill="none" stroke="#6b584c" stroke-width="2"/><circle cx="50" cy="50" r="4" fill="#e6b8a2"/></svg>`,
    `<svg viewBox="0 0 100 100" width="60" height="60"><path d="M50,50 Q25,25 50,0 Q75,25 50,50" fill="none" stroke="#6b584c" stroke-width="2"/><circle cx="50" cy="50" r="3" fill="#6b584c"/></svg>`
];

document.addEventListener('click', (e) => {
    if(e.target.tagName === 'BUTTON') return;

    const contenedorBrote = document.createElement('div');
    contenedorBrote.classList.add('brote-clic');
    contenedorBrote.innerHTML = diseñosFlores[Math.floor(Math.random() * diseñosFlores.length)];
    contenedorBrote.style.left = e.clientX + 'px';
    contenedorBrote.style.top = e.clientY + 'px';
    
    document.body.appendChild(contenedorBrote);
    
    setTimeout(() => { 
        contenedorBrote.remove(); 
    }, 2000);
});

// --- TRANSICIÓN MEJORADA CON ALERTA DE TIEMPO ---
function abrirSorpresa() {
    const portada = document.getElementById('pantalla-portada');
    const carta = document.getElementById('pantalla-carta');
    const capaEstrellas = document.getElementById('capa-estrellas');
    
    if (capaEstrellas) {
        capaEstrellas.style.display = 'block';
        capaEstrellas.innerHTML = ''; 

        const tiposEstrellas = ['✨', '⭐', '🌟'];

        // Generar las estrellas fugaces fijas en la pantalla crema
        for (let i = 0; i < 35; i++) {
            const estrella = document.createElement('div');
            
            estrella.innerText = tiposEstrellas[Math.floor(Math.random() * tiposEstrellas.length)];
            estrella.style.position = 'absolute';
            estrella.style.fontSize = '40px'; // Un poco más grandes para que se noten bien
            estrella.style.userSelect = 'none';
            estrella.style.opacity = '0';
            estrella.style.transition = 'all 0.8s ease-out';
            estrella.style.zIndex = '9999';

            // Distribución por toda la pantalla
            estrella.style.left = (Math.random() * 80) + 'vw';
            estrella.style.top = (Math.random() * 60) + 'vh';
            
            capaEstrellas.appendChild(estrella);

            // Forzar el movimiento diagonal
            setTimeout(() => {
                estrella.style.opacity = '1';
                estrella.style.transform = 'translate(250px, -250px) scale(1.4)';
            }, Math.random() * 200); 
        }
    }

    // Alerta que congela el navegador un instante y le da tiempo al código de pintar la lluvia
    alert("¡Mira el cielo! Te preparé algo especial... ✨");

    // Quitar la portada y mostrar la carta romántica
    if (portada) portada.style.display = 'none';
    if (carta) carta.classList.add('mostrar');

    // Limpiar la pantalla después de un segundo
    setTimeout(() => {
        if (capaEstrellas) {
            capaEstrellas.style.display = 'none';
            capaEstrellas.innerHTML = '';
        }
    }, 1500);
}
