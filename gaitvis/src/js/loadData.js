// d3.csv("data/".concat(patient_id, "/", patient_id, "step.csv")).then(data =>{

//     // Patient step data. Have to process to extract step time, swing time, ... and so on

// })
let parseSoc = () => {

    return d3.csv("data/demographics.csv", data => {
        // Converted some of the variables to integer type and changed the column names
        return {
            height: +data["Height (cm)"],
            id: data.ID,
            maxFootWidth: +data["Max foot width"],
            weight: +data["Weight (Kg)"],
            age: +data.age,
            ankleWidth: +data["ankle width"],
            asis: +data.asis,
            footLength: +data["foot length"],
            gender: +data["gender (0:F; 1:M)"],
            heelWidth: +data["heel width"],
            kneeWidth: +data["knee width"]
        };
    }).then(data => { return data })
}


let parseGRF = (patient_id, fileName) => {
    return d3.csv("data/".concat(patient_id, "/", patient_id, fileName), data => {
        return {
            time: +data.time,
            rAP: +data["R-AP"],
            lAP: +data["L-AP"],
            rML: +data["R-ML"],
            lML: +data["L-ML"],
            rVT: +data["R-VT"],
            lVT: +data["L-VT"]
        }
    }).then(data => { return data });
}

let parseJNT = (patient_id, fileName) => {
    return d3.csv("data/".concat(patient_id, "/", patient_id, fileName), data => {
        return {
            time: +data.time,
            rFoot: +data["Rfoot"],
            lFoot: +data["Lfoot"],
            rShank: +data["RShank"],
            lShank: +data["LShank"],
            rThigh: +data["Rthigh"],
            lThigh: +data["Lthigh"],
            trunk: +data["trunk"]
        }
    }).then(data => { return data });
}

async function fetchData() {
    patient_id = "012518cm"
    let soc = await parseSoc()

    let grf22 = await parseGRF(patient_id, "_22_grf.csv");
    let grf23 = await parseGRF(patient_id, "_23_grf.csv");
    let grf24 = await parseGRF(patient_id, "_24_grf.csv");

    let jnt22 = await parseJNT(patient_id, "_22_jnt.csv");
    let jnt23 = await parseJNT(patient_id, "_23_jnt.csv");
    let jnt24 = await parseJNT(patient_id, "_23_jnt.csv");


    // Call function required from your js file with the data you require
    // console.log(soc)
    // console.log(jnt22)
    // console.log(grf22)
    // console.log(grf23)
    // console.log(grf24)
    plotHist(soc)
}
fetchData()
