const container = $('#container')
const signBtn = $('#signBtn')
const browseBtn = $('#browseBtn')
const welcomeMessage = $('#welcomemessage')
const homeBtn = $('#homeBtn')
const welcomeHeader = $("welcomeHeader")
const body = $('body')
// https://mvp-project-5tx5.onrender.com Deployment URL
const userData = {
  userName: 'Jeff',
  userPassword: '123abc'
}

signBtn.on('click', async (e) => {
  console.log('Btn worked');

  try {
    const response = await $.ajax({
      url: 'http://localhost:3000/api/sign-in',
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

browseBtn.on('click', (e) => {
  welcomeMessage.hide()
  listOfParts()
})

function listOfParts() {
  const browseSelect = $('<div>')
    browseSelect.attr('id', 'browseSelect')

  const cpuPanel = $('<div>')
    cpuPanel.attr('class','panel')
    cpuPanel.text('CPU')

  const boardPanel = $('<div>')
    boardPanel.attr('class','panel')
    boardPanel.text('Motherboard')

  const coolerPanel = $('<div>')
    coolerPanel.attr('class','panel')
    coolerPanel.text('CPU Cooler')

  const gpuPanel = $('<div>')
    gpuPanel.attr('class','panel')
    gpuPanel.text('Graphics Card')

  const ramPanel = $('<div>')
    ramPanel.attr('class','panel')
    ramPanel.text('Memory')

  const ssdPanel = $('<div>')
    ssdPanel.attr('class','panel')
    ssdPanel.text('Storage Device')

  const casePanel = $('<div>')
    casePanel.attr('class','panel')
    casePanel.text('Case')

  const powerPanel = $('<div>')
    powerPanel.attr('class','panel')
    powerPanel.text('Power Supply')

  const allPanel =$('<div>')
    allPanel.attr('class','panel')
    allPanel.text('Browse All')

  browseSelect.prepend(allPanel)
  browseSelect.prepend(powerPanel)
  browseSelect.prepend(casePanel)
  browseSelect.prepend(ssdPanel)
  browseSelect.prepend(ramPanel)
  browseSelect.prepend(gpuPanel)
  browseSelect.prepend(coolerPanel)
  browseSelect.prepend(boardPanel)
  browseSelect.prepend(cpuPanel)
  container.append(browseSelect)
}

homeBtn.on('click', () => {
  $(browseSelect).hide();
  welcomeMessage.show();
})