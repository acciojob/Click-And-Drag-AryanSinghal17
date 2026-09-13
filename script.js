const items = document.querySelectorAll(".item");

let currentItem = null;
let shiftX = 0;
let shiftY = 0;

items.forEach((item) => {

  item.addEventListener("mousedown", function (e) {

    currentItem = item;

    const rect = item.getBoundingClientRect();

    shiftX = e.clientX - rect.left;
    shiftY = e.clientY - rect.top;

    item.style.position = "fixed";
    item.style.zIndex = "1000";

    moveAt(e.pageX, e.pageY);
  });

});

function moveAt(pageX, pageY) {

  if (!currentItem) return;

  currentItem.style.left = pageX - shiftX + "px";
  currentItem.style.top = pageY - shiftY + "px";
}

document.addEventListener("mousemove", function (e) {

  if (!currentItem) return;

  moveAt(e.pageX, e.pageY);
});

document.addEventListener("mouseup", function () {

  currentItem = null;
});