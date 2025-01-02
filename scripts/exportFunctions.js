function exportCritical() {
    const rows = document.querySelectorAll("#data-table tbody tr");
    const criticalData = [];

    rows.forEach((row) => {
        const cells = row.querySelectorAll("td");
        const fechaVencimiento = new Date(cells[6].textContent);
        const diasRestantes = (fechaVencimiento - new Date()) / (1000 * 60 * 60 * 24);

        if (diasRestantes <= 15 || isCriticalByStock(cells)) {
            criticalData.push(getRowData(cells));
        }
    });

    exportToExcel(criticalData, "Vencimientos_Criticos.xlsx");
}

// Funciones para exportar datos normales
function exportNormal() {
    const rows = document.querySelectorAll("#data-table tbody tr");
    const normalData = [];

    rows.forEach((row) => {
        const cells = row.querySelectorAll("td");
        const fechaVencimiento = new Date(cells[6].textContent);
        const diasRestantes = (fechaVencimiento - new Date()) / (1000 * 60 * 60 * 24);

        if (
            diasRestantes > 15 &&
            ((diasRestantes <= 30) || (diasRestantes <= 90 && isPerfumeriaLimpieza(cells)))
        ) {
            normalData.push(getRowData(cells));
        }
    });

    exportToExcel(normalData, "Vencimientos_Normales.xlsx");
}

// Funciones auxiliares
function getRowData(cells) {
    return {
        Codigo: cells[0].textContent,
        Articulo: cells[1].textContent,
        Stock: cells[2].textContent,
        PrecioVenta: cells[3].textContent,
        PrecioCosto: cells[4].textContent,
        PrecioSugerido: cells[5].textContent,
        FechaVencimiento: cells[6].textContent,
    };
}

function isCriticalByStock(cells) {
    const stock = parseInt(cells[2].textContent, 10);
    const estimativoVenta = parseInt(cells[5].textContent, 10); // Ejemplo, reemplazar con lógica adecuada
    return stock > 0 && estimativoVenta && stock > estimativoVenta;
}

function isPerfumeriaLimpieza(cells) {
    const articulo = cells[1].textContent.toLowerCase();
    return articulo.includes("perfumería") || articulo.includes("limpieza");
}

function exportToExcel(data, fileName) {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Datos");
    XLSX.writeFile(workbook, fileName);
}

// Exportar funciones si se utiliza un sistema de módulos
export { exportCritical, exportNormal };