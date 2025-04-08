import express, { Request, Response } from "express";
import { supabase } from "../supabase";

const router = express.Router();

// POST /admin/events
router.post("/", async (req: Request, res: Response): Promise<void> => {
  const { title, description, date, time, location, image_url } = req.body;

  if (!title || !description || !date || !time || !location) {
    res.status(400).json({ error: "Missing required fields" });
    return;
  }

  const { data, error } = await supabase
    .from("events")
    .insert([{ title, description, date, time, location, image_url }])
    .select('*');

  if (error) {
    res.status(500).json({ error: error.message });
    return;
  }

  res.status(201).json({ message: "Event created", data });
});

// PUT /admin/events/:id
router.put('/:id', async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const { title, description, date, time, location, image_url } = req.body;
  
    if (!title || !description || !date || !time || !location) {
      res.status(400).json({ error: 'Missing required fields' });
      return;
    }
  
    const { data, error } = await supabase
      .from('events')
      .update({ title, description, date, time, location, image_url })
      .eq('id', id)
      .select('*');
  
    if (error) {
      res.status(500).json({ error: error.message });
      return;
    }
  
    res.status(200).json({ message: 'Event updated', data });
  });
  

  // DELETE /admin/events/:id
router.delete('/:id', async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
  
    const { data, error } = await supabase
      .from('events')
      .delete()
      .eq('id', id)
      .select('*');
  
    if (error) {
      res.status(500).json({ error: error.message });
      return;
    }
  
    if (!data || data.length === 0) {
      res.status(404).json({ error: 'Event not found or already deleted' });
      return;
    }
  
    res.status(200).json({ message: 'Event deleted', data });
  });
  

export default router;
