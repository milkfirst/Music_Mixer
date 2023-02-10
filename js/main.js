const dinos = document.querySelectorAll(".dino");
const dropZones = document.querySelectorAll(".drop-zone");

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

function dragStart(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
  
    // Get the original size of the dinosaur
    let originalSize = event.target.dataset.originalSize;
  
    // Set the original size as the size of the dinosaur during the drag
    event.target.style.width = originalSize + "80px";
    event.target.style.height = originalSize + "80px";
}
  

function dragEnd(e) {
  const dino = e.target;
  dino.style.display = "block";
  setTimeout(() => {
    dino.style.display = "flex";
  }, 0);
}

function dragEnter(e) {
  e.preventDefault();
  const dropZone = e.target;
  dropZone.style.backgroundColor = "rgba(0, 255, 0, 0.2)";
}

function dragLeave(e) {
  const dropZone = e.target;
  dropZone.style.backgroundColor = "inherit";
}

function dragOver(e) {
  e.preventDefault();
}

function dropped(e) {
  e.preventDefault();
  const dropZone = e.target;
  dropZone.style.backgroundColor = "inherit";
  const dinoId = e.dataTransfer.getData("text/plain");
  const dino = document.querySelector(`#${dinoId}`);
  dino.style.display = "none";
  dropZone.appendChild(dino);
}

