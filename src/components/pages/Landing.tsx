import Card from "../shared/Card";
import ilus1 from "../../assets/images/ilus1.jpg";
import ilus2 from "../../assets/images/ilus2.jpg";
import Slides from "../shared/Slides";
import PlanCard from "../shared/PlanCard";
import QuoteCard from "../shared/QuoteCard";
import avatar1 from "../../assets/people/1.jpg";
import avatar2 from "../../assets/people/2.jpg";
import avatar3 from "../../assets/people/3.jpg";

const Landing = () => {
    return (
        <article className="page-container">
            <div className="page-header-head">
                <div>
                    <h1>
                        Welcome to <span className="magenta">Magenta</span> the house of growing talent.
                    </h1>
                    <h3>The First Holistic Agency for IT Professionals in Latin America.</h3>
                    <p>
                        We empower IT talents at all stages—from emerging newcomers to experienced veterans—to tackle
                        their next defining challenges.
                    </p>
                    <button>Let's Talk</button>
                </div>
                <img src={ilus1} className="header-image" />
            </div>

            <div>
                <h2>Guiding extraordinary tech talent to reach new career heights</h2>
                <p>
                    Our expertise lies in catalyzing the professional development of exceptional individuals aiming for
                    the next level, both in their careers and personal lives.
                </p>

                <div className="card-container">
                    <Card
                        title="Your current role doesn't fill you?"
                        text="We're not just about placing you in a job—we're committed to finding your dream role in the tech industry. Our expertise lies in catalyzing the professional development of exceptional individuals aiming for the next level, both in their careers and personal lives."
                        image={ilus1}
                    />
                    <Card
                        title="Maximize your potential!"
                        text="At Magenta, we're dedicated to aligning exceptional individuals with their career aspirations. We provide the direction, stimulation, and mindset for intelligent career growth.
                        
                        Don't let your talents go to waste.
"
                        image={ilus2}
                    />
                </div>
            </div>

            <div>
                <h2>Solution for MVP players: Transcends with Magenta</h2>
                <Slides />
            </div>

            <div>
                <h2>Plans for all stages of your growment or your staff</h2>
                <p>Getting a plan specially designed for each stage of your life.</p>

                <div className="planCard-container">
                    <PlanCard
                        title="Begin"
                        text="Specially designed for Emerging Talent taking their first steps in the market."
                        options={["Career planning", "Skills Development program", "Purpose and value identification"]}
                    />
                    <PlanCard
                        title="Grow"
                        text="Oriented to senior talent who are looking to boost their lives to the next level."
                        info="(All features included in Begins plan plus)"
                        options={[
                            "Executive & Life Coaching",
                            "Human skills development program",
                            "Talent Management & Mentoring",
                        ]}
                    />
                    <PlanCard
                        title="Trascend"
                        text="Created for talents who are looking to become the Top players in market."
                        info="(All features included in Grows plan plus)"
                        options={[
                            "Get unique PR strategies",
                            "Boost your Personal brand",
                            "Get High Performance Coaching",
                        ]}
                    />
                </div>
            </div>

            <div>
                <h2>
                    Changin lifes with <span className="magenta">Magenta</span>
                </h2>
                <div className="quoteCard-container">
                    <QuoteCard
                        avatar={avatar1}
                        name="Alvin Simon"
                        role="Senior UX Designer"
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum vel maxime labore impedit adipisci repellat itaque illum beatae, sed incidunt nesciunt commodi dolores dolorem nam, ullam, ut fugit inventore nihil!"
                    />
                    <QuoteCard
                        avatar={avatar2}
                        name="Alvin Simon"
                        role="Senior UX Designer"
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum vel maxime labore impedit adipisci repellat itaque illum beatae, sed incidunt nesciunt commodi dolores dolorem nam, ullam, ut fugit inventore nihil!"
                    />
                    <QuoteCard
                        avatar={avatar3}
                        name="Alvin Simon"
                        role="Senior UX Designer"
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum vel maxime labore impedit adipisci repellat itaque illum beatae, sed incidunt nesciunt commodi dolores dolorem nam, ullam, ut fugit inventore nihil!"
                    />
                    <p></p>
                </div>
            </div>
        </article>
    );
};

export default Landing;
