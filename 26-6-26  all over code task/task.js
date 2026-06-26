let books = [
    { "BookId": "1", "BookName": "Math's", "AuthorName": "Aryabhata", "Category": "Applied Mathematics", "Quantity": 8 },
];


document.querySelector('.btn-1').onclick = function () {
    let book = {
        BookId: Number(prompt("Enter book Id :")),
        BookName: prompt("Enter book Name :"),
        AuthorName: prompt("Enter book Author Name :"),
        Category: prompt("Enter book Category :"),
        Quantity: Number(prompt("Enter book Quantity :")),
    }

    books.push(book);
    console.log(books);
}




document.querySelector('.btn-2').onclick = function () {
    for (const element of books) {
        document.querySelector('div').innerHTML += `<p>Book Id : ${element.BookId}</p>`;
        document.querySelector('div').innerHTML += `<p>Book Name : ${element.BookName}</p>`;
        document.querySelector('div').innerHTML += `<p>Author Name : ${element.AuthorName}</p> `;
        document.querySelector('div').innerHTML += `<p>Category : ${element.Category}</p>`;
        document.querySelector('div').innerHTML += `<p>Quantity : ${element.Quantity}</p>`;
    }
}


document.querySelector('.btn-3').onclick = function () {
    var name = prompt("Enter book Name :");
    var flag = false;

    for (const element of books) {

        if (element.BookName == name) {
            // document.querySelector('div').innerHTML += `<p>Book Id : ${element.BookId}</p>`;
            // document.querySelector('div').innerHTML += `<p>Book Name : ${element.BookName}</p>`;
            // document.querySelector('div').innerHTML += `<p>Author Name : ${element.AuthorName}</p> `;
            // document.querySelector('div').innerHTML += `<p>Category : ${element.Category}</p>`;
            // document.querySelector('div').innerHTML += `<p>Quantity : ${element.Quantity}</p>`;

            if (element.Quantity > 0) {
                element.Quantity--;
            }
            else {
                document.querySelector('div').innerHTML += " out of stock";
            }

            flag = true;

        }
    }

    if(flag == false)
    {
        document.querySelector('div').innerHTML = "This book is not available";
    }
    else
    {
        document.querySelector('div').innerHTML = "Book issued successfully !";
    }
}





document.querySelector('.btn-4').onclick = function () {
    var bname = prompt("Enter the book Name :");
    var flag = false;
    
    for (const element of books) {
        if(element.BookName == bname)
        {
            element.Quantity++;
            flag = true;
        }
    }

    if(flag == false)
    {
        document.querySelector('div').innerHTML = "This book is not issued";
    }
    else
    {
        document.querySelector('div').innerHTML = "Book retun successfully !";
    }

}




document.querySelector('.btn-5').onclick = function () {
    var bname = prompt("Enter the book Name :");
    var index = 0;
    var flag = false;

    for (const element of books) {
        if (element.BookName == bname) {
            books.splice(index,1);
            flag = true;
           
        }
        index++;


    }

    if(flag == false)
    {
        document.querySelector('div').innerHTML = "This Book is not available";
    }
    else
    {
        document.querySelector('div').innerHTML = "Book deleted successfully !";
    }

}



document.querySelector('.btn-6').onclick = function ()
{
    for (const element of books) {
        if(element.Quantity > 0)
        {
           document.querySelector('div').innerHTML +=  element.BookName + " available ";
        }
        else
        {
           document.querySelector('div').innerHTML +=  element.BookName + " out of stock ";
        }
    }
    

}

document.querySelector('.btn-7').onclick = function ()
{
    document.querySelector('div').innerHTML = books.length;
}







