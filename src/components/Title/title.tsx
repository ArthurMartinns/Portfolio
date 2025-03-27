import * as S from './title.styles';
import { TitleProps } from './title.types';

function Title({
    Icon,
    text
}: TitleProps) {
    return (
        <S.Container>
            {Icon && <Icon size={30} color='#2563eb' />}
            <S.Title>{text}</S.Title>
        </S.Container>
    );
}

export default Title;
