document.getElementById('send-button').addEventListener('click', sendMessage);
document.getElementById('user-input').addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    sendMessage();
  }
});

async function sendMessage() {
  const userInput = document.getElementById('user-input').value;
  const responseDiv = document.getElementById('response');
  
  responseDiv.innerHTML = '<span class="loader"></span>';

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer __API_KEY__`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{ role: "user", content: userInput }],
        max_tokens: 300
      })
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const responseData = await response.json();

    if (responseData.choices && responseData.choices.length > 0) {
      const formattedResponse = responseData.choices[0].message.content
        .split('\n')
        .map(line => `<p>${line}</p>`)
        .join('');
      responseDiv.innerHTML = formattedResponse;
    } else {
      responseDiv.innerHTML = 'No response from API';
    }
  } catch (error) {
    console.error('Error:', error);
    responseDiv.innerHTML = 'Error: ' + error.message;
  }
}
