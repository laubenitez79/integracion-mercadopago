export interface IProduct {
    id: number;
    title: string;
    price: number;
    img: string;
    description: string[];
}

export const Producto : IProduct = {
    id: 1,
    title: "Iphone 13",
    price: 1000,
    description: ["La pantalla del iPhone 13 tiene esquinas redondeadas que siguen el elegante diseño curvo del teléfono, y las esquinas se encuentran dentro de un rectángulo estándar. Si se mide en forma de rectángulo estándar, la pantalla tiene 6.06 pulgadas en diagonal (el área real de visualización es menor)."],
    img: "https://www.tradeinn.com/f/13835/138359442/apple-iphone-13-pro-max-512gb-6.7.jpg"
}