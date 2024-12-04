let div = document.getElementById('p');
div.addEventListener('click', function() {
  this.style.color = 'red';
});


function clik() {
    alert('slm');
    
}



document.addEventListener("mousemove", function(event) {
    const x = event.clientX;
    const y = event.clientY;
    document.getElementById("mous").textContent = `X: ${x}, Y: ${y}`;
});

let counter = 0;

function hide() {
    const div1 = document.getElementById("hide");

    if (div1.style.display === "block") {
        div1.style.display = "none";
    } else {
        div1.style.display = "block";
    }

   
    counter++;
    cont.textContent=counter;
}

const div2 = document.getElementById('showandhide');

div2.addEventListener("click", function () {
    if (div2.display === "block" || div2.display === " "){
      div2.style.display = "none"; 
    console.log(div2);
    } else 
    {
        console.log(div2);
        
    div2.style.display = "block";
    }
});