const url = 'https://richleung-8qe3k.ondigitalocean.app'

const ContactService = async (data) => {
  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    console.log({ response })
     return response.json()
  })
  .then(data => {
    console.log('Success:', data);
  })
  .catch(error => console.error(`Error: ${error}`))
};

export default ContactService;