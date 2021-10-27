//const { response, Router } = require("express");

//display by user
function displayMine() {
    const accessToken = localStorage.getItem('sessionToken');
    
    fetch(`http://localhost:3000/item`, {
        method: "GET",
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let display = document.getElementById('items');
        for (i=0; i=display.childNodes.length; i++){
            display.removeChild(display.firstChild)
        }
        if(data.length ===0){
            let display = document.getElementById('items');
            let header = document.createElement('h5');

            display.appendChild(header);
            header.textContent = "No items yet";
            header.setAttribute("class", "noPosts")
        } else {
            for (i=0; i< data.length; i++){
                let display = document.getElementById('items');
                let card = document.getElementById('div');
                let body = document.getElementById('div');
                let header = document.getElementById('h5');
                let subtitle = document.getElementById('h6');
                let para1 = document.getElementById('p');
                let para2 = document.getElementById('p');
                let editBtn = document.getElementById('button');
                let deleteBtn = document.getElementById('button');

                let current = data[i];
                let itemName = current.itemName;
                let itemDesc = current.itemDesc;
                let itemQty = current.itemQty;
                let itemCat = current.itemCat;

                header.textContent = itemName;
                subtitle.textContent = itemDesc;
                para1.textContent = itemQty;
                para2.textContent = itemCat;
                editBtn.textContent= "Edit";
                deleteBtn.textContent= "Delete";

                display.appendChild(card);
                card.appendChild(body);
                body.appendChild(header);
                body.appendChild(subtitle);
                body.appendChild(para1);
                body.appendChild(para2);
                body.appendChild(editBtn);
                body.appendChild(deleteBtn);

                card.setAttribute('id', current.id);
                card.setAttribute('class', 'card');
                body.setAttribute('class', 'card-body');
                header.setAttribute('class', 'card-title');
                subtitle.setAttribute('class', 'card-subtitle mb-2 text-muted');
                para1.setAttribute('class', 'card-text');
                para2.setAttribute('class', 'card-text');

                editBtn.setAttribute('class', 'btn btn-dark editBtn');
                editBtn.setAttribute('type', 'button');
                editBtn.setAttribute('onclick', `editItem(${current.id})`);

                deleteBtn.setAttribute('class', 'btn btn-dark editBtn');
                deleteBtn.setAttribute('type', 'button');
                deleteBtn.setAttribute('onclick', `deleteItem(${current.id})`);
            }
        }
    })
    .catch(err => {
        console.error(err)
    })
}


//display all items
function displayAll() {  
    const accessToken = localStorage.getItem('sessionToken');

    
    fetch(`http://localhost:3000/item/`, {
        method: "GET",
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`,
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let display = document.getElementById('items');
        for (i=0; i<display.childNodes.length; i++){
            display.removeChild(display.firstChild)
        }
        if(data.length ===0){
            let display = document.getElementById('items');
            let header = document.createElement('h5');

            display.appendChild(header);
            header.textContent = "No items yet";
            header.setAttribute("class", "noPosts")
        } else {
            for (i=0; i< data.length; i++){
                let display = document.getElementById('items');
                let card = document.getElementById('div');
                let body = document.getElementById('div');
                let header = document.getElementById('h5');
                let subtitle = document.getElementById('h6');
                let para1 = document.getElementById('p');
                let para2 = document.getElementById('p');
                let editBtn = document.getElementById('button');
                let deleteBtn = document.getElementById('button');

                let current = data[i];
                let itemName = current.itemName;
                let itemDesc = current.itemDesc;
                let itemQty = current.itemQty;
                let itemCat = current.itemCat;

                header.textContent = itemName;
                subtitle.textContent = itemDesc;
                para1.textContent = itemQty;
                para2.textContent = itemCat;
                editBtn.textContent= "Edit";
                deleteBtn.textContent= "Delete";

                display.appendChild(card);
                card.appendChild(body);
                body.appendChild(header);
                body.appendChild(subtitle);
                body.appendChild(para1);
                body.appendChild(para2);
                body.appendChild(editBtn);
                body.appendChild(deleteBtn);

                card.setAttribute('id', current.id);
                card.setAttribute('class', 'card');
                body.setAttribute('class', 'card-body');
                header.setAttribute('class', 'card-title');
                subtitle.setAttribute('class', 'card-subtitle mb-2 text-muted');
                para1.setAttribute('class', 'card-text');
                para2.setAttribute('class', 'card-text');

                editBtn.setAttribute('class', 'btn btn-dark editBtn');
                editBtn.setAttribute('type', 'button');
                editBtn.setAttribute('onclick', `editItem(${current.id})`);

                deleteBtn.setAttribute('class', 'btn btn-dark editBtn');
                deleteBtn.setAttribute('type', 'button');
                deleteBtn.setAttribute('onclick', `deleteItem(${current.id})`);
            }
        }
    })
    .catch(err => {
        console.error(err)
    })
}


//display items by category
function displayByCategory() {

    let itemTitle= document.getElementById('searchBar').value;
    console.log(itemTitle);

    fetch(`http://localhost:3000/item/${itemTitle}`, {
        method: "GET",
        headers: new Headers({
            "Content-Type": "application/json",
        })
    })
    .then(response => response.json())
    .then(data => {
        let display = document.getElementById('items');
        for (i=0; i=display.childNodes.length; i++){
            display.removeChild(display.firstChild)
        }
        if(data.length ===0){
            let display = document.getElementById('items');
            let header = document.createElement('h5');

            display.appendChild(header);
            header.textContent = "No items yet";
            header.setAttribute("class", "noPosts")
        } else {
            for (i=0; i< data.length; i++){
                let display = document.getElementById('items');
                let card = document.getElementById('div');
                let body = document.getElementById('div');
                let header = document.getElementById('h5');
                let subtitle = document.getElementById('h6');
                let para1 = document.getElementById('p');
                let para2 = document.getElementById('p');
                let editBtn = document.getElementById('button');
                let deleteBtn = document.getElementById('button');

                let current = data[i];
                let itemName = current.itemName;
                let itemDesc = current.itemDesc;
                let itemQty = current.itemQty;
                let itemCat = current.itemCat;

                header.textContent = itemName;
                subtitle.textContent = itemDesc;
                para1.textContent = itemQty;
                para2.textContent = itemCat;
                editBtn.textContent= "Edit";
                deleteBtn.textContent= "Delete";

                display.appendChild(card);
                card.appendChild(body);
                body.appendChild(header);
                body.appendChild(subtitle);
                body.appendChild(para1);
                body.appendChild(para2);
                body.appendChild(editBtn);
                body.appendChild(deleteBtn);

                card.setAttribute('id', current.id);
                card.setAttribute('class', 'card');
                body.setAttribute('class', 'card-body');
                header.setAttribute('class', 'card-title');
                subtitle.setAttribute('class', 'card-subtitle mb-2 text-muted');
                para1.setAttribute('class', 'card-text');
                para2.setAttribute('class', 'card-text');

                editBtn.setAttribute('class', 'btn btn-dark editBtn');
                editBtn.setAttribute('type', 'button');
                editBtn.setAttribute('onclick', `editItem(${current.id})`);

                deleteBtn.setAttribute('class', 'btn btn-dark editBtn');
                deleteBtn.setAttribute('type', 'button');
                deleteBtn.setAttribute('onclick', `deleteItem(${current.id})`);
            }
        }
    })
    .catch(err => {
        console.error(err)
    })
}

// POST
function postItem() {
    const accessToken = localStorage.getItem('sessionToken')
    let itemName = document.getElementById('itemName').value;
    let itemDesc = document.getElementById('itemDesc').value;
    let itemQty = document.getElementById('itemQty').value;
    let itemCat = document.getElementById('itemCat').value;

    let newItem = {
        item: {
            itemName: itemName,
            itemDesc: itemDesc,
            itemQty: itemQty,
            itemCat: itemCat
        }
    }

    fetch(`http://localhost:3000/item/create`, {
    //fetch(`https://rhinicorn-quantifyit.herokuapp.com/item/create`, {
        method: "POST",
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        }),
        body: JSON.stringify(newItem)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        postItem();
        displayAll();
    })
    .catch(err => {
        console.error(err)
    })

}