
class product
{
    id:string;
    categoryId:string;
    name:string;
    path:string;
    price:number;
    newPrice:number;
    isDiscount:boolean;
    quantity:number;
    description:string;
    dateOfCreation:number;
    imageUrl:Array<any>
}

class productWithQuantityBuy
{
    id:string;
    quantityBuy:number;
    categoryId:string;
    isDiscount:boolean;
    name:string;
    path:string;
    price:number;
    newPrice:number;
    quantity:number;
    description:string;
    dateOfCreation:number;
    imageUrl:Array<any>
}