import ProcessLine from "../shared/ProcessLine";
import ilus7 from "../../assets/images/ilus7.jpg";
import FourPillars from "../shared/FourPillars";
const Process = () => {
    return (
        <article className="page-container">
            <header className="process-header">
                <div className="process-header-timeline">
                    <h1>A call far away from beggining your process.</h1>
                    <ProcessLine />
                </div>
                <div>
                    <h2>flexible, mutble, adaptable.</h2>
                </div>

                <p>Schedule a demo</p>
            </header>

            <div className="process-pillars">
                <div className="process-pillars-content">
                    <p>
                        Texto acerca de los cuatro pilares y explicacion de como empieza el proceso, como se representa
                        y que pasos siguen con mayor beneficio
                    </p>
                    <FourPillars />
                </div>
                <img src={ilus7} />
            </div>
        </article>
    );
};

export default Process;
