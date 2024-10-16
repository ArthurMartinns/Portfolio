import * as S from './modal.styles'
import { ModalProps } from './modal.types'

function Modal({
    isOpen,
    handleCloseModal
}: ModalProps) {
    return (
        isOpen ? (
            <S.Modal>
                <S.HeaderModal>
                    <S.Title>
                        Ficou interessado?
                    </S.Title>
                    <S.Close
                        onClick={handleCloseModal}
                    >
                        Voltar
                    </S.Close>
                </S.HeaderModal>


                <S.ContentModal>
                    
                </S.ContentModal>
            </S.Modal>
        ) : ''
    )
}

export default Modal
