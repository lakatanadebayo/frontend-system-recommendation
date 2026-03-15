export class LearningPathResource {
  constructor(
    public name?: string,
    public url?: string,
    public type?: string
  ) {}
}


export class LearningPath {
  constructor(
    public id?: string,
    public title: string = '',
    public level: string = '',
    public domain: string = '',
    public language?: string,
    public prerequisiteCourseIds: string[] = [],
    public objectives: string[] = [],
    public content: string[] = [],
    public activities: string[] = [],
    public resources: LearningPathResource[] = [],
    public tags: string[] = []
  ) {}
}
