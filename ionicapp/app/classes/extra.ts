export class Extra {
    desc: string;
    price_diff_abs: number;
    price_diff_percent: number;
    default: boolean;
}

export class ExtraGroup {
    desc: string;
    extras: Extra[] = [];
}
