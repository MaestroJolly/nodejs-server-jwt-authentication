export interface UsersRegisterDTO {
    firstName: string,
    lastName: string,
    otherName: string,
    email: string,
    phonenumber: number,
    age: number,
    sex: string,
    country: string,
    password: string,
    confirmPassword: string,
    isAdmin: boolean
}