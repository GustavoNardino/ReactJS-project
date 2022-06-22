import {createContext} from 'react'

export class CostumerClass{
	name!: string;
	phone!: number;
	email!: string;
	cpf!: number;
	cep!: number;
	street!: string;
	addrNumber!: number;
	district!: string;
	city!: string;
	cardNumber!: number;
	validity!: number;
	cvv!: number;
	cardName!: string;
	cardCpf!: number;
	shipping!: number;

}
export class ProductClass{
	productName!: string;
	description!: string;
	price!: number;	
}

export const CostumerContext = createContext([])