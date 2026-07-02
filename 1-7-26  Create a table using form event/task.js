var index = 1;
document.querySelector('form').onsubmit = function (event)
{
    event.preventDefault();


    document.querySelectorAll('span')[index].innerHTML = document.querySelector('.i1').value;
    document.querySelectorAll('span')[0].innerHTML = document.querySelector('.i1').value;
    document.querySelectorAll('span')[1].innerHTML = document.querySelector('.i2').value;
    document.querySelectorAll('span')[2].innerHTML = document.querySelector('.i3').value;
    document.querySelectorAll('span')[3].innerHTML = document.querySelector('.i4').value;

    

    document.querySelector('table').innerHTML += `<tr><td>${index++}</td><td>${document.querySelector('.i2').value}</td><td>${document.querySelector('.i3').value}</td><td>${document.querySelector('.i4').value}</td><td>${document.querySelector('.i5').value}</td></tr>`;
    

    




    

}

