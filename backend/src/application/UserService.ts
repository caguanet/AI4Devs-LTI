import pool from '../infrastructure/Database';

export class UserService {
  async createUser(name: string) {
    const client = await pool.connect();
    try {
      const result = await client.query('INSERT INTO users (name) VALUES ($1) RETURNING *', [name]);
      return result.rows[0];
    } finally {
      client.release();
    }
  }
}