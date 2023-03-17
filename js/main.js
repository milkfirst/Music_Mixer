+console.log('Are you ready to drop some dinos? :D');

/* use the querySelectorAll method to select
all HTML elements with class "dino" and class "drop-zone" */

const dinos = document.querySelectorAll(".dino");
const dropZones = document.querySelectorAll(".drop-zone");

/* loop through the dinos array using the forEach method
and set a unique id for each dinosaur element and adds drag and drop event listeners to each dinosaur.  */

dinos.forEach((dino, index) => {
  dino.setAttribute("id", `dino-${index}`);
  dino.addEventListener("dragstart", dragStart);
  dino.addEventListener("dragend", dragEnd);
});

dropZones.forEach(dropZone => {
  dropZone.addEventListener("dragenter", dragEnter);
  dropZone.addEventListener("dragleave", dragLeave);
  dropZone.addEventListener("dragover", dragOver);
  dropZone.addEventListener("drop", dropped);
});

/* dragstart event listener is triggered when a user starts to drag a dinosaur */

function dragStart(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
  
    // Get the original size of the dinosaur
    let originalSize = event.target.dataset.originalSize;
  
    // Set the original size as the size of the dinosaur during the drag
    event.target.style.width = originalSize + "80px";
    event.target.style.height = originalSize + "80px";
}

/* loop through the dropZones array and adds drag and drop event 
listeners to each drop zone */

function dragEnd(e) {
  const dino = e.target;
  dino.style.display = "block";
  setTimeout(() => {
    dino.style.display = "flex";
  }, 0);
  console.log('dropped this dino on me:', this);
}

/*  dragenter event listener is triggered when a dinosaur enters a drop zone */

function dragEnter(e) {
  e.preventDefault();
  const dropZone = e.target;
  dropZone.style.backgroundColor = "rgba(0, 255, 0, 0.2)";
}

/* dragleave event listener is triggered when a dinosaur leaves a drop zone */

function dragLeave(e) {
  const dropZone = e.target;
  dropZone.style.backgroundColor = "inherit";
}

/* dragover event listener is triggered when a dinosaur is being dragged over a drop zone and it logs a message indicating the time in milliseconds (or i don't know what the clicks are) that the dinosaur is being dragged over the drop zone. */

function dragOver(e) {
  e.preventDefault();
  console.log('is how many milliseconds dino is being dragged over me'); 
}

/* the drop event listener is triggered when a dinosaur is dropped on a drop zone and it appends the dinosaur to the drop zone. */

function dropped(e) {
  e.preventDefault();
  const dropZone = e.target;
  dropZone.style.backgroundColor = "inherit";
  const dinoId = e.dataTransfer.getData("text/plain");
  const dino = document.querySelector(`#${dinoId}`);
  dino.style.display = "none";
  dropZone.appendChild(dino);
  console.log('the dino has been dropped over me');
}

// Instrutions button 

const btn = document.querySelector('#info');
const container = document.querySelector('#inst');

btn.addEventListener("click", function() {
  if(container.style.display === "block") {
    container.style.display = "none"
  } else {
    container.style.display = "block"
  }
});
