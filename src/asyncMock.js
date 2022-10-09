const products = [
    {
     id: '1',
     name: 'Pipeta Para mascota',
     descrpition: 'para gatos y perros',
     price: 250,
     category: 'cuidado',
     img: 'https://piensoymascotas.com/19160-large_default/frontline.jpg',
     stock: 20

    },
    {
        id: '2',
        name: 'jugutes para perro',
        descrpition: 'juguete para perro',
        price : 700,
        category : 'juguete',
        img : 'https://images-na.ssl-images-amazon.com/images/I/81ZFBEivvLL._SL1358_.jpg',
        stock : 23 
   
       },
       {
        id: '3',
        name: 'Alimento de perro',
        descrpition: 'Alimento de perro',
        price : 3000,
        category : 'alimentos',
        img : 'https://walmartgt.vtexassets.com/arquivos/ids/247134/Alimento-Seco-para-Perro-Pedigree-Adulto-4kg-1-4492.jpg',
        stock : 36 
   
       },
       {
        id: '4',
        name: 'Juguete para perro',
        descrpition: 'juguete de perro',
        price : '600',
        category : 'juguete',
        img : 'https://www.seekpng.com/png/detail/842-8424489_juguete-de-perro-png.png',
        stock : 24
   
       },
]
export const getProducts =(categoryId)=>{
    return new Promise((resolve) => {
     setTimeout(()=>{
        resolve(categoryId ? products.filter(prod => prod.category === categoryId): products )},1000)   
    })

}
export const getProduct =(id)=>{
    return new Promise((resolve) => {
     setTimeout(()=> {
        resolve(products.find(prod => prod.id === id))},1000)   
    })
}