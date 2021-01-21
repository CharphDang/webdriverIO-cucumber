browser.addCommand('pressEnter', function () {
    return this.keys('\uE007');
});

browser.addCommand('pressTab', function () {
    return this.keys('\uE004');
});

browser.addCommand('pressHome', function () {
    return this.keys('\uE011');
});

browser.addCommand('pressEnd', function () {
    return this.keys('\uE010');
});

browser.addCommand('pressDelete', function () {
    return this.keys('\uE017');
});

browser.addCommand('pressArrowUp', function () {
    return this.keys('\uE013');
});

browser.addCommand('pressArrowDown', function () {
    return this.keys('\uE015');
});

browser.addCommand('pressArrowLeft', function () {
    return this.keys('\uE012');
});

browser.addCommand('pressArrowRight', function () {
    return this.keys('\uE014');
});
