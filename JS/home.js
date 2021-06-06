
function SayHello(number){
    var node = document.createTextNode("This is a test");
    var para = document.createElement("p");
    para.appendChild(node);
    var element = document.querySelector(".movie-list");
    element.appendChild(para);
    var i;
    for (i = 0; i <= number; i++)
    {
    }
}