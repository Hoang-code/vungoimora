function tong(){
    let a = Number(document.getElementById("so1").value)
    let b = Number(document.getElementById("so2").value)
    let total = a + b
    document.getElementById("ketqua").innerText= "Result Addition: " + total
}

function hieu(){
    let a = Number(document.getElementById("so1").value)
    let b = Number(document.getElementById("so2").value)
    let total = a - b
    document.getElementById("ketqua").innerText= "Result Subtraction: " + total
}

function tich(){
    let a = Number(document.getElementById("so1").value)
    let b = Number(document.getElementById("so2").value)
    let total = a * b
    document.getElementById("ketqua").innerText= "Result Multiplication: " + total
}
function thuong(){
    let a = Number(document.getElementById("so1").value)
    let b = Number(document.getElementById("so2").value)
    let total = a / b
    document.getElementById("ketqua").innerText= "Result Division: " + total
}