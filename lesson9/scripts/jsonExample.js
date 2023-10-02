async function jsonReader() {
    const jsonData = await fetch('./data.json');

    // const jsonData =  fetch('./data.json').then(response => response.json())

    const formattedData = await jsonData.json();
    const newDivElement = document.createElement("div");
    newDivElement.id = "response";
    newDivElement.innerHTML += `<p>User has a name of ${formattedData.name} </p>
    <br>
    <p> His surname is ${formattedData.surname} </p>

    <p> He has worked on following Papers ${formattedData.lifeWorks} </p>

    <p> He has lived in multiple places </p>

    <p> For instance he has lived in germany for ${formattedData.placesWhereHeLived.germany} years.</p>
    <p> And he has also lived in USA for ${formattedData.placesWhereHeLived.usa} years.</p>
    `
    document.getElementsByTagName('body')[0].appendChild(newDivElement);


}