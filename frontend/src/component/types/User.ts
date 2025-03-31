export type User = {
    loginId: string;
    personalNumber: string;
    password: string;
    lastNameKanji: string;
    firstNameKanji: string;
    lastNameKana: string;
    firstNameKana: string;
    phone: string;
    email: string;
    postalCode1: string;
    postalCode2: string;
    address1: string;
    address2: string;
    address3: string;
    birthDate: string;
    sex: number;
};


export type UserRegisterForm = User & {
    category: string;
};

export type UserListResponse = {
    content: User[];
}

export type UserDetail = {
    userList: User;
    loginId: string;
    password: string;
};