let checkBox = document.getElementById("check-box");
let olEl = document.getElementById("ol");
checkBox.addEventListener("click", () => {
  if (checkBox.checked) {
    olEl.style.display = "block";
  } else {
    olEl.style.display = "none";
  }
});
