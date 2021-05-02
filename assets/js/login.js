function validate()
{
   
    //Check for Empty Email
        if (document.getElementById('email').value == '')
        {
            document.getElementById('mail-error').innerHTML ='Please Enter Valid Email' ;
            document.getElementById('email').style.borderColor ="red" ;
        }
        else
        {
            document.getElementById('mail-error').innerHTML ='' ;
            document.getElementById('email').style.borderColor ="green" ;

        }

  //Check for Empty Password
        if (document.getElementById('password').value == '')
        {
            document.getElementById('pass-error').innerHTML =' Please Enter Valid Password ' ;
            document.getElementById('password').style.borderColor ='red' ;
        }
        else
        {
            document.getElementById('pass-error').innerHTML ='' ;
            document.getElementById('password').style.borderColor ="green" ;

        }


    //Check for  Admin
        if (document.getElementById('email').value == 'admin@yahoo.com'&& document.getElementById('password').value == 'admin' )
        {
            
            document.getElementById('result').innerHTML ="Welcome Admin,To Visit Admin Panel <a href='Admin.html'>Click Here</a> " ;
        }
        else
        {  
            document.getElementById('result').innerHTML ="<h6 style='color:red'>Wrong Email or Password</h6>" ;

        }

        if (document.getElementById('email').value == "user@yahoo.com" && document.getElementById('password').value != "")
        { 
            document.getElementById('result').innerHTML='Welcome User, To See Latest News in Mafia Store Click  <a href="index.html"> Here</a>';
            
        }
}

