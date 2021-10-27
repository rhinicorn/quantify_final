//const {  } = require("express");

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


//update
function editItem(postId) {
    console.log('editJournal Function Called')
    const fetch_url = `http://localhost:3000/item/update/${postId}`;
    //const fetch_url = `https://rhinicorn-quantifyit.herokuapp.com/item/update/${postId}`;
    //const accessToken = localStorage.getItem('sessionToken');

    let card = document.getElementById(itemId);
    let input = document.createElement('input');

    if(card.childNodes.length <2){
        card.appendChild(input);
        input.setAttribute("type", "text");
        input.setAttribute("id", "updatedItem");
        input.setAttribute("placeholder", "Edit your item");
    } else{
        let updated = document.getElementById('updatedItem').value;
        let newItem = {
            item: {
                entry: updated
            }
        }

        fetch(fetch_url, {
            method: "PUT",
            headers: new Headers({
                "Content-Type": "application/json",
                //"Authorization": `Bearer ${accessToken}`
            }),
            body: JSON.stringify(newItem)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                displayAll();
            })
            .catch(err => {
                console.error(err)
            })
        card.removeChild(card.lastChild)
    }
}


//Delete
function deleteItem(itemId) {
 console.log('deleteItem Function Called')
}