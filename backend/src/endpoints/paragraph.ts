import express = require('express');
require('dotenv').config();
import {base64Decode, logLine} from "../helpers";
import db from '../db';

const API_KEY = process.env.API_KEY;

export const getParagraphs = async (req: express.Request, res: express.Response) => {
  const apiKey: string = req.header('api-key') || '';

  if (base64Decode(apiKey) === API_KEY) {
    if (req.query.title) {
      const title: string = req.query.title.toString();
      logLine('/GET to /getParagraphs endpoint');
      await db.readParagraphRows(title, res);
    } else {
      res.status(200).send({
        error: true,
        message: 'Missing query parameters'
      });
    }
  } else {
    res.status(403).send({
      message: 'Unauthorized'
    });
  }
}

export const postParagraphs = async (req: express.Request, res: express.Response) => {
  const apiKey: string = req.header('api-key') || '';
  if (base64Decode(apiKey) === API_KEY) {
    if (req.body) {
      const title: string = req.body.title;
      const content: string = req.body.content;
      if (title && content) {
        logLine('/POST to /postParagraphs endpoint');
        await db.createParagraphTableRow(title, content, res);
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

