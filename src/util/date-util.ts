export function toDate(obj: any, ...field: string[]) {
    field.forEach(x=>{
        if (obj[x]) {
            obj[x] = new Date(obj[x]);
        }
    });    
}

export function toDateEmb(obj: any, ...fields: string[]) {

    let value:any = obj;
    const size = fields.length - 2;
    let success = true;
    for(let i = 0; i< size ; ++i){
        if(value[fields[i]]){
            value = value[fields[i]];
        }else{
            success = false;
            break;
        }
    }

    if(success && value[fields[fields.length - 1]]){
        value[fields[fields.length - 1]] = new Date(value[fields[fields.length - 1]]);
    }

}

export function nowDifference(lessYear: number = 0, lessMonth: number = 0, lessDay: number = 0) {
    const date = new Date();
    return (date.getFullYear() - lessYear) + '-' + numberFormat(date.getMonth() + 1 - lessMonth)
        + '-' + numberFormat(date.getDate() - lessDay);
}

function numberFormat(num: Number): string {
    return num < 10 ? '0' + num : '' + num;
}

