import express = require('express');
require('dotenv').config();
import {base64Decode} from "../helpers";
import db from '../db';

const API_KEY = process.env.API_KEY;

export const getLanguages = (req: express.Request, res: express.Response) => {
  const apiKey: string = req.header('api-key') || '';
  if (base64Decode(apiKey) === API_KEY) {
    db.readLanguageRows(res);
  } else {
    res.status(403).send({
      message: 'Unauthorized'
    });
  }
}

export const postLanguages = async (req: express.Request, res: express.Response) => {
  const apiKey: string = req.header('api-key') || '';
  if (base64Decode(apiKey) === API_KEY) {
    if (req.body) {
      const language: string = req.body.language;
      const level: string = req.body.level;
      if (language && level) {
        await db.createLanguageTableRow(language, level, res);
      } else {
        res.status(200).send({
          error: true,
          message: 'Missing parameters from body'
        });
      }
    } else {
      res.status(200).send({
        error: true,
        message: 'Missing all parameters from body'
      });
    }
  } else {
    res.status(403).send({
      message: 'Unauthorized'
    });
  }
}

