import { Regis } from "../register/regis";

export class Investor {
    invId!: number;
    firstName!: string;
    lastName!: string;
    email!: string;
    industry!: string;
    startUpsInvested!: number;
    amountInvested!: number;
    user!: Regis;
}
