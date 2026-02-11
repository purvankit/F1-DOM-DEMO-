/* --- PURE JAVASCRIPT DOM MANIPULATION --- */

// 1. Accessing elements
const title = document.getElementById('main-title');
const driverNames = document.getElementsByClassName('driver-name');
const buttons = document.getElementsByTagName('button');

// 2. Change text using innerHTML
title.innerHTML = "Oracle Red Bull Racing <span style='color:red;'>Live</span>";

// 3. Change CSS properties (Color and Position)
function moveCard() {
    const card = document.getElementById('card-1');
    card.style.position = "relative";
    card.style.left = "50px";
    card.style.color = "#0600ef"; // Racing Blue
}

// 4. Change image source on click
function updateCar() {
    const carImg = document.getElementById('car-image');
    // Swapping to a Ferrari image for demonstration
    carImg.src = "https://path-to-ferrari-car.jpg";
}

// 5. Add a text node and attach to parent
function addNote() {
    const list = document.getElementById('strategy-list');
    const newEntry = document.createElement('li');
    const textNode = document.createTextNode("Box Box: Switch to Soft Tires");
    
    newEntry.appendChild(textNode);
    list.appendChild(newEntry);
}

// 6. Delete a node
function removeNote() {
    const list = document.getElementById('strategy-list');
    if (list.lastChild) {
        list.removeChild(list.lastChild);
    }
}

/* --- JQUERY OPERATIONS --- */

$(document).ready(function() {
    
    // 1. Change button text using jQuery
    $('#jq-style-btn').on('click', function() {
        $(this).text("Theme Applied!");
        
        // 2. Set background-image using jQuery
        $('body').css('background-image', 'url("https://path-to-track-texture.jpg")');
    });

    // 3. Access HTML form data & 4. Add attribute using jQuery
    $('#update-driver-btn').click(function() {
        const newName = $('#driverInput').val(); // Access form data
        
        if(newName) {
            $('.driver-name').text(newName);
            // Add a 'data-updated' attribute to the input
            $('#driverInput').attr('disabled', 'true'); 
            $(this).text("Locked");
        }
    });
});