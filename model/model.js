export function getPage(passedID) {
    console.log("getPage");
    $.get(`pages/${passedID}.html`, (data) => {
        $("#app").html(data);
    }).fail(() => {
        console.log("no data retrieved");
    })

}