function loadDocument() {
    // ამ ზოლზე შეიქმნა მიმართვა instance-სი XMLHttpRequest ობიექტთან, იგი მივანიჭეთ ცვლად xHttp-ის.
    // XMLHttpRequest() ობიექტი გამოიყენება სერვერთან კომუნიკაციისთვის და მონაცემების სერვერიდან მისაღებად.
    let xHttp = new XMLHttpRequest();

    let contentChangerButton = document.getElementById("contentChanger");

    // ეს ზოლი აკავშირებს ანონიმურ, ლოკალურ ფუნქციას onreadystatechange-ივენთთან, იგი გამოძახებულ იქნება მაშინ როდესაც readyState ატრიბუტის მნიშვნელობა xHttp ობიექტში შეიცვლება.
    xHttp.onreadystatechange = function() {
        console.log(this.readyState)

        // 1. An event occurs in a web page (the page is loaded, a button is clicked)
        // 2. An XMLHttpRequest object is created by JavaScript
        // 3. The XMLHttpRequest object sends a request to a web server
        // 4. The server processes the request
        // 5. The server sends a response back to the web page
        // 6. The response is read by JavaScript
        // 7. Proper action (like page update) is performed by JavaScript



        if (this.readyState == 4 && this.status == 200) {
            contentChangerButton.innerHTML = this.responseText;
        }
    };

    // open()-ში პირველი პარამეტრი ასოცირდება მიმართვის(request) ტიპთან, მეორე ასოცირდება წასაკითხი
    // ფაილის მისამართთან, ხოლო მესამე ასოცირდება იმასთან, რომ მიმართვის ტიპი ამ ფაილთან უნდა იქნეს ასინქრონული.
    
    xHttp.open("GET", "silabusi.txt", true);
    xHttp.send();

}