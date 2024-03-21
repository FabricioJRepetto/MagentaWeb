import ilusHeader from "../../assets/images/ilus4.jpg";
import kanojedo from "../../assets/images/kanojedo.png";
import FigmaLogo from "../../assets/icons/figma-logo.svg";
import PlatziLogo from "../../assets/icons/platzi-logo.svg";
import YCombLogo from "../../assets/icons/ycombinator-logo.svg";
import KoiLogo from "../../assets/icons/koi-logo.png";
import Planta from "../../assets/icons/panta.png";
import Bonsai from "../../assets/icons/bonsai.png";
import Tori from "../../assets/icons/tori.png";
import Note from "../shared/Note";

const Companies = () => {
    return (
        <article className="page-container">
            <div className="page-header bordeux">
                <div className="page-header-head">
                    <div>
                        <h1>Transcends your business</h1>
                        <h3 className="magenta">
                            Magenta provides you with integral solutions to solve your Critical Talent Challenges.
                        </h3>
                        <p>
                            We know firsthand the challenges of building a startup. We've suffered through technical
                            debt, hiring nightmares, having a lazy team and low retention rates so you don't have to.
                            Maximize the results of your business, reach the next level.
                        </p>
                    </div>
                    <img src={ilusHeader} className="header-image" />
                </div>
                <div className="logos-container">
                    <p>We work with startups backed by</p>
                    <img src={FigmaLogo} className="partner-logo" />
                    <img src={PlatziLogo} className="partner-logo" />
                    <img src={YCombLogo} className="partner-logo ycom-logo" />
                    <img src={KoiLogo} className="partner-logo koi-logo" />
                </div>
            </div>

            <div>
                <div className="page-header-head">
                    <img src={kanojedo} className="header-image bnw" />
                    <div>
                        <h3 className="magenta">Hire</h3>
                        <p>
                            Ux designers / Back-end engineers /Front-end engineers Full stack engineers. Hire talents
                            that built Replo (YC S21), Virtually (YC S20), Osmind (YC S20), FIRST (YC W19), Whalesync
                            (YC S21)
                        </p>
                    </div>
                </div>
                <div className="page-header-head">
                    <Note
                        icon={Planta}
                        title="Talent Adquisition"
                        text={`We are committed to finding not only the best talent but the right one for your business. Our methodology allow us to identify high-demanding profiles and analyze them to ensure the best match between your needs and the talent's.`}
                    />
                    <Note
                        icon={Bonsai}
                        title="Talent Development"
                        text={`Transform your current team into a crew of high-performing top players.
                        We focus on unlock the human potential of each people on your team by understanding where they are, their current needs, developing their technical and human skills.
                        Transform your business by transcending your people.`}
                    />
                    <Note
                        icon={Tori}
                        title="Talent Fidelization"
                        text={`Maximize your company's results, building a place where everyone wants to belong.
                        Obtain the maximum performance of your talents in a culture with motivations, challenges and recognition.`}
                    />
                </div>
            </div>
        </article>
    );
};

export default Companies;
