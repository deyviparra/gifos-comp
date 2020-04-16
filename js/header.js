//navbar
let themeSelector = document.querySelector('.theme-select')
let themeMenu = document.querySelector('.theme-menu')
themeMenu.style.display = "none";
const toggle =()=> {
    if (themeMenu.style.display === "none") {
      themeMenu.style.display = "block";
    } else {
      themeMenu.style.display = "none";
    }
  }
const themeDay = ()=>{
    document.querySelector('body').classList.remove('night')
    document.querySelector('body').classList.add('day')
    document.getElementById('logo').setAttribute('src','./assets/gifOF_logo.png')
    themeMenu.style.display = "none";
}
const themeNight = ()=>{
    document.querySelector('body').classList.remove('day')
    document.querySelector('body').classList.add('night')
    document.getElementById('logo').setAttribute('src','./assets/gifOF_logo_dark.png')
    themeMenu.style.display = "none";
}