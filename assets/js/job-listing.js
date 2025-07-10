

$(document).ready(function() {
    const $filter = $('#filter-icon');
    const $category = $('#job-category');
    const $content = $('#content');

    if ($filter.length && $category.length && $content.length) {
        $filter.on('click', function() {
            $category.slideToggle(300, function() {
                if ($category.is(':visible')) {
                    $content.removeClass('col-xl-12').addClass('col-xl-9');
                } else {
                    $content.addClass('col-xl-12').removeClass('col-xl-9');
                }
            });
        });
    }
});
