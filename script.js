function insert_Row() {
   
    let table = document.getElementById('sampleTable');

    let Row = table.insertRow(0);

    // Insert new cells in the new row (2 cells)
    let cell1 = Row.insertCell(0);
    let cell2 = Row.insertCell(1);

    // Set the content of the new cells
    cell1.innerHTML = "Row cell1";
    cell2.innerHTML = "Row cell2";
}
