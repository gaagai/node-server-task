import mysql, { Pool, RowDataPacket } from "mysql2";

class Database {
  private pool: Pool;

  constructor() {
    this.pool = mysql.createPool({
      host: "localhost",
      user: "root",
      password: "12345678",
      database: "my_shopping_list",
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });
  }

  public async getCategories(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      this.pool.query("SELECT * FROM categories", (err, results) => {
        if (err) {
          reject(err);
        }
        const rows = <RowDataPacket[]>results;
        resolve(rows);
      });
    });
  }
}

export const db = new Database();
