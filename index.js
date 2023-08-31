function projects(){
    window.open("https://h11tesh.github.io/dicegame/");
}

function contactMe(){
    var mailID = prompt("Enter your Email ID.");
    if(mailID === null || mailID === "")
        {
            alert("You have not entered your Email ID. Please try again.")
        }
    else{
        alert("Thank you, we will get in touch with you shortly.");  
    }   
}

function about()
{
    document.getElementById('resume').scrollIntoView();
}

function hideNavbar(){
    document.querySelector(".navbar").classList.toggle("visibilityToggle");
}