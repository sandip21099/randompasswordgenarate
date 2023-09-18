const passwordbox = document.getElementById("Password");
const lenght = 12;

const uppercase = " A B C D E F G H I J K L M N O P Q R S T U V W X Y Z"
const lowercase = " a b c d e f g h i j k l m n o p q r s t u v w x y z"
const number = "1234567890"
const symbolys = "!@#$%^&*()_+{}[]\|/?"

const allcharts = uppercase + lowercase + number + symbolys

function createpassword(){
    let Passwords = ""
    Passwords+= uppercase[Math.floor(Math.random()* uppercase.length)]
    Passwords+= lowercase[Math.floor(Math.random()* lowercase.length)]
    Passwords+= number[Math.floor(Math.random()* number.length)]
    Passwords+= symbolys[Math.floor(Math.random()* symbolys.length)]
console.log(Passwords.length)
    while(lenght>Passwords.length){
        Passwords+= allcharts[Math.floor(Math.random()* allcharts.length)]
        console.log("hii")
    }
    passwordbox.value = Passwords
    console.log(Passwords)
}

function copydata(){
    passwordbox.select();
    document.execCommand("copy")
}