import { Request, Response } from "express";
import { db } from "../db.js";

export async function getUsers(req: Request, res: Response) {
  try {
    const users = await db.manyOrNone(
      `SELECT *
      FROM users`
    )

    if (!users) {
      return res.status(404).json({msg: "Users not found"})
    }

    return res.status(200).json(users)
    
  } catch (error) {
    console.log(error)
    res.status(500).json({msg: "Couldn't retrieve the users"})
  }
}
