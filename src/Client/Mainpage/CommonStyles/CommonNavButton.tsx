import { Button } from "react-bootstrap"
import './CommonStyles.css'

interface CommonNavButtonProps {
    color: string,
    text: string,
    styleButton?: React.CSSProperties //toptional with question mark
    styleText?: React.CSSProperties,
    customClassButton?: string,
    customClassText?: string,
    onclick: () => void
}

export default function CommonNavButton(props: CommonNavButtonProps) {
    return (
        <>
            <Button className={`CommonNavButtonStyle ${props.customClassButton || ""}`}
                onClick={props.onclick}
                style={{
                    borderRadius: '25px', width: '10cqw',
                    maxWidth: '200px',
                    backgroundColor: props.color,
                    display: 'flex',
                    justifyContent: 'center',
                    border: 'none',
                    ...props.styleButton
                }}><span className={`CommonNavButtonTextStyle ${props.customClassText || ""}`} style={props.styleText}>
                    {props.text}
                </span></Button>
        </>
    )
}