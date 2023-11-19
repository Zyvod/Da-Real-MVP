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

let partsData
let cpuData
let boardData
let coolerData
let gpuData
let ramData
let ssdData
let caseData
let powerData

getAllData();

homeBtn.on('click', () => {
  $(browseSelect).hide();
  welcomeMessage.show();
})

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
  while(browseSelect.children(0).length > 0) {
    browseSelect.empty();
  }

  const cpuPanel = $('<div>')
    cpuPanel.attr('class','panel')
  const cpuBtn = $('<button>')
    cpuBtn.text('Browse CPUs')
    cpuBtn.attr('class','panelBtn')
    cpuBtn.on('click', async (e) => {
      console.log(e.target.textContent)
      populateResults(browseSelect, e.target.textContent)
    })
    cpuPanel.append(cpuBtn)

  const boardPanel = $('<div>')
    boardPanel.attr('class','panel')
  const boardBtn = $('<button>')
    boardBtn.text('Browse Motherboards')
    boardBtn.attr('class','panelBtn')
    boardBtn.on('click', async (e) => {
      console.log(e.target.textContent)
    })
    boardPanel.append(boardBtn)

  const coolerPanel = $('<div>')
    coolerPanel.attr('class','panel')
  const coolerBtn = $('<button>')
    coolerBtn.text('Browse CPU Coolers')
    coolerBtn.attr('class','panelBtn')
    coolerBtn.on('click', async (e) => {
      console.log(e.target.textContent)
    })
    coolerPanel.append(coolerBtn)

  const gpuPanel = $('<div>')
    gpuPanel.attr('class','panel')
  const gpuBtn = $('<button>')
    gpuBtn.text('Browse GPUs')
    gpuBtn.attr('class','panelBtn')
    gpuBtn.on('click', async (e) => {
      console.log(e.target.textContent)
    })
    gpuPanel.append(gpuBtn)

  const ramPanel = $('<div>')
    ramPanel.attr('class','panel')
  const ramBtn = $('<button>')
    ramBtn.text('Browse Memory')
    ramBtn.attr('class','panelBtn')
    ramBtn.on('click', async (e) => {
      console.log(e.target.textContent)
    })
    ramPanel.append(ramBtn)

  const ssdPanel = $('<div>')
    ssdPanel.attr('class','panel')
  const ssdBtn = $('<button>')
    ssdBtn.text('Browse Storage')
    ssdBtn.attr('class','panelBtn')
    ssdBtn.on('click', async (e) => {
      console.log(e.target.textContent)
    })
    ssdPanel.append(ssdBtn)

  const casePanel = $('<div>')
    casePanel.attr('class','panel')
  const caseBtn = $('<button>')
    caseBtn.text('Browse Cases')
    caseBtn.attr('class','panelBtn')
    caseBtn.on('click', async (e) => {
      console.log(e.target.textContent)
    })
    casePanel.append(caseBtn)

  const powerPanel = $('<div>')
    powerPanel.attr('class','panel')
  const powerBtn = $('<button>')
    powerBtn.text('Browse PSUs')
    powerBtn.attr('class','panelBtn')
    powerBtn.on('click', async (e) => {
      console.log(e.target.textContent)
    })
    powerPanel.append(powerBtn)

  const allPanel =$('<div>')
    allPanel.attr('class','panel')
  const allBtn = $('<button>')
    allBtn.text('Browse All')
    allBtn.attr('class','panelBtn')
    allBtn.on('click', async (e) => {
      populateResults(browseSelect,e.target.textContent)
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

async function populateResults(resultContainer,content) {
  while (resultContainer.children().length > 0) {
    resultContainer.empty();
// console.log(typeof content)
// console.log(cpuData)
  switch (content) {
    case 'Browse CPUs':
      cpuData.forEach((cpu) => {
        const productPanel = $('<div>', {
          class: 'panel',
          id: `${cpu.id}`
        })

        const cpuInfo = $('<div>',{
          class: 'cpu-card'
        })

        const cpuTitle = $('<h>', {
          class: 'title',
          text: `${cpu.name_cpu}`
        })
        cpuInfo.append(cpuTitle)

        const cpuStats = $('<p>', {
          html: `Base Clock: ${cpu.base_clock}</br>Boost Clock: ${cpu.boost_clock}</br>Core Count: ${cpu.core_count}</br>Socket Type: ${cpu.socket}`
      });
        cpuInfo.append(cpuStats)

        const price = $('<p>', {
          class: 'price',
          text: `$${cpu.price}`
        })
        cpuInfo.append(price)

        const linkContainer = $('<p>', {
          class: 'link-container'
        })

        const link = $('<a>', {
          class: 'link',
          text: 'Find Online',
          href: cpu.link,
          target: '_blank'
        })
        linkContainer.append(link)
        cpuInfo.append(linkContainer)

        const image = $('<img>' , {
          src: `assets/images/cpu/cpu${cpu.id}.jpg`,
          width: `10vw`,
          height: `20vh`
        })

        productPanel.append(image)
        productPanel.append(cpuInfo)
        resultContainer.append(productPanel)
      })
    case 'Browse Motherboards':

    case 'Browse CPU Coolers':
        return function () {
            console.log(coolerData);
        };
    case 'Browse GPUs':
        return function () {
            // Callback function for GPUs
            console.log(gpuData);
        };
    case 'Browse Memory':
        return function () {
            // Callback function for Memory
            console.log(ramData);
        };
    case 'Browse Storage':
        return function () {
            // Callback function for Storage
            console.log(ssdData);
        };
    case 'Browse Cases':
        return function () {
            // Callback function for Cases
            console.log(caseData);
        };
    case 'Browse PSUs':
        return function () {
            // Callback function for PSUs
            console.log(powerData);
        };
    case 'Browse All':
        return function () {
            // Callback function for All
            console.log(partsData);
        };
    default:
        return function () {
            // Default Callback function
            console.log('Default Callback');
        };
}
}}

async function getAllData() {
  try{
    const response = await $.ajax({
      url: 'http://localhost:3000/api/ALL',
      type: 'GET'
    })
    partsData = response
    cpuData = response['CPU']
    boardData = response.Boards
    coolerData = response.Coolers
    gpuData = response['GPU']
    ramData = response['RAM']
    ssdData = response['SSD']
    caseData = response.Cases
    powerData = response.Power
    console.log(partsData)
  } catch(error) {
    console.error('Error:',error)
  }
}