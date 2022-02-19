//About us page

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

    if(index == 1){
      a[index+1].style.backgroundColor = "lightseagreen";
    }
    
  }

  /*body
  : personal information, bio, eduacation bacground and if any:experience*/
  //variable declaration
  var about_head = "About Me";
  var initText = "Hi, my name is ";
  var nameAndSurname = "William Manthata";
  var initText2 = "I am a ";
  var title = "<span>WEBSITE DEVELOPER</span>";
  var bio = "My name is William Manthata and I just joined Bootcamp at MLAP. I am an accomplished coder and programmer,"  
          +"and I enjoy using my skills to contribute to the exciting technological advances that happen every day at MLAB." 
          +"I graduated from the Tshwane University of Technology in 2022 with a Deploma in Software Development." 
          +"While in school, I earned the top student Award for my exemplary academic performance and leadership skills.";
  var button_resume = "My Resume";

  //object initialization and assign
  var h1_head = document.getElementById("top_head").innerHTML = about_head;
  var h1_name = document.getElementById("nameAndSurname").innerHTML = initText + "<span>" + nameAndSurname + "</span>";
  var h2_title = document.getElementById("title").innerHTML = initText2 + "<span>" + title + "</span>";
  var p_bio = document.getElementById("bio").innerHTML = bio;
  var button = document.getElementById("button_title").innerHTML = button_resume;

  /*second section of body
  : Here goes the experience*/
  //variable declaration
  var exp_head = "Work Experience";
  var position = "INFORMATION CENTER ASSISTANT";
  var concat_pos = "Worked as <SPan>"+ position + "</SPan>";
  var date = "<span class='small_text'>2020-2021</span>";
  var type = "<span class='small_text'>Task</span>";
  var exp_list = [
    //list of job experience
    {list:"Assisting information centre to repair printers when they are broken"},
    {list:"Handing print out for students"},
    {list:"Assisting students to access computers"},
    {list:"Not often assisting in library to check out books and sort shelfs"}
  ];

  //object initialization and assign
  var h1_exp_head = document.getElementById("exp_head").innerHTML = exp_head;
  var h2_position = document.getElementById("position").innerHTML = concat_pos;
  var p_date = document.getElementById("date").innerHTML = date;
  var p_type = document.getElementById("type").innerHTML = type;

  //going off the session using for loop to add element that carries the exp_list
  var ul = document.getElementById("ul");
  for(var index = 0; index < exp_list.length; index++){
    //creating element and text node and adding one to another
    var li = document.createElement("li");
    var node = document.createTextNode(exp_list[index].list);
    li.appendChild(node);

    //appending the li element to ul element
    ul.appendChild(li);
  } 

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
 