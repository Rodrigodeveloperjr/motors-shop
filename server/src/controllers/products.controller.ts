import { ProductsServices } from "../services/products.service";
import { IProduct } from "../interfaces/product.interface";
import { Request, Response } from "express";

class ProductsControllers {
  async create(req: Request, res: Response) {
    const email: string = req.email;

    const data: IProduct = req.body;

    const newProduct = await new ProductsServices().create(data, email);

    return res.status(201).json(newProduct);
  }

  async listAll(req: Request, res: Response) {
    const products = await new ProductsServices().listAll();

    return res.json(products);
  }

  async specific(req: Request, res: Response) {
    const id: string = req.params.id;

    const specificProduct = await new ProductsServices().specific(id);

    return res.json(specificProduct);
  }

  async update(req: Request, res: Response) {
    const id: string = req.params.id;

    const data: Partial<IProduct> = req.body;

    const updatedProduct = await new ProductsServices().update(data, id);

    return res.json(updatedProduct);
  }

  async delete(req: Request, res: Response) {
    const id: string = req.params.id;

    await new ProductsServices().delete(id);

    return res.status(204).json();
  }
}

export { ProductsControllers };
