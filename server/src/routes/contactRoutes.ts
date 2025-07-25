import { Router, Request, Response } from 'express';
import { pool } from '../config/db';
import type { Contact } from '../types';
import { RowDataPacket, ResultSetHeader } from 'mysql2';

const router = Router();

router.get('/', async (_req: Request, res: Response<Contact[]>) => {
  try {
    const [rows] = await pool.query<RowDataPacket[]>('SELECT * FROM contacts');
    res.json(rows as Contact[]);
  } catch (error) {
    console.error(error);
    res.status(500).json([]);
  }
});

router.post('/', async (req: Request, res: Response<{ message: string; id?: number }>) => {
  const { name, phone, email, notes } = req.body as Contact;
  try {
    const [result] = await pool.query<ResultSetHeader>(
      'INSERT INTO contacts (name, phone, email, notes) VALUES (?, ?, ?, ?)',
      [name, phone, email, notes]
    );
    res.status(201).json({ message: 'Contact added', id: result.insertId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error when trying to create contact' });
  }
});

router.delete('/:id', async (req: Request, res: Response<{ message: string }>) => {
  const { id } = req.params;

  try {
    const [result] = await pool.query<ResultSetHeader>('DELETE FROM contacts WHERE id = ?', [id]);
    
   if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Contact not found' });
    }

    res.json({ message: 'Contact deleted' });
  } catch (error) {
    console.error('Error when trying to delete contact:', error);
    res.status(500).json({ message: 'Error when trying to delete contact:' });
  }
});


router.put("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, phone, email, notes } = req.body;

  try {
    const [result] = await pool.query(
      "UPDATE contacts SET name = ?, phone = ?, email = ?, notes = ? WHERE id = ?",
      [name, phone, email, notes, id]
    );

    res.json({ message: "Contact updated ", result });
  } catch (error) {
    console.error("Error contact update:", error);
    res.status(500).json({ message: "Error when updating" });
  }
});


export default router;
