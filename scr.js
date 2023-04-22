let arr= [{id:1,name:"john",age:"18",profession:"developer"},{id:2, name:"jack",age:"20", profession:"developer"},{id:3, name:"karen", age:"19",profession:"admin"}]
let filter=document.getElementById("filter");
let btn=document.getElementById("addUser");
let ul=document.getElementById("list");
let cnt=4;

window.onload=showElem();

function showElem(){
   
   for(let i=0;i<arr.length;i++){
    let item=document.createElement("li")
    let pre=document.createElement("pre")
    let element=arr[i];  
    pre.innerText=element.id+"."+ "    Name : " +element.name+"    Profession : "+element.profession+"    Age: "+element.age;
    item.appendChild(pre);
    ul.appendChild(item);

    console.log("loaded");
 }
}
function add(){
    let name=document.getElementById("name").value
    let prof=document.getElementById("prof").value
    let age=document.getElementById("age").value
    let obj={
    id:cnt,
    Name:name,
    Profession:prof,
    Age:age
    }
    cnt++;

    if(obj.Name==""||obj.Profession==""||obj.Age==""){
        alert("Values cannot be empty");
        return;
    }
    arr.push(obj);
    // console.log(arr);
    // for(let i=0;i<arr.length;i++){

   
        let item=document.createElement("li")
        let pre=document.createElement("pre")
        // let pre=document.createElement("p")

        let element=obj;  
        pre.innerText=element.id+"."+ "    Name : " +element.Name+"    Profession : "+element.Profession+"    Age: "+element.Age;
        item.appendChild(pre);
    ul.appendChild(item);
    // }

}

btn.addEventListener("click",add);