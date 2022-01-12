function checkGender() {
    let name = document.getElementById("uname").value;
    let result = document.getElementById("result");
    let result2 = document.getElementById("result2");
    let result3 = document.getElementById("result3");

    fetch("https://api.genderize.io?name="+name)
    .then(response=>response.json())
    .then(data => {
         console.log(data);
        let capitalName = capitalize(name);
        
        result.innerHTML= "Name: " + capitalName;
        result2.innerHTML= "Gender: " + data["gender"]; 
        result3.innerHTML= "Probability: " + data["probability"];
    })
}

//make first letter capital
function capitalize(str) {
    return str[0].toUpperCase()+str.slice(1);
}
