// let userInput = document.getElementById("user-input")
// let olList = document.getElementById("ol-list")
// let num = 0
// let htmlnum = document.getElementById("x");
// function addVote() {
//     let liList = document.createElement("li")
//     liList.innerHTML = userInput.value;
//     olList.appendChild(liList)
//     // userInput.value = num++
//     // htmlnum.innerHTML = num
//     userInput.value = ""

//     if (userInput == "") {
//         alert("Please Enter a Value")
//     }
//     // console.log(userInput);
    
// }

// function voteCount(){
//     num++
//     htmlnum.innerHTML = num
// }

function addItem() {
    const itemList = document.getElementById('itemList');
    const itemInput = document.getElementById('itemInput');

    if (itemInput.value.trim() !== "") {
        const newItem = document.createElement('li');
        newItem.textContent = `${itemInput.value} (0)`;
        newItem.dataset.count = 0;

        // Increment the counter when the item is clicked
        newItem.addEventListener('click', function() {
            let count = parseInt(this.dataset.count);
            count++;
            this.dataset.count = count;
            this.textContent = `${itemInput.value} (${count})`;
        });

        itemList.appendChild(newItem);
        itemInput.value = ''; // Clear the input field
    }
}
