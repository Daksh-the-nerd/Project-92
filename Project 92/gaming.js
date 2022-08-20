

function addUser()
{
    player_2_username = document.getElementById("player2_name_input").value;
    player_1_username = document.getElementById("player1_name_input").value;

    localStorage.setItem("1st_username",player_1_username);
    localStorage.setItem("2nd_username",player_2_username);

console.log("player_1_username")

    window.location = "game_page.html"
}
var player1_name = localStorage.getItem("1st_username");
var player2_name = localStorage.getItem("2nd_username");

var player1_score = 0; 
var player2_score = 0;

document.getElementById("player_2name").innerHTML= player2_name + ":";
document.getElementById("player_1name").innerHTML= player1_name + ":";


document.getElementById("player_1score").innerHTML = player1_score
document.getElementById("player_2score").innerHTML = player2_score

document.getElementById("player_question").innerHTML = "Question turn is " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer turn is " + player2_name;

function send()
{
    var number_1 = document.getElementById("word1").value;
    var number_2 = document.getElementById("word2").value;
    answer = parseInt(number_1) * parseInt(number_2);

    var question = "<h4>" + number_1 + "x" + number_2 + "</h4>";
    var text_box = "<br> Answer : <input type='text' id= 'input_check_box'>";
    var check_button = "<br><br><button class='btn btn-info'onclick='check()'>Check</button>";
    var row = question + text_box + check_button ; 
    document.getElementById("output").innerHTML = row
    
    var number_1 = document.getElementById("word1").innerHTML = "";
    var number_2 = document.getElementById("word2").innerHTML = "";

}
var answer
var question_turn = "player1"
var answer_turn = "player2"

function check()
{
    var get_answer = document.getElementById("input_check_box").value;
    if(get_answer == answer)
    {
        if(answer_turn == "player1")
        {
            player1_score = player1_score + 1;
            document.getElementById("player_1score").innerHTML = player1_score;
            
        }
        else
        {
            player2_score = player2_score + 1;
            document.getElementById("player_2score").innerHTML = player2_score;
        }
        
        
        if(question_turn == "player1")
        {
            question_turn = "player2"
            document.getElementById("player_question").innerHTML = "Question turn is " + player2_name;
        }
        else
        {
            question_turn = "player1"
            document.getElementById("player_question").innerHTML = "Question turn is " + player1_name;
        }
        
        if(answer_turn == "player1")
        {
            answer_turn = "player2"
            document.getElementById("player_answer").innerHTML = "Answer turn is " + player2_name;
        }
        else
        {
            document.getElementById("player_answer").innerHTML = "Answer turn is " + player1_name;
        }
    }
}