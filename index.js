const pattern = "^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$";

// function checkMail()
// {
//     let value=document.getElementById('exampleInputEmail1').value;

//     console.log(value.match(pattern));
//     console.log(value);
// }
// function checkMail() {
//     var email = document.getElementById('exampleInputEmail1').value;
//     var filter = "^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$";
//     if (!filter.test(email.value)) {
//         alert('Please provide a valid email address');
//         email.focus;
//         return false;
//     }
// }
function red()
{
    document.getElementById("small-p").style.display = 'block';
    document.querySelector('#exampleInputEmail1').style.border='1px solid hsl(4, 100%, 67%)';
}
function thankYou()
{
  document.querySelector(".row").style.display = 'none';
  document.querySelector(".thankYou").style.visibility = 'visible';
}
function checkMail() {
    const input = document.querySelector("#exampleInputEmail1");
    if (input.value.match(/[^\s@]+@[^\s@]+\.[^\s@]+/gi)) {
     thankYou();
    } else {
      red();
    }
  }
  