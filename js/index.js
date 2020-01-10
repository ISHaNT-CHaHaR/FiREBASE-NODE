var firebaseConfig = {
    apiKey: "AIzaSyCsCRoPyTpCznfEpv6UBOJVKnv_b7Qkq2U",
    authDomain: "fir-webapp-e093f.firebaseapp.com",
    databaseURL: "https://fir-webapp-e093f.firebaseio.com",
    projectId: "fir-webapp-e093f",
    storageBucket: "fir-webapp-e093f.appspot.com",
    messagingSenderId: "215898760335",
    appId: "1:215898760335:web:e44df0b217cb90ce3cfcfa",
    measurementId: "G-076L1V04EH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var e=document.querySelector('#btn-logout');
   
  if(e){
      e.addEventListener("click",()=>{
        firebase.auth().signOut();
        });}




        var el=document.querySelector('#btn-login');
   
        if(el){
            el.addEventListener("click",()=>{
               var email=  document.querySelector("#email").value;
               var password=  document.querySelector("#password").value;
               console.log("login successful!");
               firebase.auth.Auth.Persistence.LOCAL;
      
               if(email!="" && password!= "")
               {
                        var result = firebase.auth().signInWithEmailAndPassword(email,password);
                        result.catch(function(error){
                            var errorCode= error.code;
                            var errorMessage= error.message;
                            
                            console.log(errorCode);
                            console.log(errorMessage);
      
                            window.alert("Message : " + errorMessage);
      
      
                        } );
               }
               else{
                   window.alert("Please fill out all fields!");
               }
              
      
      
              });}





              var el=document.querySelector('#btn-signup');
   
              if(el){
                  el.addEventListener("click",()=>{
                     var email=  document.querySelector("#email").value;
                     var password=  document.querySelector("#password").value;
                     var cpassword=  document.querySelector("#confirmPassword").value;
                     console.log("login successful!");
                     firebase.auth.Auth.Persistence.LOCAL;
            
                     if(email!="" && password!= "" && cpassword!="")
                     {
                        
                            if(password===cpassword) {
                                var result = firebase.auth().createUserWithEmailAndPassword(email,password);
                                      
                                
                                result.catch(function(error){
                                           var errorCode= error.code;
                                          var errorMessage= error.message;
                                          
                                          console.log(errorCode);
                                          console.log(errorMessage);
                    
                                          window.alert("Message : " + errorMessage);
                    
                    
                                      } );}
                                      else{
                                          window.alert("Passwords does not match! Please Try again!");
                                      
                                              
                                      }
                        
                     }
                     else{
                         window.alert("Please fill out all fields!");
                     }
                    
            
            
                    });}




   var f=document.querySelector("#btn-resetPassword")  ;
   
   if(f){
       f.addEventListener("click",()=>{
            var auth=firebase.auth();
            var email= document.querySelector("#email").value;

            if(email!=""){
                auth.sendPasswordResetEmail(email).then(()=> {
                    window.alert(`We have sent an Email to You, Please check and Verify  `); 
                    


                })
                .catch((error)=>
                { 
                    var errorcode=error.code;
                    var errormessage=error.message;
                    window.alert(`Message:${errormessage}\n Code:${errorcode}`);

                    

                });

            }
            else{
                  window.alert("Please fill up your email id");
            }


 

       });
   }



document.querySelector("#btn-update").addEventListener("click",()=>{
             var phone=document.querySelector("#phone").value;
             var address=document.querySelector("#address").value;
             var fName=document.querySelector("#firstName").value;
             var sName=document.querySelector("#secondName").value;
             var country=document.querySelector("#country").value;
             var gender=document.querySelector("#gender").value;
             var bio=document.querySelector("#bio").value;
             var rootRef=firebase.database().ref().child("Users");
            var userID=firebase.auth().currentUser.uid;
            var usersRef=rootRef.child(userID);

            if(fName!="" && sName!="" && phone!="" && country!="" &&gender!="" && bio!="")
      {
               var userData= {
                     "phone":phone,
                     "address":address,
                     "bio":bio,
                     "firstName":fName,
                     "secondName": sName,
                     "gender":gender,
                     "country":country

               };
                   usersRef.set(userData,(error)=>{
                       if(error){
                           var errorcode=error.code;
                           var errormessage=error.message;
                           console.log(errorcode);
                           console.log(errormessage);
                           window.alert(`Message:${errormessage}`);

                       }
                       else{
                       window.location.href="MainPage.html";
   
                       }
                   });

            }
      else{
          window.alert("Form is incomplete. Please fill out all the details!");

      }





});



