class Book{
    constructor(name,author,type){
    this.name=name
    this.author=author
    this.type=type
    }
}

class Display{
    add(book)
    {
        console.log("Adding to ui")
    let tablebody=document.getElementById("tablebody")
    let uistring=` <tr>
           
                    <td>${book.name}</td>
                    <td>${book.author}</td>
                    <td>${book.type}</td>
                </tr>`
    tablebody.innerHTML+=uistring
    }
    clear(){
        let library=document.getElementById("library")
library.reset();
    }

    validate(book)
    {
        
        if(book.name.length<2||book.author.length<2)
        {
            return false
        }
        else{
           return true
        }

    }
    show(type,message)
    {
        
    let message1=document.getElementById('message')
    message1.innerHTML=`<div class="alert alert-${type} alert-dismissible fade show" role="alert">
    <strong>Holy guacamole!</strong>${message}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`
  setTimeout(() => {
      message1.innerHTML=" "
  }, 2000);
    }
}
let library=document.getElementById("library")
library.addEventListener('submit',librarySubmit)

function librarySubmit(e)   
{   e.preventDefault();
    let name=document.getElementById('bookName').value
    let author=document.getElementById('author').value
    let fiction=document.getElementById('fiction')
    let computer=document.getElementById('computer')
    let cooking=document.getElementById("cooking")
    let type
    if(fiction.checked){
        type=fiction.value
    }
    else if(computer.checked){
        type=computer.value
    }
    else if(cooking.checked)
    {
        type=computer.value
    }


    
    let book=new Book(name,author,type)
    console.log(book)

    let display=new Display();
   if(display.validate(book))
{    display.add(book);
    display.clear();
    display.show("sucess",'your book has been added');
}
else{
    display.show("danger","sorry you cannot add this book")
}

    
}