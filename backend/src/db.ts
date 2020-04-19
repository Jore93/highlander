import express = require('express');
import mysql = require('mysql');
import {logLine} from './helpers';
require('dotenv').config();


class DB {
  private pool = mysql.createPool({
    connectionLimit: parseInt(process.env.DB_CONNECTION_LIMIT || '10'),
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  });

  // ?? for identifiers ? for values
  public initDbTable = (tableName: string, columns: string) : void => {
    const query = `CREATE TABLE IF NOT EXISTS ${tableName} (${columns})`;

    this.pool.query(query, (err: mysql.MysqlError | null) => {
      if (err) {
        logLine(`Error occurred: ${err}`);
        return;
      }
      logLine(`Successfully created table ${tableName}`);
    });
  }

  public createLanguageTableRow = async (language: string, level: string, res: express.Response) => {
    const query = mysql.format('INSERT INTO highlander_languages (language, level) VALUES (?, ?)', [language, level]);

    await this.pool.query(query, (err: mysql.MysqlError | null) => {
      if (err) {
        res.status(200).send({
          error: true,
          message: 'Inserting languages failed',
        })
        logLine(`Error occurred: ${err}`);
        return
      }
      res.status(200).send({
        error: false,
        message: 'Languages inserted',
      });
      logLine(`Successfully inserted language information.`);
    })
  }
}

export default new DB;
