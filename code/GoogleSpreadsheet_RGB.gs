/*
/ Script per creare il backgroud di una cella
/ dai valori RGB presenti in altre celle
/ scripted by Sandro Pellegrinetti - spaikid.com
*/

function onEdit(e) {
  var range = e.range;
  var sheet = SpreadsheetApp.getActiveSheet();
  

  var columnOfCellEdited = range.getColumn();
  var rowOfCelledited = range.getRow();

  if (columnOfCellEdited === 4) {
    var red = sheet.getRange(rowOfCelledited, 2).getValue();
    var green = sheet.getRange(rowOfCelledited, 3).getValue();
    var blue = sheet.getRange(rowOfCelledited, 4).getValue();
    range.offset(0, -3).setBackgroundRGB(red,green,blue);
  };
};
