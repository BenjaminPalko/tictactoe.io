interface SquareProps {
    onClick: () => void;
    value: any;
}

export default function Square(props: SquareProps) {
    return (
        <button
            className={"square"}
            onClick={() => props.onClick()}>
            {props.value}
        </button>
    );
}
