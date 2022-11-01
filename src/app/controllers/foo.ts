import { Request, Response } from "express";

const getOne = (req: Request, res: Response) => {
  const id = req.params.id;
  res.send("foo number  " + id);
};

const getAll = (req: Request, res: Response) => {
  res.send("a bunch of foo");
};

export default {
  getOne,
  getAll,
};
