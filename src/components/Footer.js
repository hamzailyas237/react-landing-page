import subscribeImg from '../images/subscribe.png'
import followUsImg from '../images/followUs.png'
import emailImg from '../images/email2.png'



const FooterSectionOne = () => {

    return (
        <div className='footer'>

            <div className='footer-inner-one'>

                <div>
                    <img src={subscribeImg} />
                </div>
                <div className='footer-inner-one-headings'>
                    <h3>SUBSCRIBE</h3>
                    <h4>GET NEWSLETTERS</h4>
                </div>
            </div>

            <div className='footer-inner-two'>
                <input />
                <p>Subscribe</p>
            </div>
        </div>
    )
}

const FooterSectionTwo = () => {
    return (
        <div className="footer">

            <div className='footer-inner-one'>
                <div>
                    <img src={followUsImg} />
                </div>
                <div className='footer-inner-one-headings'>
                    <h3>FOLLOW US</h3>
                    <h4>ON SOCIAL NETWORKS</h4>
                </div>
            </div>

            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

        </div>
    )
}

const FooterSectionThree = () => {
    return (
        <div className="footer">

            <div className='footer-inner-one'>
                <div>
                    <img src={emailImg} />
                </div>
                <div className='footer-inner-one-headings'>
                    <h3>EMAIL</h3>
                    <h4>CONTACT US</h4>
                </div>
            </div>

            <div>
                <p> <span>Email: </span>Infomail@dot.com</p>
                <p> <span>Tel: </span>+31(0)xx xxx xx xx</p>
                <p> <span>Address: </span>Phasellus pellenteque 88hs 6000 Lobortis vehicula, Mauris</p>
            </div>

        </div>
    )
}


export { FooterSectionOne, FooterSectionTwo, FooterSectionThree }
