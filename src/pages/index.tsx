import { Producto } from "@/mock/product";
import  styles  from "../styles/Home.module.scss";
import { formatNumber } from "@/utils/formatNumber";
import Image from "../../node_modules/next/image";
import { MercadoPagoButton } from "@/components/MercadoPagoButton/index";

export default function Home() {
  return (
    <main className={styles.container}>

      <div className={styles.productContainer}>
        <Image src={Producto.img} alt={Producto.title} width={360} height={450} priority/>

      <div className={styles.data}>
        <div className={styles.top}>
          <h2>{Producto.title}</h2>
          <h3>{formatNumber(Producto.price)}</h3>
        </div>

        <div className={styles.center}>
          <span>Lo que tenes que saber sobre este producto</span>
        
          <ul>
            {Producto.description.map((item)=> (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div><MercadoPagoButton product={Producto}/></div>
        </div>
      </div>
    </main>
  )
}
