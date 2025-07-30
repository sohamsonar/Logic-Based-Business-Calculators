const jobTypes = {
    blowerImpeller: ["ID", "FD", "SA", "Exhause", "DIDW", "High/Low pressure", "Furnace"],
    motorRotor: ["AC Rotor/Motor", "DC Rotor/Motor"],
    roller: ["With Shaft", "W/o Shaft", "Rubber Roller", "Plated Roller"],
    spindle: ["VMC", "HMC", "CNC", "Grinding M/c"],
    fans: ["Radiator Fans", "Anealing Fans", "Mancooler Fans"],
    agitatorsMixers: ["MS", "SS"],
    grindingWheel: ["-------"],
    chuck: ["3 Jaw Chuck", "4 Jaw Chuck"],
    pulley: ["1 Groove", "2 Grooves", "3 Grooves", "4 Grooves Pulley"],
    coupling: ["Flexible", "Rigid"],
    fixture: ["-------"],
    screwConveyor: ["-------"],
    bowl: ["-------"],
    flyer: ["-------"],
    gear: ["-------"],
    flywheel: ["-------"],
    brakeDrum: ["-------"],
    shotBlastingRotor: ["-------"],
    turbine: ["Capacity in Kw (Kilo Watt) / Mw (Mega Watt)"],
    centrifugalBasket: ["-------"],
    crusher: ["Capacity in TPH (Tons per Hour)"],
    separator: ["Milk Seperator", "Oil Seperator"],
    coolingTowerFan: ["-------"],
    balancingMandrill: ["Balancing Master Rotor", "Balancing Mandrill"],
    pumpImpeller: ["MS", "SS", "Casting", "Gunmetal", "Bronze Impellers"]
};

function updateJobTypes() {
    const category = document.getElementById("jobCategory").value;
    const jobTypeDropdown = document.getElementById("jobType");
    jobTypeDropdown.innerHTML = '';

    jobTypes[category].forEach(jobType => {
        const option = document.createElement("option");
        option.value = jobType;
        option.text = jobType;
        jobTypeDropdown.appendChild(option);
    });
}

function calculatePrice() {
    const serviceType = document.getElementById("serviceType").value;
    const rpm = document.getElementById("rpm").value;
    const weight = parseFloat(document.getElementById("weight").value);
    const jobCategory = document.getElementById("jobCategory").value;
    const jobType = document.getElementById("jobType").value;

    let price = 0;

    // Base pricing
    price += (serviceType === "onsite") ? 2800 : 320;

    if (rpm === "high") price += 320;
    else if (rpm === "medium") price += 1000;
    else price += 1500;

    if (weight < 2) price += 320;
    else if (weight >= 50 && weight <= 100) price += 2500;
    else if (weight > 100) price += 105000;

    switch (jobCategory) {
        case "blowerImpeller":
            price += 1000;
            if (jobType === "ID") price += 500;
            if (jobType === "FD") price += 600;
            break;
        case "motorRotor":
            price += 1200;
            if (jobType === "AC Rotor/Motor") price += 400;
            if (jobType === "DC Rotor/Motor") price += 500;
            break;
        default:
            price += 320;
            break;
    }

    document.getElementById("result").innerText = "Calculated Price: ₹" + price;
}

// Initialize job types on load
document.addEventListener("DOMContentLoaded", updateJobTypes);
document.getElementById("jobCategory").addEventListener("change", updateJobTypes);
