


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