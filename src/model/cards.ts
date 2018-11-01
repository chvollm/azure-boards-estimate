export interface ICard {
    identifier: string;
    value: number | string | null;
}

export enum CardSetType {
    Numeric,
    Ordinal
}

export interface ICardSet {
    id: string;

    type: CardSetType;

    name: string;

    cards: ICard[];
}

export const defaultCardSets: ICardSet[] = [
    {
        id: "default",
        type: CardSetType.Numeric,
        name: "Default",
        cards: [
            {
                identifier: "1",
                value: 1
            },
            {
                identifier: "2",
                value: 2
            },
            {
                identifier: "3",
                value: 3
            },
            {
                identifier: "5",
                value: 5
            },
            {
                identifier: "8",
                value: 8
            },
            {
                identifier: "13",
                value: 13
            },
            {
                identifier: "20",
                value: 20
            },
            {
                identifier: "40",
                value: 40
            },
            {
                identifier: "?",
                value: null
            },
            {
                identifier: "∞",
                value: null
            },
            {
                identifier: "☕",
                value: null
            }
        ]
    },
    {
        id: "tshirts",
        type: CardSetType.Ordinal,
        name: "T-Shirts",
        cards: [
            {
                identifier: "XS",
                value: "XS"
            },
            {
                identifier: "S",
                value: "S"
            },
            {
                identifier: "M",
                value: "M"
            },
            {
                identifier: "L",
                value: "L"
            },
            {
                identifier: "XL",
                value: "XL"
            },
        ]
    }
]