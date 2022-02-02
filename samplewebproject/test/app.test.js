const assert = require("assert");

it("has a text input", async () => {
	const dom = await render("index.html");

	const input = dom.window.document.querySelector("input");

	assert(input);
});

it("shows a success message with a valid email", async () => {
	const dom = await render("index.html");

	const input = dom.window.document.querySelector("input");
	const form = dom.window.document.querySelector("form");
	const h1 = dom.window.document.querySelector("h1");

	input.value = "aposdnpab@apsdo.com";
	form.dispatchEvent(new dom.window.Event("submit"));

	assert.strictEqual(h1.innerHTML, "Looks good!");
});

it("shows a fail message with a invalid email", async () => {
	const dom = await render("index.html");

	const input = dom.window.document.querySelector("input");
	const form = dom.window.document.querySelector("form");
	const h1 = dom.window.document.querySelector("h1");

	input.value = "aposdnpabapsdo.com";
	form.dispatchEvent(new dom.window.Event("submit"));

	assert.strictEqual(h1.innerHTML, "Invalid Email");
});
