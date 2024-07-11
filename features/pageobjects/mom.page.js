// const prevyear=$("//button[text()='Previous Year']");
// const month=$("//div[text()='Jan']");
// const months=$("(//i[@class='icon-expand_more-outlined ds-text-icon-inverse ds-flex'])[2]");
// const alert=$("//button[@id='wzrk-cancel']");
// class manofthematch{
//     async selectplay(){ 
//         await browser.pause(2000);
//       await $("//img[@alt='ESPNcricinfo']").waitForClickable();
//       await $("//img[@alt='ESPNcricinfo']").click();
//       await browser.pause(20000);
//       await $("//img[@alt='Zimbabwe']").waitForClickable();
//       await $("//img[@alt='Zimbabwe']").click();
//     }
//     async mom(){
//         await months.waitForClickable();
//         await months.click();
//         await prevyear.click();
//         await month.waitForClickable();
//         await month.click();
//         await $("//button[@class='ds-flex ds-items-center ds-justify-center ds-bg-ui-fill-primary ds-border ds-text-raw-white ds-rounded-full ds-h-8 ds-px-4 hover:ds-bg-ui-fill-primary-hover focus:ds-ring-4 focus:ds-ring-button-primary']").waitForClickable();
//         await $("//button[@class='ds-flex ds-items-center ds-justify-center ds-bg-ui-fill-primary ds-border ds-text-raw-white ds-rounded-full ds-h-8 ds-px-4 hover:ds-bg-ui-fill-primary-hover focus:ds-ring-4 focus:ds-ring-button-primary']").click();
//         await browser.pause(2000);
//         if(alert)
//             await alert.click();
//         await $("//a[@href='/series/ireland-in-zimbabwe-2022-23-1348320/zimbabwe-vs-ireland-2nd-t20i-1348324/full-scorecard']").waitForClickable();
//         await $("//a[@href='/series/ireland-in-zimbabwe-2022-23-1348320/zimbabwe-vs-ireland-2nd-t20i-1348324/full-scorecard']").click();
//         await $("//span[text()='Ross Adair']").waitForDisplayed();
//         await $("//span[text()='Ross Adair']").click();
//         await $("//h2[text()='Ross Adair Career Stats']").waitForDisplayed();
    
//     }
//     async sst(){
//         try {
//             await browser.saveScreenshot('./screenshot2.png');
//             console.log('SCREENSHOT SAVED SUCCESSFULLY-------------------------------------------------------------------------------------------!');
//             console.log('Screenshot path:', process.cwd() + '/screenshot2.png');
//         } catch (error) {
//             console.error('ERROR OCCURED WHILE TAKING SCREENSHOT----------------------------------------------------------------------------------', error);
//         }
//     }
// }
// module.exports=new manofthematch();