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

async function listOfParts() {
  const browseSelect = $('<div>')
    browseSelect.attr('id', 'browseSelect')

  const cpuPanel = $('<div>')
    cpuPanel.attr('class','panel')
    cpuPanel.text('CPU')
  const cpuBtn = $('<button>')
    cpuBtn.on('click', async (e) => {
      try {
        const response = await $.ajax({
          url: 'http://localhost:3000/api/CPU',
          type: 'GET'
        })
        console.log(response)
      } catch(error) {
        console.error('Error:',error)
      }
    })
    cpuPanel.append(cpuBtn)

  const boardPanel = $('<div>')
    boardPanel.attr('class','panel')
    boardPanel.text('Motherboard')
  const boardBtn = $('<button>')
    boardBtn.on('click', async (e) => {
      try {
        const response = await $.ajax({
          url: 'http://localhost:3000/api/MOTHERBOARDS',
          type: 'GET'
        })
        console.log(response)
      } catch(error) {
        console.error('Error:',error)
      }
    })
    boardPanel.append(boardBtn)

  const coolerPanel = $('<div>')
    coolerPanel.attr('class','panel')
    coolerPanel.text('CPU Cooler')
  const coolerBtn = $('<button>')
    coolerBtn.on('click', async (e) => {
      try {
        const response = await $.ajax({
          url: 'http://localhost:3000/api/CPUCOOLERS',
          type: 'GET'
        })
        console.log(response)
      } catch(error) {
        console.error('Error:',error)
      }
    })
    coolerPanel.append(coolerBtn)

  const gpuPanel = $('<div>')
    gpuPanel.attr('class','panel')
    gpuPanel.text('Graphics Card')
  const gpuBtn = $('<button>')
    gpuBtn.on('click', async (e) => {
      try {
        const response = await $.ajax({
          url: 'http://localhost:3000/api/GPU',
          type: 'GET'
        })
        console.log(response)
      } catch(error) {
        console.error('Error:',error)
      }
    })
    gpuPanel.append(gpuBtn)

  const ramPanel = $('<div>')
    ramPanel.attr('class','panel')
    ramPanel.text('Memory')
  const ramBtn = $('<button>')
    ramBtn.on('click', async (e) => {
      try {
        const response = await $.ajax({
          url: 'http://localhost:3000/api/RAM',
          type: 'GET'
        })
        console.log(response)
      } catch(error) {
        console.error('Error:',error)
      }
    })
    ramPanel.append(ramBtn)

  const ssdPanel = $('<div>')
    ssdPanel.attr('class','panel')
    ssdPanel.text('Storage Device')
  const ssdBtn = $('<button>')
    ssdBtn.on('click', async (e) => {
      try {
        const response = await $.ajax({
          url: 'http://localhost:3000/api/SSD',
          type: 'GET'
        })
        console.log(response)
      } catch(error) {
        console.error('Error:',error)
      }
    })
    ssdPanel.append(ssdBtn)

  const casePanel = $('<div>')
    casePanel.attr('class','panel')
    casePanel.text('Case')
  const caseBtn = $('<button>')
    caseBtn.on('click', async (e) => {
      try {
        const response = await $.ajax({
          url: 'http://localhost:3000/api/CASES',
          type: 'GET'
        })
        console.log(response)
      } catch(error) {
        console.error('Error:',error)
      }
    })
    casePanel.append(caseBtn)

  const powerPanel = $('<div>')
    powerPanel.attr('class','panel')
    powerPanel.text('Power Supply')
  const powerBtn = $('<button>')
    powerBtn.on('click', async (e) => {
      try {
        const response = await $.ajax({
          url: 'http://localhost:3000/api/POWER',
          type: 'GET'
        })
        console.log(response)
      } catch(error) {
        console.error('Error:',error)
      }
    })
    powerPanel.append(powerBtn)

  const allPanel =$('<div>')
    allPanel.attr('class','panel')
    allPanel.text('Browse All')
  const allBtn = $('<button>')
    allBtn.on('click', async (e) => {
      try{
        const response = await $.ajax({
          url: 'http://localhost:3000/api/ALL',
          type: 'GET'
        })
        console.log(response)
      } catch(error) {
        console.error('Error:',error)
      }
    })
    allPanel.append(allBtn)

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