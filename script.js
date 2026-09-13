const items = document.querySelectorAll('.item');
const container = document.querySelector('.items');

let currentItem = null;
let offsetX = 0;
let offsetY = 0;

items.forEach((item) => {

    item.style.position = "absolute";

    item.addEventListener("mousedown", function(e) {

        currentItem = item;

        offsetX = e.offsetX;
        offsetY = e.offsetY;
    });
});

document.addEventListener("mousemove", function(e) {

    if (!currentItem) return;

    let containerRect = container.getBoundingClientRect();

    let x = e.clientX - containerRect.left - offsetX;
    let y = e.clientY - containerRect.top - offsetY;

    // boundaries
    x = Math.max(
        0,
        Math.min(
            x,
            container.clientWidth - currentItem.offsetWidth
        )
    );

    y = Math.max(
        0,
        Math.min(
            y,
            container.clientHeight - currentItem.offsetHeight
        )
    );

    currentItem.style.left = x + "px";
    currentItem.style.top = y + "px";
});

document.addEventListener("mouseup", function() {
    currentItem = null;
});