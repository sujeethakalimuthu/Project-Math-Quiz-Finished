var operators = ["+", "-", "*", "/"];
var random_chooser = Math.floor(Math.random()*4);
var chosen_operator = operators[random_chooser];
console.log(random_chooser);
var n1;
var n2;
var equation;
document.getElementById("output").style.display = "none";
pl1 = localStorage.getItem("p1");
pl2 = localStorage.getItem("p2");
var actual_answer;
var question_turn = pl1;
var answer_turn = pl2;
var p1_score = 0;
var p2_score = 0;
p1status = "Question Turn - "+question_turn;
p2status = "Answer Turn - "+answer_turn;
document.getElementById("player1_name").innerHTML = pl1+" = ";
document.getElementById("player2_name").innerHTML = pl2+" = ";
document.getElementById("player1_score").innerHTML = p1_score;
document.getElementById("player2_score").innerHTML = p2_score;
document.getElementById("p1status").innerHTML = p1status;
document.getElementById("p2status").innerHTML = p2status;
function Send()
{
    n1 = document.getElementById("Number-1").value;
    n2 = document.getElementById("Number-2").value;
    document.getElementById("output").style.display = "block";
    operators = ["+", "-", "*", "/"];
    random_chooser = Math.floor(Math.random()*4);
    chosen_operator = operators[random_chooser];
    console.log(chosen_operator);
    console.log(random_chooser);
    if (chosen_operator == "+")
    {
        actual_answer = parseInt(n1) + parseInt(n2);
    }
    if (chosen_operator == "-")
    {
        actual_answer = parseInt(n1) - parseInt(n2);
    }
    if (chosen_operator == "*")
    {
        actual_answer = parseInt(n1) * parseInt(n2);
    }
    if (chosen_operator == "/")
    {
        actual_answer = Math.floor(parseInt(n1) / parseInt(n2));
    }
    console.log(actual_answer);
    equation = n1+chosen_operator+n2;
    document.getElementById("question").innerHTML = equation;
    document.getElementById("Number-1").value = "";
    document.getElementById("Number-2").value = "";
    document.getElementById("Check_the_button").innerHTML = "Send Button Works";
}
function Check()
{
    console.log("function check");
    answer = document.getElementById("answer").value;
    if (answer_turn == pl1)
    {
        if (answer == actual_answer)
        {
            p1_score++;
        }
        answer_turn = pl2;
    }
    else
    {
        if (answer == actual_answer)
        {
            p2_score++;
        }
        answer_turn = pl1;
        
    }
    if (question_turn == pl1)
    {
        question_turn = pl2;
        p2status = "Question Turn - "+question_turn;
        p1status = "Answer Turn - "+answer_turn;
    }
    else
    {
        question_turn = pl1;
        p1status = "Question Turn - "+question_turn;
        p2status = "Answer Turn - "+answer_turn;
    }
    document.getElementById("player1_score").innerHTML = p1_score;
    document.getElementById("player2_score").innerHTML = p2_score;
    document.getElementById("p1status").innerHTML = p1status;
    document.getElementById("p2status").innerHTML = p2status;
    document.getElementById("output").style.display = "none";
    document.getElementById("Check_the_button").innerHTML = "Check Button Works";
}