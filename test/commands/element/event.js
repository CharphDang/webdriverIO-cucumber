/*
 * @Author: Adam Dang
 * @Description: Customize some commands for the element
 * @Date: 2020-11-06 11:30:10
 * @LastEditors: Adam Dang
 * @LastEditTime: 2020-11-11 16:56:16
 */

/**
 * @author: Adam Dang
 * @description: Wait for the element to actually be available
 */
browser.addCommand(
    'waitForAttached',
    function () {
        this.waitForExist();
        this.waitForDisplayed();
        this.waitForEnabled();
    },
    true
);

/**
 * @author: Adam Dang
 * @description: Adapt to sap DOM elements, automatically find the internal input box, and then assign values
 */
browser.addCommand(
    'fillValue',
    function (val) {
        const ele = this.$('input');
        ele.setValue(val);
    },
    true
);
