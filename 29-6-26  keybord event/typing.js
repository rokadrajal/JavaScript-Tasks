var typing = document.querySelector('div').innerHTML;

document.querySelector('div').innerHTML = " ";

for (const i in typing) {

    // console.log(mydata[i]);

    document.querySelector('div').innerHTML += `<span>${typing[i]}</span>`;

}

var index = 0;
var True = 0;
var False = 0;
var space = 0;

function count() {
    document.querySelector('.a').innerHTML = True;
    document.querySelector('.b').innerHTML = False;
    document.querySelector('.c').innerHTML = space;

}





document.body.onkeypress = function (event) {

    if (event.key == " ") {
        space++;

    }

    else if (event.key == typing[index]) {
        // console.log(event.key,"MACH");

        document.querySelectorAll('span')[index].style.color = "lime";
        True++;
    }

    else {
        // console.log(event.key,"NOT MACH");
        document.querySelectorAll('span')[index].style.color = "red";
        False++;
    }
    index++;

    count();




}
