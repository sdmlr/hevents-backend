import express from "express";
import { Request, Response } from "express";
import { supabase } from "../supabase";

const router = express.Router();

router.get("/", async (req: Request, res: Response): Promise<void> => {
  const { data, error } = await supabase
    .from("events")
    .select("*")
    .order("date", { ascending: true });

  if (error) {
    res.status(500).json({ error: error.message });
    return;
  }

  res.status(200).json(data);
});

export default router;
