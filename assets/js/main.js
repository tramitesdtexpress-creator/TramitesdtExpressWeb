document.addEventListener('DOMContentLoaded', function() {
  const contadorElement = document.getElementById('contador');
  const objetivo = 4200;
  const duracion = 2000;
  const pasos = 60;
  const intervalo = duracion / pasos;
  let actual = 0;
  const incremento = objetivo / pasos;

  const timer = setInterval(() => {
    actual += incremento;
    if (actual >= objetivo) {
      contadorElement.textContent = '+4200';
      clearInterval(timer);
    } else {
      contadorElement.textContent = Math.floor(actual);
    }
  }, intervalo);
});

document.querySelectorAll('.servicio-card').forEach(card => {
  card.addEventListener('click', function() {
    document.querySelectorAll('.servicio-card').forEach(c => {
      if (c !== this) c.classList.remove('activo');
    });
    this.classList.toggle('activo');
  });

  card.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      this.click();
    }
  });
});

document.querySelectorAll('.btn-whatsapp-servicio').forEach(button => {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    const servicio = this.getAttribute('data-servicio');
    const mensaje = `Hola, quiero solicitar el servicio de: *${servicio}*.`;
    const url = `https://wa.me/50763980227?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  });
});