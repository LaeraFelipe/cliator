import IFileManager from "../../domain/adapters/FileManager";

class FileManager implements IFileManager {
  get(path: string): string {
    throw new Error("Method not implemented.");
  }
  create(path: string, content: string): boolean {
    throw new Error("Method not implemented.");
  }
  exists(path: string): boolean {
    throw new Error("Method not implemented.");
  }
}

export default new FileManager();
