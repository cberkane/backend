import express from "express";
import fooController from "../controllers/foo";

const test = express();

test.get("/:id", fooController.getOne);
test.get("/", fooController.getAll);

export default test;