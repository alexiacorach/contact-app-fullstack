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
    res.status(201).json({ message: 'Contacto creado', id: result.insertId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear contacto' });
  }
});

export default router;
