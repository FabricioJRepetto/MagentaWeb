interface QuoteCardProps {
    avatar: string;
    text: string;
    name: string;
    role: string;
}

const QuoteCard: React.FunctionComponent<QuoteCardProps> = ({ avatar, text, name, role }) => {
    return (
        <div className="quoteCard">
            <img src={avatar} />
            <div className="quoteContent">
                <p>{text}</p>
                <div>
                    <p>{name}</p>
                    <p>{role}</p>
                </div>
            </div>
        </div>
    );
};

export default QuoteCard;
