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
  
   $("#btn-login").click(function(){
         var email= $("#email").val();
         var password= $("#password").val();
         
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
   
        });