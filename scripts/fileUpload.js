export let fileData = [];
export let criticalData = [];
export let regularData = [];

export function handleFileUpload(event, type) {
    const file = event.target.files[0];
    if (!file) {
        alert('Por favor, seleccione un archivo.');
        return;
    }

    const validExtensions = ["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/vnd.ms-excel", "text/csv"];
    if (!validExtensions.includes(file.type)) {
        alert("Por favor, sube un archivo válido (Excel o CSV)");
        return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(sheet);

        if (type === 'critical') {
            criticalData = jsonData;
            console.log('Datos críticos cargados:', criticalData);
            alert('Archivo de vencimientos críticos cargado correctamente.');
        } else if (type === 'regular') {
            regularData = jsonData;
            console.log('Datos regulares cargados:', regularData);
            alert('Archivo de vencimientos normales cargado correctamente.');
        } else {
            fileData = jsonData;
            console.log('Datos generales cargados:', fileData);
            alert('Archivo cargado correctamente.');
        }
    };

    reader.onerror = () => {
        alert('Hubo un error al leer el archivo.');
    };

    reader.readAsArrayBuffer(file);
}