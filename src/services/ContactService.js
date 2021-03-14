const url = 'https://rleung-resume.herokuapp.com/contact'

const ContactService = async (data) => {
  console.log('here',{ data });
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