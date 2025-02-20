import { ReactNode } from "react";

export enum CardProjectsEnum {
    FIRST = 'first',
    SECOND = 'second',
    THIRD = 'third',
    FOURTY = 'fourth'
}

export interface CardProjectsProps {
    type: CardProjectsEnum,
    children: ReactNode,
}