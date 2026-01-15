import { Router } from "express";
import {
  createPost,
  getPosts,
  updatePost,
  deletePost,
} from "../controllers/post.controller.js";

const router = Router();

router.route("/create").post(createPost);
router.route("/").get(getPosts);
router.route("/:id").patch(updatePost);
router.route("/:id").delete(deletePost);
export default router;
