export class Product {
    id: number;
    img: string;
    title: string;
    description: string;
    weight: string;
    price: number;
    count: number;
    constructor(id: number,
        img: string,
        title: string,
        description: string,
        weight: string,
        price: number,
        count: number) {
            this.id = id;
            this.img = img;
            this.title = title;
            this.description = description;
            this.weight = weight;
            this.price = price;
            this.count = count;
    }
}