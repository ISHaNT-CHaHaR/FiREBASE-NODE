
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



  ///////////////////for LOGGING OUT/////////////////////////////////////////////



  var e=document.querySelector('#btn-logout');
   
  if(e){
      e.addEventListener("click",()=>{
        firebase.auth().signOut();/////////////////signout the user!
        });}



//////////////////////////////FOR USER LOGIN///////////////////////////////////
        var el=document.querySelector('#btn-login');
   
        if(el){
            el.addEventListener("click",()=>{
               var email=  document.querySelector("#email").value;
               var password=  document.querySelector("#password").value;
               console.log("login successful!");
               firebase.auth.Auth.Persistence.LOCAL;/// for staying in login mode even after closing app!
      
               if(email!="" && password!= "")
               {
                        var result = firebase.auth().signInWithEmailAndPassword(email,password);///for signing in!
                        result.catch(function(error){/////JS promise!
                            var errorCode= error.code;
                            var errorMessage= error.message;
                            
                            console.log(errorCode);
                            console.log(errorMessage);
      
                            window.alert("Message : " + errorMessage);
      
      
                        } );
               }
               else{
                   window.alert("Please fill out all fields!");////alert messages!
               }
              
      
      
              });}




/////////////////////////////////////Signing up////////////////////////////////
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
                                var result = firebase.auth().createUserWithEmailAndPassword(email,password);//////for creating NEW USer!
                                      
                                
                                result.catch(function(error){
                                           var errorCode= error.code;//////error message and code that generates!
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



//////////////////////////////////for password reset///////////////////////
   

var f=document.querySelector("#btn-resetPassword")  ;
   
   if(f){
       f.addEventListener("click",()=>{
            var auth=firebase.auth();
            var email= document.querySelector("#email").value;

            if(email!=""){
                auth.sendPasswordResetEmail(email).then(()=> {/////Send email to user....then promise!
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




//////////////////////////////for UPgrading ACcount setting!///////////////////////////


var enter=document.querySelector("#btn-update");

if(enter){
         enter.addEventListener("click",()=>{
             var phone=document.querySelector("#phone").value;
             var address=document.querySelector("#address").value;
             var fName=document.querySelector("#firstName").value;
             var sName=document.querySelector("#secondName").value;
             var country=document.querySelector("#country").value;
             var gender=document.querySelector("#gender").value;
             var bio=document.querySelector("#bio").value;
             var rootRef=firebase.database().ref().child("Users");/////makes a new child!
            var userID = firebase.auth().currentUser.uid;/// makes a new user key  by taking from authentication!
            var usersRef = rootRef.child(userID);//// selects the child by useer ID

            if(fName!="" && sName!="" && phone!="")
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
                   usersRef.set(userData,(error)=>{////take the object to realtime database!
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
});}



var  dbBlogs = firebase.database().ref().child("Blogs").orderByChild("counter");

      dbBlogs.on("value",(blogs)=>{
           if(blogs.exists()){
                 var blogsHtml = "";
                 blogs.forEach(function(singleBlog){
                     counter = counter+1;

                    blogsHtml+="<div class= 'jumbotron bg-light text-dark border border-dark'>";
                      
                      blogsHtml  += "<div> <img width='805' height='450' src='/>";
                           blogsHtml+= singleBlog.val().image;   
                      blogsHtml+="'</div> <br>";
                      
                      blogsHtml  += "<div class='row'>";

                            blogsHtml += "<div class='col-sm-5'> <p style='color: grey;>"
                                          + "Published by: "+ singleBlog.val().userName;
                                          + "</p>  </div>" 
                                          + "<div class='col-sm-3'> <p style='color: grey;>"
                                          + "Time : "+ singleBlog.val().time;
                                          + "</p>  </div>"
                                          "<div class='col-sm-4 '> <p style='color: grey;>"
                                          + "DATE : "+ singleBlog.val().date;
                                          + "</p>  </div>"
                                          ; 


                           blogsHtml+="</div> <br>";
                    
                           blogsHtml  += "<div style= 'text-align: justify; color : black';> ";
                           blogsHtml+= singleBlog.val().desc; 
                      blogsHtml+="</div> <br>";




                    blogsHtml+="</div>";

                     
                 });
                 $("#blogs").html(blogsHtml);
           }
      });            