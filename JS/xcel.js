var Excel = require('exceljs');
var workbook = new Excel.Workbook();


function buh() {
    workbook.xlsx.readFile('old.xlsx')
        .then(function() {
            var worksheet = workbook.getWorksheet(1);
            var row = worksheet.getRow(4);
            row.getCell(5).value = 'buhbuh'
            row.commit();
            return workbook.xlsx.writeFile('new.xlsx');
        })
}