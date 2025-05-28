function vote(){
var name=document.getElementById("name").Value;
var age=document.getElementById("age").value;
var res=document.getElementById("res")

if(age>=18){
    res.innerHTML="you  are eligible 😍"

}else{
    res.innerHTML="you are still a child😂😂"
}
}