/**
 *
 * Wait for an element to be clickable and clicks
 * optional parameter to add an extra pause before clicking
 * (required sometimes for transistions).
 *
 * <example>
 :waitForVisibleAndClick.js
 it('clicks on a button once it appears', function () {
      document.getElementById('name').style.display = 'none';
      $('button').waitForVisibleAndClick();
      setTimeout(() => {
        document.getElementById('name').style.display = 'block';
      }, 500)

    });
 * </example>
 *
 * @alias element.waitForVisibleAndClick
 * @param {Number=}  ms       time in ms (default: 500)
 * @param {Number=}  pause       time in ms (default: 500)
 * @param {String=}  error    if exists it overrides the default error message
 *
 */
browser.addCommand(
    'waitForVisibleAndClick',
    function waitForVisibleAndClick(ms, pause = false, error) {
        /*!
         * ensure that ms is set properly
         */
        if (typeof ms !== 'number') {
            ms = this.options.waitforTimeout;
        }

        const errorMsg = method => `element ("${this.selector}") still not ${method}, ${ms}ms`;

        this.waitForExist(ms, undefined, errorMsg('exists'));
        this.waitForDisplayed(ms, undefined, errorMsg('displayed'));
        this.waitForEnabled(ms, undefined, errorMsg('enabled'));

        if (pause) {
            browser.pause(pause);
        }

        this.click();
    },
    true
);
