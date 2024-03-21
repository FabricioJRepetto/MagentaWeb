interface NoteProps {
    icon: string;
    title: string;
    text: string;
}

const Note: React.FunctionComponent<NoteProps> = ({ icon, title, text }) => {
    return (
        <div>
            <div>
                <img src={icon} className="slide-icon" />
                <b>{title}</b>
            </div>
            <p>{text}</p>
        </div>
    );
};

export default Note;
