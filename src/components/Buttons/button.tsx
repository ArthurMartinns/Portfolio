import { ButtonProps, TypeButtonEnum } from "./button.type"
import * as S from './button.styles'

function Button({
    type = TypeButtonEnum.PRIMARY,
    buttonText,
    onClick,
}: ButtonProps) {
    return (
        <>
            {type === TypeButtonEnum.PRIMARY && (
                <S.ButtonPrimary onClick={onClick}>
                    {buttonText}
                </S.ButtonPrimary>
            )}
            {type === TypeButtonEnum.SECONDARY && (
                <S.ButtonSecondary onClick={onClick}>
                    {buttonText}
                </S.ButtonSecondary>
            )}
        </>
    )
}

export default Button