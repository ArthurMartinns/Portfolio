export enum TypeButtonEnum{
    PRIMARY =  'primary',
    SECONDARY = 'secondary'
}

export type ButtonProps = {
    type: TypeButtonEnum,
    buttonText: string
}