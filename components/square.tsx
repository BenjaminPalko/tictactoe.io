import {Button} from "@mui/material";
import {Close, RadioButtonUnchecked} from "@mui/icons-material";

interface SquareProps {
    onClick: () => void;
    value: SquareValue;
}

export type SquareValue = 'X'|'O'|null;

export default function Square(props: SquareProps) {

    function getIcon() {
        if (!props.value) {
            return;
        }
        return props.value === 'X' ? <Close sx={{width: "100%", height: "100%"}} /> : <RadioButtonUnchecked sx={{width: "100%", height: "100%"}} />
    }

    return (
        <Button
            variant={!!props.value ? "contained" : "outlined"}
            color={props.value === 'X' ? "info" : (props.value === 'O' ? "warning" : undefined)}
            onClick={() => props.onClick()}
            style={{aspectRatio: 1}}
        fullWidth={true}>
            {getIcon()}
        </Button>
    );
}
