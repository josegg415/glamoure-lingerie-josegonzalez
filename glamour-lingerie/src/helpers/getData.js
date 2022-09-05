import { stockProductos } from "../data/data";

   export const getData = () => {
    const error = false;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!error) {
                resolve(stockProductos)
            } else {
                reject("hay un error")
            }

        },3000 )
    })
}
