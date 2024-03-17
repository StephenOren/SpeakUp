function deleteEvent(eventId) {
    let text = "Are you sure you want to delete this event?";
    if (confirm(text) == true) {
        fetch(`/events/${eventId}`, {
            method: 'DELETE',
        })
        .then(response => {
            if (response.ok) {
                // Reload or update the event list
                location.reload(); // Example: reload the page
                console.log('Event deleted');
            } else {
                // Handle error
                console.error('Failed to delete event');
            }
        })
        .catch(error => console.error('Error:', error));
    } else {
        
    }
    
}

function getId(id) {
    localStorage.setItem('myItem', id);
}

function cancelInfo() {
    document.getElementById("name").value = " ",
    document.getElementById("location").value = " ",
    document.getElementById("date").value = " ",
    document.getElementById("host").value = " ",
    document.getElementById("additionalMessage").value = " "
    // Add more properties as needed
}

function getInfo() {
     const updateEvents = {
        name: document.getElementById("name").value,
        location: document.getElementById("location").value,
        date: document.getElementById("date").value,
        host: document.getElementById("host").value,
        additionalMessage: document.getElementById("additionalMessage").value
        // Add more properties as needed
    };
    var item = localStorage.getItem('myItem');
    updateEvent(item, updateEvents);
}



//update event function //NOT FINISH
function updateEvent(eventId, updatedEvent){
    //getting event ID
    fetch(`/events/${eventId}`, { // The HTTP request being made, which will call the update method in our routes.js based on the method (not DELETE, it's PUT).
        method: 'PUT',
        header: {
            'Content-Type': 'application/json' // Request body will be sent in JSON format
        },
        body: JSON.stringify(updatedEvent) // Converts object into JSON string. data being sent in the request body
    }).then(response => { // Check if anything goes wrong
        if (response.ok) {
            // Reload or update the event list
            location.reload(); // Example: reload the page
            console.log('Event deleted');
        } else {
            // Handle error
            console.error('Failed to delete event');
        }
    })
    .catch(error => console.error('Error:', error));
}