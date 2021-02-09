import { Injectable } from '@angular/core';
import { ApiConfigService } from './api-config.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private config: ApiConfigService) { }

  GetEntries = async (): Promise<any> => {
    try {
      const response = await this.config.get(`api/entry/get`);
      return response;
    } catch (error) {
      console.log(error)
    }
  }

  AddContact = async (payload: any): Promise<any> => {
    try {
      const response = await this.config.post(`api/entry/add`, payload);
      return response;
    } catch (error) {
      console.log(error)
    }
  }

  UpdateName = async (id: any, name: string): Promise<any> => {
    try {
      const response = await this.config.post(`api/entry/update/name/${id}/${name}`, null);
      return response;
    } catch (error) {
      console.log(error)
    }
  }

  UpdateNumber = async (id: any, number: string): Promise<any> => {
    try {
      const response = await this.config.post(`api/entry/update/number/${id}/${number}`, null);
      return response;
    } catch (error) {
      console.log(error)
    }
  }
  
  RemoveContact = async (id: any): Promise<any> => {
    try {
      const response = await this.config.post(`api/entry/remove/${id}`, null);
      return response;
    } catch (error) {
      console.log(error)
    }
  }
}
