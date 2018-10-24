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
