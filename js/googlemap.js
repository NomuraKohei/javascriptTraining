function validForm(){
    if (document.form1.name.value == ""){
        alert("no name!");
        return false;
    } else {
        return true;
    }
}

var request = new XMLHttpRequest();

request.open('GET', 'https://jsonplaceholder.typicode.com/users/1', true);
//request.responseType = 'json';

request.onload = function() {
    var user = JSON.parse(this.responseText);
    console.log(user.phone);
    var disp = document.getElementById('tel');
    disp.innerHTML = user.phone;
};

request.send();

//console.log(data);