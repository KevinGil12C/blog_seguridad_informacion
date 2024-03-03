//Filtro JS
document.addEventListener("DOMContentLoaded", function() {
    var filterItems = document.querySelectorAll('.post-filter-item');
    var postBoxes = document.querySelectorAll('.post-box');

    filterItems.forEach(function(item) {
        item.addEventListener('click', function() {
            var value = this.getAttribute('data-filter');
            postBoxes.forEach(function(box) {
                if (value === 'all') {
                    box.style.display = 'block';
                } else {
                    if (box.classList.contains(value)) {
                        box.style.display = 'block';
                    } else {
                        box.style.display = 'none';
                    }
                }
            });

            // Activar el botón seleccionado
            filterItems.forEach(function(item) {
                item.classList.remove('active-filter');
            });
            this.classList.add('active-filter');
        });
    });
});

//Cambiar header en scroll
let header = document.querySelector('header');

window.addEventListener("scroll", ()=>{
    header.classList.toggle("shadow", window.scrollY > 0);
});

window.addEventListener('DOMContentLoaded', (event) => {
    // Código que se ejecuta cuando la página está completamente cargada
    var filteredItems = document.querySelectorAll('.post-box[style="display: none;"]');
    filteredItems.forEach(function(item) {
        item.style.display = 'block';
    });
});

window.addEventListener('DOMContentLoaded', (event) => {
    let header = document.querySelector('header');

    window.addEventListener("scroll", ()=>{
        header.classList.toggle("shadow", window.scrollY > 0);
    });
});
