import db from '../config/connection.js';
import { Question } from '../models/index.js';
import cleanDB from './cleanDb.js';

// import questionData from './pythonQuestions.json' assert{ type: 'json'};
// const questionData = await import('./pythonQuestions.json', { assert: { type: 'json' } });

import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const questionData = require('./pythonQuestions.json');

try {
  await db();
  await cleanDB();

  // bulk create each model
  await Question.insertMany(questionData);

  console.log('Seeding completed successfully!');
  process.exit(0);
} catch (error) {
  console.error('Error seeding database:', error);
  process.exit(1);
}
