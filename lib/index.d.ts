import * as fs from 'fs';

export type Stats = fs.Stats;

export type StringEncoding = 'ascii' | 'utf8' | 'utf16le' | 'ucs2' | 'base64' | 'hex';

export function readdir(path: string): Promise<Array<string>>;
export function stat(path: string): Promise<Stats>;
/**
 * Asynchronously read the entire contents of a file.
 *
 * @return A promise that will be resolved with the contents of the file (as a string).
 */
export function readFile(filename: string, encoding: StringEncoding): Promise<string>;
/**
 * Asynchronously read the entire contents of a file.
 *
 * @param options.encoding If specified the file contents are returned as a string with the specified encoding,
 *                         if omitted or `null` (the default) then the file contents are returned as a raw buffer.
 * @return A promise that will be resolved with the contents of the file.
 */
export function readFile(
  filename: string,
  options: { encoding?: StringEncoding; flag?: string }
): Promise<string | Buffer>;
/**
 * Asynchronously read the entire contents of a file.
 *
 * @return A promise that will be resolved with the contents of the file (as a buffer).
 */
export function readFile(filename: string): Promise<Buffer>;
/**
 * Asynchronously write data to a file, replacing the file if it already exists.
 *
 * @param encoding Defaults to `utf8`.
 */
export function writeFile(
  filename: string, data: string | Buffer, encoding: StringEncoding
): Promise<void>;
/**
 * Asynchronously write data to a file, replacing the file if it already exists.
 *
 * @param encoding options.flag Defaults to `w`.
 */
export function writeFile(
  filename: string, data: string | Buffer,
  options?: { encoding?: StringEncoding, mode?: number, flag?: string }
): Promise<void>;
/**
 * Asynchronously check if the given file can be accessed with the specified permissions.
 *
 * @param mode One or more of the following flags (can be combined with a bitwise OR).
 *             - `fs.F_OK` - File is visible to the calling process, this is the default.
 *             - `fs.R_OK` - File can be read by the calling process.
 *             - `fs.W_OK` - File can be written by the calling process.
 *             - `fs.X_OK` - File can be executed by the calling process. On Windows this flag is
 *                           behaves just like `fs.F_OK`.
 * @return A promise that will be resolved if the file could be accessed.
 */
export function access(path: string, mode?: number): Promise<void>;
