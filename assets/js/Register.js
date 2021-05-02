function run()
        {
           ;
            if(document.formreg.fsname.value=="")
                {
                  //  document.getElementById("fsname").style.borderColor = "black";
                // document.getElementById("snname").style.borderColor = "black";
                // document.getElementById("email").style.borderColor = "black";
                // document.getElementById("pass").style.borderColor = "black";
                    
                    document.formreg.fsname.focus();
                    document.getElementById("fsname").style.borderColor = "red";
                    document.getElementById("pfsname").innerHTML = "Please enter your first name.";
                    return false;
                }
          
             else if(document.formreg.snname.value==""){
                      document.getElementById("fsname").style.borderColor = "black";
                document.getElementById("snname").style.borderColor = "black";
                document.getElementById("email").style.borderColor = "black";
                document.getElementById("pass").style.borderColor = "black";
            
                      document.getElementById("snname").style.borderColor = "red";
                 document.getElementById("pfsname").innerHTML = "";
                 document.getElementById("psnname").innerHTML = "Please enter your last name.";
                 document.formreg.snname.focus();
                       return false;
                    }
                    else if (document.formreg.email.value=="" || document.formreg.email.value.indexOf("@")==-1 || document.formreg.email.value.indexOf(".")==-1 || document.formreg.email.value.length<5){
                    
                        
                       document.getElementById("fsname").style.borderColor = "black";
                document.getElementById("snname").style.borderColor = "black";
                document.getElementById("email").style.borderColor = "black";
                document.getElementById("pass").style.borderColor = "black";
                        
                        document.getElementById("email").style.borderColor = "red";
                        document.getElementById("pfsname").innerHTML = "";
                        document.getElementById("psnname").innerHTML = "";
                        document.getElementById("pemail").innerHTML = "Please enter your email address correctly.";
                            document.formreg.email.focus();
            return false;
                        }
            else if(document.formreg.pass.value=="" || document.formreg.pass.value.length<8){
                document.getElementById("fsname").style.borderColor = "black";
                document.getElementById("snname").style.borderColor = "black";
                document.getElementById("email").style.borderColor = "black";
                document.getElementById("pass").style.borderColor = "black";
                
                document.getElementById("pass").style.borderColor = "red";
                 document.getElementById("pfsname").innerHTML = "";
                        document.getElementById("psnname").innerHTML = "";
                document.getElementById("pemail").innerHTML = "";
                document.getElementById("ppass").innerHTML = "Please enter your password correctly.";
                document.formreg.pass.focus();
                return false;
            }
            else{
                document.getElementById("fsname").style.borderColor = "black";
                document.getElementById("snname").style.borderColor = "black";
                document.getElementById("email").style.borderColor = "black";
                document.getElementById("pass").style.borderColor = "black";
                alert("Thank you for registering!");
                window.open("D:/assets/index.html");
                window.close();
                return true;
            }
            
         }