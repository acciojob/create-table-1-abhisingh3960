function insert_Row() {
    // Get the table element by its ID
    let table = document.getElementById('sampleTable');

    // Insert a new row at the end of the table
    let Row = table.insertRow(-1);

    // Get the current number of columns in the first row
    let colCount = table.rows[0].cells.length;

    // Insert cells into the new row, adding one more column than the previous rows
    for (let i = 0; i <= colCount; i++) {
        let cell = Row.insertCell(i);
        cell.innerHTML = `Row${table.rows.length} cell${i + 1}`;
    }
}
