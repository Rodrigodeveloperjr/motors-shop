import { CommentsServices } from "../services/comments.service";
import { IComment } from "../interfaces/comment.interface";
import { Request, Response } from "express";

class CommentsControllers {
  async create(req: Request, res: Response) {
    const email: string = req.email;

    const product_id: string = req.params.product_id;

    const data: IComment = req.body;

    const newComment = await new CommentsServices().create(
      data,
      email,
      product_id
    );

    return res.status(201).json(newComment);
  }

  async listCommentsProduct(req: Request, res: Response) {
    const product_id: string = req.params.product_id;

    const comments = await new CommentsServices().listCommentsProduct(
      product_id
    );

    return res.json(comments);
  }
}

export { CommentsControllers };
