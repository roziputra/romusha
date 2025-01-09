import mysql, { type Pool } from 'mysql2/promise'
import {
  NIS_MYSQL_DB,
  NIS_MYSQL_HOST,
  NIS_MYSQL_PASSWORD,
  NIS_MYSQL_PORT,
  NIS_MYSQL_USER,
} from './config'

let db: Pool | undefined

export function initDb(): Pool | undefined {
  if (db) return db
  db = mysql.createPool({
    host: NIS_MYSQL_HOST,
    port: Number(NIS_MYSQL_PORT),
    user: NIS_MYSQL_USER,
    password: NIS_MYSQL_PASSWORD,
    database: NIS_MYSQL_DB,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  })
  return db
}
