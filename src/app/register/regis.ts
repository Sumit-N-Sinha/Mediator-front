export class Regis {
    
    name!: string;
    emailId!: string;
    phone: number | undefined;
    password!: string;
    userRole!: UserRole;
}

export enum UserRole{
    INVESTOR = 'INVESTOR',
    STARTUP = 'STARTUP'
}
