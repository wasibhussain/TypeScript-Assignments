interface Bakery{
    companyName: string;
    brachCode: number;
    cityName: string;
}
const bakery: Bakery ={
    companyName : "test",
    brachCode: 500,
    cityName: "karachi"
}

interface BombayBakery extends Bakery{
    sales :number
}

const bombayOBj: BombayBakery = {
    sales : 88,
    brachCode: 87,
    cityName: "hyderabad",
    companyName: "test"
}
console.log(bakery);