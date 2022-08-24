function navbar(){
    return `
    <div class="logo"><img src="https://www.hellobrightline.com/assets/brightline-logo.svg?w=163&h=40&fit=thumb&fm=png&q=90" alt=""></div>
        <div class="nav_links">
            <a href="#">How It Works <i class="fa-solid fa-chevron-down"></i></a>
        </div>
        <div class="nav_links">
            <a href="#">Employers & Plans <i class="fa-solid fa-chevron-down"></i></a>
        </div>
        <div class="nav_links">
            <a href="#">For Families <i class="fa-solid fa-chevron-down"></i></a>
        </div>
        <div class="nav_links">
        <a href="#">Careers <i class="fa-solid fa-chevron-down"></i></a>
        </div>
        <div id="nav_end">
            <button id="loginBtn">Log in</button>
            <button id="signupBtn">Sign up</button>        
        </div>`
}

function navbarMediaQurrMedium(){
    return `<div id="uponMedmScreen">
    <div id="mdmScreenNavImg">
        <img src="https://www.hellobrightline.com/assets/brightline-logo.svg?w=163&h=40&fit=thumb&fm=png&q=90" alt="">
    </div>
    <div id="menuBar">
        <i class="fa-solid fa-bars"></i>
    </div>
    </div>`
}

export {navbar};

/* <a href=""><i class="fa-solid fa-bars"></i></a> */