function listFiler(){
    let searchInput = document.getElementById("myInput");
    let filter = searchInput.value.toLowerCase();
    let products = document.getElementById("myProducts");
    let listItems = products.getElementsByTagName('li'); 

    for (let index=0; index < listItems.length; index++) {
        let item = listItems[index].getElementsByTagName('a')[0];
        let itemValue = item.textContent || item.innerText;

        if (itemValue.toLowerCase().indexOf(filter) > -1) {
            listItems[index].style.display = "";
        } else {
            listItems[index].style.display = "none";
        }
    }
}