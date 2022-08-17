//String
studentName = "Kostyantyn"
//Float
score = 9.7
//Character
payrollCurrency = "$"
//Boolean
inZoomClass = true
//Integer
number = 72

console.log("Hey there!")
console.error("This is an error")

console.log("Student name is", studentName,
    ", he has a score in HTML/CSS:", score, ". He is paid in", payrollCurrency, "for his job.")

function rePaint() {
    //console.error("This is an error");
    //alert(studentName + ", please be careful!");
    //console.log(Math.round(Math.random() * 12));
    document.getElementById("body").style.color = randomColor();
}

function randomColor() {
    return "#" + Math.round(Math.random() * 16777215).toString(16);
}

/*
function should go inside of HTML document and scan the input field
 for text and if there is text, then the text will be converted into
 a text node which is a 2D Text Layer and assign it as child of <ul></ul>
 */
function addTodo() {
    //Accessing the input field and cloning the value
    var inputFieldText = document.getElementById("myInput").value;
    //Testing if we caught the Input field
    console.log(inputFieldText);
    //Create a 2D Text Layer from the Input field. entered by user
    var textNodeInputField = document.createTextNode(inputFieldText);
    //Create an empty HTML list item
    var createListItemElement = document.createElement("li");
    //Append the 2D Text Layer inside the empty list item
    createListItemElement.appendChild(textNodeInputField);
    //Append the list item as a child in the HTML list
    document.getElementById("myUL").appendChild(createListItemElement);
}