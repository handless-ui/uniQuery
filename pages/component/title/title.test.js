describe('组件 / Title 标题头', () => {

	let page;
	beforeAll(async () => {
		await program.redirectTo("/pages/component/title/index");

		page = await program.currentPage();
		await page.waitFor(3000);
	});

	it('1、测试标题内容是否设置正确', async () => {

		const el = await page.$('.title');
		const titleText = await el.text();

		expect(titleText).toEqual('这是标题');
	});
});