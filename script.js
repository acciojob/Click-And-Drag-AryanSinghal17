const items = document.querySelectorAll(".item");
const container = document.querySelector(".items");

let currentItem = null;
let offsetX = 0;
let offsetY = 0;

// Create initial grid positions
items.forEach((item, index) => {
  const col = index % 5;
  const row = Math.floor(index / 5);

  item.style.position = "absolute";
  item.style.left = `${20 + col * 220}px`;
  item.style.top = `${20 + row * 220}px`;
});

items.forEach((item) => {
  item.addEventListener("mousedown", (e) => {
    currentItem = item;

    offsetX = e.offsetX;
    offsetY = e.offsetY;
  });
});

document.addEventListener("mousemove", (e) => {
  if (!currentItem) return;

  const rect = container.getBoundingClientRect();

  let x = e.clientX - rect.left - offsetX;
  let y = e.clientY - rect.top - offsetY;

  x = Math.max(
    0,
    Math.min(x, container.clientWidth - currentItem.offsetWidth)
  );

  y = Math.max(
    0,
    Math.min(y, container.clientHeight - currentItem.offsetHeight)
  );

  currentItem.style.left = `${x}px`;
  currentItem.style.top = `${y}px`;
});

document.addEventListener("mouseup", () => {
  currentItem = null;
});