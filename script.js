var wrapperEle=document.body;
var numbers= [-30, 14, 66, 21, 72, -4];
var more=[];

function Message(numbers,response){
  var that=this;
  this.numbers= numbers;
  this.ele= document.createElement("div");
  if (this.numbers<0 ){
     this.response= "the number is below 0.";
  }else if(this.numbers>50){
     this.response= "the number is greater than 50.";
  }
  else if(this.numbers== 14){
     this.response= "the number equals 14.";
  }
  else {
     this.response= "the number is not below 0, not greater than 50, and not 14.";
 }
 this.ele.innerHTML="The number is " + this.numbers + " and " + this.response;
  
this.ele.addEventListener("click", function(){
  that.Up();
})
wrapperEle.appendChild(this.ele);
    
    
}
 
Message.prototype.Up=function(){
  this.numbers++;
  this.ele.innerHTML="The number is "  + this.numbers +" and "+ this.response;
};

for (var i=0; i<numbers.length;i++){
  more.push(new Message(numbers[i]));

 
}