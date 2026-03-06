// const is that the value never changes makes it so your name is typed out, then let is another way of saying you're naming the variable so i is 0 and deleting is false
const studentName = "Valentina Fox";
let i = 0;
let deleting = false;

// Explanation: It starts off with a function, then we have an if condition where it deletes the name slowly but then types the name again!
function typeName () {
    if (!deleting) {
        if (i < studentName.length) {
            document.getElementById("name").innerHTML = studentName.substring(0, i + 1) + '<span class="cursor"> </span>'; i++;
            setTimeout(typeName, 100);
        } else {
            setTimeout(() => { deleting = true; typeName(); }, 2000);
        }
    } else {
        if (i > 0) {
        document.getElementById("name").innerHTML = studentName.substring(0, i - 1) + '<span class="cursor"> </span>'; i--;
        setTimeout(typeName, 100);
        } else {
        setTimeout(() => { deleting = false; typeName(); }, 1000);
        }
    }
}

// This is important! this is so your name actually shows up on the page
typeName();