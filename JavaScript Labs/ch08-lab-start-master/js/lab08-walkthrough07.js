var daysOfWeek = new Array("Mon","Tues","Wed","Thur","Fri");
document.write(daysOfWeek + "<br>");
daysOfWeek.push("Sat");
document.write(daysOfWeek + "<br/>");
daysOfWeek.unshift("Sun");
document.write(daysOfWeek + "<br/>");
document.write("<table border=1>");
document.write("<tr>");

for (var i = 0; i < daysOfWeek.length; i++) {
    document.write("<th>" + daysOfWeek[i] + "</th>");
}

document.write("</tr>");
document.write("</table>");
for (i = 0; i < daysOfWeek.length; i++) {
    if (daysOfWeek[i].length < 4)
        day = daysOfWeek[i];
    else
        day = "<em>" + daysOfWeek[i] + "</em>";

    document.write("<th>" + day + "</th>");
}

var daysOfWeek = new Array("Mon", "Tues", "Wed", "Thur", "Fri");
daysOfWeek.push("Sat");
daysOfWeek.unshift("Sun");

document.write("<table border=1>");

// Tạo hàng tiêu đề các thứ
document.write("<tr>");

for (var i = 0; i < daysOfWeek.length; i++) {
    if (daysOfWeek[i].length < 4)
        day = daysOfWeek[i];
    else
        day = "<em>" + daysOfWeek[i] + "</em>";

    document.write("<th>" + day + "</th>");
}

document.write("</tr>");

// Tạo 30 ngày trong tháng
var dateNum = 1;

for (var week = 0; week < 5; week++) {
    document.write("<tr>");

    for (var dayIndex = 0; dayIndex < 7; dayIndex++) {
        if (dateNum <= 30) {
            document.write("<td>" + dateNum + "</td>");
            dateNum++;
        } else {
            document.write("<td></td>");
        }
    }

    document.write("</tr>");
}

document.write("</table>");



