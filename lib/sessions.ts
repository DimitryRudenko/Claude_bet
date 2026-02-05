import fs from 'fs';
import path from 'path';
import type { Session } from '@/app/types';

const sessionsDirectory = path.join(process.cwd(), 'data/sessions');

export function getAllSessions(): Session[] {
  const fileNames = fs.readdirSync(sessionsDirectory);
  const sessions = fileNames
    .filter((name) => name.endsWith('.json'))
    .map((name) => {
      const filePath = path.join(sessionsDirectory, name);
      const content = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(content) as Session;
    })
    .sort((a, b) => b.date.localeCompare(a.date));

  return sessions;
}

export function getSessionById(id: string): Session | null {
  const filePath = path.join(sessionsDirectory, `${id}.json`);
  if (!fs.existsSync(filePath)) return null;
  const content = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(content) as Session;
}

export function getAllSessionIds(): string[] {
  const fileNames = fs.readdirSync(sessionsDirectory);
  return fileNames
    .filter((name) => name.endsWith('.json'))
    .map((name) => name.replace('.json', ''));
}
