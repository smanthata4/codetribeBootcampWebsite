//contact us page
window.onload = function(){ 
    /*Navigation bar
  : pages links*/
  var nav_a_values = [
    {name:"Home",link:"../../Index.html"},
    {name:"About Me",link:"./about_us_asset.html"},
    {name:"Contact Me",link:"./contact_us_asset.html"},
    {name:"web_icon",source:"../icons/web.png"}
  ];

  var img = document.getElementById("icon_nav");
  let nav = document.getElementById("nav_a");
  var a = nav.childNodes;

  for(var index = 0; index < nav_a_values.length; index++){
    if(nav_a_values[index].name != "web_icon"){
      a[index+1].innerHTML = nav_a_values[index].name;
      a[index+1].href = nav_a_values[index].link;
    }else{
      img.src = nav_a_values[index].source;
      img.alt = nav_a_values[index].name;
    }
  }

  /*body
  : personal information, bio, eduacation bacground and if any:experience*/
  //variable declaration
  var contact_head = "Contact Me";
  var location = "Location: Polokwane,Limpopo,South Africa";
  var label = "Send a message";
  var submit = "submit";

  //object initialization and assign
  var h1_head = document.getElementById("top_head").innerHTML = contact_head;
  var p_location= document.getElementById("top_bar").innerHTML = location;
  var label_label = document.getElementById("label").innerHTML = label;
  var button_submit = document.getElementById("submit").innerHTML = submit;
   
    //Formspree code: avoid the default event, and made few changes 
     var form = document.getElementById("my-form");
     
     async function handleSubmit(event) {
       event.preventDefault();
       //var status = document.getElementById("my-form-status");
       var data = new FormData(event.target);
       fetch(event.target.action, {
         method: form.method,
         body: data,
         headers: {
             'Accept': 'application/json'
         }
       }).then(response => {
         if (response.ok) {
           //status.innerHTML = "Thanks for your submission!";
           alert("Thanks for your submission!");
           form.reset()
         } else {
           response.json().then(data => {
             if (Object.hasOwn(data, 'errors')) {
               //status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
               let status = data["errors"].map(error => error["message"]).join(", ");
               alert(status);
             } else {
               //status.innerHTML = "Oops! There was a problem submitting your form"
               alert("Oops! There was a problem submitting your form");
             }
           })
         }
       }).catch(error => {
         //status.innerHTML = "Oops! There was a problem submitting your form"
         alert("Oops! There was a problem submitting your form");
       });
     }
     form.addEventListener("submit", handleSubmit,false)

     /*footer
  : contact links and hard coded text info*/
  var foo_a_values = [
    {name:"LinkedIn",hRef:"https://www.linkedin.com/in/shobane-manthata-80937521a/",source:"../icons/icons8-linkedin-240.png",alt:"LinkedIN image"},
    {name:"Instagram",hRef:"https://www.instagram.com/will_manthata/",source:"../icons/icons8-instagram-512.png",alt:"Instagram Image"},
    {name:"Facebook",hRef:"https://web.facebook.com/will.manthata/",source:"../icons/icons8-facebook-240.png",alt:"Facebook Image"},
    {name:"smanthata4@gmail.com",source:"../icons/icons8-email-open-96.png",alt:"Email Image"},
    {name:"0796506616",source:"../icons/icons8-phone-480.png",alt:"phone Image"}
  ];
  var copyRight = "&copy;Copyright 2022 Bootcamp";

  var a = document.getElementsByClassName("a_ref");
  var img = document.getElementsByClassName("icon")
  var span = document.getElementsByClassName("nameSpan");
  var cpr = document.getElementById("copyright");

  for(let index = 0; index < foo_a_values.length; index++){
    if(!foo_a_values[index].hRef == ""){
      a[index].href = foo_a_values[index].hRef;
      img[index].src = foo_a_values[index].source;
      img[index].alt = foo_a_values[index].alt;
      span[index].innerHTML = foo_a_values[index].name;
    }else{
      img[index].src = foo_a_values[index].source;
      img[index].alt = foo_a_values[index].alt;
      span[index].innerHTML = foo_a_values[index].name;
    }
  }
  cpr.innerHTML = copyRight;
 }