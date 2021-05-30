export default interface IFileManager {
  get(path: string): string;
  create(path: string, content: string): boolean;
  exists(path: string): boolean;
}
