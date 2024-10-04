let username;
// username = window.prompt("what's your name");
document.getElementById("submit-button").onclick = function () {
  username = document.getElementById("text-box").value;
  document.getElementById("enter-name").textContent = `Assalamualaikum ${username}`;
};
