export function nowFormat(dt?: Date): string {
    const date = dt ? dt : new Date();
    return date.getFullYear() + '-' + numberFormat(date.getMonth() + 1) + '-' + numberFormat(date.getDate());
}

function numberFormat(num: Number): string {
    return num < 10 ? '0' + num : '' + num;
}
