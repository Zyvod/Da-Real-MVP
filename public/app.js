const signBtn = $('#sign')

const userData = {
  userName: 'Jeff',
  userPassword: '123abc'
}

signBtn.on('click', async (e) => {
  console.log('Btn worked');

  try {
    const response = await $.ajax({
      url: 'https://mvp-project-5tx5.onrender.com:9934/api/sign-in',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(userData),
      success: (data) =>{
        console.log(data)
      }
    })
    console.log(response)
  } catch(error) {
    console.error('Error:',error)
  }
});