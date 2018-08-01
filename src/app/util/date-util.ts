export function nowFormat(): string {
    const date = new Date();
    return date.getFullYear() + '-' + numberFormat(date.getMonth() + 1) + '-' + numberFormat(date.getDate());
}

function numberFormat(num: Number): string {
    return num < 10 ? '0' + num : '' + num;
}
