let headerVisible = false

const mobileToggle=()=>{
    headerVisible = !headerVisible
    const menu = document.getElementsByClassName('sf-header-menu')[0]
    if(headerVisible){
        menu.className = 'sf-header-menu sf-header-menu-mb-active'
    }else{
        menu.className = 'sf-header-menu'
    }
}