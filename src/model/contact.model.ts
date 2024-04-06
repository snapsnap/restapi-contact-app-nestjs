
export class ContactResponse {
    id: number;
    first_name: string;
    last_name?: string;
    email?: string;
    phone?: string;
}

export class CreateContactResponse {
    first_name: string;
    last_name?: string;
    email?: string;
    phone?: string;
}