import { Router } from "express";
import ProductManager from "../managers/productmanager.js";
import { __dirname } from "../utils.js";

const pmanager = new ProductManager(__dirname + "/files/products.json");
const router = Router();

//Obtiene la lista de productos
router.get("/", async(req,res)=>{
    const listaProductos = await pmanager.getProducts({});
    console.log(listaProductos);
    res.render("home", {listaProductos});
});

//Acceso al formulario
router.get("/realtimeProducts", (req,res)=>{
    res.render("realtimeProducts");
});

export default router;
