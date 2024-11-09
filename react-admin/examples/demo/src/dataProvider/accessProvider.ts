import { fetchUtils } from 'react-admin';

const apiUrl = '/api'; // URL của json-server
const httpClient = fetchUtils.fetchJson;

export const accessProvider = {
    getList: async (resource: any, params: any) => {
        const { page, perPage } = params;
        const url = `${apiUrl}/${resource}?_page=${page}&_limit=${perPage}`;
        const { json } = await httpClient(url);
        return { data: json, total: json.length };
    },
    getOne: async (resource: any, params: any) => {
        const { id } = params;
        const url = `${apiUrl}/${resource}/${id}`;
        const { json } = await httpClient(url);
        return { data: json };
    },
    create: async (resource: any, params: any) => {
        const { data } = params;
        const url = `${apiUrl}/${resource}`;
        const { json } = await httpClient(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
        });
        return { data: json };
    },
    update: async (resource: any, params: any) => {
        const { id, data } = params;
        const url = `${apiUrl}/${resource}/${id}`;
        const { json } = await httpClient(url, {
            method: 'PUT',
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
            body: JSON.stringify(data),
        });
        return { data: json };
    },
    delete: async (resource: any, params: any) => {
        const { id } = params;
        const url = `${apiUrl}/${resource}/${id}`;
        const { json } = await httpClient(url, {
            method: 'DELETE',
        });
        return { data: json };
    },
    deleteMany: (resource: any, params: any) => {
        return fetch(`/api/${resource}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ids: params.ids }),
        }).then(response => response.json());
    },
};
