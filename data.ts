export enum timing {
    Morning = "09am to 12pm",
    Afternoon = "02pm to 05pm",
    Evening = "07pm to 10pm"
}

interface student {
    name:string
    rollNo:number
    campus: "Karachi" | "Lahore" | "Hyderabad"
    timing: timing.Morning | timing.Evening |timing.Afternoon
}

export let studentsInfo : student[] = [
    {
        name: "Abdul Basit",
        rollNo: 1001,
        campus:"Karachi",
        timing: timing.Morning
    },
    {
        name: "Taha",
        rollNo: 1002,
        campus:"Karachi",
        timing: timing.Morning
    },
    {
        name: "Shahid",
        rollNo: 1003,
        campus:"Karachi",
        timing: timing.Morning
    },
    {
        name: "Noor Fatima",
        rollNo: 1004,
        campus:"Karachi",
        timing: timing.Morning
    },
    {
        name: "Dua",
        rollNo: 1005,
        campus:"Karachi",
        timing: timing.Afternoon
    },
    {
        name: "Taha",
        rollNo: 1006,
        campus:"Karachi",
        timing: timing.Afternoon
    },
    {
        name: "Abdul Basit",
        rollNo: 1007,
        campus:"Karachi",
        timing: timing.Afternoon
    },
    {
        name: "Hammad",
        rollNo: 1008,
        campus:"Karachi",
        timing: timing.Evening
    },
    {
        name: "Okasha",
        rollNo: 1009,
        campus:"Karachi",
        timing: timing.Evening
    },
    {
        name: "Ibrahim",
        rollNo: 1010,
        campus:"Karachi",
        timing: timing.Evening
    },
    {
        name: "Atif",
        rollNo: 1011,
        campus:"Lahore",
        timing: timing.Morning
    },
    {
        name: "Ahsan",
        rollNo: 1012,
        campus:"Lahore",
        timing: timing.Morning
    },
    {
        name: "Kanwal",
        rollNo: 1013,
        campus:"Lahore",
        timing: timing.Morning
    },
    {
        name: "Afreen",
        rollNo: 1014,
        campus:"Lahore",
        timing: timing.Morning
    },
    {
        name: "Iqra",
        rollNo: 1015,
        campus:"Lahore",
        timing: timing.Afternoon
    },
    {
        name: "Nimra",
        rollNo: 1016,
        campus:"Lahore",
        timing: timing.Afternoon
    },
    {
        name: "Zara",
        rollNo: 1017,
        campus:"Lahore",
        timing: timing.Afternoon
    },
    {
        name: "Basheer",
        rollNo: 1018,
        campus:"Lahore",
        timing: timing.Evening
    },
    {
        name: "Shabbir",
        rollNo: 1019,
        campus:"Lahore",
        timing: timing.Evening
    },
    {
        name: "Naseer",
        rollNo: 1020,
        campus:"Lahore",
        timing: timing.Evening
    },
    {
        name: "Babar Goat",
        rollNo: 1021,
        campus:"Hyderabad",
        timing: timing.Morning
    },
    {
        name: "Fakhar zaman",
        rollNo: 1022,
        campus:"Hyderabad",
        timing: timing.Morning
    },
    {
        name: "Iftikhar chachu",
        rollNo: 1023,
        campus:"Hyderabad",
        timing: timing.Morning
    },
    {
        name: "Saim ayub",
        rollNo: 1024,
        campus:"Hyderabad",
        timing: timing.Morning
    },
    {
        name: "Imad",
        rollNo: 1025,
        campus:"Hyderabad",
        timing: timing.Afternoon
    },
    {
        name: "Amir",
        rollNo: 1026,
        campus:"Hyderabad",
        timing: timing.Afternoon
    },
    {
        name: "Shaheen",
        rollNo: 1027,
        campus:"Hyderabad",
        timing: timing.Afternoon
    },
    {
        name: "Usman Khan",
        rollNo: 1028,
        campus:"Hyderabad",
        timing: timing.Evening
    },
    {
        name: "Shahid afridi",
        rollNo: 1029,
        campus:"Hyderabad",
        timing: timing.Evening
    },
    {
        name: "Virat Kohli",
        rollNo: 1030,
        campus:"Hyderabad",
        timing: timing.Evening
    },
    {
        name: "Bumrah",
        rollNo: 1031,
        campus:"Hyderabad",
        timing: timing.Evening
    },
]






