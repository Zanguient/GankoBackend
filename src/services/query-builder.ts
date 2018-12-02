export class QueryBuilder {

    private q: QueryItem = { type: BEGIN };
    private next: QueryItem = this.q;
    private limit = -1;
    private skip = -1;

    private orderBy: string = null;
    private orderMode: string = null;

    // =

    equalInt(field: string, value: number): QueryBuilder {
        return this.operationValue(EQUAL, field, value, INT);
    }

    equalLong(field: string, value: number): QueryBuilder {
        return this.operationValue(EQUAL, field, value, LONG);
    }

    equalFloat(field: string, value: number): QueryBuilder {
        return this.operationValue(EQUAL, field, value, FLOAT);
    }

    equalBool(field: string, value: boolean): QueryBuilder {
        return this.operationValue(EQUAL, field, value, BOOL);
    }

    equalDate(field: string, value: Date): QueryBuilder {
        return this.operationValue(EQUAL, field, value, DATE);
    }


    equalField(f1: string, f2: string): QueryBuilder {
        return this.operationValue(EQUAL_FIELD, f1, f2, FIELD);
    }

    // <

    ltInt(field: string, value: number): QueryBuilder {
        return this.operationValue(LT, field, value, INT);
    }

    ltLong(field: string, value: number): QueryBuilder {
        return this.operationValue(LT, field, value, LONG);
    }

    ltFloat(field: string, value: number): QueryBuilder {
        return this.operationValue(LT, field, value, FLOAT);
    }

    ltBool(field: string, value: boolean): QueryBuilder {
        return this.operationValue(LT, field, value, BOOL);
    }

    ltDate(field: string, value: Date): QueryBuilder {
        return this.operationValue(LT, field, value, DATE);
    }

    ltField(f1: string, f2: string): QueryBuilder {
        return this.operationValue(LT_FIELD, f1, f2, FIELD);
    }

    // <=

    lteInt(field: string, value: number): QueryBuilder {
        return this.operationValue(LTE, field, value, INT);
    }

    lteLong(field: string, value: number): QueryBuilder {
        return this.operationValue(LTE, field, value, LONG);
    }

    lteFloat(field: string, value: number): QueryBuilder {
        return this.operationValue(LTE, field, value, FLOAT);
    }

    lteBool(field: string, value: boolean): QueryBuilder {
        return this.operationValue(LTE, field, value, BOOL);
    }

    lteDate(field: string, value: Date): QueryBuilder {
        return this.operationValue(LTE, field, value, DATE);
    }

    lteField(f1: string, f2: string): QueryBuilder {
        return this.operationValue(LTE_FIELD, f1, f2, FIELD);
    }

    // >

    gtInt(field: string, value: number): QueryBuilder {
        return this.operationValue(GT, field, value, INT);
    }

    gtLong(field: string, value: number): QueryBuilder {
        return this.operationValue(GT, field, value, LONG);
    }

    gtFloat(field: string, value: number): QueryBuilder {
        return this.operationValue(GT, field, value, FLOAT);
    }

    gtBool(field: string, value: boolean): QueryBuilder {
        return this.operationValue(GT, field, value, BOOL);
    }

    gtDate(field: string, value: Date): QueryBuilder {
        return this.operationValue(GT, field, value, DATE);
    }

    gtField(f1: string, f2: string): QueryBuilder {
        return this.operationValue(GT_FIELD, f1, f2, FIELD);
    }

    // <=

    gteInt(field: string, value: number): QueryBuilder {
        return this.operationValue(GTE, field, value, INT);
    }

    gteLong(field: string, value: number): QueryBuilder {
        return this.operationValue(GTE, field, value, LONG);
    }

    gteFloat(field: string, value: number): QueryBuilder {
        return this.operationValue(GTE, field, value, FLOAT);
    }

    gteBool(field: string, value: boolean): QueryBuilder {
        return this.operationValue(GTE, field, value, BOOL);
    }

    gteDate(field: string, value: Date): QueryBuilder {
        return this.operationValue(GTE, field, value, DATE);
    }

    gteField(f1: string, f2: string): QueryBuilder {
        return this.operationValue(GTE_FIELD, f1, f2, FIELD);
    }

    // LIKE

    startLike(field: string, value: string): QueryBuilder {
        return this.operationValue(START_LIKE, field, value, STRING);
    }

    centerLike(field: string, value: string): QueryBuilder {
        return this.operationValue(CENTER_LIKE, field, value, STRING);
    }

    endLike(field: string, value: string): QueryBuilder {
        return this.operationValue(END_LIKE, field, value, STRING);
    }

    // IS NOT

    isNotNull(field: string): QueryBuilder {
        return this.operation({ type: IS_NOT_NULL, field });
    }

    isNotMissing(field: string): QueryBuilder {
        return this.operation({ type: IS_NOT_MISSING, field });
    }

    // IS

    isNull(field: string): QueryBuilder {
        return this.operation({ type: IS_NULL, field });
    }

    isMissing(field: string): QueryBuilder {
        return this.operation({ type: IS_MISSING, field });
    }

    // logic

    and(): QueryBuilder {
        return this.operation({ type: AND });
    }

    andExp(exp: QueryBuilder): QueryBuilder {
        return this.operation({ type: AND, child: exp.getExpression() });
    }

    or(): QueryBuilder {
        return this.operation({ type: OR });
    }

    orExp(exp: QueryBuilder): QueryBuilder {
        return this.operation({ type: OR, child: exp.getExpression() });
    }

    // Array

    in(field: string, values: string[]): QueryBuilder {
        return this.operationValue(IN, field, values, STRING);
    }

    containsInt(field: string, value: number): QueryBuilder {
        return this.operationValue(CONTAINS, field, value, INT);
    }

    containsLong(field: string, value: number): QueryBuilder {
        return this.operationValue(CONTAINS, field, value, LONG);
    }

    containsFloat(field: string, value: number): QueryBuilder {
        return this.operationValue(CONTAINS, field, value, FLOAT);
    }

    containsBool(field: string, value: boolean): QueryBuilder {
        return this.operationValue(CONTAINS, field, value, BOOL);
    }

    containsString(field: string, value: string): QueryBuilder {
        return this.operationValue(CONTAINS, field, value, STRING);
    }

    private operation(query: QueryItem): QueryBuilder {
        this.next.next = query;
        this.next = query;
        return this;
    }

    private operationValue(type: number, field: string, value: any, valueType: number): QueryBuilder {
        const nextQ: QueryItem = { type, field, value, valueType };
        return this.operation(nextQ);
    }

    //LIMIT

    page(limit: number, skip: number): QueryBuilder {
        this.limit = limit;
        this.skip = skip;
        return this;
    }

    orderAsc(field: string): QueryBuilder {
        this.orderBy = field;
        this.orderMode = "ASC";
        return this;
    }

    orderDesc(field: string): QueryBuilder {
        this.orderBy = field;
        this.orderMode = "DESC";
        return this;
    }

    // util

    getExpression(): any {
        return this.q.next;
    }

    build(): Promise<{ query: string, params: any[] }> {
        return new Promise((resolve) => resolve(this.process(this.q.next)));
    }

    private process(query: QueryItem): { query: string, params: any[] } {
        let processing = true;
        let n1ql = "";
        let obj = query;
        while (processing) {
            n1ql += " " + this.procesOperation(obj);
            if (obj.next) {
                obj = obj.next;
            } else {
                processing = false;
            }
        }
        return { query: n1ql, params: [] };
    }

    clear() {
        this.q = null;
        this.next = null;
    }

    private procesOperation(item: QueryItem): string {
        switch (item.type) {
            case EQUAL: return `${item.field} = ${this.processValue(item)}`;
            case EQUAL_FIELD: return `${item.field} = ${this.processValue(item)}`;
            case LT: return `${item.field} < ${this.processValue(item)}`;
            case LT_FIELD: return `${item.field} < ${this.processValue(item)}`;
            case LTE: return `${item.field} <= ${this.processValue(item)}`;
            case LTE_FIELD: return `${item.field} <= ${this.processValue(item)}`;
            case GT: return `${item.field} > ${this.processValue(item)}`;
            case GT_FIELD: return `${item.field} > ${this.processValue(item)}`;
            case GTE: return `${item.field} >= ${this.processValue(item)}`;
            case GTE_FIELD: return `${item.field} >= ${this.processValue(item)}`;
            case START_LIKE: return `LOWER(${item.field}) LIKE '%${item.value}'`;
            case CENTER_LIKE: return `LOWER(${item.field}) LIKE '%${item.value}%'`;
            case END_LIKE: return `LOWER(${item.field}) LIKE '${item.value}%'`;
            case IS_MISSING: return `${item.field} IS MISSING`;
            case IS_NULL: return `${item.field} IS NULL`;
            case IS_NOT_MISSING: `${item.field} IS NOT MISSING`;
            case IS_NOT_NULL: `${item.field} IS NOT NULL`;
            case AND: if (item.child) {
                const subQ = this.process(item.child);
                return `AND (${subQ.query})`;
            } else {
                return "AND";
            }

            case OR: if (item.child) {
                const subQ = this.process(item.child);
                return `OR (${subQ.query})`;
            } else {
                return "OR";
            }
            case IN: return `IN ['${item.value.join("','")}']`;
            case CONTAINS: return `ARRAY_CONTAINS(${item.field}, '${item.value}')`;

        }
    }

    private processValue(item: QueryItem): string {
        return item.valueType === STRING || item.valueType === DATE ? `'${item.value}'` : `${item.value}`;
    }

    buildJson(): { query: QueryItem, limit: number, skip: number, orderBy: string, orderMode: string } {
        return { query: this.q.next, limit: this.limit, skip: this.skip, orderBy: this.orderBy, orderMode: this.orderMode };
    }

}

export function Q(): QueryBuilder {
    return new QueryBuilder();
}

class QueryItem {
    type: number;
    field?: string;
    value?: any;
    valueType?: number;
    next?: QueryItem;
    child?: QueryItem;
}


const BEGIN = -1;
const EQUAL = 0;
const EQUAL_FIELD = 1;
const LT = 2;
const LT_FIELD = 3;
const LTE = 4;
const LTE_FIELD = 5;
const GT = 6;
const GT_FIELD = 7;
const GTE = 8;
const GTE_FIELD = 9;
const START_LIKE = 10;
const CENTER_LIKE = 11;
const END_LIKE = 12;
const IS_NOT_NULL = 13;
const IS_NOT_MISSING = 14;
const IS_NULL = 15;
const IS_MISSING = 16;
const AND = 17;
const OR = 18;
const IN = 19;
const CONTAINS = 20;

const STRING = 0;
const BOOL = 1;
const INT = 2;
const LONG = 3;
const FLOAT = 4;
const DATE = 5;
const FIELD = 6;