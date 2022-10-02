function inicia() {
  const user = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  verificaCamposPreenchidosUser(user);
  verificaCamposPreenchidosPass(password);

  if (verificaCamposPreenchidosUser(user) == true) {
    verficaUser(user);
  }
}

function verificaCamposPreenchidosUser(user) {
  if (user == "") {
    document.getElementById("user-text").innerHTML = "campo não preenchido";
    document.getElementById("user-text").style.color = "red";
    return false;
  } else {
    document.getElementById("user-text").innerHTML = "";
    return true;
  }
}

function verificaCamposPreenchidosPass(password) {
  if (password == "") {
    document.getElementById("pass-text").innerHTML = "campo não preenchido";
    document.getElementById("pass-text").style.color = "red";
    return false;
  } else {
    document.getElementById("pass-text").innerHTML = "";
    return true;
  }
}

function verficaUser(user) {
  if (user.includes("@") == false) {
    document.getElementById("user-text").innerHTML = "email não valido";
    document.getElementById("user-text").style.color = "red";
    return 0;
  } else {
    document.getElementById("user-text").innerHTML = "";
    return 0;
  }
}
