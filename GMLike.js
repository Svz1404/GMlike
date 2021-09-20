const puppeteer = require('puppeteer');
const readlineSync = require('readline-sync');
var chalk = require('chalk');
const delay = require('delay');
const fs = require('fs');
var random = require('random-name')
const moment =require('moment');
const fake = require('faker/locale/id_ID');
console.log('\n'+chalk.green('SGBTeam' + '\n'))

var usdt = 'TRQsVsezEfeDacboVFRgtDiuzTkC3D2FeA'
const $options = {
      waitUntil: 'networkidle2',
	  timeout : 999999,
};
		



(async () => {
	var Passwords = "MrSvz1404"
	var linkReff = "https://www.gmlikes.com/#/pages/login/reg?sc=F1oFKVy4&prop=1"
	const SelEmail = "body > uni-app > uni-page > uni-page-wrapper > uni-page-body > uni-view > uni-view.content > uni-view:nth-child(1) > uni-input > div > input"
	const SelMemo1 = "body > uni-app > uni-page > uni-page-wrapper > uni-page-body > uni-view > uni-view.content > uni-view:nth-child(2) > uni-view.flex-center-between > uni-input:nth-child(1) > div > input"
	const SelMemo2 = "body > uni-app > uni-page > uni-page-wrapper > uni-page-body > uni-view > uni-view.content > uni-view:nth-child(2) > uni-view.flex-center-between > uni-input:nth-child(2) > div > input"
	const SelMemo3 = "body > uni-app > uni-page > uni-page-wrapper > uni-page-body > uni-view > uni-view.content > uni-view:nth-child(2) > uni-view.flex-center-between > uni-input:nth-child(3) > div > input"
	const SelMemo4 = "body > uni-app > uni-page > uni-page-wrapper > uni-page-body > uni-view > uni-view.content > uni-view:nth-child(2) > uni-view.flex-center-between > uni-input:nth-child(4) > div > input"
	const SelPass1 = "body > uni-app > uni-page > uni-page-wrapper > uni-page-body > uni-view > uni-view.content > uni-view:nth-child(3) > input"
	const SelPass2 = "body > uni-app > uni-page > uni-page-wrapper > uni-page-body > uni-view > uni-view.content > uni-view:nth-child(4) > input"
	const SelBtnRegis = "body > uni-app > uni-page > uni-page-wrapper > uni-page-body > uni-view > uni-view.box-submit > uni-button"
	const SelReceived = 'body > uni-app > uni-page > uni-page-wrapper > uni-page-body > uni-view > uni-view.flex_1.content > uni-swiper > div > div > div > uni-swiper-item:nth-child(1) > uni-scroll-view > div > div > div > uni-view:nth-child(1) > uni-view.receive.flex-center-between > uni-view.receive-box'
	const SelTaskStart = 'body > uni-app > uni-page > uni-page-wrapper > uni-page-body > uni-view > uni-view.content.flex_1 > uni-swiper > div > div > div > uni-swiper-item:nth-child(1) > uni-scroll-view > div > div > div > uni-view > uni-view.more.flex-center > uni-navigator'
	const SelBtnInvite = 'body > uni-app > uni-page > uni-page-wrapper > uni-page-body > uni-view > uni-view.content > uni-view:nth-child(2) > uni-view > uni-view.share_invite.flex-center-between > uni-navigator'
	const SelBtnBack = 'body > uni-app > uni-page > uni-page-head > div.uni-page-head > div.uni-page-head-hd > div'
	const SelBtnProfile = 'body > uni-app > uni-tabbar > div.uni-tabbar > div:nth-child(6)'
	const SelBtnHome = 'body > uni-app > uni-page > uni-page-wrapper > uni-page-body > uni-view > uni-view.uni-head.flex-center-center > uni-view.back-box.flex-center-center'
	const SelBtnSetting = 'body > uni-app > uni-page > uni-page-wrapper > uni-page-body > uni-view > uni-view.top.flex-center > uni-navigator:nth-child(1) > uni-image'
	const SelUSDT = 'body > uni-app > uni-page > uni-page-wrapper > uni-page-body > uni-view > uni-view.centent > uni-navigator:nth-child(1)'
	const Selmemo5 = 'body > uni-app > uni-page > uni-page-wrapper > uni-page-body > uni-view > uni-view.content > uni-view:nth-child(1) > uni-view.list-item.flex-center-between > uni-input:nth-child(1) > div > input'
	const Selmemo6 = 'body > uni-app > uni-page > uni-page-wrapper > uni-page-body > uni-view > uni-view.content > uni-view:nth-child(1) > uni-view.list-item.flex-center-between > uni-input:nth-child(2) > div > input'
	const Selmemo7 = 'body > uni-app > uni-page > uni-page-wrapper > uni-page-body > uni-view > uni-view.content > uni-view:nth-child(1) > uni-view.list-item.flex-center-between > uni-input:nth-child(3) > div > input'
	const Selmemo8 = 'body > uni-app > uni-page > uni-page-wrapper > uni-page-body > uni-view > uni-view.content > uni-view:nth-child(1) > uni-view.list-item.flex-center-between > uni-input:nth-child(4) > div > input'
	const SelInputusdt = 'body > uni-app > uni-page > uni-page-wrapper > uni-page-body > uni-view > uni-view.content > uni-view:nth-child(2) > uni-view.list-item > uni-input > div > input'
	const SelBtnFinish ='body > uni-app > uni-page > uni-page-wrapper > uni-page-body > uni-view > uni-view.box-submit > uni-button'


	for(i = 1; i < 20; i++)

	{
		var email = fake.name.firstName() + fake.name.lastName() +'1292924@gmail.com'
		var browser = await puppeteer.launch({
			headless: true,
			devtools: true,
			ignoreHTTPSErrors: true,
			timeout : 999999,
			defaultViewport: {
			  width: 375,
			  height: 667,
			  isMobile: true
			}
		});
		const page = await browser.newPage();
		await page.goto(linkReff, $options);

		const daftarEmail = await page.type(SelEmail, email);

		console.log(chalk.green(`[${(moment().format('HH:mm:ss'))}] Mencoba Register Email : ${email}`))
		await delay(2000)
		await page.type(SelMemo1, `1`); //memo 1
		await page.type(SelMemo2, `0`); //memo 2
		await page.type(SelMemo3, `1`); //memo 3
		await page.type(SelMemo4, `0`); //memo 4
		
		await delay(1000)
		await page.type(SelPass1, Passwords);
		await page.type(SelPass2, Passwords);
		await delay(1000)

		await page.waitForSelector(SelBtnRegis);
		const BtnRegister = await page.$(SelBtnRegis);
		await BtnRegister.click()
		await BtnRegister.dispose()
		await delay(2000)
		await page.waitForNavigation({waituntil : 'load'})

		if (await page.goto("https://www.gmlikes.com/#/pages/home/index"))
		{
			console.log(chalk.green(`[${(moment().format('HH:mm:ss'))}] Sukses Register`))
	
		}
		else
		{
			console.log(chalk.red(`[${(moment().format('HH:mm:ss'))}] Gagal Register`))
			await browser.close()
		};
		await page.goto('https://www.gmlikes.com/#/pages/task/task');
		await delay(2000)
		
		console.log(chalk.green(`[${(moment().format('HH:mm:ss'))}] Mencoba Mengambil Tugas`))
		await page.waitForSelector(SelReceived);
		const Received = await page.$(SelReceived);
		await Received.click()
		await Received.dispose()
		await delay(2000)

		await page.waitForSelector(SelTaskStart);
		const TaskStart = await page.$(SelTaskStart);
		await TaskStart.click()
		await TaskStart.dispose()
		await delay(2000)
		
		await page.waitForSelector(SelBtnInvite);
		const BtnInvite = await page.$(SelBtnInvite);
		await BtnInvite.click()
		await BtnInvite.dispose()
		await delay(2000)
		
		await page.waitForSelector(SelBtnBack);
		const btnBack = await page.$(SelBtnBack);
		await btnBack.click()
		await btnBack.dispose()
		await delay(2000)
		
		await page.waitForSelector(SelBtnHome);
		const BtnHome = await page.$(SelBtnHome);
		await BtnHome.click()
		await BtnHome.dispose()
		await delay(2000)
		console.log(chalk.green(`[${(moment().format('HH:mm:ss'))}] Berhasil Menyelesaikan Tugas`))
		
		console.log(chalk.green(`[${(moment().format('HH:mm:ss'))}] Set Address ${usdt}`))
		await page.waitForSelector(SelBtnProfile);
		const btnProfile = await page.$(SelBtnProfile);
		await btnProfile.click()
		await btnProfile.dispose()
		await delay(2000)
		
		await page.waitForSelector(SelBtnSetting);
		const btnSetting = await page.$(SelBtnSetting);
		await btnSetting.click()
		await btnSetting.dispose()
		await delay(2000)
		
		await page.waitForSelector(SelUSDT);
		const TypeUsdt = await page.$(SelUSDT);
		await TypeUsdt.click()
		await TypeUsdt.dispose()
		await delay(2000)
		
		await page.type(Selmemo5,'1')
		await page.type(Selmemo6,'0')
		await page.type(Selmemo7,'1')
		await page.type(Selmemo8,'0')
		
		await delay(2000)
		
		await page.type(SelInputusdt, usdt);
		await delay(2000)
		
		await page.waitForSelector(SelBtnFinish);
		const finishUsdt = await page.$(SelBtnFinish);
		await finishUsdt.click()
		await finishUsdt.dispose()
		await delay(2000)
		
		console.log(chalk.green(`[${(moment().format('HH:mm:ss'))}] Berhasil Set address`))
		fs.appendFileSync("AkunGMLIKE.txt", email + '|' + 'MrSvz1404' + '|' + '1010' + '|' + usdt + '\n');
		console.log(chalk.green(`[${(moment().format('HH:mm:ss'))}] Data Saved`))
		await browser.close()
		
	}

	
	})();
