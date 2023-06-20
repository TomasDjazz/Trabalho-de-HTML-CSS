const searchInput = document.getElementById('searchInput');
const cars = document.querySelectorAll('.car');

searchInput.addEventListener('input', function() {
  const searchTerm = searchInput.value.toLowerCase().trim();

  cars.forEach(function(car) {
    const carName = car.querySelector('h2').textContent.toLowerCase();

    if (carName.includes(searchTerm)) {
      car.style.display = 'block';
    } else {
      car.style.display = 'none';
    }
  });
});

// Limpar barra de pesquisa

document.getElementById('clearButton').addEventListener('click', function() {
  document.getElementById('searchInput').value = '';
  mostrarTodosOsCarros();
});

// Função para mostrar todos os carros após limpar a barra de pesquisa
function mostrarTodosOsCarros() {
  var carros = document.getElementsByClassName('car');
  for (var i = 0; i < carros.length; i++) {
    carros[i].style.display = 'block';
  }
}