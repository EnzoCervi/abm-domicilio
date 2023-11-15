import { Domicilio } from "../types/Domicilio";

const BASE_URL = 'http://localhost:8080/api';

export const DomicilioService = {

    
    getDomicilios: async (): Promise<Domicilio[]> => {
       
        const response = await fetch(`${BASE_URL}/domicilios`);
        const data = await response.json();
        return data;
    },

    
    getDomicilio: async (id:number): Promise<Domicilio> => {

        const response = await fetch (`${BASE_URL}/domicilios/${id}`);
        const data = await response.json();
        return data;
        
    },

    createDomicilio:async (Domicilio:Domicilio):Promise<Domicilio> => {

        const response = await fetch(`${BASE_URL}/domicilios`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Domicilio)
        });

        const data = await response.json();
        return data;
        
    },

    updateDomicilio: async (id: number, Domicilio: Domicilio): Promise<Domicilio> => {
        
        const response = await fetch(`${BASE_URL}/domicilios/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(Domicilio)
        });

        const data = await response.json();
        return data;
    },

    

    deleteDomicilio: async (id:number): Promise<void> => {
        await fetch(`${BASE_URL}/domicilios/${id}`, {
            method: "DELETE"
        });
    }
    
}
