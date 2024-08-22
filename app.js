let userInput = document.getElementById("user-input");
let olList = document.getElementById("ol-list");
let value = 1;
function addVote() {

    if (userInput.value === "") {
        alert("Invalid");
    } else {
        let liList = document.createElement("li");
        liList.innerHTML = value++ + ": " + userInput.value + " ";
        olList.appendChild(liList).style.marginTop = "10px";
        userInput.value = "";

        // increment
        let count = 0;
        let span = document.createElement("span");
        span.innerHTML = "(0)";
        liList.appendChild(span);
        liList.addEventListener("click", function () {
            count++;
            span.innerHTML = `( ${count} )`;
        });
    };

};
