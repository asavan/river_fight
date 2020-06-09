export const width = 20;
export function getClickIndex(e) {
    return Math.floor((e.offsetX + 1) / width);
}

export function move(e, f) {
    const n = getClickIndex(e);
    console.log("move " + n);
    f(n);
}
