import IFileManager from "../../adapters/FileManager";
import Configuration from "../../entities/Configuration";

export class ExecuteCommandCase {
  constructor(
    private configuration: Configuration,
    private fileManager: IFileManager
  ) {}

  execute(type: string, args: string[]) {}

  validate() {}
}
