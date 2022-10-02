import {Button, Skeleton} from "@mui/material";
import {Close, RadioButtonUnchecked} from "@mui/icons-material";

interface SquareProps {
    onClick: () => void;
    value: any;
}

export default function Square(props: SquareProps) {

    function getIcon() {
        if (!props.value) {
            return <Skeleton variant={"text"} width={16} animation={false} />;
        }
        return props.value === 'X' ?
            <Close />
            : <RadioButtonUnchecked />
    }


    return (
        <Button
            disabled={props.value}
            variant={"outlined"}
            onClick={() => props.onClick()}
        fullWidth={true}>
            {getIcon()}
        </Button>
    );
}
