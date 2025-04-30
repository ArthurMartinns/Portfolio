import { ButtonProps, TypeButtonEnum } from "./button.type"
import * as S from './button.styles'

function Button({
    type = TypeButtonEnum.PRIMARY,
    buttonText
}: ButtonProps) {
    return (
        <>
            {type === 'primary' &&
                (
                    <S.ButtonPrimary>
                        {buttonText}
                    </S.ButtonPrimary>
                )
            }
            {type === 'secondary' &&
                (
                    <S.ButtonSecondary>
                        {buttonText}
                    </S.ButtonSecondary>
                )
            }
        </>
    )
}

export default Button