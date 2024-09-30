import "./Selector.css";

type Props = {
    text: string;
    isSelected: boolean;
    onClick: () => void;
}

export default function Selector({ text, isSelected, onClick }: Props) {
    return (
        <div className={`selector-container change-cursor-to-pointer ${isSelected ? "selector-container-selected" : "selector-container-not-selected"}`} onClick={onClick}>
            <p className="selector-text">{text}</p>
        </div>
    );
}