const formSubmitted = () => {
    let userInput = prompt("Enter text for the new button:");
    if (userInput) {
        createNewButton(userInput);
        let formData = { text: userInput };
        postNewButtonData(formData);
    }
}

const createNewButton = (buttonText) => {
    let newButton = $('<button>').text(buttonText);
    $('body').append(newButton);
    // Add any additional button styling or event listeners here
}

const postNewButtonData = (data) => {
    $.ajax({
        url: '/api/newbutton', // Adjust this URL to your server's route
        type: 'POST',
        data: data,
        success: (result) => {
            if (result.statusCode === 201) {
                alert('button post successful');
            }
        }
    });
}