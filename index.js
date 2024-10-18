let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let totalEl = document.getElementById("total-el");
let count = 0;
let totalCount = 0;

function increment() {
    count += 1;
    countEl.textContent = count; // Update the displayed count
    
    // Update total count every time increment is clicked
    totalCount += 1; // Increment totalCount by 1 for each click
}

function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr; // Append current count to previous entries
    
    // Reset the count to 0 after saving
    countEl.textContent = 0;
    count = 0;
}

function total() {
    // Display the total count in the total section
    totalEl.textContent = "Total 🐔: " + totalCount;
}

