document.getElementById('loginbutton').addEventListener('click',function(){
    var name = document.getElementById('name').value
    var email = document.getElementById('email').value
    var phone = document.getElementById('phone').value
    console.log(name,email,phone)

//     with the exception of one of Identity, Email, or FBID
// each of the following fields is optional

clevertap.onUserLogin.push({
    "Site": {
      "Name": name,            // String
      "Email": email,         // Email address of the user
      "Identity": phone,           // Phone (with the country code)
     
    }
   })
   clevertap.profile.push({
    "Site": {
      "Customer Type": "gold",
    }
   });
   
   window.alert("Profile updated successfully")

})
document.getElementById('acceptPush').addEventListener('click',function(){
    console.log("Push accepted call")

clevertap.notifications.push({
    "titleText":'Would you like to receive Push Notifications?',
    "bodyText":'We promise to only send you relevant content and give you updates on your transactions',
    "okButtonText":'Sign me up!',
    "rejectButtonText":'No thanks',
    "okButtonColor":'#f28046',
    "serviceWorkerPath": "/clevertap_sw.js"

})
    console.log("Push accepted call2")

})