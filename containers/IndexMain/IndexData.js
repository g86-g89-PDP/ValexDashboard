import { faArrowCircleDown, faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";



export const IndexData = [
    {

        title: "TODAY ORDERS",
        count: "5,74.12",
        icon: faArrowCircleUp,
        rate: "+425",
        bgcolor: `#0269E8`
    },
    {
        title: "TODAY EARNINGS",
        count: "1,230.17",
        icon: faArrowCircleDown,
        rate: " -23.09%",
        bgcolor: `#F85D77`
    },
    {

        title: "TODAY EARNINGS",
        count: "7,125.70",
        icon: faArrowCircleUp,
        rate: "52.09%",
        bgcolor: "#26B788"
    },
    {
        title: "PRODUCT SOLD",
        count: "4,820.50",
        icon: faArrowCircleDown,
        rate: " -152.3",
        bgcolor: "#F38745"
    },
]
export const datas = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    datasets: [
        {
            label: 'Success',
            data: [65, 85, 101, 65, 42, 83, 35, 57, 25, 54],
            backgroundColor: '#0269E8',
        },
        {
            label: 'Pending',
            data: [45, 35, 57, 25, 11, 54, 35, 41, 45, 32,],
            backgroundColor: '#F85D77',
        },
        {
            label: 'Failed',
            data: [28, 35, 41, 45, 32, 30, 65, 85, 101, 65],
            backgroundColor: '#F38745',
        },
    ],
};

export const options = {
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
    },
};

export const usersData = [
    {
        user: "https://angular.spruko.com/valex/LTR/Leftmenu-Icon-Dark-Sidebar/assets/img/faces/3.jpg",
        name: "Samantha Melon",
        state: "Paid",
        stateColor: 'green',
        botom: "1px solid #69707F"
    },
    {
        user: "https://angular.spruko.com/valex/LTR/Leftmenu-Icon-Dark-Sidebar/assets/img/faces/11.jpg",
        name: "Jimmy Changa",
        state: "Pending",
        stateColor: 'red',
        botom: "1px solid #69707F"
    },
    {
        user: "https://angular.spruko.com/valex/LTR/Leftmenu-Icon-Dark-Sidebar/assets/img/faces/17.jpg",
        name: "Gabe Lackmen",
        state: "Pending",
        stateColor: 'red',
        botom: "1px solid #69707F"
    },
    {
        user: "https://angular.spruko.com/valex/LTR/Leftmenu-Icon-Dark-Sidebar/assets/img/faces/15.jpg",
        name: "Manuel Labor",
        state: "Paid",
        stateColor: 'green',
        botom: "1px solid #69707F"
    },
    {
        user: "https://angular.spruko.com/valex/LTR/Leftmenu-Icon-Dark-Sidebar/assets/img/faces/7.jpg",
        name: "Sharon Needles",
        state: "Paid",
        stateColor: 'green',
        botom: "1px solid #69707F"
    },
    {
        user: "https://angular.spruko.com/valex/LTR/Leftmenu-Icon-Dark-Sidebar/assets/img/faces/6.jpg",
        name: "Petey Cruiser",
        state: "Paid",
        stateColor: 'green',
        botom: '',
    },
]
