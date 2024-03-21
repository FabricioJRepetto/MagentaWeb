import MagentaLogo from "../../assets/images/magenta-logo.png";

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-content">
                <img src={MagentaLogo} className="magenta-logo" alt="logoMagenta" />
                <div>
                    <p>About Us</p>
                    <p>For companies</p>
                    <span>
                        Any questions?
                        <p>Contact us</p>
                    </span>
                </div>
            </div>
            <div className="footer-disclaimer">
                2024 Magenta, House of Talents S.A. © Copyright. NIT 900.422.614-8. Carrera 7 No. 76 – 35 Bogotá D.C.,
                Colombia. Email: jamesmagentaagency
            </div>
        </div>
    );
};

export default Footer;
