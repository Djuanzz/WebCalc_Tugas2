let number = [];
let operator = [];
let num,
  op,
  res = 0;
let sipsioke = "";
let layar = document.querySelector(".layar");

for (let i = 0; i < 10; i++) {
  number[i] = document.getElementById(`no${i}`);
  number[i].addEventListener("click", (ev) => {
    num = ev.target.innerHTML;
    console.log(num);
    sipsioke += num;
    document.querySelector(".layar").innerHTML = sipsioke;
  });
}

for (let i = 1; i < 7; i++) {
  operator[i] = document.getElementById(`opr${i}`);
  operator[i].addEventListener("click", (ev) => {
    op = ev.target.innerHTML;
    console.log(op);
    if (op == "=") {
      // The eval() method evaluates or executes an argument.
      // If the argument is an expression, eval() evaluates the expression. If the argument is one or more JavaScript statements, eval() executes the statements.
      // DALAM BENTUK STRING
      console.log(sipsioke);
      // DALAM BENTUK HASIL PERHITUNGAN
      console.log(eval(sipsioke));
      res = eval(sipsioke);
      layar.innerHTML = res;
      sipsioke = "";
    } else if (op == "C") {
      sipsioke = "";
      res = 0;
      layar.innerHTML = sipsioke;
    } else {
      sipsioke += op;
      layar.innerHTML = sipsioke;
    }
  });
}
