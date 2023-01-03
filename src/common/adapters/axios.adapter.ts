import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { HttpAdapter } from '../interfaces/http-adapter.interface';

// Para hacerlo provider hay que decorarlo con injectable
@Injectable()
export class AxiosAdapter implements HttpAdapter {

    private axios: AxiosInstance = axios;

    async get<T>(url: string): Promise<T> {

        try {
            const { data } = await this.axios.get<T>( url );
            return data;
        } catch (error) {
            console.log(error);
            throw new Error('This is an error, check logs');
        }

    }

}