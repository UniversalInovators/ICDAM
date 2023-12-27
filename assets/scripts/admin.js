const getAllData = async () => {
    let slist = null;
    await fetch('/admin/getAllData').then(res => res.json()).then((data) => {
        slist = data.sMemList
    }).catch(e => {
        console.log(e)
    })

    return slist
}

const steerdata = await getAllData();

const patrons = steerdata.filter((ele) => ele.steercompost_id == 1)
const generalChairs = steerdata.filter((ele) => ele.steercompost_id == 2)
const honoraryChairs = steerdata.filter((ele) => ele.steercompost_id == 3)
const conferenceChairs = steerdata.filter((ele) => ele.steercompost_id == 4)
const tpcChairs = steerdata.filter((ele) => ele.steercompost_id == 5)
const tpcoChairs = steerdata.filter((ele) => ele.steercompost_id == 6)
const publicationChairs = steerdata.filter((ele) => ele.steercompost_id == 7)
const conveners = steerdata.filter((ele) => ele.steercompost_id == 8)
const coConveners = steerdata.filter((ele) => ele.steercompost_id == 9)
const publicityChairs = steerdata.filter((ele) => ele.steercompost_id == 10)
const localCommittee = steerdata.filter((ele) => ele.steercompost_id == 11)

const SteerMemberHtml = (ele) => {
    return (`<div class="comlist_item">\
    <div class="comitem_info">\
        <div>ID:${ele.id}</div>\
        <div>${ele.name}</div>\
        <div>${ele.information}</div>\
        <div>Steering Comittee ID:${ele.steercompost_id}</div>\
    </div>\
    </div>`)
}

let DataNode = document.querySelector(".mdc-data-table")

DataNode.innerHTML += `<h1>Patron::s</h1>`
patrons.forEach((ele) => {
    DataNode.innerHTML += SteerMemberHtml(ele)
})
DataNode.innerHTML += `<h1>General Chair::s</h1>`
generalChairs.forEach((ele) => {
    DataNode.innerHTML += SteerMemberHtml(ele)
})
DataNode.innerHTML += `<h1>Honorary Chair::s</h1>`
honoraryChairs.forEach((ele) => {
    DataNode.innerHTML += SteerMemberHtml(ele)
})
DataNode.innerHTML += `<h1>Conference Chair::s</h1>`
conferenceChairs.forEach((ele) => {
    DataNode.innerHTML += SteerMemberHtml(ele)
})
DataNode.innerHTML += `<h1>Technical Program Chair::s</h1>`
tpcChairs.forEach((ele) => {
    DataNode.innerHTML += SteerMemberHtml(ele)
})
DataNode.innerHTML += `<h1>Technical Program Co-Chair::s</h1>`
tpcoChairs.forEach((ele) => {
    DataNode.innerHTML += SteerMemberHtml(ele)
})
DataNode.innerHTML += `<h1>Publication Chair::s</h1>`
publicationChairs.forEach((ele) => {
    DataNode.innerHTML += SteerMemberHtml(ele)
})
DataNode.innerHTML += `<h1>Convener::s</h1>`
conveners.forEach((ele) => {
    DataNode.innerHTML += SteerMemberHtml(ele)
})
DataNode.innerHTML += `<h1>Co-Convener::s</h1>`
coConveners.forEach((ele) => {
    DataNode.innerHTML += SteerMemberHtml(ele)
})
DataNode.innerHTML += `<h1>Publicity Chair::s</h1>`
publicityChairs.forEach((ele) => {
    DataNode.innerHTML += SteerMemberHtml(ele)
})
DataNode.innerHTML += `<h1>Local Committee::s</h1>`
localCommittee.forEach((ele) => {
    DataNode.innerHTML += SteerMemberHtml(ele)
})

document.querySelector(".steerform").addEventListener("submit", function (e) {
    const formdata = {};
    new FormData(e.target).forEach((value, key) => formdata[key] = value)

    fetch("/admin/committe/steering-committee", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formdata)
    }).then((res) => res.json());
})