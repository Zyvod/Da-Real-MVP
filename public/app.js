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
  signInWindow();
})

browseBtn.on('click', (e) => {
  welcomeMessage.hide()
  listOfParts()
})

async function listOfParts() {
  const browseSelect = $('<div>')
    browseSelect.attr('id', 'browseSelect')
    browseSelect.empty();

  const cpuPanel = $('<div>')
    cpuPanel.attr('class','panel')
  const cpuBtn = $('<button>')
    cpuBtn.text('Browse CPUs')
    cpuBtn.attr('class','panelBtn')
    cpuBtn.on('click', async (e) => {
      populateResults(browseSelect, e.target.textContent)
    })
    cpuPanel.append(cpuBtn)

  const boardPanel = $('<div>')
    boardPanel.attr('class','panel')
  const boardBtn = $('<button>')
    boardBtn.text('Browse Motherboards')
    boardBtn.attr('class','panelBtn')
    boardBtn.on('click', async (e) => {
      populateResults(browseSelect, e.target.textContent)
    })
    boardPanel.append(boardBtn)

  const coolerPanel = $('<div>')
    coolerPanel.attr('class','panel')
  const coolerBtn = $('<button>')
    coolerBtn.text('Browse CPU Coolers')
    coolerBtn.attr('class','panelBtn')
    coolerBtn.on('click', async (e) => {
      populateResults(browseSelect, e.target.textContent)
    })
    coolerPanel.append(coolerBtn)

  const gpuPanel = $('<div>')
    gpuPanel.attr('class','panel')
  const gpuBtn = $('<button>')
    gpuBtn.text('Browse GPUs')
    gpuBtn.attr('class','panelBtn')
    gpuBtn.on('click', async (e) => {
      populateResults(browseSelect, e.target.textContent)
    })
    gpuPanel.append(gpuBtn)

  const ramPanel = $('<div>')
    ramPanel.attr('class','panel')
  const ramBtn = $('<button>')
    ramBtn.text('Browse Memory')
    ramBtn.attr('class','panelBtn')
    ramBtn.on('click', async (e) => {
      populateResults(browseSelect, e.target.textContent)
    })
    ramPanel.append(ramBtn)

  const ssdPanel = $('<div>')
    ssdPanel.attr('class','panel')
  const ssdBtn = $('<button>')
    ssdBtn.text('Browse Storage')
    ssdBtn.attr('class','panelBtn')
    ssdBtn.on('click', async (e) => {
      populateResults(browseSelect, e.target.textContent)
    })
    ssdPanel.append(ssdBtn)

  const casePanel = $('<div>')
    casePanel.attr('class','panel')
  const caseBtn = $('<button>')
    caseBtn.text('Browse Cases')
    caseBtn.attr('class','panelBtn')
    caseBtn.on('click', async (e) => {
      populateResults(browseSelect, e.target.textContent)
    })
    casePanel.append(caseBtn)

  const powerPanel = $('<div>')
    powerPanel.attr('class','panel')
  const powerBtn = $('<button>')
    powerBtn.text('Browse PSUs')
    powerBtn.attr('class','panelBtn')
    powerBtn.on('click', async (e) => {
      populateResults(browseSelect, e.target.textContent)
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
  resultContainer.empty();
  switch (content) {
    case 'Browse CPUs':
      getAllCpus(resultContainer)
      break;
    case 'Browse Motherboards':
      getAllBoards(resultContainer)
      break;
    case 'Browse CPU Coolers':
      getAllCoolers(resultContainer)
      break;
    case 'Browse GPUs':
      getAllGpus(resultContainer)
      break;
    case 'Browse Memory':
      getAllRam(resultContainer)
      break;
    case 'Browse Storage':
      getAllStorage(resultContainer)
      break;
    case 'Browse Cases':
      getAllCases(resultContainer)
      break;
    case 'Browse PSUs':
      getAllPsus(resultContainer)
      break;
    case 'Browse All':
      getAllCpus(resultContainer)
      getAllBoards(resultContainer)
      getAllCoolers(resultContainer)
      getAllGpus(resultContainer)
      getAllRam(resultContainer)
      getAllStorage(resultContainer)
      getAllCases(resultContainer)
      getAllPsus(resultContainer)
      break;
    default:
        return function () {
            // Default Callback function
            console.log('Default Callback');
        };
  }
}

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

function getAllCpus (resultContainer) {
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
      html: `Base Clock: ${cpu.base_clock}<br>
      Boost Clock: ${cpu.boost_clock}<br>
      Core Count: ${cpu.core_count}<br>
      Socket Type: ${cpu.socket}`
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
 }
)}

function getAllBoards (resultContainer) {
  boardData.forEach((board) => {
    const productPanel = $('<div>', {
      class: 'panel',
      id: `${board.id}`
    })

    const boardInfo = $('<div>',{
      class: 'board-card'
    })

    const boardTitle = $('<h>', {
      class: 'title',
      text: `${board.name_board}`
    })
    boardInfo.append(boardTitle)

    let wifi
    if ( board.wifi === false ) {
      wifi = 'No'
    } else {
      wifi = 'Yes'
    }

    const boardStats = $('<p>', {
      html: `Form Factor: ${board.form_factor} <br>
      M.2 Slots: ${board.m2_slots} <br>
      Memory Slots: ${board.memory_slots} <br>
      Memory Type: ${board.memory_type} <br>
      PCIe16 Slots: ${board.pcie16_slots} <br>
      Socket Type: ${board.socket} <br>
      Wifi: ${wifi}`
  });
    boardInfo.append(boardStats)

    const price = $('<p>', {
      class: 'price',
      text: `$${board.price}`
    })
    boardInfo.append(price)

    const linkContainer = $('<p>', {
      class: 'link-container'
    })

    const link = $('<a>', {
      class: 'link',
      text: 'Find Online',
      href: board.link,
      target: '_blank'
    })
    linkContainer.append(link)
    boardInfo.append(linkContainer)

    const image = $('<img>' , {
      src: `assets/images/motherboards/board${board.id}.jpg`,
      width: `10vw`,
      height: `20vh`
    })

    productPanel.append(image)
    productPanel.append(boardInfo)
    resultContainer.append(productPanel)
  }
)}

function getAllCoolers(resultContainer) {
  coolerData.forEach((cooler) => {
    const productPanel = $('<div>', {
      class: 'panel',
      id: `${cooler.id}`
    })

    const coolerInfo = $('<div>',{
      class: 'cooler-card'
    })

    const coolerTitle = $('<h>', {
      class: 'title',
      text: `${cooler.name_cooler}`
    })
    coolerInfo.append(coolerTitle)

    const coolerStats = $('<p>', {
      html: `Height: ${cooler.height} <br>
      Noise Level: ${cooler.noise_level} <br>
      RPM: ${cooler.rpm}`
  });
    coolerInfo.append(coolerStats)

    const price = $('<p>', {
      class: 'price',
      text: `$${cooler.price}`
    })
    coolerInfo.append(price)

    const linkContainer = $('<p>', {
      class: 'link-container'
    })

    const link = $('<a>', {
      class: 'link',
      text: 'Find Online',
      href: cooler.link,
      target: '_blank'
    })
    linkContainer.append(link)
    coolerInfo.append(linkContainer)

    const image = $('<img>' , {
      src: `assets/images/cpu_cooler/cool${cooler.id}.jpg`,
      width: `10vw`,
      height: `20vh`
    })

    productPanel.append(image)
    productPanel.append(coolerInfo)
    resultContainer.append(productPanel)
 }
)}

function getAllGpus(resultContainer) {
  gpuData.forEach((gpu) => {
    const productPanel = $('<div>', {
      class: 'panel',
      id: `${gpu.id}`
    })

    const gpuInfo = $('<div>',{
      class: 'gpu-card'
    })

    const gpuTitle = $('<h>', {
      class: 'title',
      text: `${gpu.name_card}`
    })
    gpuInfo.append(gpuTitle)

    const gpuStats = $('<p>', {
      html: `Boost Clock: ${gpu.boost_clock} <br>
      Core Clock: ${gpu.core_clock} <br>
      Display Ports: ${gpu.display_ports} <br>
      HDMI Ports: ${gpu.hdmi_ports} <br>
      Interface: ${gpu.interface} <br>
      Memory Size: ${gpu.memory_size} <br>
      Memory Type: ${gpu.memory_type} <br>`
  });
    gpuInfo.append(gpuStats)

    const price = $('<p>', {
      class: 'price',
      text: `$${gpu.price}`
    })
    gpuInfo.append(price)

    const linkContainer = $('<p>', {
      class: 'link-container'
    })

    const link = $('<a>', {
      class: 'link',
      text: 'Find Online',
      href: gpu.link,
      target: '_blank'
    })
    linkContainer.append(link)
    gpuInfo.append(linkContainer)

    const image = $('<img>' , {
      src: `assets/images/video_cards/card${gpu.id}.jpg`,
      width: `10vw`,
      height: `20vh`
    })

    productPanel.append(image)
    productPanel.append(gpuInfo)
    resultContainer.append(productPanel)
 }

// get new image for NVIDIA GPU number 2
)}

function getAllRam(resultContainer) {
  ramData.forEach((ram) => {
    const productPanel = $('<div>', {
      class: 'panel',
      id: `${ram.id}`
    })

    const ramInfo = $('<div>',{
      class: 'ram-card'
    })

    const ramTitle = $('<h>', {
      class: 'title',
      text: `${ram.name_ram}`
    })
    ramInfo.append(ramTitle)

    let ddr
    if (ram.ddr5 === true) {
      ddr = 'DDR5'
    } else {
      ddr = 'DDR4'
    }
    const ramStats = $('<p>', {
      html: `Speed: ${ram.speed} <br>
      CAS Latency: ${ram.cas_latency} <br>
      Modules: ${ram.modules} <br>
      Memory Type: ${ddr}`
  });
    ramInfo.append(ramStats)

    const price = $('<p>', {
      class: 'price',
      text: `$${ram.price}`
    })
    ramInfo.append(price)

    const linkContainer = $('<p>', {
      class: 'link-container'
    })

    const link = $('<a>', {
      class: 'link',
      text: 'Find Online',
      href: ram.link,
      target: '_blank'
    })
    linkContainer.append(link)
    ramInfo.append(linkContainer)

    const image = $('<img>' , {
      src: `assets/images/ram/ram${ram.id}.jpg`,
      width: `10vw`,
      height: `20vh`
    })

    productPanel.append(image)
    productPanel.append(ramInfo)
    resultContainer.append(productPanel)
 }

)}

function getAllStorage(resultContainer) {
  ssdData.forEach((ssd) => {
    const productPanel = $('<div>', {
      class: 'panel',
      id: `${ssd.id}`
    })

    const ssdInfo = $('<div>',{
      class: 'ssd-card'
    })

    const ssdTitle = $('<h>', {
      class: 'title',
      text: `${ssd.name_storage}`
    })
    ssdInfo.append(ssdTitle)

    let nvm
    if ( ssd.nvme === true ) {
      nvm = 'Yes'
    } else {
      nvm = 'No'
    }
    const ssdStats = $('<p>', {
      html: `Capacity: ${ssd.capacity} <br>
      Interface: ${ssd.interface} <br>
      NVME: ${nvm} <br>
      `
  });
    ssdInfo.append(ssdStats)

    const price = $('<p>', {
      class: 'price',
      text: `$${ssd.price}`
    })
    ssdInfo.append(price)

    const linkContainer = $('<p>', {
      class: 'link-container'
    })

    const link = $('<a>', {
      class: 'link',
      text: 'Find Online',
      href: ssd.link,
      target: '_blank'
    })
    linkContainer.append(link)
    ssdInfo.append(linkContainer)

    const image = $('<img>' , {
      src: `assets/images/storage/storage${ssd.id}.jpg`,
      width: `10vw`,
      height: `20vh`
    })

    productPanel.append(image)
    productPanel.append(ssdInfo)
    resultContainer.append(productPanel)
 }

)}

function getAllCases(resultContainer) {
  caseData.forEach((pcCase) => {
    const productPanel = $('<div>', {
      class: 'panel',
      id: `${pcCase.id}`
    })

    const caseInfo = $('<div>',{
      class: 'case-card'
    })

    const caseTitle = $('<h>', {
      class: 'title',
      text: `${pcCase.name_case}`
    })
    caseInfo.append(caseTitle)

    const caseStats = $('<p>', {
      html: `Dimensions: ${pcCase.dimensions} <br>
      Type: ${pcCase.type_case}`
    });
    caseInfo.append(caseStats)

    const price = $('<p>', {
      class: 'price',
      text: `$${pcCase.price}`
    })
    caseInfo.append(price)

    const linkContainer = $('<p>', {
      class: 'link-container'
    })

    const link = $('<a>', {
      class: 'link',
      text: 'Find Online',
      href: pcCase.link,
      target: '_blank'
    })
    linkContainer.append(link)
    caseInfo.append(linkContainer)

    const image = $('<img>' , {
      src: `assets/images/cases/case${pcCase.id}.jpg`,
      width: `10vw`,
      height: `20vh`
    })

    productPanel.append(image)
    productPanel.append(caseInfo)
    resultContainer.append(productPanel)
 }

)}

function getAllPsus(resultContainer) {
  powerData.forEach((psu) => {
    const productPanel = $('<div>', {
      class: 'panel',
      id: `${psu.id}`
    })

    const psuInfo = $('<div>',{
      class: 'psu-card'
    })

    const psuTitle = $('<h>', {
      class: 'title',
      text: `${psu.name_supply}`
    })
    psuInfo.append(psuTitle)

    const psuStats = $('<p>', {
      html: `Rating: ${psu.rating} <br>
      Unit Type: ${psu.type_supply} <br>
      Wattage: ${psu.wattage}`
    });
    psuInfo.append(psuStats)

    const price = $('<p>', {
      class: 'price',
      text: `$${psu.price}`
    })
    psuInfo.append(price)

    const linkContainer = $('<p>', {
      class: 'link-container'
    })

    const link = $('<a>', {
      class: 'link',
      text: 'Find Online',
      href: psu.link,
      target: '_blank'
    })
    linkContainer.append(link)
    psuInfo.append(linkContainer)

    const image = $('<img>' , {
      src: `assets/images/power_supplies/ps${psu.id}.jpg`,
      width: `10vw`,
      height: `20vh`
    })

    productPanel.append(image)
    productPanel.append(psuInfo)
    resultContainer.append(productPanel)
 }

)}

function signInWindow () {
  welcomeMessage.hide()

  const signInWindow = $('<div>', {
    class: 'sign_in_window'
  })

  const inputName = $('<input>', {
    type: 'text',
    id: 'inputName',
    placeholder: "Username"
  })

  const inputPass = $('<input>', {
    type: 'text',
    id: 'inputPass',
    placeholder: 'Password'
  })

  const existingProfileBtn = $('<button>',{
    id: 'existingProfileBtn',
    text: 'Sign In'
  })
  existingProfileBtn.on('click', async (e) => {
    console.log(inputName.val(),inputPass.val())
    let userPass = inputPass.val()
    let user = inputName.val()
    let userData = {
      userName: user,
      userPassword: userPass
    }
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
  })

  const newUserBtn = $('<button>', {
    id: 'newUserBtn',
    text: 'Create User'
  })
  newUserBtn.on('click', async (e) => {
    console.log(inputName.val(),inputPass.val())
    let userPass = inputPass.val()
    let user = inputName.val()
    let userData = {
      userName: user,
      userPassword: userPass
    }
    try {
      const response = await $.ajax({
        url: 'http://localhost:3000/api/create-user',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(userData),
      })
      console.log(response)
    } catch(error) {
      console.error('Error:',error)
    }
  })

  signInWindow.append(inputName)
  signInWindow.append(inputPass)
  signInWindow.append(existingProfileBtn)
  signInWindow.append(newUserBtn)
  container.append(signInWindow)
}