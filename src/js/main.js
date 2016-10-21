import $ from 'jquery';

function add (x, y) {
  return x + y;
};
console.log(add(12, 12));

// function onLabels (data)
// {
//   console.log (data)
//   var labelArray = []
//   for (var i = 0; i < data.length; i++) {
//    labelArray[i] = data[i].label;
//  }
//  console.log(labelArray);
// };
//Above as alternative to map.



$(".container").append(`<li id="sign-up">Sign Up for My Web App</li>`)
var insideText= data.map(function(item){return item.label;});
var insideType= data.map(function(item){return item.type;});

function onLabels (data){
  for (var i=0; i < data.length; i++){
  $(".container").append(`<li id="${insideType[i]}"><input type="text"value=" ${insideText[i]}"></li>`);
  $("li#select").html(`<li id= "selected">
  <select name="select">
  <option selected="selected">Select...<option/>
  <option value="EN">English</option>
  <option value="SP">Spanish</option>
  <option value="FR">French</option>
  <option value="CH">Chinese</option>
  <option value="JP">Japanese</option>
</select></li>`)

function icons (data){
var user= `<i class="fa fa-user" aria-hidden="true"></i>`
var user= `<i class="fa fa-user" aria-hidden="true"></i>`
var email= `<i class="fa fa-envelope" aria-hidden="true"></i>`
var globe = `<i class="fa fa-globe" aria-hidden="true"></i>`
var comment= `<i class="fa fa-comments" aria-hidden="true"></i>`
var cell = `<i class="fa fa-mobile" aria-hidden="true"></i>`
var phone = `<i class="fa fa-phone" aria-hidden="true"></i></div>`
for (var i=0; i < data.length; i++)

if insideText === "First Name" {
  return `${user}`
}
else if insideText === "Last Name" {
  return `${user}`
}
else if insideText ===  "Email Address" {
  return `${email}`
}
else if insideText === "Current website url" {
    return `${globe}`
}
else if insideText === "Your Comment" {
    return `${cell}`
}
else if insideText === "Mobil Number" {
    return `${cell}`
}
else {
    return `${phone}`

}

}
$(".container").append(`<li id= "clicky"><button name="button">Submit Form</button></li>`)
};






function addItem () {
  var example = $.ajax({
    url:`http://json-data.herokuapp.com/forms`,
    success: onLabels
  })
  console.log(example)
};
addItem();
