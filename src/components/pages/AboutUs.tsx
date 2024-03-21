import ilus6 from "../../assets/images/ilus6.png";

const AboutUs = () => {
    return (
        <article className="page-container">
            <header className="aboutUs-header">
                <div className="aboutUs-header-bg"></div>
                <div className="floating-header-text">
                    <h1>We are Magenta, you could be</h1>
                    <p>A professional search with proposal</p>
                </div>
            </header>

            <div className="manifesto">
                <img src={ilus6} />
                <div className="manifesto-content">
                    <h3>Manifesto</h3>
                    <p className="magenta">The Latin America's House of Talents.</p>
                    <p>
                        Magenta is the first Talent Development & Management Agency for tech talents in Latin America.
                    </p>

                    <p>
                        Talent is the most scarce and in-demand resource in the world, as well as the main problem for
                        startups when it comes to developing their businesses and growing.
                    </p>

                    <p>
                        We believe that seeking the transcendence of people allows us to obtain and create something
                        much greater than the sum of ourselves.
                    </p>

                    <p>
                        We seek to create an ecosystem of interdisciplinary talents, who fulfill their purpose in life
                        and obtain the life they want, working on what they love and collaborating with each other. The
                        home of talents.
                    </p>
                </div>
                <div className="manifesto-contact">
                    <h2>¿Wanna join the team as a collaborator or ally?</h2>
                    <button>Send us an email</button>
                </div>
            </div>
        </article>
    );
};

export default AboutUs;
