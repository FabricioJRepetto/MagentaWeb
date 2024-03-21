interface PlanCardProps {
    title: string;
    text: string;
    info?: string;
    options: string[];
}

const PlanCard: React.FunctionComponent<PlanCardProps> = ({ title, text, options, info }) => {
    return (
        <div className="planCard">
            <h3>{title}</h3>
            <p>{text}</p>
            {info && <p>{info}</p>}
            <div>
                {options.map(opt => (
                    <p>✅{opt}</p>
                ))}
            </div>
            <button>Get plan</button>
        </div>
    );
};

export default PlanCard;
