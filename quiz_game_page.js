document.getElementById("number1").value = "";
document.getElementById("number2").value = "";
document.getElementById("question_number").value = "";
function send(){
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    question_number = "<h4>" + number1 + " X " + number2 +"</h4>";
}