$(document).ready(function() {
    $('.option').click(function() {

        $('.option').prop('disabled', true);

        var selectedOption = $(this).text().trim();
        var correctAnswer = "C. 1994";
        var isCorrect = (selectedOption === correctAnswer);

        if (isCorrect) {
            $('.feedback').css('color', 'green').text('Correct!');
        } else {
            $('.feedback').css('color', 'red').text('Incorrect!');
        }
    });
});
