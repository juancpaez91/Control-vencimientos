import { fileData } from './fileUpload.js';

export function addRowTable() {
    const inputCode = document.getElementById('product-code').value;
    if (!inputCode) {
        alert('Por favor, ingrese el código del producto.');
        return;
    }

    const item = fileData.find((row) => row.Codigo == inputCode);
    if (!item) {
        alert('No se encontró el producto con el código ingresado.');
        return;
    }

    const tableBody = document.querySelector('#data-table tbody');
    const newRow = document.createElement('tr');

    newRow.innerHTML = `
        <td>${item.Codigo}</td>
        <td>${item.Articulo}</td>
        <td>${item.Stock}</td>
        <td>${item.PrecioCosto}</td>
        <td>${item.PrecioVenta}</td>
        <td contenteditable="true"></td>
        <td contenteditable="true"></td>
        <td><button class="delete-btn">Eliminar</button></td>
    `;

    tableBody.appendChild(newRow);
    attachDeleteListeners();
}

function attachDeleteListeners() {
    const deleteButtons = document.querySelectorAll('.delete-btn');
    deleteButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
            const row = event.target.closest('tr');
            if (confirm('¿Estás seguro de que deseas eliminar esta fila?')) {
                row.remove();
            }
        });
    });
}