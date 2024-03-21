const ContactForm = () => {
    return (
        <form className="contact-form-section">
            <h2>About you</h2>

            <div className="contact-form">
                <div>
                    <label htmlFor="fullname">
                        Full name
                        <input name="fullname" id="fullname" type="text" />
                    </label>
                    <label htmlFor="linkedin">
                        LinkedIn
                        <input name="linkedin" id="linkedin" type="text" />
                    </label>
                </div>

                <fieldset>
                    You are a
                    <label htmlFor="company">
                        Company (B2B)
                        <input type="radio" name="person" id="company" value="company" checked />
                    </label>
                    <label htmlFor="professional">
                        Professional (B2C)
                        <input type="radio" name="person" id="professional" value="professional" />
                    </label>
                </fieldset>

                <div>
                    <h2>Your interests in Magenta.</h2>
                    <p>
                        Choose the plans, topics and goals that you are interested in reach working together with us.
                        This will be the main concepts of our kickoff meeting.
                    </p>
                    <div className="contact-interest">
                        <div>A</div>
                        <div>B</div>
                        <div>C</div>
                        <div>D</div>
                        <div>E</div>
                        <div>F</div>
                        <div>G</div>
                        <div>H</div>
                        <div>I</div>
                    </div>
                </div>

                <div className="contact-form-button">
                    <button>Schedule a demo</button>
                </div>
            </div>
        </form>
    );
};

export default ContactForm;
