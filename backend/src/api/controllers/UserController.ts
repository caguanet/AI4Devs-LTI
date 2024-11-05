// backend/src/api/controllers/UserController.ts
import { Request, Response } from 'express';

export class UserController {
  static getAllUsers(req: Request, res: Response) {
    // Lógica para obtener todos los usuarios
    res.send('Obtener todos los usuarios');
  }

  static createUser(req: Request, res: Response) {
    // Lógica para crear un nuevo usuario
    res.send('Crear un nuevo usuario');
  }
}