export class User {
  constructor(
    public id: any,
    public username: string,
    public password: string,
    public level: string,
    public domain: string,
    public language: string,
    public completedCoursesTags: string[] = [],
    public completedCoursesIds: string[] = []
  ) {}
}
