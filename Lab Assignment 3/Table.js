const MOUNTAINS = [
    { name: "Kilimanjaro", height: 5895, place: "Tanzania" },
    { name: "Everest", height: 8848, place: "Nepal" },
    { name: "Mount Fuji", height: 3776, place: "Japan" },
    { name: "Vaalserberg", height: 323, place: "Netherlands" },
    { name: "Denali", height: 6168, place: "United States" },
    { name: "Popocatepetl", height: 5465, place: "Mexico" },
    { name: "Mont Blanc", height: 4808, place: "Italy/France" }
];

function buildTable(data) {
    let table = document.createElement("table");
    let headerRow = document.createElement("tr");
    let columns = Object.keys(data[0]);

    for (let column of columns) {
        let th = document.createElement("th");
        th.textContent = column;
        headerRow.appendChild(th);
    }
    table.appendChild(headerRow);

    for (let item of data) {
        let row = document.createElement("tr");

        for (let column of columns) {
            let cell = document.createElement("td");
            cell.textContent = item[column];

            if (typeof item[column] === "number") {
                cell.style.textAlign = "right";
            }
            row.appendChild(cell);
        }
        
        table.appendChild(row);
    }

    document.querySelector("#mountains").appendChild(table);
}

buildTable(MOUNTAINS);
