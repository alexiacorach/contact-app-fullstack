export interface Contact{
    id?: number;
    name: string;
    phone: string;
    email: string;
    notes: string;
}

export interface OkPacket {
  fieldCount: number;
  affectedRows: number;
  insertId: number;
  info: string;
  serverStatus: number;
  warningStatus: number;
  message: string;
}