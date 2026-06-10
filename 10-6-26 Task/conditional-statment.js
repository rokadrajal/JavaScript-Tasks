let num1 = Number(prompt("Enter the value num1 :"));
let num2 = Number(prompt("Enter the value num2 :"));
let num3 = Number(prompt("Enter the value num3 :"));

if (num1 > num2 && num1 > num3) {
    document.querySelector('h1').innerHTML = "Num1 is largest";
}
else if (num2 > num3 && num2 > num1) {
    document.querySelector('h1').innerHTML = "Num2 is largest";
}
else if (num3 > num1 && num3 > num2) {
    document.querySelector('h1').innerHTML = "Num3 is largest";
}
else if (num1 == num2 && num2 > num3) {
    document.querySelector('h1').innerHTML = "num1 and num2 both are same and highest";
}
else if (num2 == num3 && num2 > num1) {
    document.querySelector('h1').innerHTML = "num2 and num3 both are same and highest";
}
else if (num1 == num3 && num1 > num2) {
    document.querySelector('h1').innerHTML = "num1 and num3 both are same and highest";
}
else {
    document.querySelector('h1').innerHTML = "All are equal";

}