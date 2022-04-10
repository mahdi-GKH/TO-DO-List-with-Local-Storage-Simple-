//View to-do list from localStorage
let val = []; 

let keys = Object.keys(localStorage);
let i = keys.length;
while(i--){

    val.push (localStorage.getItem(keys[i]))
}

let text = "";
for (let i = 0; i < val.length; i++){
    let valid = val[i].replace(/\s/g, '')
    console.log(valid)
    text += val[i]+`<input type="checkbox" name="del" id=${valid} class="checkboxs" onclick="delet()" >`+"<hr>" ;
}
let todo = document.getElementById("todo").innerHTML = text;

//save to <localStorage>
function f_save(){
    
   console.log("ok")
    let user =document.getElementById("input").value;


    
    
    if (user == ""){
        alert("Empty?");
    } else{
    

    localStorage.setItem(user.replace(/\s/g, ''), user);
    window.location.reload();

    }

}

//delete from localStorage
function delet(){

    let check = document.getElementsByClassName("checkboxs");
    
    for (let checkbox of check){
        if (checkbox.checked){
            let ids = checkbox.id;
            
            ids.replace(/\s/g, '')

            console.log(ids)

            localStorage.removeItem(ids)
            
        }
    }

    window.location.reload(); 
}