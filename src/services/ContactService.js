const url = 'https://richleung-8qe3k.ondigitalocean.app/contact'

const ContactService = async (data) => {
  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'https://richzleung.com'
    },
    body: JSON.stringify(data)
  })
  .then(response => {
     return response.json()
  })
  .then(data => {
    console.log('Success:', data);
  })
  .catch(error => console.error(`Error: ${error}`))
};

export default ContactService;