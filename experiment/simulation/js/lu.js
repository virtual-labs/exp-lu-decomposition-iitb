function LU(a, l, u) {
    let n = a.length;
    for (let i = 0; i < n; i++) {
        console.log(i);
        l[i][i] = 1;
    }
    for (let i = 0; i < n; i++) {
        for (let k = 0; k < n; k++) {
            if (k >= i) {
                let sum = 0;
                for (let j = 0; j < i; j++) {
                    sum += l[i][j] * u[j][k];
                }
                u[i][k] = (a[i][k] - sum) / l[i][i];
            }
            else {
                let sum = 0;
                for (let j = 0; j < k; j++) {
                    sum += l[i][j] * u[j][k];
                }
                l[i][k] = (a[i][k] - sum) / u[k][k];
            }
        }
    }
}
let a1 = [[0.1, 7, -0.3], [0.3, -0.2, 10], [3, -0.1, -0.2]];
let c1 = [-19.3, 71.4, 7.85];
let l = Array(3).fill(0).map(() => Array(3).fill(0));
let u = Array(3).fill(0).map(() => Array(3).fill(0));
LU(a1, l, u);
console.log(l, u);
let z = get_z(l, c1);
console.log(z);
let x = get_x(u, z);
console.log(x);
function get_z(l, c) {
    let z = [];
    let n = c.length;
    for (let i = 0; i < n; i++) {
        let sum = c[i];
        for (let j = 0; j < i; j++) {
            sum -= l[i][j] * z[j];
        }
        z[i] = sum;
    }
    return (z);
}
function get_x(u, z) {
    let x = [];
    let n = z.length;
    for (let i = n - 1; i >= 0; i--) {
        let sum = z[i];
        console.log(sum);
        for (let j = i + 1; j < n; j++) {
            sum -= u[i][j] * x[j];
        }
        x[i] = sum / u[i][i];
    }
    return (x);
}
//# sourceMappingURL=lu.js.map