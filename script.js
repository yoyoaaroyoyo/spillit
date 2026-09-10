let count = 0;
const btn = getElementById("save-button");

btn.addEventListener('click', () => {
    count++;
});    

function SaveButton() {
    const a = getElementById("input");
    for (let i = 1; i <= count; ) {
      localStorage.setItem(i, a);
    }  
}

