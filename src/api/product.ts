import { AxiosPromise } from "axios";
import instance from "./instance";
import { IProduct } from "../interface/product";

export const getProducts = async (): Promise<IProduct[]> => {
    return await instance.get('/products');
} 
export const getProduct = async (id: number): Promise<IProduct> => {
    return await instance.get(`/products/${id}`);
} 
export const removeProduct = async (id: number) => {
    return await instance.delete(`/products/${id}`);
}  
export const addProducts = async (product: IProduct) => {
    return await instance.post('/products', product);
} 
export const editProducts = async (product: IProduct) => {
    return await instance.post(`/products/${product.id}`, product);
} 
