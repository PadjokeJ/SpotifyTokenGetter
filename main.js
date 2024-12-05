const copy_button = document.getElementById("copy-code");

//get code
const args = window.location.search;
const token = args.split("?code=")[1];

document.getElementById("code-block").innerHTML = token;

copy_button.addEventListener("click", function()
{
    if(token != null)
    {
        navigator.clipboard.writeText(token);
        alert("Token has been copied to your keyboard");
    }
    else
    {
        alert("You don't have a token in your URL\nNothing was copied to your clipboard");
    }
});

const token_element = document.getElementById("code-block");

token_element.addEventListener("mouseenter", function()
{
    token_element.style.color = "rgb(0, 0, 0)";
});

token_element.addEventListener("mouseleave", function()
{
    token_element.style.color = "rgb(96, 165, 18)";
});