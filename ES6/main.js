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

class PlanCalculator {
    constructor() {
        this.controller();
        this.updateResult();
    }

    updateResult(value) {
        const plan = parseInt($('#plan').val()) / 100,
            sum = parseInt($('#investing-sum').val());
        $('#dayly-sum').val(`${parseInt(sum * plan)} ₽`);
        $('#full-sum').val(`${parseInt(sum * plan) * 30} ₽`);
    }

    controller() {
        $('#plan').change(e => {
            e.preventDefault();
            this.updateResult();
        });
        $('#investing-sum').bind('input', e => {
            e.preventDefault();
            this.updateResult();
        });
    }
}

function header() {
    $('.header .toggle-btn').click(() => {
        $('.header .header-navigation').slideToggle();
        $('.header .toggle-btn').toggleClass('active');
    });
}

function showPassword() {
    $('.show-password').mouseenter(function () {
        $(this).parent().find('input[type=password]').attr('type', 'text');
    }).mouseleave(function () {
        $(this).parent().find('input[type=text]').attr('type', 'password');
    });
}


$(function () {
    setTimeout(() => {
        new PlanCalculator();
        header();
        showPassword();
    }, 1000);
});