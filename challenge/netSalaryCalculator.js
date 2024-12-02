
netSalary=() => {
    const basicSalary = (prompt("Enter Basic Salary"));
    const benefits = (prompt("Enter Benefits "));

    const grossSalary = basicSalary + benefits;

    const tax = [
        { limit: 24000, rate: 0.10 },
        { limit: 32333, rate: 0.25 },
        { limit: 500000, rate: 0.30 },
        { limit: 800000, rate: 0.325 },
    ];
    const taxRateAbove = 0.35;
    const personalRelief = 2400;

    let taxableIncome = grossSalary;
    let paye = 0;

    for (let i = 0; i < tax.length; i++) {
        const { limit, rate } = tax[i];
        if (taxableIncome > limit) {
            paye += limit * rate;
            taxableIncome = limit;
        } else {
            paye += taxableIncome * rate;
            taxableIncome = 0;
            break;
        }
    }

    if (taxableIncome > 0) {
        paye += taxableIncome * taxRateAbove;
    }

    paye = Math.max(paye - personalRelief, 0);

    const shif = grossSalary * 0.0275; 

    const nhiflist = [
        { limit: 5999, deduction: 150 },
        { limit: 7999, deduction: 300 },
        { limit: 11999, deduction: 400 },
        { limit: 14999, deduction: 500 },
        { limit: 19999, deduction: 600 },
        { limit: 24999, deduction: 750 },
        { limit: 29999, deduction: 850 },
        { limit: 34999, deduction: 900 },
        { limit: 39999, deduction: 950 },
        { limit: 44999, deduction: 1000 },
        { limit: 49999, deduction: 1100 },
        { limit: 59999, deduction: 1200 },
        { limit: 69999, deduction: 1300 },
        { limit: 79999, deduction: 1400 },
        { limit: 89999, deduction: 1500 },
        { limit: 99999, deduction: 1600 },
    ];

    let nhif = 1700; 
    for (let i = 0; i < nhiflist.length; i++) {
        const { limit, deduction } = nhiflist[i];
        if (grossSalary <= limit) {
            nhif = deduction;
            break;
        }
    }

    const nssfRate = 0.06; 
    const Limit1 = 7000;
    const Limit2 = 36000;

    const nssf1 = Math.min(grossSalary, Limit1) * nssfRate;
    const nssf2 = Math.max(Math.min(grossSalary -Limit1, Limit2 - Limit1), 0) * nssfRate;
    const nssf = nssf1 + nssf2;

    const housingLevy = grossSalary * 0.015;

    const totalDeductions = paye + shif + nhif + nssf + housingLevy;

    const netSalary = grossSalary - totalDeductions;

}

netSalary();

