//form submit button event listener
$("#btnSubmit").click(function () {
    var assign = $("#txtAssign").val()
    var group = $("#txtGroup").val()
    var quiz = $("#txtQuiz").val()
    var exam = $("#txtExam").val()
    var intex = $("#txtIntex").val()

    var percentGrade = Math.round((assign * .55) + (group * .05) + (quiz * .10) + (exam * .20) + (intex * .10))
    var letterGrade = ''

    if (percentGrade >= 94) {
        letterGrade = "A"
    } else if (percentGrade >= 90) {
        letterGrade = "A-"
    } else if (percentGrade >= 87) {
        letterGrade = "B+"
    } else if (percentGrade >= 84) {
        letterGrade = "B"
    } else if (percentGrade >= 80) {
        letterGrade = "B-"
    } else if (percentGrade >= 77) {
        letterGrade = "C+"
    } else if (percentGrade >= 74) {
        letterGrade = "C"
    } else if (percentGrade >= 70) {
        letterGrade = "C-"
    } else if (percentGrade >= 67) {
        letterGrade = "D+"
    } else if (percentGrade >= 64) {
        letterGrade = "D"
    } else if (percentGrade >= 60) {
        letterGrade = "D-"
    } else {
        letterGrade = "E"
    }

    alert("Percent Grade: " + percentGrade + "%\n" + "Letter Grade: " + letterGrade)
})