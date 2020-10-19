/**
 * Check if a feature toggle is active
 *
 *  * <example>
 :isFeatureActive.js
 if(browser.isFeatureActive('DEMO_PixelateMe_CaptureImageFromCamera')) {
    pixelatePage.publishPreviewPopover().preview().waitForDisplayed();
    expect(pixelatePage.publishPreviewPopover().preview().getProperty('width')).to.equal(480);
    expect(pixelatePage.publishPreviewPopover().preview().getProperty('height')).to.equal(480);
  } else {
    pixelatePage.publishPreviewPopover().errorMessage().waitForDisplayed();
    expect(pixelatePage.publishPreviewPopover().errorMessage()).to.equal('Sorry you cannot capture images yet.');
  }
 * </example>
 *
 *  * @param {String=}  feature       name of the feature
 */

browser.addCommand('isFeatureActive', function(feature) {
    return this.execute(feature => {
        return dwc.toggles.isActive(feature);
    }, feature);
});