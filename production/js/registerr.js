
function createUser() {
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    var confirmPassword=document.getElementById("passconfirm").value;

    
    //validate that both passwords are same
    if(password==confirmPassword)
    {
        //Here we will write create Account code
        //firebase has its own built in create account method
        //lets start
        //it takes two param first one email and second is password
        firebase.auth().createUserWithEmailAndPassword(email,password).then(
            function () {
                //this function executes when account is successfully created
                window.location="home.php";

        }).catch(function (error) {
           //this function handles errors
            var errorMessage=error.message;
            Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: errorMessage,
                        });
  
        });


    }
    else
    {
        //alert when password did not matches
        Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: "password does not matches!",
                        });
  
    }


}