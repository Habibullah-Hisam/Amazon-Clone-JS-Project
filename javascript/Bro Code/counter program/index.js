let a, b, c, d;
d = 0;
a = document.getElementById("a").value;
a = Number(a);
b = document.getElementById("b").value;
b = Number(b);
c = document.getElementById("c").value;
c = Number(c);
document.getElementById("a").onclick = function(){
  d -= 1;
  document.getElementById("myp").textContent = d;
}
document.getElementById("b").onclick = function(){
  d = 0;
  document.getElementById("myp").textContent = 0;
}
document.getElementById("c").onclick = function(){
  d += 1;
  document.getElementById("myp").textContent = d;
}