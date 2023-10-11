// 1-masala

let n = prompt("Ixtiyoriy sonni kiriting: ");
n = n * 1;
let sum = 0;
sum = sum * 1;
let count = 0;
count = count * 1;
// for (let i = 1; i <= n; i++) {
//     console.log(i);
// }

// 2-masala

// for (let i = n; i >= 1; i--) {
//     console.log(i);
// }

// 3-masala

// for (let i = 1; i <= n; i++) {
//     sum += i;
// }
// console.log(sum);

// 4-masala

// console.log("1 dan " + n + " gacha bo'lgan juft sonlar:");
// for (let i = 1; i <= n; i++) {
//     if (i % 2 == 0) {
//         sum += i;
//         console.log(i);
//     }
// }
// console.log("1 dan " + n + " gacha bo'lgan juft sonlar yig'indisi " + sum);

// 5-masala

// console.log("1 dan " + n + " gacha bo'lgan toq sonlar:");
// for (let i = 1; i <= n; i++) {
//     if (i % 2 == 1) {
//         sum += i;
//         console.log(i);
//     }
// }
// console.log("1 dan " + n + " gacha bo'lgan toq sonlar yig'indisi " + sum);

// 6-masala

// console.log(n + " sonining bo'luvchilari: ");
// for (let i = 1; i <= n; i++) {
//     if (n % i == 0) {
//         console.log(i);
//     }
// }

// 7-masala

// for (let i = 1; i <= n; i++) {
//     if (n % i == 0) {
//         count += 1;
//         sum += i;
//     }
// }
// console.log(n + " sonining bo'luvchilari soni: " + count);
// console.log(n + " sonining bo'luvchilari yig'indisi :" + sum);

// 8-masala

// for (let i = 1; i <= n; i++) {
//     if (n % i == 0) {
//         count++;
//     }
// }
// if (count > 2) {
//     console.log(n + " soni tub son emas");
// } else if (count == 1) {
//     console.log("1 soni tub son ham murakkab son ham emas.");
// } else {
//     console.log(n + " soni tub son");
// }

// for1

// let k = prompt("Ixtiyoriy son kiriting: ");
// for (let i = 1; i <= n; i++) {
//     console.log(k);
// }

// for2

// let a = prompt("Ixtiyoriy sonni kiriting: ");
// if (n < a) {
//     for (let i = n; i <= a; i++) {
//         console.log(i);
//         count++;
//     }
//     console.log("Jami " + count);
// } else if (n == a) {
//     console.log("Birinchi son ikkinchi songa teng bo'la olmaydi.Ilimos qaytadan raqam kiriting.");
// } else {
//     console.log("Birinchi son ikkinchi sondan katta bo'la olmaydi.Iltimos qaytadan son kiriting.");
// }

// for3

// let a = prompt("Ixtiyoriy son kiriting: ");
// if (n < a) {
//     for (let i = a - 1; i > n; i--) {
//         console.log(i);
//         count++;
//     }
// } else if (n == a) {
//     console.log("Birinchi son ikkinchi songa teng bo'la olmaydi.Iltimos qaytadan raqam kiriting.");
// } else {
//     console.log("Birinchi son ikkinchi sondan katta bo'la olmaydi.Iltimos qaytadan raqam kiriting.");
// }

// for4


// for (let i = 1; i <= 10; i++) {
//     console.log(i + " kg konfet narxi " + i * n + " so'm.");
// }

// for5

// for (let i = 0.1; i <= 1; i += 0.1) {
//     console.log(i + " kg konfet narxi " + i * n + " so'm.");
// }

// for6


// for (let i = 1.2; i <= 2; i += 0.2) {
//     console.log(i + " kg konfet narxi " + i * n + " so'm.");
// }

// for7


// let a = prompt("Birinchi sondan katta ixtiyoriy raqam kiriting:");
// if (n < a) {
//     for (let i = n; i <= a; i++) {
//         sum += i;
//     }
//     console.log(sum);
// } else if (n == a) {
//     console.log("Birinchi son ikkinchi songa teng bo'lishi mumkin emas.Iltimos qaytadan raqam kiriting.");
// } else if (n > a) {
//     console.log("Birinchi raqam ikkinchi raqamdan katta bo'lishi mumkin emas.Iltimos qaytadan raqam kiriting.");
// }

// for8

// sum = 1;
// let a = prompt("Birinchi sondan katta bo'lgan ixtiyoriy sonni kiriting: ");
// if (n < a) {
//     for (let i = n; i <= a; i++) {
//         sum *= i;
//     }
//     console.log(sum);
// } else if (n == a) {
//     console.log("Birinchi son ikkinchi songa teng bo'lishi mumkin emas.Iltimos boshqa raqam kiriting.");
// } else {
//     console.log("Birinchi raqam ikkinchi raqamdan katta bo'lishi mumkin emas.Iltimos boshqa raqam kiriting.");
// }


// for9


// let a = prompt("Birinchi sondan katta bo'lgan ixtiyoriy raqam kiriting:");
// if (n < a) {
//     for (let i = n; i <= a; i++) {
//         sum += i ** 2;
//     }
//     console.log(sum);
// } else if (n == a) {
//     console.log("Birinchi son ikkinchi songa teng bo'lishi mumkin emas.Iltimos boshqa raqam kiriting.");
// } else {
//     console.log("Birinchi son ikkinchi sondan katta bo'lishi mumkin emas.Iltimos boshqa raqam kiriting.");
// }


// for10


// if (n > 0) {
//     for (let i = 1; i <= n; i++) {
//         sum += 1 / i;
//     }
//     console.log("Yig'indi " + sum + " ga teng.");
// } else {
//     console.log("Iltimos noldan katta raqam kiriting.");
// }


// for11


// if (n > 0) {
//     for (let i = 0; i <= n; i++) {
//         sum += (n + i) ** 2;
//     }
//     console.log("Yig'indi " + sum + " ga teng.");
// } else {
//     console.log("Noldan katta raqam kiriting.");
// }


// for12

sum = 1;
if (n > 0) {
    for (let i = 1; i <= n; i++) {
        sum *= (1 + i / 10);
    }
    console.log("Ko'paytma " + sum + " ga teng.");
} else {
    console.log("Noldan katta qiymat kiriting.");
}