import { required, regex } from 'react-admin';

export const NotEmpty = required('Must not be empty');
export const Email = regex(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Invalid email');
export const Phone = regex(/^(\+84)?[0-9]{10,11}$/, 'Invalid phone number');
