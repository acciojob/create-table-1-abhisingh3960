function insert_Row() {
   
    let table = document.getElementById('sampleTable');

    let Row = table.insertRow(0);

    // Insert new cells in the new row (2 cells)
    let cell1 = Row.insertCell(0);
    let cell2 = Row.insertCell(1);

    
    cell1.innerHTML = "New Cell1";
    cell2.innerHTML = "New Cell2";
}
