const { jsPDF } = window.jspdf;
require("jspdf-autotable"); // If using Node

const doc = new jsPDF();

doc.text("CEMITÉRIOS DO GRUPO A", 10, 10);

// Define your columns and rows
const columns = ["TIPO", "CÓDIGO", "VALOR"];
const rows = [
    ["ADULTO - 1ª ABERTURA / COVA RASA", "14020102", "112,37"],
    ["", "14020104", "58,04"],
    ["ADULTO - JAZIGO / GAVETA", "14020103", "170,41"],
    ["", "14020105", "170,41"],
    // add more as needed
];

// Add the table
doc.autoTable({
    head: [columns],
    body: rows,
    startY: 20,
    styles: { fontSize: 10 },
    theme: 'grid',
    headStyles: { fillColor: [220, 220, 220] }
});

doc.save("cemetery-table.pdf");
