const mongoose = require("mongoose")
const Product = require("./model/Subject")

const dummy_data = [
    {
        name: "hindi",
        price: 80,
        img: "https://www.google.com/imgres?q=hindi%20book%20image&imgurl=https%3A%2F%2Fc8.alamy.com%2Fcomp%2FHMT95K%2Fhindi-book-with-flag-of-india-and-cd-disk-3d-rendering-isolated-on-HMT95K.jpg&imgrefurl=https%3A%2F%2Fwww.alamy.com%2Fstock-photo%2Fhindi-book.html&docid=-FQ0HGtA0uF06M&tbnid=v1S_zHCX9weGCM&vet=12ahUKEwifk8H29P-FAxVjn2MGHdPZCFgQM3oECE0QAA..i&w=1300&h=956&hcb=2&ved=2ahUKEwifk8H29P-FAxVjn2MGHdPZCFgQM3oECE0QAA",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores doloribus vel quis, natus exercitationem dolores."
    },
    {
        name: "english",
        price: 200,
        img: "https://www.google.com/imgres?q=english%20book%20image&imgurl=https%3A%2F%2Ft4.ftcdn.net%2Fjpg%2F02%2F25%2F31%2F89%2F360_F_225318919_klpkRFyiJjxWdwLptzfeCX2Bo6QsBndm.jpg&imgrefurl=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Denglish%2Bbook&docid=swgI93AJHBXW4M&tbnid=cSoxrLT6kmNnHM&vet=12ahUKEwij542Q9f-FAxU52DgGHVGVD9IQM3oECBYQAA..i&w=509&h=360&hcb=2&ved=2ahUKEwij542Q9f-FAxU52DgGHVGVD9IQM3oECBYQAA",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores doloribus vel quis, natus exercitationem dolores."
    },
    {
        name: "math",
        price: 450,
        img: "https://www.google.com/imgres?q=math%20book%20image&imgurl=https%3A%2F%2Fmedia.istockphoto.com%2Fid%2F1198644091%2Fphoto%2Fstack-of-books-in-front-of-a-blackboard.jpg%3Fs%3D612x612%26w%3D0%26k%3D20%26c%3DjbCC0IJTgdFl6-REToV-uwquPTISzVP9JEckI8Mh1sU%3D&imgrefurl=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fmath-book&docid=rAAyjDgYBlmhzM&tbnid=darREzFkZ4jzVM&vet=12ahUKEwih59Si9f-FAxUy1TgGHWTnCacQM3oECBYQAA..i&w=612&h=408&hcb=2&ved=2ahUKEwih59Si9f-FAxUy1TgGHWTnCacQM3oECBYQAA",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores doloribus vel quis, natus exercitationem dolores."
    },
    {
        name: "sst",
        price: 50,
        img: "https://www.google.com/imgres?q=sst%20book%20image&imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F51KjPevDcLL._AC_UF1000%2C1000_QL80_DpWeblab_.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.in%2FRatna-Sagar-Book-Social-Studies%2Fdp%2F9355530811&docid=ReJCBdPV8wMmMM&tbnid=iodwKACHJPnf0M&vet=12ahUKEwj7nJCu9f-FAxWpyzgGHUdzAasQM3oECBgQAA..i&w=784&h=1000&hcb=2&ved=2ahUKEwj7nJCu9f-FAxWpyzgGHUdzAasQM3oECBgQAA",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores doloribus vel quis, natus exercitationem dolores."
    },
    {
        name: "gk",
        price: 120,
        img: "https://www.google.com/imgres?q=gk%20book%20image&imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F91KuXGqb4LL._AC_UF1000%2C1000_QL80_DpWeblab_.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.in%2F-%2Fhi%2FRadian-Book-Company%2Fdp%2F9390886740&docid=tGbI3lJ84lLNlM&tbnid=6dB9miZMZ8LUxM&vet=12ahUKEwiD7qjA9f-FAxXs6jgGHTsbBf8QM3oECGYQAA..i&w=754&h=1000&hcb=2&ved=2ahUKEwiD7qjA9f-FAxXs6jgGHTsbBf8QM3oECGYQAA",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores doloribus vel quis, natus exercitationem dolores."
    },
    {
        name: "computer",
        price: 160,
        img: "https://www.google.com/imgres?q=computer%20book%20image&imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F61llGs%2BKKJL._AC_UF1000%2C1000_QL80_.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.in%2FPariksha-Computer-Parichay-Original-Competitive%2Fdp%2FB0BTMRX5QG&docid=1k3k6P-NHurSwM&tbnid=LmZKcGZCHeoevM&vet=12ahUKEwj94rzR9f-FAxUwyDgGHTPUBDoQM3oECBoQAA..i&w=718&h=1000&hcb=2&ved=2ahUKEwj94rzR9f-FAxUwyDgGHTPUBDoQM3oECBoQAA",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores doloribus vel quis, natus exercitationem dolores."
    },
    {
        name: "physics",
        price: 300,
        img: "https://www.google.com/imgres?q=physics%20book%20image&imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F814VZlo2tXL._AC_UF1000%2C1000_QL80_DpWeblab_.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.in%2FPhysics-Book-Ideas-Simply-Explained%2Fdp%2F0241412722&docid=qmuXtXGOibfE5M&tbnid=PooTA3tFkHfHuM&vet=12ahUKEwi50vTc9f-FAxVWzDgGHdRxByUQM3oECBQQAA..i&w=841&h=1000&hcb=2&ved=2ahUKEwi50vTc9f-FAxVWzDgGHdRxByUQM3oECBQQAA",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores doloribus vel quis, natus exercitationem dolores."
    },
    {
        name: "chemistry",
        price: 500,
        img: "https://www.google.com/imgres?q=chemistry%20book%20image&imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F61mjWoSNcRL._AC_UF1000%2C1000_QL80_DpWeblab_.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.in%2FChemistry-Solved-Examination-2023-2024-Publications%2Fdp%2F9356121850&docid=7FDgqBzOLYE8tM&tbnid=ovfxBaJkkNNgRM&vet=12ahUKEwibldfy9f-FAxUk1TgGHRtlAXQQM3oECEkQAA..i&w=720&h=1000&hcb=2&ved=2ahUKEwibldfy9f-FAxUk1TgGHRtlAXQQM3oECEkQAA",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores doloribus vel quis, natus exercitationem dolores."
    },
]

mongoose.connect('mongodb://127.0.0.1:27017/subject')
    .then(async () => {
        await Product.create(dummy_data)
    })