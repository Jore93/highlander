import express = require('express');
require('dotenv').config();
import {base64Decode, logLine} from "../helpers";
import db from '../db';

const API_KEY = process.env.API_KEY;

export const getWorkhistory = (req: express.Request, res: express.Response) => {
  const apiKey: string = req.header('api-key') || '';
  if (base64Decode(apiKey) === API_KEY) {
    logLine('/GET to /getWorkhistory endpoint');
    db.readWorkhistoryRows(res);
  } else {
    res.status(403).send({
      message: 'Unauthorized'
    });
  }
}

export const postWorkhistory = async (req: express.Request, res: express.Response) => {
  const apiKey: string = req.header('api-key') || '';
  if (base64Decode(apiKey) === API_KEY) {
    if (req.body) {
      const position: string = req.body.position;
      const employer: string = req.body.employer;
      const duration: string = req.body.duration;
      if (position && employer && duration) {
        logLine('/POST to /postWorkhistory endpoint');
        await db.createWorkhistoryTableRow(position, employer, duration, res);
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

