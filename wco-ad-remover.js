// ==UserScript==
// @name         WCO Ad Remover
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Autoclicks the remove ads button on WCOstream
// @author       Ian Edwards
// @match        https://www.wcostream.com/*
// @icon         https://www.google.com/s2/favicons?domain=wcostream.com
// @grant        none
// ==/UserScript==

function clickButton() {
	const button = document.getElementById('anti-ad-close')
	if (button !== null) button.click()
}

setTimeout(clickButton, 1000)
