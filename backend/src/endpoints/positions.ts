import express = require('express');
require('dotenv').config();
import {base64Decode, logLine} from "../helpers";
import db from '../db';

const API_KEY = process.env.API_KEY;

export const getPositions = (req: express.Request, res: express.Response) => {
  const apiKey: string = req.header('api-key') || '';
  if (base64Decode(apiKey) === API_KEY) {
    logLine('/GET to /getPositions endpoint');
    db.readPositionRows(res);
  } else {
    res.status(403).send({
      message: 'Unauthorized'
    });
  }
}

export const postPositions = async (req: express.Request, res: express.Response) => {
  const apiKey: string = req.header('api-key') || '';
  if (base64Decode(apiKey) === API_KEY) {
    if (req.body) {
      const position: string = req.body.position;
      const duration: string = req.body.duration;
      const organisation: string = req.body.organisation;
      if (position && duration && organisation) {
        logLine('/POST to /postPositions endpoint');
        await db.createPositionTableRow(position, duration, organisation, res);
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

