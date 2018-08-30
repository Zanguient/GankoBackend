export class Query {
    skip: number;
    limit: number;
    constructor(query: any) {
        this.skip = query.skip ? query.skip : 0;
        this.limit = query.limit ? query.limit : 0;
    }
}