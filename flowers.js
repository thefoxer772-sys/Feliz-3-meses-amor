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

// --- FUNCIÓN DE TRANSICIÓN FORZADA CON ESTRELLAS DESDE JS ---
function abrirSorpresa() {
    const portada = document.getElementById('pantalla-portada');
    const carta = document.getElementById('pantalla-carta');
    const capaEstrellas = document.getElementById('capa-estrellas');
    
    if (capaEstrellas) {
        capaEstrellas.style.display = 'block';
        capaEstrellas.innerHTML = ''; 

        const tiposEstrellas = ['✨', '⭐', '🌟'];

        // Disparar 35 estrellas fugaces con estilos inyectados directamente
        for (let i = 0; i < 35; i++) {
            const estrella = document.createElement('div');
            
            // Ajustamos todo el diseño visual desde aquí para que el CSS no lo bloquee
            estrella.innerText = tiposEstrellas[Math.floor(Math.random() * tiposEstrellas.length)];
            estrella.style.position = 'absolute';
            estrella.style.fontSize = '35px';
            estrella.style.userSelect = 'none';
            estrella.style.opacity = '0';
            estrella.style.transition = 'all 1s ease-out';

            // Posiciones aleatorias en el lienzo crema
            estrella.style.left = (Math.random() * 80) + 'vw';
            estrella.style.top = (Math.random() * 60) + 'vh';
            
            capaEstrellas.appendChild(estrella);

            // Retraso milimétrico para activar el movimiento diagonal forzado
            setTimeout(() => {
                estrella.style.opacity = '1';
                estrella.style.transform = 'translate(350px, -250px) rotate(180deg) scale(1.3)';
            }, Math.random() * 300); // Salen escalonadas en ráfaga
        }
    }

    // Esperamos 500 milisegundos a que cruce la ráfaga antes de cambiar de pantalla
    setTimeout(() => {
        if (portada) portada.style.display = 'none';
        if (carta) carta.classList.add('mostrar');
    }, 500);

    // Limpiar por completo la animación al terminar
    setTimeout(() => {
        if (capaEstrellas) {
            capaEstrellas.style.display = 'none';
            capaEstrellas.innerHTML = '';
        }
    }, 1600);
}
