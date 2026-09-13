const items = document.querySelectorAll(".item");
const container = document.querySelector(".items");

let currentItem = null;
let offsetX = 0;
let offsetY = 0;

items.forEach((item) => {
  item.addEventListener("mousedown", function (e) {
    currentItem = item;

    const rect = item.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    item.style.position = "absolute";
    item.style.left = rect.left - containerRect.left + "px";
    item.style.top = rect.top - containerRect.top + "px";

    item.style.zIndex = "1000";

    offsetX = e.offsetX;
    offsetY = e.offsetY;
  });
});

document.addEventListener("mousemove", function (e) {
  if (!currentItem) return;

  const containerRect = container.getBoundingClientRect();

  let x = e.clientX - containerRect.left - offsetX;
  let y = e.clientY - containerRect.top - offsetY;

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

document.addEventListener("mouseup", function () {
  if (currentItem) {
    currentItem.style.zIndex = "";
  }

  currentItem = null;
});