function Add_User()
{
    p1 = document.getElementById("Player_1_Login_Input").value;
    localStorage.setItem("p1", p1);
    p2 = document.getElementById("Player_2_Login_Input").value;
    localStorage.setItem("p2", p2);
    window.location.replace("quiz_game_page.html");
}