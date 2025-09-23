import { CommentModel } from "../models/comment.model.js";

export const createComment = async (req, res) => {
  const { content, author, article } = req.body;
  try {
    const comment = await CommentModel.create({ content, author, article });
    return res.status(201).json({
      msg: "Comentado publicado correctamente",
      data: comment,
    });
  } catch (error) {
    console.log(error);
    return res.status(501).json({
      msg: "Error interno del servidor",
    });
  }
};

export const getAllComments = async (req, res) => {
  try {
    const comment = await CommentModel.find();
    return res.status(200).json({
      msg: "Todos los comentarios:",
      data: comment,
    });
  } catch (error) {
    console.log(error);
    return res.status(501).json({
      msg: "Error interno del servidor",
    });
  }
};

export const updateComment = async (req, res) => {
  const { id } = req.params;
  const { content } = req.body;
  try {
    const comment = await CommentModel.findByIdAndUpdate(
      id,
      { content },
      { new: true }
    );
    return res.status(201).json({
      msg: "Commentario editado correctamente",
      data: comment,
    });
  } catch (error) {
    console.log(error);
    return res.status(501).json({
      msg: "Error interno del servidor",
    });
  }
};

export const deleteComment = async (req, res) => {
  const { id } = req.params;
  try {
    const comment = await CommentModel.findByIdAndDelete(id);
    return res.status(200).json({
      msg: "Comentario eliminado correctamente",
      data: comment,
    });
  } catch (error) {
    console.log(error);
    return res.status(501).json({
      msg: "Error interno del servidor",
    });
  }
};

export const getCommentById = async (req, res) => {
  const { id } = req.params;
  try {
    const comment = await CommentModel.findById(id);
    return res.status(200).json(comment);
  } catch (error) {
    console.log(error);
    return res.status(501).json({
      msg: "Error interno del servidor",
    });
  }
};

export const getUserLogComments = async (req, res) => {
  const user = req.userLog;
  try {
    const comment = await CommentModel.find({ author: user.id });
    return res.status(200).json({
      msg: "Comentarios hechos:",
      data: comment,
    });
  } catch (error) {
    console.log(error);
    return res.status(501).json({
      msg: "Error interno del servidor",
    });
  }
};
