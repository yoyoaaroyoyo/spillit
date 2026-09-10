let count = 1;
const btn = document.getElementById("save-button");
console.log("Button: " + btn);

function SaveButton() {
    const a = document.getElementById("input").value;
    console.log("Input: " + a);
    for (let i = 1; i <= count; i++ ) {
      localStorage.setItem(i, a);
    }
    alert("Data saved succesfully");
}

