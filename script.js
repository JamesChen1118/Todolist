const inputText = document.querySelector('.inputText');
const listItem = document.querySelector('.listItem');
const addBtn = document.querySelector('.addBtn');

// input value can add in  list item
function newMission() {
    if (inputText.value === " ") {
        return;
    }
    const mission = document.createElement('li');
    mission.innerHTML = `
        <input type="checkbox" class="checkBox">
        <label>${inputText.value}</label>
        <button class="deleteItem">X</button>
    `
    const deleteItem = mission.querySelector(".deleteItem");
    const checkBox = mission.querySelector(".checkBox");


    //delete button
    deleteItem.addEventListener("click", () =>
        mission.remove()
    );


    //check box Way1
    checkBox.addEventListener("change", () => {
        if (checkBox.checked) {
            mission.style.textDecoration = "line-through";
            mission.style.color = "#999"
            listItem.append(mission);
        } else {
            mission.style.textDecoration = "none";
            mission.style.color = ""
            listItem.append(mission);
        }
    });
    //check box Way2
    // const checkBox = mission.querySelector('.checkBox');
    // checkBox.addEventListener("click", () =>

    // );



    //add item to last row
    listItem.append(mission);
    inputText.value = " ";
}



//click add button to run function deleteItem
addBtn.addEventListener("click", newMission);

//when keyup will show the letter,push enter will run function deleteItem
inputText.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        newMission();
    }

})