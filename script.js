function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{1})+(?!\d))/g, ',');
}

function myFunction() {
  //just adding , to every digit
  var a = document.querySelector("#msg > span")
  a.innerHTML = numberWithCommas(a.innerHTML)

  //sorting
  var s = a.innerHTML
  var arr = []
  for (let i = 0; i < s.length; i += 2) arr.push(s[i])
  arr.sort()

  var narr = [...new Set(arr)]
  narr = narr.filter(n => n < 8)

  //remaking the string
  let nxt = 0
  var t = ''
  for (let i = 0; i < narr.length * 2 - 1; ++i) {
    if (i % 2 == 0) {
      t += narr[nxt++]
    } else {
      t += ','
    }
  }

  //setting it back
  a.innerHTML = t
}

function getPow() {
  var a = document.querySelector("#msg > span")
  var s = a.innerHTML[a.innerHTML.length - 1]
  let power = 1
  while (power <= s) power *= 2
  console.log(power);
  return power;
}

function makeTable(a) {
  for (let i = 0; i < a; ++i) {
    var adder = document.querySelector("body > div.table")
    var dv = document.createElement("div")
    dv.className = "square"
    if (a == 2) {
      adder.style.gridTemplateColumns = `repeat(${a}, 182px)`
    } else {
      adder.style.gridTemplateColumns = `repeat(${a / 2}, 182px)`
    }
    adder.appendChild(dv)
  }
}

makeTable(getPow())