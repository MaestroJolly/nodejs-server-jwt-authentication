export interface UsersRegisterDTO {
    firstName: string,
    lastName: string,
    otherName: string,
    email: string,
    age: number,
    sex: string,
    country: string,
    password: string,
    confirmPassword: string,
    isAdmin: boolean
}