//IIFE - Immediately Invoked Functional Expression
(function () {

    function DisplayHomePage() {
        console.log('Calling  Display HomePage  function...');

        let aboutUsBtn = document.getElementById('AboutUsBtn');
        aboutUsBtn.addEventListener("click",function (){
            location.href="about.html";
        })

        let mainContent = document.getElementsByTagName('main')[0];

        let mainParagraph = document.createElement('p');
        mainParagraph.setAttribute('id','mainParagraph');
        mainParagraph.setAttribute('class','mt-3');

        let FirstString = "This is";
        let SecondString =` ${FirstString} the Main Paragraph`;
        mainParagraph.textContent = SecondString;
        mainContent.appendChild(mainParagraph);

    }

    function DisplayAboutUs(){
        console.log('Calling  Display AboutUs  function...');
    }

    function DisplayProducts(){
        console.log('Calling  Display AboutUs  function...');
    }

    function DisplayServices(){
        console.log('Calling  Display AboutUs  function...');
    }
    function DisplayContacts(){
        console.log('Calling  Display AboutUs  function...');
    }


    function Start()
    {
        console.log("Starting...");
        // getting the string value inside the title tag, which is used as the case condition
        switch(document.title){
            case "Home":
                DisplayHomePage();
                break;
            case"About":
                DisplayAboutUs();
                break;
            case"Products":
                DisplayProducts();
                break;
            case"Services":
                DisplayServices();
                break;
            case"Contacts":
                DisplayContacts();
                break;

        }

    }

    window.addEventListener("load", Start);

})();