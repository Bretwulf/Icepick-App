import { StyledButton } from "./styledComponents"

interface IButtonProps{
    type?: "button" | "submit" | undefined
    text: string
    onClick?: () => void
    buttonSize: string
    buttonStyle: string
    className?: string
}

export const Button= ({text, onClick, buttonSize, buttonStyle, type} : IButtonProps)=>{
    return(
        <StyledButton buttonSize={buttonSize} buttonStyle={buttonStyle} type={type} onClick={onClick}>{text}</StyledButton>
    )
}