window.onload = function () {
    function a(a, b) {
        var c = /^(?:file):/, d = new XMLHttpRequest, e = 0;
        d.onreadystatechange = function () {
            4 == d.readyState && (e = d.status), c.test(location.href) && d.responseText && (e = 200), 4 == d.readyState && 200 == e && (a.outerHTML = d.responseText)
        };
        try {
            d.open("GET", b, !0), d.send()
        } catch (f) {
        }
    }

    var b, c = document.getElementsByTagName("*");
    for (b in c) c[b].hasAttribute && c[b].hasAttribute("data-include") && a(c[b], c[b].getAttribute("data-include"))
};

function header() {
    $('.modal-backdrop').click(() => {
        if ($('.sidebar .sidebar-menu').hasClass('active')) {
            $('body').removeClass('modal-open');
            $('.modal-backdrop').removeClass('fade');
            $('.modal-backdrop').removeClass('show');
            $('.modal-backdrop').hide();
            $('.sidebar .sidebar-menu').removeClass('active');
            $('.sidebar .toggle-btn').removeClass('active');
        }
    });

    $('.sidebar .toggle-btn').click(() => {
        $('body').toggleClass('modal-open');
        $('.modal-backdrop').toggleClass('fade');
        $('.modal-backdrop').toggleClass('show');
        $('.modal-backdrop').toggle();
        $('.sidebar .sidebar-menu').toggleClass('active');
        $('.sidebar .toggle-btn').toggleClass('active');
    });
}

function piggy() {
    $('.invoice-radio input').change(() => {
        if ($('.service-radio input:checked').val()) {
            $('.supplement .submit').removeAttr('disabled');
        }

    });
    $('.service-radio input').change(() => {
        if ($('.invoice-radio input:checked').val()) {
            $('.supplement .submit').removeAttr('disabled');
        }
    });
}

function bannerForm() {
    $('.banner-form select').change(function (e) {
        let html = $(this).find('option:selected').attr('data-html'),
            bb = $(this).find('option:selected').attr('data-bb'),
            url = $(this).val();
        $('.banner-form img').attr('src', url);
        $('.banner-form #html').val(html);
        $('.banner-form #bb').val(bb);
        $('.banner-form #url').val(url);
    });
}

$(function () {
    setTimeout(() => {
        header();
        piggy();
        bannerForm();
    }, 1000);

});