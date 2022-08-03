let url_string = window.location.href; // www.test.com?filename=test
let url = new URL(url_string);
let param1Value = url.searchParams.get("param1");
let param2Value = url.searchParams.get("param2");
if (param1Value === 'android') {
  document.querySelector("#title").style.color = "blue";
  document.querySelector("#mydiv").innerHTML =
    "

  ";

  param1Value + ", " + param2Value;
}
if (param1Value === 'C is awesome') {
  document.querySelector("#title").style.color = "red";
}

