

const Header = () => {

    const myFunc = () => {
        var toggleBtn = document.getElementsByClassName("menu-btn")[0];
        var element = document.getElementsByClassName("navul")[0];
        element.classList.toggle('active')
        toggleBtn.classList.toggle('color')
    }


    return (
        <div>

            <nav>
                <div onClick={myFunc} className="menu-btn">
                    <i className="fas fa-bars"></i>
                </div>

                <ul className="navul">
                    <li className="activeLink">Communinty</li>
                    <li>Portfolios</li>
                    <li>Inspiration</li>
                    <li>News</li>
                    <li>Features</li>
                    <li>Jobs</li>
                </ul>

            </nav>


        </div>
    )
}

export default Header



