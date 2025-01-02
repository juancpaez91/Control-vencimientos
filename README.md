Documentación

Descripción General
Este proyecto tiene como objetivo gestionar y controlar los vencimientos de productos dentro de un supermercado. Permite cargar archivos con información de productos, registrar fechas de vencimiento, y generar reportes sobre los productos que están cerca de su vencimiento, tanto para artículos críticos como para aquellos con vencimientos dentro de 30 días (90 días para productos de perfumería y limpieza). Además, se proporciona una funcionalidad para exportar estos datos a formatos descargables como Excel y realizar el seguimiento semanal de los vencimientos.

Estructura del Proyecto
La estructura de carpetas del proyecto es la siguiente:

/project-root
│
├── /scripts
│   ├── main.js                 # Lógica principal del proyecto, incluyendo la carga de archivos y manejo de la tabla.
│   ├── exportFunctions.js      # Funciones relacionadas con la exportación de los datos a Excel.
│   ├── fileUpload.js           # Funciones para el manejo y carga de archivos.
│   └── tableManagement.js      # Funciones para el manejo de la tabla y las filas.
│   └── xlsx.full.min           # Biblioteca de JavaScript para manipular archivos Excel.
│
├── /styles
│   └── styles.css              # Estilos principales de la página, incluyendo la tabla y los botones.
│
├── index.html                  # Página principal con la estructura visual del sistema.
└── README.md                   # Documentación detallada del proyecto.

Descripción de los Archivos
/scripts
main.js: Contiene la lógica principal de la aplicación, incluyendo el manejo de la carga de archivos, la adición de filas a la tabla y la exportación de datos a Excel.
exportFunctions.js: Contiene las funciones relacionadas con la exportación de los datos de la tabla a archivos Excel, tanto para vencimientos críticos como normales.
fileUpload.js: Contiene las funciones que permiten cargar los archivos con los datos de los productos.
tableManagement.js: Gestiona las interacciones con la tabla, como la adición, eliminación de filas, y la validación de datos.
xlsx.full.min.js: Biblioteca de JavaScript que permite leer y escribir archivos Excel en el navegador.

/styles
styles.css: Contiene los estilos CSS utilizados en todo el proyecto. Incluye los estilos de la tabla, botones, y otros elementos visuales.

index.html
Contiene la estructura HTML de la página principal, donde se gestionan los vencimientos de productos, se cargan los archivos y se visualizan los reportes.

Funcionalidades:
1. Carga de Archivos
El sistema permite cargar archivos de datos en formato Excel o CSV. El archivo contiene información de los productos, como código, artículo, stock, precio de venta, y fechas de vencimiento. Los archivos se cargan a través de la interfaz de usuario, y los datos se almacenan en variables globales (fileData, criticalData, regularData) para ser utilizados en la aplicación.

2. Agregar Productos a la Tabla
El sistema permite ingresar el código de un producto y, mediante su código, buscar la información en los datos cargados, completando automáticamente los campos de la tabla. La tabla incluye los campos de: código, nombre del artículo, stock, precio de venta, precio de costo, fecha de vencimiento y un campo editable para el precio sugerido.

3. Eliminación de Filas
Cada fila de la tabla tiene un botón de eliminación. Al hacer clic en este botón, la fila correspondiente se elimina de la tabla.

4. Exportación de Datos a Excel
El sistema permite exportar los datos filtrados en la tabla a un archivo Excel. Existen dos opciones de exportación:

Exportación de Vencimientos Críticos: Artículos con vencimientos dentro de los próximos 15 días.
Exportación de Vencimientos Normales: Artículos con vencimientos dentro de los próximos 30 días, o 90 días para productos de perfumería y limpieza.

5. Filtros Automáticos
El sistema permite aplicar filtros automáticos sobre los productos cargados:
Vencimientos Críticos: Artículos con fechas de vencimiento dentro de los próximos 15 días (se generan todos los lunes).
Vencimientos Normales: Artículos con fechas de vencimiento dentro de los próximos 30 días, o 90 días para productos de perfumería y limpieza.

6. Seguimiento de Artículos Críticos y Estimaciones de Ventas
El sistema permite realizar un seguimiento semanal de los artículos con vencimientos críticos (de lunes a lunes). El seguimiento incluye el cálculo de las unidades vendidas en la semana y la comparación con las unidades avisadas. Si el estimado de ventas no es suficiente, el producto puede ser incluido en la lista de vencimientos críticos, incluso si la fecha de vencimiento no está dentro de los 15 días.

Uso del Proyecto



Cargar un archivo:

Haz clic en el botón "Cargar Archivo" y selecciona un archivo Excel o CSV.
El archivo será procesado y se cargará en el sistema.

¡ATENCION!
Antes de cargar el Marquitas agregar encabezados a las columnas que se ultilizan en este proyecto:
        Código
        Artículo
        Stock
        Precio Costo
        Precio Venta

Agregar un producto a la tabla:

Ingresa el código del producto en el campo correspondiente y haz clic en "Agregar".
Si el producto se encuentra en el archivo cargado, sus datos se completarán automáticamente en la tabla.

Columnas modificables:
Precio Sugerido:
Se ingresa el valor que el usuario desee (no tiene incluido el calculo del IVA)

Fecha de Vencimiento:
Se aconseja colocar la fecha real de vencimiento.

Eliminar un producto:

Haz clic en el botón "Eliminar" en la fila correspondiente para eliminar el producto de la tabla.

Exportar los datos:

Para exportar los vencimientos críticos, haz clic en "Exportar Vencimientos Críticos".
Para exportar los vencimientos normales, haz clic en "Exportar Vencimientos Normales".
El archivo Excel se descargará con los datos correspondientes.

Carga de archivos para control:
El sistema permite la carga de archivos para control de vencimientos tanto criticos como normales.
Para esto en necesario cargar de forma individual los archivos ya avisados la semana anterior (criticos) o 15 dias antes (normales)

Conclusión

Este proyecto proporciona una solución eficiente para la gestión y control de los vencimientos de productos en un supermercado. Su capacidad de cargar, filtrar y exportar datos en tiempo real permite un seguimiento adecuado de los productos críticos y una toma de decisiones más precisa para evitar pérdidas por productos no vendidos.
