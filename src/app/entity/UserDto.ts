import {LearningPath} from "./LearningPath";

export class UserDto {
  constructor(
    public id: any,
    public username: string,
    public password: string,
    public level: string,
    public domain: string,
    public language: string,
    public completedLearningPath: LearningPath[] = []
  ) {}
}
