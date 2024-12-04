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













const texte = document.getElementById('texte');

texte.onmouseover = () => {
    texte.textContent = "hamza";
};

texte.onmouseout = () => {
    texte.textContent = "regex.";
};








const inputField = document.getElementById('carcter');
const errorMessage = document.getElementById('error');
const validateButton = document.getElementById('btn');

validateButton.addEventListener('click', () => {
    if (inputField.value.length < 5) {
        errorMessage.textContent = "oh nice";
    } else {
        errorMessage.textContent = "";
        alert("must  < 5");
    }
});



const div4=document.getElementById("divclass") 
const text =document.getElementById('btn1')

text.addEventListener('click',function () {
    div4.classList.add('divclass');
    
})


const input = document.getElementById("itemInput");
const addButton = document.getElementById("addButton");
const itemList = document.getElementById("itemList");

function addItem() {
    const li = document.createElement("li");
    li.textContent = input.value;
    itemList.appendChild(li);
    input.value = ""; 
    
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Supprimer";
    deleteButton.style.marginLeft = "10px";

    deleteButton.addEventListener("click", () => {
        li.remove(); 
    });

    li.appendChild(deleteButton);

    itemList.appendChild(li);

}
addButton.addEventListener("click", addItem);
input.addEventListener("keypress", (e) => {
   
        addItem();
    
});


const images = document.querySelectorAll(".gallery img");
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.getElementById("closeModal");

images.forEach(image => {
    image.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImage.src = image.src; 
    });
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});




