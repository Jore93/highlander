import express = require('express');
require('dotenv').config();
import {base64Decode} from "../helpers";
import db from '../db';

const API_KEY = process.env.API_KEY;

export const getEducations = (req: express.Request, res: express.Response) => {
  const apiKey: string = req.header('api-key') || '';
  if (base64Decode(apiKey) === API_KEY) {
    db.readEducationRows(res);
  } else {
    res.status(403).send({
      message: 'Unauthorized'
    });
  }
}

export const postEducations = async (req: express.Request, res: express.Response) => {
  const apiKey: string = req.header('api-key') || '';
  if (base64Decode(apiKey) === API_KEY) {
    if (req.body) {
      const name: string = req.body.name;
      const place: string = req.body.place;
      const duration: string = req.body.duration;
      if (name && place && duration) {
        await db.createEducationTableRow(name, place, duration, res);
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

