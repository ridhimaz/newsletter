const pattern = "^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$";
function dismiss()
{
  window.location.reload();
}
function red()
{
    document.getElementById("small-p").style.display = 'block';
    document.querySelector('#exampleInputEmail1').style.border='1px solid hsl(4, 100%, 67%)';
}
function thankYou()
{
  document.querySelector(".container").style.display = 'none';
  document.querySelector(".thankYou").style.display = 'flex';
}
function checkMail() {
    const input = document.querySelector("#exampleInputEmail1");
    if (input.value.match(/[^\s@]+@[^\s@]+\.[^\s@]+/gi)) {
     thankYou();
    } else {
      red();
    }
  }
  