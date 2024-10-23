import { studentsInfo, timing } from "./data.js";
import inquirer from "inquirer";
async function back() {
    let view = await inquirer.prompt([{
            name: "viewPrompt",
            type: "list",
            choices: ["Search student data", "Search students by campus"],
            message: "Search your Info"
        }
    ]);
    if (view.viewPrompt === "Search student data") {
        let Search = await inquirer.prompt([
            {
                name: "searchPrompt",
                type: "list",
                choices: ["Search by name", "Search by rollNo", "Go back"],
                message: "Choose"
            }
        ]);
        if (Search.searchPrompt === "Go back") {
            back();
        }
        else if (Search.searchPrompt === "Search by rollNo") {
            let rollNo = await inquirer.prompt([{
                    name: "noPrompt",
                    type: "number",
                    message: "Enter your Roll Number"
                }]);
            let find = studentsInfo.find(stu => stu.rollNo === rollNo.noPrompt);
            console.log(`Name: ${find?.name}\nRollNo: ${find?.rollNo}\nCampus: ${find?.campus}\nTiming: ${find?.timing}`);
        }
        else if (Search.searchPrompt === "Search by name") {
            let Name = await inquirer.prompt([{
                    name: "namePrompt",
                    type: "input",
                    message: "Enter your Name"
                }]);
            let abc = Name.namePrompt;
            for (let a of studentsInfo) {
                if (a.name.toLowerCase() === abc.toLowerCase()) {
                    console.log(`{\nName: ${a?.name}\nRollNo: ${a?.rollNo}\nCampus: ${a?.campus}\nTiming: ${a?.timing}\n}`);
                }
            }
        }
    }
    else if (view.viewPrompt === "Search students by campus") {
        let find = await inquirer.prompt([
            {
                name: "findPrompt",
                type: "list",
                choices: ["Karachi", "Lahore", "Hyderabad", "Go to home"],
                message: "Choose Campus"
            }
        ]);
        if (find.findPrompt === "Karachi") {
            let time = await inquirer.prompt([{
                    name: "timePrompt",
                    type: "list",
                    choices: ["Morning", "Afternoon", "Evening", "Go to home"]
                }]);
            if (time.timePrompt === "Morning") {
                for (let a of studentsInfo) {
                    if (a.timing === timing.Morning && a.campus === "Karachi") {
                        console.log(`{\nName: ${a?.name}\nRollNo: ${a?.rollNo}\nCampus: ${a?.campus}\nTiming: ${a?.timing}\n}`);
                    }
                }
            }
            else if (time.timePrompt === "Go to home") {
                back();
            }
            else if (time.timePrompt === "Afternoon") {
                for (let a of studentsInfo) {
                    if (a.timing === timing.Afternoon && a.campus === "Karachi") {
                        console.log(`{\nName: ${a?.name}\nRollNo: ${a?.rollNo}\nCampus: ${a?.campus}\nTiming: ${a?.timing}\n}`);
                    }
                }
            }
            else if (time.timePrompt === "Evening") {
                for (let a of studentsInfo) {
                    if (a.timing === timing.Evening && a.campus === "Karachi") {
                        console.log(`{\nName: ${a?.name}\nRollNo: ${a?.rollNo}\nCampus: ${a?.campus}\nTiming: ${a?.timing}\n}`);
                    }
                }
            }
        }
        else if (find.findPrompt === "Lahore") {
            let time = await inquirer.prompt([{
                    name: "timePrompt",
                    type: "list",
                    choices: ["Morning", "Afternoon", "Evening", "Go to home"]
                }]);
            if (time.timePrompt === "Morning") {
                for (let a of studentsInfo) {
                    if (a.timing === timing.Morning && a.campus === "Lahore") {
                        console.log(`{\nName: ${a?.name}\nRollNo: ${a?.rollNo}\nCampus: ${a?.campus}\nTiming: ${a?.timing}\n}`);
                    }
                }
            }
            else if (time.timePrompt === "Go to home") {
                back();
            }
            else if (time.timePrompt === "Afternoon") {
                for (let a of studentsInfo) {
                    if (a.timing === timing.Afternoon && a.campus === "Lahore") {
                        console.log(`{\nName: ${a?.name}\nRollNo: ${a?.rollNo}\nCampus: ${a?.campus}\nTiming: ${a?.timing}\n}`);
                    }
                }
            }
            else if (time.timePrompt === "Evening") {
                for (let a of studentsInfo) {
                    if (a.timing === timing.Evening && a.campus === "Lahore") {
                        console.log(`{\nName: ${a?.name}\nRollNo: ${a?.rollNo}\nCampus: ${a?.campus}\nTiming: ${a?.timing}\n}`);
                    }
                }
            }
        }
        else if (find.findPrompt === "Hyderabad") {
            let time = await inquirer.prompt([{
                    name: "timePrompt",
                    type: "list",
                    choices: ["Morning", "Afternoon", "Evening", "Go to home"]
                }]);
            if (time.timePrompt === "Morning") {
                for (let a of studentsInfo) {
                    if (a.timing === timing.Morning && a.campus === "Hyderabad") {
                        console.log(`{\nName: ${a?.name}\nRollNo: ${a?.rollNo}\nCampus: ${a?.campus}\nTiming: ${a?.timing}\n}`);
                    }
                }
            }
            else if (time.timePrompt === "Go to home") {
                back();
            }
            else if (time.timePrompt === "Afternoon") {
                for (let a of studentsInfo) {
                    if (a.timing === timing.Afternoon && a.campus === "Hyderabad") {
                        console.log(`{\nName: ${a?.name}\nRollNo: ${a?.rollNo}\nCampus: ${a?.campus}\nTiming: ${a?.timing}\n}`);
                    }
                }
            }
            else if (time.timePrompt === "Evening") {
                for (let a of studentsInfo) {
                    if (a.timing === timing.Evening && a.campus === "Hyderabad") {
                        console.log(`{\nName: ${a?.name}\nRollNo: ${a?.rollNo}\nCampus: ${a?.campus}\nTiming: ${a?.timing}\n}`);
                    }
                }
            }
        }
        else if (find.findPrompt === "Go to home") {
            back();
        }
    }
}
back();
