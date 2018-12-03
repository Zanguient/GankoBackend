export class QueryBuilder {

    private q: QueryItem = { type: BEGIN };
    private next: QueryItem = this.q;
    limit = -1;
    skip = -1;

    orderBy: string = null;
    orderMode: string = null;

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

    equalStr(field: string, value: string): QueryBuilder {
        return this.operationValue(EQUAL, field, value, STRING);
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

    ltStr(field: string, value: string): QueryBuilder {
        return this.operationValue(LT, field, value, STRING);
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

    lteStr(field: string, value: string): QueryBuilder {
        return this.operationValue(LTE, field, value, STRING);
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

    gtStr(field: string, value: string): QueryBuilder {
        return this.operationValue(GT, field, value, STRING);
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

    gteStr(field: string, value: string): QueryBuilder {
        return this.operationValue(GTE, field, value, STRING);
    }

    gteField(f1: string, f2: string): QueryBuilder {
        return this.operationValue(GTE_FIELD, f1, f2, FIELD);
    }

    // LIKE

    likeStart(field: string, value: string): QueryBuilder {
        return this.operationValue(LIKE_START, field, value, STRING);
    }

    likeCenter(field: string, value: string): QueryBuilder {
        return this.operationValue(LIKE_CENTER, field, value, STRING);
    }

    likeEnd(field: string, value: string): QueryBuilder {
        return this.operationValue(LIKE_END, field, value, STRING);
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

    containsStr(field: string, value: string): QueryBuilder {
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

    // DATE

    gtToday(field: string): QueryBuilder {
        return this.operation({ type: GT_TODAY, field });
    }

    gteToday(field: string): QueryBuilder {
        return this.operation({ type: GTE_TODAY, field });
    }

    ltToday(field: string): QueryBuilder {
        return this.operation({ type: LT_TODAY, field });
    }

    lteToday(field: string): QueryBuilder {
        return this.operation({ type: LTE_TODAY, field });
    }
    //LIMIT

    page(limit: number, skip: number): QueryBuilder {
        this.limit = limit;
        this.skip = skip;
        return this;
    }

    size(limit: number): QueryBuilder {
        this.limit = limit;
        return this;
    }

    //Order

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
        return new Promise((resolve) => this.q.next ? resolve(this.process(this.q.next)) : resolve({ query: '', params: [] }));
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
            case LIKE_START: return `LOWER(${item.field}) LIKE '%${item.value}'`;
            case LIKE_CENTER: return `LOWER(${item.field}) LIKE '%${item.value}%'`;
            case LIKE_END: return `LOWER(${item.field}) LIKE '${item.value}%'`;
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
            case IN: return `${item.field} IN ['${item.value.join("','")}']`;
            case CONTAINS: return `ARRAY_CONTAINS(${item.field}, '${item.value}')`;
            case LT_TODAY: return `SUBSTR(${item.field},0,10) < SUBSTR(NOW_STR(),0,10)`;
            case LTE_TODAY: return `SUBSTR(${item.field},0,10) <= SUBSTR(NOW_STR(),0,10)`;
            case GT_TODAY: return `SUBSTR(${item.field},0,10) > SUBSTR(NOW_STR(),0,10)`;
            case GTE_TODAY: return `SUBSTR(${item.field},0,10) >= SUBSTR(NOW_STR(),0,10)`;

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
const LIKE_START = 10;
const LIKE_CENTER = 11;
const LIKE_END = 12;
const IS_NOT_NULL = 13;
const IS_NOT_MISSING = 14;
const IS_NULL = 15;
const IS_MISSING = 16;
const AND = 17;
const OR = 18;
const IN = 19;
const CONTAINS = 20;
const GT_TODAY = 21;
const GTE_TODAY = 22;
const LT_TODAY = 23;
const LTE_TODAY = 24;

const STRING = 0;
const BOOL = 1;
const INT = 2;
const LONG = 3;
const FLOAT = 4;
const DATE = 5;
const FIELD = 6;
const DAY = 6;