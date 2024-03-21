import ContactForm from "../shared/ContactForm";

const Contact = () => {
    return (
        <article className="page-container">
            <header className="contact-header">
                <div>
                    <h1>You are one step your journey to reach the next level!</h1>
                    <p>
                        Now we are going to ask you a few thinks about you and your interest in order to provide you
                        with our best know how of your current status.
                    </p>
                    <p>This way, we prepare us from day 0 to welcome you!</p>
                </div>
                <div></div>
            </header>

            <ContactForm />
        </article>
    );
};

export default Contact;
