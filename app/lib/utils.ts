export function range(from:number, to:number):number[] {
  let r:number[] = [];
  for(let i:number=from; i<=to; i++) {
    r.push(i);
  }
  return r;
}

// export const config = {version: 1.0, author: 'Kevin'};
