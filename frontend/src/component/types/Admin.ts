export type AdminRegisterForm = {
    loginId: string;
    password: string;
    auth:  '1' | '2';
    registDate?: string;
    register: string; 
};

export type AdminValidation = {
    loginId? :string;
    password? :string;
    auth? :string;
    register? :string;
    form? :string;
};

export type ErrorMessage = string | null;