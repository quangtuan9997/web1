class Product {
    id;
    name;
    image;
   price;

    constructor(id,name, image, price) {
        this.id=id;
        this.name = name;
        this.image = image;
        this. price = price;

    }
    getTen(){
        return this.name;
    }
    setTen(name){
        this.name=name;
    }
    getAnh(){
        return this.image;
    }
    setAnh(image){
        this.image=image;
    }
    setGiaTien(price){
        this. price=price;
    }
    getGiaTien(){
        return this. price;
    }
    getId(){
        return this.id;
}
    setId(id){
        this.id=id;
    }
}