const prevyear=$("//button[text()='Previous Year']");
const month=$("//div[text()='Jan']");
const apply=("//span[text()='Apply']");
const months=$("(//i[@class='icon-expand_more-outlined ds-text-icon-inverse ds-flex'])[2]");
const player=$("//a[@title='Ishan Kishan']");
const fname=$("//p[text()='Ishan Pranav Kumar Pandey Kishan']");
const alert=$("//button[@id='wzrk-cancel']");
class teams{
    async team(){
        await browser.pause(2000);
        await $("//span[text()='IND']").waitForClickable();
        await $("//span[text()='IND']").click();
        await months.waitForClickable();
        await months.click();
        await prevyear.click();
        await month.waitForClickable();
        await month.click();
        await $("//button[@class='ds-flex ds-items-center ds-justify-center ds-bg-ui-fill-primary ds-border ds-text-raw-white ds-rounded-full ds-h-8 ds-px-4 hover:ds-bg-ui-fill-primary-hover focus:ds-ring-4 focus:ds-ring-button-primary']").waitForClickable();
        await $("//button[@class='ds-flex ds-items-center ds-justify-center ds-bg-ui-fill-primary ds-border ds-text-raw-white ds-rounded-full ds-h-8 ds-px-4 hover:ds-bg-ui-fill-primary-hover focus:ds-ring-4 focus:ds-ring-button-primary']").click();
        await browser.pause(2000);
        if(alert)
            await alert.click();
        await $("//a[@href='/series/sri-lanka-in-india-2022-23-1348629/india-vs-sri-lanka-1st-t20i-1348640/full-scorecard']").waitForClickable();
        await $("//a[@href='/series/sri-lanka-in-india-2022-23-1348629/india-vs-sri-lanka-1st-t20i-1348640/full-scorecard']").click();
        await player.waitForClickable();
        await player.click();
        await fname.waitForDisplayed();
        try {
            await browser.saveScreenshot('./screenshot.png');
            console.log('SCREENSHOT SAVED SUCCESSFULLY-------------------------------------------------------------------------------------------!');
            console.log('Screenshot path:', process.cwd() + '/screenshot.png');
        } catch (error) {
            console.error('ERROR OCCURED WHILE TAKING SCREENSHOT----------------------------------------------------------------------------------', error);
        }
      
    }
}

module.exports=new teams();