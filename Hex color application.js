    function hcl(){
    var letters = "0123456789ABCDEF";
    var color = "#";
    for(var i=0; i<6; i++){
    color += letters[Math.floor(Math.random() *15)];
     }
    document.getElementById("hexcolor").style.background = color;
    
    }

// function hcl(){
//     var colors = ["Red","blue","yellow","green"]
//     var color1 = colors[Math.round(Math.random()*3)]
//     document.getElementById("hexcolor").style.background = color1;
// }
