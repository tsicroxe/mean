var customObject = {
  name:'California, Eureka',
  onClick:function(myParam){
    console.log("I've been clicked");
    console.log(myParam, "I've been passed by bind");
    console.log(this.name);
  }
}

var newObject = {
  name:"West Virginia,  Montani semper liberi"
}


$( document ).ready(function(){
  $('button').click(customObject.onClick.bind(customObject,"Bind this argument!"));
});
