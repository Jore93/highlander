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

  public getConnectionLimit = () => {
    return this.pool.config.connectionLimit;
  }

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

  //----------------------//
  // Language methods     //
  //----------------------//
  public readLanguageRows = async (res: express.Response) => {
    const query = "SELECT * FROM highlander_languages";
    this.pool.query(query, (err: mysql.MysqlError | null, rows) => {
      if (err) {
        res.status(200).send({
          error: true,
          message: 'Failed to query database'
        });
        logLine(`Error occurred: ${err}`);
        return;
      }
      res.status(200).send({
        error: false,
        message: 'Fetched languages',
        data: rows,
      });
    });
  }

  public createLanguageTableRow = async (language: string, level: string, res: express.Response) => {
    const query = mysql.format('INSERT INTO highlander_languages (language, level) VALUES (?, ?)', [language, level]);

    this.pool.query(query, (err: mysql.MysqlError | null) => {
      if (err) {
        res.status(200).send({
          error: true,
          message: 'Inserting language information failed',
        });
        logLine(`Error occurred: ${err}`);
        return;
      }
      res.status(200).send({
        error: false,
        message: 'Language inserted',
      });
      logLine(`Successfully inserted language information.`);
    });
  }

  //----------------------//
  // Education methods    //
  //----------------------//
  public readEducationRows = async (res: express.Response) => {
    const query = "SELECT * FROM  highlander_education";
    this.pool.query(query, (err: mysql.MysqlError | null, rows) => {
      if (err) {
        res.status(200).send({
          error: true,
          message: 'Failed to query database'
        });
        logLine(`Error occurred: ${err}`);
        return
      }
      res.status(200).send({
        error: false,
        message: 'Fetched education informations',
        data: rows,
      });
    });
  }

  public createEducationTableRow = async (name: string, place: string, duration: string, res: express.Response) => {
    const query = mysql.format('INSERT INTO highlander_education (name, place, duration) VALUES (?, ?, ?)', [name, place, duration]);

    this.pool.query(query, (err: mysql.MysqlError | null) => {
      if (err) {
        res.status(200).send({
          error: true,
          message: 'Inserting education information failed'
        });
        logLine(`Error occurred: ${err}`);
        return
      }
      res.status(200).send({
        error: false,
        message: 'Education inserted',
      });
      logLine(`Successfully inserted education information`);
    });
  }

  //----------------------//
  // Position methods     //
  //----------------------//
  public readPositionRows = async (res: express.Response) => {
    const query = "SELECT * FROM highlander_positions";

    this.pool.query(query, (err: mysql.MysqlError | null, rows) => {
      if (err) {
        res.status(200).send({
          error: true,
          message: 'Failed to query database'
        });
        logLine(`Error occurred: ${err}`);
        return
      }
      res.status(200).send({
        error: false,
        message: 'Fetched position informations',
        data: rows,
      });
    });
  }

  public createPositionTableRow = async (position: string, duration: string, organisation: string, res: express.Response) => {
    const query = mysql.format('INSERT INTO highlander_positions (position, duration, organisation) VALUES (?, ?, ?)', [position, duration, organisation]);

    this.pool.query(query, (err: mysql.MysqlError | null) => {
      if (err) {
        res.status(200).send({
          error: true,
          message: 'Inserting position information failed'
        });
        logLine(`Error occurred: ${err}`);
        return
      }
      res.status(200).send({
        error: false,
        message: 'Position inserted',
      });
      logLine(`Successfully inserted positions information`);
    });
  }

  //----------------------//
  // Workhistory methods  //
  //----------------------//
  public readWorkhistoryRows = async (res: express.Response) => {
    const query = 'SELECT * FROM highlander_workhistory';

    this.pool.query(query, (err: mysql.MysqlError | null, rows) => {
      if (err) {
        res.status(200).send({
          error: true,
          message: 'Failed to query database'
        });
        logLine(`Error occurred: ${err}`);
        return
      }
      res.status(200).send({
        error: false,
        message: 'Fetched workhistory informations',
        data: rows,
      });
    });
  }

  public createWorkhistoryTableRow = async (position: string, employer: string, duration: string, res: express.Response) => {
    const query = mysql.format('INSERT INTO highlander_workhistory (position, employer, duration) VALUES (?, ?, ?)', [position, employer, duration]);

    this.pool.query(query, (err: mysql.MysqlError | null) => {
      if (err) {
        res.status(200).send({
          error: true,
          message: 'Inserting workhistory information failed'
        });
        logLine(`Error occurred: ${err}`);
        return
      }
      res.status(200).send({
        error: false,
        message: 'Workhistory inserted',
      });
      logLine(`Successfully inserted workhistory information`);
    });
  }

  //----------------------//
  // Paragraph methods    //
  //----------------------//

  public readParagraphRows = async (title: string, res: express.Response) => {
    const query = mysql.format('SELECT * FROM highlander_paragraphs WHERE title=?', [title]);

    this.pool.query(query, (err: mysql.MysqlError | null, rows) => {
      if (err) {
        res.status(200).send({
          error: true,
          message: 'Failed to query database'
        });
        logLine(`Error occurred: ${err}`);
        return
      }
      res.status(200).send({
        error: false,
        message: rows[0] ? 'Fetched paragraph information' : 'Nothing found with query parameter',
        data: rows[0],
      });
    });
  }

  public createParagraphTableRow = async (title: string, content: string, res: express.Response) => {
    const query = mysql.format('INSERT INTO highlander_paragraphs (title, content) VALUES (?, ?)', [title, content]);

    this.pool.query(query, (err: mysql.MysqlError | null) => {
      if (err) {
        res.status(200).send({
          error: true,
          message: 'Inserting paragraph information failed'
        });
        logLine(`Error occurred: ${err}`);
        return
      }
      res.status(200).send({
        error: false,
        message: 'Paragraph inserted',
      });
      logLine(`Successfully inserted paragraph information`);
    });
  }
}

export default new DB;
