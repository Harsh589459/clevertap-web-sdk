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
      "MSG-email": false,                // Disable email notifications
      "MSG-push": true,                  // Enable push notifications
      "MSG-sms": true,                   // Enable sms notifications
      "MSG-whatsapp": true,
     
    }
   })
//    clevertap.profile.push({
//     "Site": {
//       "Customer Type": "gold",
//     }
//    });
   
   window.alert("Profile updated successfully")

})


document.getElementById('pushNotifBtn').addEventListener('click', function () {
    console.log('tapped');
    clevertap.notifications.push({
        "titleText": 'Would you like to receive Push Notifications?',
        "bodyText": 'We promise to only send you relevant content and give you updates on your transactions',
        "okButtonText": 'Sign me up!',
        "rejectButtonText": 'No thanks',
        "okButtonColor": '#f28046'
    });
})

function handlePopup() {
    var overlay = window.parent.document.getElementById('intentOpacityDiv');
    var wrapper = window.parent.document.getElementById('intentPreview');

    var iframe = wrapper.querySelector('iframe'); // Find
    var cancelBtnPressed = iframe.contentDocument.querySelector('.close-btn');
    var yesBtn = iframe.contentDocument.querySelector('.yes-btn');
    var noBtnPressed = iframe.contentDocument.querySelector('.no-btn');

    // Attach click listener to modal-content
    // var cancelBtnPressed = document.querySelector('close-btn'); // cancel button 
    // var yesBtn = document.querySelector('.yes-btn'); // Yes button
    // var noBtnPressed = document.querySelector('no-btn'); // No button

    if (cancelBtnPressed) {
        cancelBtnPressed.addEventListener('click', closePopUp);
    }
    else console.log('cancel btn is not working');

    if (noBtnPressed) {
        noBtnPressed.addEventListener('click', closePopUp);
    }
    else console.log('cancel btn is not working');

    if (yesBtn) {
        // here you do your desired
        yesBtn.addEventListener('click', closePopUp);
    }


    // Close popup function
    function closePopUp() {
        console.log("Modal clicked. Closing popup...");
        setTimeout(() => {
            overlay.remove(); 
            wrapper.remove();
          }, 0); 
    }
}

// Add event listener to trigger button
document.getElementById('triggerEventBtn').addEventListener('click', function () {
    // Push CleverTap event
    clevertap.event.push("Product Viewed");
    console.log("CleverTap Event: Product Viewed triggered");

    setTimeout(() => {
        handlePopup();
    }, 1000); // Adjust timeout as needed based on modal load time
});

// // Add event listener to trigger button
// document.getElementById('testEvent').addEventListener('click', function () {
//     // Push CleverTap event
//     clevertap.event.push("test_event");
//     console.log("CleverTap Event: Test Event triggered");

//     setTimeout(() => {
//         handlePopup();
//     }, 1000); // Adjust timeout as needed based on modal load time
// });

async function getIpDetails(){
    const ip = '67.250.186.196';
    const accessKey = '4c9ec11e-768b-487d-96f7-0551db09258d';
    const url = 'https://apiip.net/api/check?ip='+ ip +'&accessKey='+ accessKey; 
  
    // Make a request and store the response
    const response = await fetch(url);
  
    // Decode JSON response:
    const result = await response.json();
  
    // Output the "code" value inside "currency" object
    return result;
}
const fireCleaverTapEvent = async response => {
    // const deviceInformation = getDeviceInformation();
    const ipDetails = await getIpDetails();
    console.log("ipDetails",ipDetails)
    clevertap.profile.push({
      "Site": {
        "isPasswordCreated":true,
        latitude: ipDetails?.latitude,
        longitude: ipDetails?.longitude,
        country: ipDetails?.countryName,
        ip: ipDetails?.ip
      }
     });
    // if (ipDetails?.latitude && ipDetails?.longitude) {
    //   clevertap.getLocation(ipDetails?.latitude, i)
    // }
    if (ipDetails?.latitude && ipDetails?.longitude) {
      clevertap.getLocation(ipDetails?.latitude, ipDetails?.longitude);
    }

   clevertap.event.push("test_event1", {
      "Sign_Up_Completed":true,
      "Timestamp": new Date().getTime()
    });


  };
