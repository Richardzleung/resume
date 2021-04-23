const url = 'https://richzleung.com/contact'

const ContactService = async (data) => {
  await fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .catch(error => console.error(`Error: ${error}`))
};

export default ContactService;