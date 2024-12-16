
export enum RoleType {
    ADMIN = '0',
    USER = '10'
}

export interface UserRs {
    id: number
    name: string
    email: string
    type: RoleType
}
