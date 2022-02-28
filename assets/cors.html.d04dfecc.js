import{c as e}from"./app.49c6a941.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";var n="/assets/url-structure.d5b41063.png";const a={},o=e('<h2 id="\u1103\u1173\u11AF\u110B\u1165\u1100\u1161\u1106\u1167" tabindex="-1"><a class="header-anchor" href="#\u1103\u1173\u11AF\u110B\u1165\u1100\u1161\u1106\u1167" aria-hidden="true">#</a> \uB4E4\uC5B4\uAC00\uBA70</h2><p>React, Vue\uC640 \uAC19\uC740 \uB77C\uC774\uBE0C\uB7EC\uB9AC/\uD504\uB808\uC784\uC6CC\uD06C\uB85C SPA \uC5B4\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uB9CC\uB4E4\uB2E4 \uBCF4\uBA74 \uC11C\uBC84\uB85C\uBD80\uD130 \uB370\uC774\uD130\uB97C \uBC1B\uC544\uC57C \uD558\uB294 \uC0C1\uD669\uC774 \uC0DD\uAE34\uB2E4. \uB370\uC774\uD130\uB97C \uC694\uCCAD\uD558\uAE30 \uC704\uD574\uC11C\uB294 \uBE0C\uB77C\uC6B0\uC800 \uC790\uCCB4\uC801\uC73C\uB85C \uC9C0\uC6D0\uD558\uB294 <code>XMLHttpRequest</code> \uD639\uC740 ES6 \uC774\uD6C4\uC5D0 \uB098\uC628 <code>fetch</code>\uB97C \uC0AC\uC6A9\uD558\uAC70\uB098 <code>axios</code>\uC640 \uAC19\uC740 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB97C \uC0AC\uC6A9\uD558\uAE30\uB3C4 \uD55C\uB2E4.</p><p>\uADFC\uB370 \uAC00\uB054 \uB370\uC774\uD130\uB97C \uC694\uCCAD\uD558\uB2E4 \uBCF4\uBA74 \uC544\uB798\uC640 \uAC19\uC740 \uC5D0\uB7EC\uAC00 \uBC1C\uC0DD\uD558\uB294 \uAC83\uC744 \uBCFC \uC218 \uC788\uB2E4.</p><div class="custom-container danger"><p class="custom-container-title">CORS \uC5D0\uB7EC</p><p>Access to fetch at <strong>&#39;https://api-example.com/users&#39;</strong> from origin <strong>&#39;http://localhost&#39;</strong> has been blocked by CORS policy: No &#39;Access-Control-Allow-Origin&#39; header is present on the requested resource. If an opaque response serves your needs, set the request&#39;s mode to &#39;no-cors&#39; to fetch the resource with CORS disabled.</p></div><p>CORS \uC815\uCC45\uC744 \uC704\uBC18\uD560 \uB54C, \uC704\uC640 \uAC19\uC740 \uC5D0\uB7EC\uAC00 \uBC1C\uC0DD\uD55C\uB2E4. CORS\uAC00 \uBB34\uC5C7\uC778\uC9C0\uC5D0 \uB300\uD574 \uC54C\uC544\uBCF4\uACE0, \uC5B4\uB5BB\uAC8C \uD574\uACB0\uD574\uC57C \uD558\uB294\uC9C0\uC5D0 \uB300\uD574 \uC54C\uC544\uBCF4\uC790.</p><h2 id="cors\u1100\u1161-\u1111\u1175\u11AF\u110B\u116D\u1112\u1161\u11AB-\u110B\u1175\u110B\u1172" tabindex="-1"><a class="header-anchor" href="#cors\u1100\u1161-\u1111\u1175\u11AF\u110B\u116D\u1112\u1161\u11AB-\u110B\u1175\u110B\u1172" aria-hidden="true">#</a> CORS\uAC00 \uD544\uC694\uD55C \uC774\uC720</h2><p>\uAE30\uBCF8\uC801\uC73C\uB85C \uBE0C\uB77C\uC6B0\uC800\uB294 \uB3D9\uC77C \uCD9C\uCC98 \uC815\uCC45(Same-Origin Policy)\uC5D0 \uB530\uB77C \uB2E4\uB978 \uCD9C\uCC98\uC758 \uB9AC\uC18C\uC2A4\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uACE0, \uB3D9\uC77C\uD55C \uCD9C\uCC98\uC758 \uB9AC\uC18C\uC2A4\uB9CC \uC0AC\uC6A9\uC774 \uAC00\uB2A5\uD558\uB2E4.</p><p>\uD558\uC9C0\uB9CC \uC2E4\uC81C\uB85C \uAC1C\uBC1C\uC744 \uD558\uB2E4 \uBCF4\uBA74 API\uB97C \uC0AC\uC6A9\uD574\uC57C \uD558\uAC70\uB098, \uAD6C\uAE00 \uC6F9 \uD3F0\uD2B8\uC758 \uC0AC\uC6A9\uC774 \uD544\uC694\uD55C \uC0C1\uD669\uC774 \uC0DD\uAE34\uB2E4. \uD2B9\uD788 SPA\uB85C \uAD6C\uD604\uB41C \uC5B4\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C\uB294 API\uC758 \uC694\uCCAD\uC740 \uD544\uC218\uAC00 \uB420 \uC218 \uBC16\uC5D0 \uC5C6\uB2E4.</p><p>\uC774\uB807\uAC8C \uB2E4\uB978 \uCD9C\uCC98\uC5D0 \uC694\uCCAD\uD574\uC57C \uD558\uB294 \uACBD\uC6B0\uAC00 \uB9CE\uC544\uC9C0\uACE0 \uC788\uC5B4\uC11C, \uC774\uB7EC\uD55C \uC694\uCCAD\uB4E4\uC744 \uC548\uC804\uD558\uAC8C \uCC98\uB9AC\uD560 \uC218 \uC788\uB294 \uBC29\uBC95\uC774 \uD544\uC694\uD588\uB2E4. \uB355\uBD84\uC5D0 CORS\uAC00 \uB4F1\uC7A5\uD558\uAC8C \uB418\uC5C8\uC73C\uBA70, CORS\uB294 \uB2E4\uB978 \uCD9C\uCC98\uC758 \uC694\uCCAD\uC744 \uC120\uD0DD\uC801\uC73C\uB85C \uD5C8\uC6A9\uD568\uC73C\uB85C\uC368 \uC548\uC804\uD558\uAC8C \uCC98\uB9AC\uD560 \uC218 \uC788\uB2E4.</p><h2 id="\u1103\u1169\u11BC\u110B\u1175\u11AF-\u110E\u116E\u11AF\u110E\u1165-\u110C\u1165\u11BC\u110E\u1162\u11A8-same-origin-policy" tabindex="-1"><a class="header-anchor" href="#\u1103\u1169\u11BC\u110B\u1175\u11AF-\u110E\u116E\u11AF\u110E\u1165-\u110C\u1165\u11BC\u110E\u1162\u11A8-same-origin-policy" aria-hidden="true">#</a> \uB3D9\uC77C \uCD9C\uCC98 \uC815\uCC45 (Same-Origin Policy)</h2><p>\uBCF4\uC548\uC801\uC778 \uC774\uC720\uB85C \uBE0C\uB77C\uC6B0\uC800\uAC00 \uB3D9\uC77C\uD55C \uCD9C\uCC98\uC758 \uB9AC\uC18C\uC2A4\uB9CC \uC0AC\uC6A9\uD560 \uC218 \uC788\uB3C4\uB85D \uD558\uB294 \uC815\uCC45\uC774\uB2E4. \uB2E4\uB978 \uCD9C\uCC98\uC758 \uB9AC\uC18C\uC2A4\uB97C \uAC00\uC9C0\uACE0 \uC624\uC9C0 \uBABB \uD55C\uB2E4\uB294 \uB2E8\uC810\uC774 \uC788\uC73C\uB098, <strong>XSS</strong>, <strong>XSRF</strong>\uC640 \uAC19\uC740 \uACF5\uACA9\uC744 \uBC29\uC5B4\uD560 \uC218 \uC788\uB2E4. \uD558\uC9C0\uB9CC \uB2E4\uB978 \uCD9C\uCC98\uB85C \uC694\uCCAD\uD560 \uC218 \uC5C6\uAC8C \uB418\uBA74 \uC6F9 \uC5B4\uD50C\uB9AC\uCF00\uC774\uC158\uC740 \uD55C\uACC4\uB97C \uB9DE\uC774\uD560 \uC218 \uBC16\uC5D0 \uC5C6\uAC8C \uB41C\uB2E4. \uC989 \uAE30\uBCF8\uC801\uC73C\uB85C\uB294 \uBE0C\uB77C\uC6B0\uC800\uB294 \uB3D9\uC77C \uCD9C\uCC98 \uC815\uCC45\uC744 \uB530\uB974\uC9C0\uB9CC \uC608\uC678\uC801\uC73C\uB85C CORS\uB97C \uD1B5\uD574, \uB2E4\uB978 \uCD9C\uCC98\uC5D0 \uC694\uCCAD\uD560 \uC218 \uC788\uAC8C \uB41C\uB2E4.</p><h2 id="cors-\u1100\u116D\u110E\u1161-\u110E\u116E\u11AF\u110E\u1165-\u1105\u1175\u1109\u1169\u1109\u1173-\u1100\u1169\u11BC\u110B\u1172" tabindex="-1"><a class="header-anchor" href="#cors-\u1100\u116D\u110E\u1161-\u110E\u116E\u11AF\u110E\u1165-\u1105\u1175\u1109\u1169\u1109\u1173-\u1100\u1169\u11BC\u110B\u1172" aria-hidden="true">#</a> CORS (\uAD50\uCC28 \uCD9C\uCC98 \uB9AC\uC18C\uC2A4 \uACF5\uC720)</h2><p>CORS\uB294 Cross-origin Resource Sharing\uC758 \uC57D\uC790\uB85C, \uAD50\uCC28 \uCD9C\uCC98 \uB9AC\uC18C\uC2A4 \uACF5\uC720\uB77C\uACE0 \uBC88\uC5ED\uD560 \uC218 \uC788\uB2E4. \uC5B4\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC11C\uBE44\uC2A4\uD558\uAE30 \uC704\uD574\uC11C\uB294 \uAD6C\uAE00/\uD398\uC774\uC2A4\uBD81\uACFC \uAC19\uC740 \uB85C\uADF8\uC778 \uC5F0\uB3D9 \uD639\uC740 \uACB0\uC81C \uC11C\uBE44\uC2A4 \uC774\uC6A9\uC744 \uD560 \uB54C, \uB2E4\uB978 \uCD9C\uCC98\uB85C \uC694\uCCAD\uC774 \uD544\uC694\uD560 \uB54C\uAC00 \uC874\uC7AC\uD55C\uB2E4. \uC5B4\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uB2E4\uB978 \uCD9C\uCC98\uB85C \uC694\uCCAD\uD560 \uB54C cross-origin HTTP \uC694\uCCAD\uC744 \uC2E4\uD589\uD558\uB294\uB370, \uBCF4\uC548\uC801\uC778 \uC774\uC720\uB85C \uC694\uCCAD\uB4E4\uC744 \uC81C\uD55C\uD55C\uB2E4. \uC774 \uB54C, \uCD94\uAC00 HTTP \uD5E4\uB354\uB97C \uC0AC\uC6A9\uD558\uC5EC, \uB2E4\uB978 \uCD9C\uCC98\uC5D0 \uC811\uADFC\uD560 \uC218 \uC788\uB3C4\uB85D \uBE0C\uB77C\uC6B0\uC800\uC5D0 \uC54C\uB9AC\uB294 \uAC83\uC744 CORS\uB77C\uACE0 \uD55C\uB2E4.</p><p>\uC8FC\uB85C \uC544\uB798\uC640 \uAC19\uC740 \uC694\uCCAD\uB4E4\uC774 CORS\uB97C \uC0AC\uC6A9\uD55C\uB2E4.</p><ul><li>XMLHttpRequest \uD639\uC740 Fetch API \uD638\uCD9C</li><li>@font-face \uC0AC\uC6A9</li><li>Canvas - drawImage()</li></ul><h3 id="url-\u1100\u116E\u110C\u1169" tabindex="-1"><a class="header-anchor" href="#url-\u1100\u116E\u110C\u1169" aria-hidden="true">#</a> URL \uAD6C\uC870</h3><p>\uB2E4\uB978 \uCD9C\uCC98\uB294 \uB2E8\uC21C\uD788 \uB3C4\uBA54\uC778\uC774 \uB2E4\uB978 \uACBD\uC6B0\uB97C \uC758\uBBF8\uD558\uB294 \uAC78\uAE4C? \uCD9C\uCC98\uB97C \uAD6C\uBD84\uD558\uAE30 \uC704\uD574\uC11C\uB294 URL\uC758 \uAD6C\uC870\uC5D0 \uB300\uD55C \uC774\uD574\uAC00 \uD544\uC694\uD558\uB2E4.</p><p>URL \uAD6C\uC870\uB294 \uC544\uB798 \uC774\uBBF8\uC9C0\uC640 \uAC19\uB2E4\uACE0 \uBCFC \uC218 \uC788\uB2E4.</p><p><img src="'+n+`" alt="URL-Structure"></p><p>\uBAA8\uB4E0 URL\uC774 \uB2E4\uC74C\uACFC \uAC19\uC740 \uAD6C\uC870\uB294 \uC544\uB2C8\uC9C0\uB9CC \uAE30\uBCF8\uC801\uC73C\uB85C \uD504\uB85C\uD1A0\uCF5C, \uB3C4\uBA54\uC778, \uC8FC\uC18C\uAE4C\uC9C0\uB294 \uD544\uC218 \uC694\uC18C\uB77C\uACE0 \uBCF4\uBA74 \uB41C\uB2E4. \uADF8\uB9AC\uACE0 \uD504\uB85C\uD1A0\uCF5C\uC758 HTTP\uC640 HTTPS\uB294 \uAC01\uAC01 80\uACFC 443 \uD3EC\uD2B8\uB97C \uC0AC\uC6A9\uD558\uB294\uB370, \uC774\uB294 \uC0DD\uB7B5 \uAC00\uB2A5\uD558\uB2E4.</p><h3 id="\u1103\u1161\u1105\u1173\u11AB-\u110E\u116E\u11AF\u110E\u1165-\u1100\u116E\u1107\u116E\u11AB" tabindex="-1"><a class="header-anchor" href="#\u1103\u1161\u1105\u1173\u11AB-\u110E\u116E\u11AF\u110E\u1165-\u1100\u116E\u1107\u116E\u11AB" aria-hidden="true">#</a> \uB2E4\uB978 \uCD9C\uCC98 \uAD6C\uBD84</h3><p>\uBA3C\uC800 \uCD9C\uCC98(origin)\uC5D0 \uB300\uD574\uC11C \uC54C\uC544\uC57C \uD558\uB294\uB370, \uD504\uB85C\uD1A0\uCF5C\uACFC \uB3C4\uBA54\uC778 \uADF8\uB9AC\uACE0 \uD3EC\uD2B8\uB97C \uD569\uCE5C \uAC83\uC744 \uCD9C\uCC98\uB77C\uACE0 \uC774\uC57C\uAE30\uD55C\uB2E4. \uB2E4\uC74C\uACFC \uAC19\uC774 <code>location.origin</code> \uBA85\uB839\uC5B4\uB97C \uD1B5\uD574 \uCD9C\uCC98\uB97C \uD655\uC778\uD560 \uC218 \uC788\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \uD604\uC7AC \uC8FC\uC18C : https://blog.example.com:8080/posts?page=1&amp;tag=cors#content</span>
location<span class="token punctuation">.</span>origin 
<span class="token string">&quot;https://blog.example.com:8080&quot;</span> <span class="token comment">// \uCD9C\uCC98</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\uD504\uD1A0\uD1A0\uCF5C, \uB3C4\uBA54\uC778, \uD3EC\uD2B8 \uC5B4\uB290 \uD558\uB098\uB77C\uB3C4 \uB2E4\uB978 \uACBD\uC6B0\uC5D0\uB294 \uB2E4\uB978 \uCD9C\uCC98\uB85C \uAD6C\uBD84\uB41C\uB2E4. \uAE30\uC900\uC774 \uB418\uB294 \uD604\uC7AC \uC8FC\uC18C\uAC00 &quot;https://blog.example.com:8080&quot;\uC774\uB77C\uACE0 \uAC00\uC815\uD560 \uB54C, \uAC19\uC740 \uCD9C\uCC98\uC640 \uB2E4\uB978 \uCD9C\uCC98\uB294 \uB2E4\uC74C\uACFC \uAC19\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&quot;https://blog.example.com:8080/posts&quot;</span> <span class="token comment">// \uAC19\uC740 \uCD9C\uCC98</span>
<span class="token string">&quot;https://blog.example.com:8080/posts?page=1&quot;</span> <span class="token comment">// \uAC19\uC740 \uCD9C\uCC98</span>
<span class="token string">&quot;https://blog.example.com:3000&quot;</span> <span class="token comment">// \uB2E4\uB978 \uCD9C\uCC98</span>
<span class="token string">&quot;https://api.example.com&quot;</span> <span class="token comment">// \uB2E4\uB978 \uCD9C\uCC98</span>
<span class="token string">&quot;http://blog.example.com:8080&quot;</span> <span class="token comment">// \uB2E4\uB978 \uCD9C\uCC98</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="cors-\u110B\u116D\u110E\u1165\u11BC-\u1107\u1161\u11BC\u1107\u1165\u11B8" tabindex="-1"><a class="header-anchor" href="#cors-\u110B\u116D\u110E\u1165\u11BC-\u1107\u1161\u11BC\u1107\u1165\u11B8" aria-hidden="true">#</a> CORS \uC694\uCCAD \uBC29\uBC95</h2><p>\uBE0C\uB77C\uC6B0\uC800 \uAD00\uC810\uC5D0\uC11C \uBD24\uC744 \uB54C, CORS \uC694\uCCAD\uC740 \uB450 \uAC00\uC9C0 \uC885\uB958\uB85C \uAD6C\uBD84\uD560 \uC218 \uC788\uB2E4.</p><ol><li>\uC548\uC804\uD55C \uC694\uCCAD - \uB2E8\uC21C \uC694\uCCAD \uBC29\uBC95</li><li>\uC548\uC804\uD558\uC9C0 \uC54A\uC740 \uC694\uCCAD - \uC0AC\uC804 \uC694\uCCAD \uBC29\uBC95</li></ol><h3 id="\u1103\u1161\u11AB\u1109\u116E\u11AB-\u110B\u116D\u110E\u1165\u11BC-simple-request" tabindex="-1"><a class="header-anchor" href="#\u1103\u1161\u11AB\u1109\u116E\u11AB-\u110B\u116D\u110E\u1165\u11BC-simple-request" aria-hidden="true">#</a> \uB2E8\uC21C \uC694\uCCAD (Simple Request)</h3><p>\uB2E8\uC21C \uC694\uCCAD\uC740 \uC0AC\uC804 \uC694\uCCAD \uC5C6\uC774 \uC11C\uBC84\uC5D0\uAC8C \uBC14\uB85C \uC694\uCCAD\uC744 \uBCF4\uB0B4\uB294 \uBC29\uBC95\uC774\uB2E4.</p><p>\uC608\uB97C \uB4E4\uC5B4 &quot;https://blog.example.com&quot;\uC5D0\uC11C \uB370\uC774\uD130\uB97C \uBC1B\uAE30 \uC704\uD574, &quot;https://api.example.com/posts&quot;\uB85C \uC694\uCCAD\uC744 \uBCF4\uB0B8\uB2E4\uACE0 \uAC00\uC815\uD558\uBA74 \uD5E4\uB354\uB294 \uB2E4\uC74C\uC758 \uD615\uD0DC\uB97C \uAC00\uC9C4\uB2E4.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /posts
HOST: api.example.com
Origin: https://blog.example.com
...
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\uC11C\uBC84\uB294 \uC694\uCCAD \uD5E4\uB354\uC5D0 \uC788\uB294 \uCD9C\uCC98(Origin)\uB97C \uD655\uC778\uD558\uB294\uB370, <code>Access-Control-Allow-Origin</code>\uC5D0 \uC124\uC815\uB41C \uAC12\uC774 <code>*</code> \uD639\uC740 \uC694\uCCAD\uD55C \uCD9C\uCC98 \uC815\uBCF4\uAC00 \uC788\uB294 \uACBD\uC6B0\uC5D0\uB294 \uC751\uB2F5\uC740 \uC131\uACF5\uD558\uACE0 \uADF8\uB807\uC9C0 \uC54A\uC740 \uACBD\uC6B0 \uC2E4\uD328\uD558\uAC8C \uB41C\uB2E4.</p><p>\uB2E8\uC21C \uC694\uCCAD\uC774 \uB418\uAE30 \uC704\uD574\uC11C\uB294 \uC544\uB798 \uC870\uAC74\uB4E4\uC744 \uCDA9\uC871\uD574\uC57C \uD55C\uB2E4. (\uC774\uC678\uC5D0\uB3C4 \uCD94\uAC00 \uC870\uAC74\uB4E4\uC774 \uC874\uC7AC\uD55C\uB2E4.)</p><ul><li>\uC694\uCCAD \uBA54\uC18C\uB4DC\uB294 GET, HEAD, POST \uC911 \uD558\uB098\uC5EC\uC57C \uD55C\uB2E4.</li><li>\uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C \uC790\uB3D9\uC73C\uB85C \uC124\uC815\uD55C \uD5E4\uB354 \uC678\uC5D0\uB294 <code>Accept</code>, <code>Accept-Language</code>, <code>Content-Language</code>, <code>Content-Type</code> \uC774\uC678\uC758 \uD5E4\uB354\uB97C \uC124\uC815\uD560 \uC218 \uC5C6\uB2E4.</li><li>Content-Type \uD5E4\uB354\uB294 <code>application/x-www-form-urlencoded</code>, <code>multipart/form-data</code>, <code>text/plain</code> \uC911 \uD558\uB098\uB97C \uC0AC\uC6A9\uD574\uC57C \uD55C\uB2E4.</li></ul><h3 id="\u1109\u1161\u110C\u1165\u11AB-\u110B\u116D\u110E\u1165\u11BC-preflight-request" tabindex="-1"><a class="header-anchor" href="#\u1109\u1161\u110C\u1165\u11AB-\u110B\u116D\u110E\u1165\u11BC-preflight-request" aria-hidden="true">#</a> \uC0AC\uC804 \uC694\uCCAD (Preflight Request)</h3><p>REST API\uC758 \uACBD\uC6B0, GET\uACFC POST \uBA54\uC18C\uB4DC \uBFD0\uB9CC \uC544\uB2C8\uB77C PUT, DELETE, PATCH \uB4F1 \uB2E4\uC591\uD55C \uBA54\uC18C\uB4DC\uB97C \uC0AC\uC6A9\uD55C\uB2E4. \uC774\uB807\uAC8C \uD5C8\uC6A9\uD558\uC9C0 \uC54A\uB294 \uBA54\uC18C\uB4DC\uB97C \uC0AC\uC6A9\uD55C \uC694\uCCAD\uC774 \uB4E4\uC5B4\uC624\uBA74 \uC11C\uBC84\uC5D0 \uBC14\uB85C \uC694\uCCAD\uC744 \uBCF4\uB0B4\uC9C0 \uC54A\uACE0, \uC0AC\uC804 \uC694\uCCAD\uC744 \uBCF4\uB0B4\uACE0 \uAD8C\uD55C\uC774 \uC788\uB294\uC9C0\uB97C \uD655\uC778\uD55C\uB2E4.</p><p>\uC0AC\uC804 \uC694\uCCAD\uC740 <code>OPTIONS</code> \uBA54\uC18C\uB4DC\uB97C \uD1B5\uD574, \uC548\uC804\uD55C \uC694\uCCAD\uC778\uC9C0\uB97C \uD655\uC778\uD55C\uB2E4.</p><ul><li><code>Access-Control-Request-Method</code>: \uC548\uC804\uD558\uC9C0 \uC54A\uC740 \uC694\uCCAD\uC5D0\uC11C \uC0AC\uC6A9\uD558\uB294 \uBA54\uC18C\uB4DC \uC815\uBCF4</li><li><code>Access-Control-Request-Headers</code>: \uC548\uC804\uD558\uC9C0 \uC54A\uC740 \uC694\uCCAD\uC5D0\uC11C \uC0AC\uC6A9\uD558\uB294 \uD5E4\uB354\uC758 \uBAA9\uB85D</li></ul><p>\uC11C\uBC84\uC5D0\uC11C \uC548\uC804\uD558\uC9C0 \uC54A\uC740 \uC694\uCCAD\uC744 \uD5C8\uC6A9\uD55C \uACBD\uC6B0, \uC0C1\uD0DC \uCF54\uB4DC 200\uACFC \uC544\uB798 \uD5E4\uB354\uB4E4\uC744 \uD3EC\uD568\uD574 \uBE0C\uB77C\uC6B0\uC800\uB85C \uBCF4\uB0B8\uB2E4.</p><ul><li><code>Access-Control-Allow-Origin</code>: \uD5C8\uC6A9\uB41C \uCD9C\uCC98 \uC815\uBCF4</li><li><code>Access-Control-Allow-Methods</code>: \uD5C8\uC6A9\uB41C \uBA54\uC18C\uB4DC \uC815\uBCF4</li><li><code>Access-Control-Allow-Headers</code>: \uD5C8\uC6A9\uB41C \uD5E4\uB354\uC758 \uBAA9\uB85D</li><li><code>Access-Control-Max-Age</code>: \uAD8C\uD55C \uD5C8\uC6A9\uC744 \uCE90\uC2F1\uD55C \uC2DC\uAC04</li></ul><p>\uC0AC\uC804 \uC694\uCCAD\uC740 \uB2E4\uC74C\uACFC \uAC19\uC740 \uB2E8\uACC4\uB85C \uC9C4\uD589 \uB41C\uB2E4.</p><ol><li>\uC0AC\uC804 \uC694\uCCAD</li><li>\uC0AC\uC804 \uC694\uCCAD\uC5D0 \uB300\uD55C \uC751\uB2F5</li><li>\uC2E4\uC81C \uC694\uCCAD</li><li>\uC2E4\uC81C \uC694\uCCAD\uC5D0 \uB300\uD55C \uC751\uB2F5</li></ol><h2 id="http-\u110B\u1173\u11BC\u1103\u1161\u11B8-\u1112\u1166\u1103\u1165" tabindex="-1"><a class="header-anchor" href="#http-\u110B\u1173\u11BC\u1103\u1161\u11B8-\u1112\u1166\u1103\u1165" aria-hidden="true">#</a> HTTP \uC751\uB2F5 \uD5E4\uB354</h2><p>XHR \uD639\uC740 Fetch API\uB85C \uC694\uCCAD \uC2DC, \uD06C\uB86C \uAC1C\uBC1C\uC790\uB3C4\uAD6C Network \uD0ED\uC5D0\uC11C \uB2E4\uC74C\uACFC \uAC19\uC740 \uD654\uBA74\uC744 \uBCF8 \uC801\uC774 \uC788\uC744\uD150\uB370, \uC751\uB2F5 \uD5E4\uB354(Response Headers)\uC5D0 \uB300\uD574 \uC54C\uC544\uBCF4\uC790.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Response Headers
  Access-Control-Allow-Credentials: false
  Access-Control-Allow-Headers: *
  Access-Control-Allow-Methods: GET
  Access-Control-Allow-Origin: *
  Access-Control-Max-Age: 86400
  content-length: 5856
  content-type: application/json
  date: Mon, 31 Jan 2022 08:24:32 GMT
  server: AmazonS3
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="access-control-allow-origin" tabindex="-1"><a class="header-anchor" href="#access-control-allow-origin" aria-hidden="true">#</a> Access-Control-Allow-Origin</h3><p>\uD5C8\uC6A9\uD558\uACE0\uC790 \uD558\uB294 \uCD9C\uCC98\uB97C \uC9C0\uC815\uD558\uC5EC, \uD574\uB2F9 \uCD9C\uCC98\uAC00 \uB9AC\uC18C\uC2A4\uC5D0 \uC811\uADFC\uD560 \uC218 \uC788\uB3C4\uB85D \uD5C8\uC6A9\uD55C\uB2E4.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Access-Control-Allow-Origin: https://blog.example.com
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\uB2E4\uC74C\uACFC \uAC19\uC774 <code>*</code>\uB85C \uC124\uC815\uD55C \uACBD\uC6B0, \uCD9C\uCC98\uC5D0 \uAD00\uACC4\uC5C6\uC774 \uBAA8\uB4E0 \uB9AC\uC18C\uC2A4\uC5D0 \uC811\uADFC\uD558\uB3C4\uB85D \uD5C8\uC6A9\uD55C\uB2E4.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Access-Control-Allow-Origin: *
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="access-control-allow-methods" tabindex="-1"><a class="header-anchor" href="#access-control-allow-methods" aria-hidden="true">#</a> Access-Control-Allow-Methods</h3><p>\uB9AC\uC18C\uC2A4\uC5D0 \uC811\uADFC\uD560 \uB54C \uD5C8\uC6A9\uD558\uB294 \uBA54\uC18C\uB4DC\uB97C \uC9C0\uC815\uD55C\uB2E4. \uB2E4\uC74C\uACFC \uAC19\uC774 GET, POST, PUT, DELETE \uB4F1\uC758 HTTP \uBA54\uC18C\uB4DC\uB97C \uC9C0\uC815\uD558\uBA74 \uB41C\uB2E4.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Access-Control-Allow-Methods: GET, POST
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="access-control-allow-headers" tabindex="-1"><a class="header-anchor" href="#access-control-allow-headers" aria-hidden="true">#</a> Access-Control-Allow-Headers</h3><p>\uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 \uD5E4\uB354\uB97C \uC9C0\uC815\uD55C\uB2E4.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Access-Control-Allow-Methods: Content-Type, Authorization
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="access-control-max-age" tabindex="-1"><a class="header-anchor" href="#access-control-max-age" aria-hidden="true">#</a> Access-Control-Max-Age</h3><p>preflight \uC694\uCCAD \uACB0\uACFC\uB97C \uCE90\uC2DC\uD560 \uC218 \uC788\uB294 \uC2DC\uAC04\uC744 \uC9C0\uC815\uD55C\uB2E4.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Access-Control-Max-Age: 3600 // 1\uC2DC\uAC04
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="access-control-expose-headers" tabindex="-1"><a class="header-anchor" href="#access-control-expose-headers" aria-hidden="true">#</a> Access-Control-Expose-Headers</h3><p>\uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C \uC811\uADFC\uD560 \uC218 \uC788\uB294 \uD5E4\uB354\uB97C \uC9C0\uC815\uD55C\uB2E4.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Access-Control-Expose-Headers: X-My-Custom-Header, X-Another-Custom-Header
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="access-control-allow-credentials" tabindex="-1"><a class="header-anchor" href="#access-control-allow-credentials" aria-hidden="true">#</a> Access-Control-Allow-Credentials</h3><p>\uC694\uCCAD\uD55C <code>credentials</code> \uAC12\uC774 true\uC77C \uACBD\uC6B0, \uC751\uB2F5\uC744 \uD45C\uC2DC\uD560 \uAC74\uC9C0\uC5D0 \uB300\uD574 \uC9C0\uC815\uD55C\uB2E4.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Access-Control-Allow-Credentials: true
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\uCD9C\uCC98\uAC00 \uB2E4\uB978 \uACBD\uC6B0, request header\uC5D0 \uCFE0\uD0A4\uAC00 \uC790\uB3D9\uC73C\uB85C \uB4E4\uC5B4\uAC00\uC9C0 \uC54A\uAE30 \uB54C\uBB38\uC5D0, \uCFE0\uD0A4\uB97C \uB123\uAE30 \uC704\uD574\uC11C\uB294 \uC791\uC5C5\uC774 \uD544\uC694\uD558\uB2E4. \uC11C\uBC84\uC758 \uC751\uB2F5 \uD5E4\uB354\uC5D0\uC11C\uB294 \uD5C8\uC6A9\uB418\uC5B4\uC57C \uD558\uBA70, \uC694\uCCAD \uC2DC\uC5D0\uB3C4 \uB2E4\uC74C\uACFC \uAC19\uC740 \uC791\uC5C5\uC774 \uD544\uC694\uD558\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// XHR \uC0AC\uC6A9</span>
<span class="token keyword">const</span> req <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
req<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&#39;GET&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;http://blog.example.com&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
req<span class="token punctuation">.</span>withCredentials <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
req<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Fetch API \uC0AC\uC6A9</span>
<span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&#39;http://blog.example.com&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  credentials<span class="token operator">:</span> <span class="token string">&quot;include&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,68);function t(c,l){return o}var i=s(a,[["render",t]]);export{i as default};