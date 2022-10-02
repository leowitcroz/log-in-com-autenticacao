function inicia() {
  const user = document.getElementById("username").value
  const password = document.getElementById("password").value;
  
  
   

  verificaCamposPreenchidos(user,password);
  console.log(user)
  console.log(user.includes("@"))


    verficaUser(user);
  
}

function verificaCamposPreenchidos(user, password) {
  if (user == "") {
    document.getElementById("user-text").innerHTML = "campo não preenchido";
    document.getElementById("user-text").style.color = "red";
  }else{
    document.getElementById("user-text").innerHTML = "";
  }
  if (password == "") {
    document.getElementById("pass-text").innerHTML = "campo não preenchido";
    document.getElementById("pass-text").style.color = "red";
  }else{
    document.getElementById("pass-text").innerHTML = "";
  }
  
}


function verficaUser(user){

    if(user.includes("@") == false){
        document.getElementById("user-text").innerHTML = "email não valido"
        document.getElementById("user-text").style.color = "red";
        return 0
    }else{
        document.getElementById("user-text").innerHTML = "";
    }
    


}