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

  for (let i = 0; i < narr.length; ++i) {
    narr[i] = parseInt(narr[i])
  }
  
  //setting it back
  a.innerHTML = t
  const el = document.querySelector("#msg > span")
  el.addEventListener("onblur", makeTable(getPow(), narr))
}
// const el = document.querySelector("#msg > span")
// el.addEventListener("onblur", makeTable(getPow()))

function isIn(array, number) {
  let ok = 0
  for (let i = 0; i < array.length; ++i) {
    if (array[i] == number)
      ok = 1
  }
  return ok
}

function getPow() {
  var a = document.querySelector("#msg > span")
  var s = a.innerHTML[a.innerHTML.length - 1]
  if (s == 0) return 2
  let power = 1
  while (power <= s) power *= 2
  // console.log(power);
  return power;
}

//just add the logic tomorrow, you're pathetic man... but still you got this:)

function makeTable(a, array) {
  for (let i = 0; i < a; ++i) {
    var adder = document.querySelector("body > div.table")
    var dv = document.createElement("div")

    if (isIn(array, i)) {
      dv.className = 'square-one'
      dv.innerText = '1'
    } else {
      dv.className = 'square-zero'
      dv.innerText = '0'
    }

    if (a == 2) {
      adder.style.gridTemplateColumns = `repeat(${a}, 182px)`
    } else {
      adder.style.gridTemplateColumns = `repeat(${a / 2}, 182px)`
    }
    adder.appendChild(dv)
  }

  for (let i = 0; i < a; ++i) {
    var sqrs = document.querySelector(`body > div.table > div:nth-child(${i + 1})`)
    if (isIn(array, i)) {
      var circles = document.createElement("div")
      circles.className = 'dot'
      sqrs.appendChild(circles)
    }
  }
}