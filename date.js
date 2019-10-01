function lastModified() {
  document.getElementById("lastModified").textContent = document.lastModified;
}
 
function getYear(){
  var d = new Date;
  var year = d.getFullYear();
  document.getElementById("coprightYear").textContent = year;
}

function updateDates()
{
  lastModified();
  getYear();
}