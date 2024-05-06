document.getElementById('sendMessageButton').addEventListener('click', function() {
    const toPersonEmail = document.getElementById('emailDropdown').value;
    const messageText = document.getElementById('messageText').value;

    // Update with your API Gateway endpoint URL
    const serverEndpoint = 'https://wtk7du2aed.execute-api.ap-southeast-2.amazonaws.com/EnableCors/psend';

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            toPersonEmail: toPersonEmail,
            text: messageText
        }),
        mode: 'no-cors'
    };

    fetch(serverEndpoint, requestOptions)
        .then(response => {
            if (response.status == 0)
              window.location.href = 'finish.html';
            if (!response.ok && response.status !== 0) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            window.location.href = 'finish.html';
            // return response.json();
        })
        .then(data => {
            console.log('Message sent successfully:', data);
            alert('Message sent successfully!');
        })
        .catch(error => {
            console.error('Error sending message:', error);
            alert(`Failed to send message. Error: ${error}`);
        });
});
