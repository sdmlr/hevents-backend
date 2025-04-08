import express, { Request, Response } from "express";
import { supabase } from "../supabase";

const router = express.Router();

// POST /signups
router.post("/", async (req: Request, res: Response): Promise<void> => {
  const { event_id, user_email } = req.body;

  if (!event_id || !user_email) {
    res.status(400).json({ error: "event_id and user_email are required" });
    return;
  }

  const { data, error } = await supabase
    .from("signups")
    .insert([{ event_id, user_email }]);

  if (error) {
    res.status(500).json({ error: error.message });
    return;
  }

  res.status(201).json({ message: "Signed up successfully", data });
});

export default router;
