document.addEventListener("DOMContentLoaded", function() {
    renderMathInElement(document.body, {
      // customised options
      // • auto-render specific keys, e.g.:
      delimiters: [
          {left: '$$', right: '$$', display: true},
          {left: '$', right: '$', display: false},
      ],
      // • rendering keys, e.g.:
      throwOnError : false
    });
});

button = document.getElementById("Button");

button.addEventListener("click", function() {
    var input = document.getElementById("First").value;
    var output = document.getElementById("MATH");
    output.innerHTML = input;
    renderMathInElement(output, {
      delimiters: [
          {left: '$$', right: '$$', display: true},
          {left: '$', right: '$', display: false},
      ],
      throwOnError : false
    });
});