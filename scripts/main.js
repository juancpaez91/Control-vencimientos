import { handleFileUpload } from './fileUpload.js';
import { addRowTable } from './tableManagement.js';
import { exportCritical, exportNormal } from './exportFunctions.js';

document.getElementById('upload-file').addEventListener('change', (event) => handleFileUpload(event));
document.getElementById('upload-critical').addEventListener('change', (event) => handleFileUpload(event, 'critical'));
document.getElementById('upload-regular').addEventListener('change', (event) => handleFileUpload(event, 'regular'));
document.getElementById('add-btn').addEventListener('click', addRowTable);
document.getElementById("export-critical").addEventListener("click", exportCritical);
document.getElementById("export-normal").addEventListener("click", exportNormal);