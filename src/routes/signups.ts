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

// GET /signups/by-email?email=user@example.com
router.get("/", async (req: Request, res: Response): Promise<void> => {
  const { email } = req.query;

  if (!email || typeof email !== "string") {
    res.status(400).json({ error: "Email is required" });
    return;
  }

  const { data, error } = await supabase
    .from("signups")
    .select("events(*)") // join with event data
    .eq("user_email", email);

  if (error) {
    res.status(500).json({ error: error.message });
    return;
  }

  const events = data.map((signup) => signup.events);
  res.status(200).json(events);
});


export default router;
