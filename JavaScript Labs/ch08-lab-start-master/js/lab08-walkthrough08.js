function outputBox() {
    document.write("<div class='movingDiv' id='div1'>");
    document.write("This is div 1");
    document.write("</div>");
}
<script>
    outputBox();
</script>
function outputBox() {
    var box = "<div class='movingDiv' id='div1'>";
    box += "This is div 1";
    box += "</div>";
    return box;
}
document.write(outputBox());
function outputBox(num) {
    var box = "<div class='movingDiv' id='div" + num + "'>";
    box += "This is div " + num;
    box += "</div>";
    return box;
}
for (count = 1; count < 6; count++) {
    document.write(outputBox(count));
}
var boxClass = 'movingDiv';
function outputBox(num) {
    var box = "<div class='" + boxClass + "' id='div" + num + "'>";}

console.log(box);
