import{c as n}from"./app.49c6a941.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h2 id="\u1112\u1169\u110B\u1175\u1109\u1173\u1110\u1175\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1112\u1169\u110B\u1175\u1109\u1173\u1110\u1175\u11BC" aria-hidden="true">#</a> \uD638\uC774\uC2A4\uD305</h2><p>var\uB85C \uC815\uC758\uB41C \uBCC0\uC218\uC758 \uACBD\uC6B0, \uD574\uB2F9 \uBCC0\uC218\uAC00 \uC18D\uD55C \uC2A4\uCF54\uD504 \uBC94\uC704\uC758 \uCD5C\uC0C1\uB2E8\uC73C\uB85C \uC62C\uB77C\uAC04\uB2E4.</p><p>\uC774\uB97C \uD638\uC774\uC2A4\uD305(hoisting)\uC774\uB77C\uACE0 \uBD80\uB974\uBA70, \uC544\uB798 \uC608\uC81C\uB97C \uD1B5\uD574 \uD638\uC774\uC2A4\uD305\uC5D0 \uB300\uD574 \uC54C\uC544\uBCF4\uC790.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \uCC38\uC870 \uC5D0\uB7EC</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\uC120\uC5B8\uB418\uC9C0 \uC54A\uC740 <code>age</code> \uBCC0\uC218\uB97C \uD638\uCD9C\uD560 \uACBD\uC6B0, \uCC38\uC870 \uC5D0\uB7EC\uAC00 \uBC1C\uC0DD\uD558\uB294 \uAC83\uC744 \uD655\uC778\uD560 \uC218 \uC788\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token operator">??</span>
<span class="token keyword">var</span> age <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\uBCC0\uC218\uAC00 \uC120\uC5B8\uB418\uAE30 \uC804\uC5D0 <code>age</code>\uB97C \uD638\uCD9C\uD558\uC600\uC74C\uC5D0\uB3C4 \uBD88\uAD6C\uD558\uACE0 \uD574\uB2F9 \uCF54\uB4DC\uB294 \uC5D0\uB7EC\uAC00 \uBC1C\uC0DD\uD558\uC9C0 \uC54A\uB294\uB2E4.</p><p>\uC791\uC131\uB41C \uCF54\uB4DC\uB294 <code>age</code>\uB97C \uBA3C\uC800 \uD638\uCD9C\uD558\uACE0 \uADF8 \uC774\uD6C4\uC5D0 <code>age</code>\uB97C \uC120\uC5B8\uD558\uC600\uB294\uB370 undefined\uAC00 \uCD9C\uB825 \uB41C\uB2E4. \uC2E4\uC81C\uB85C \uCF54\uB4DC\uB294 \uC544\uB798\uC640 \uAC19\uB2E4\uACE0 \uC0DD\uAC01\uD558\uBA74 \uB41C\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> age <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefined</span>
age <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\uBCC0\uC218\uC758 \uC120\uC5B8 \uC790\uCCB4\uB9CC \uCD5C\uC0C1\uB2E8\uC5D0\uC11C \uC774\uB8E8\uC5B4\uC9C0\uBA70, \uAC12\uC758 \uD560\uB2F9\uC740 \uC6D0\uB798\uC758 \uC704\uCE58\uC5D0\uC11C \uD560\uB2F9 \uB41C\uB2E4.</p><p>\uC774\uC81C <code>let</code>\uACFC <code>const</code>\uB294 \uC5B4\uB5BB\uAC8C \uC791\uB3D9\uD558\uB294\uC9C0 \uC54C\uC544\uBCF4\uC790.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> age <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>year<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> year <span class="token operator">=</span> <span class="token number">2022</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><code>let</code>\uACFC <code>const</code>\uB97C \uC0AC\uC6A9\uD560 \uACBD\uC6B0, <code>var</code>\uC640 \uB2EC\uB9AC <code>age</code>\uC640 <strong>year</strong>\uAC12\uC774 \uCD9C\uB825\uB418\uC9C0 \uC54A\uACE0, \uCC38\uC870 \uC5D0\uB7EC\uAC00 \uBC1C\uC0DD\uD558\uB294 \uAC83\uC744 \uD655\uC778\uD560 \uC218 \uC788\uB2E4.</p><p>\uC774\uB807\uAC8C\uB9CC \uBCF4\uC558\uC744 \uB54C\uB294 <code>let</code>\uACFC <code>const</code>\uB85C \uC120\uC5B8 \uB41C \uBCC0\uC218\uB294 \uD638\uC774\uC2A4\uD305 \uB418\uC9C0 \uC54A\uB294\uB2E4\uACE0 \uC0DD\uAC01\uD560 \uC218 \uC788\uB2E4.</p><p>\uD558\uC9C0\uB9CC <code>let</code>\uACFC <code>const</code>\uB294 <code>var</code>\uC640 \uB3D9\uC77C\uD558\uAC8C \uB611\uAC19\uC774 \uD638\uC2A4\uD305\uC774 \uB418\uBA70, \uBCC0\uC218\uAC00 \uC120\uC5B8 \uB41C \uC704\uCE58\uC640 \uD638\uC774\uC2A4\uD305 \uB41C \uC704\uCE58 \uC0AC\uC774\uC5D0\uC11C \uC0AC\uC6A9\uD558\uC9C0 \uBABB \uD55C\uB2E4\uACE0 \uBCF4\uBA74 \uB41C\uB2E4.</p><p>\uC774\uB7EC\uD55C \uC0AC\uC774 \uAD6C\uAC04\uC744 Temporal Dead Zone\uC774\uB77C\uACE0 \uD55C\uB2E4.</p><h2 id="temporal-dead-zone" tabindex="-1"><a class="header-anchor" href="#temporal-dead-zone" aria-hidden="true">#</a> Temporal Dead Zone</h2><p>\uC804\uC5ED \uC2A4\uCF54\uD504\uC5D0\uC11C\uC758 \uC608\uC81C\uB4E4\uB9CC \uBCF4\uC558\uC744 \uB54C\uB294 Temporal Dead Zone\uC774 \uC65C \uD544\uC694\uD55C\uC9C0 \uBAA8\uB97C \uC218\uB3C4 \uC788\uB2E4.</p><p>\uC544\uB798 \uD568\uC218 \uC2A4\uCF54\uD504 \uD658\uACBD\uC5D0\uC11C \uC791\uB3D9\uD558\uB294 \uC608\uC81C\uB97C \uD1B5\uD574 \uC54C\uC544\uBCF4\uC790.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> age <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 20</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><code>getAge</code> \uD568\uC218\uB97C \uC2E4\uD589\uD558\uBA74 \uC804\uC5ED \uBCC0\uC218 <code>age</code>\uC758 \uAC12\uC778 20\uC774 \uCD9C\uB825\uB418\uB294 \uAC83\uC744 \uBCFC \uC218 \uC788\uB2E4.</p><p>\uADF8\uB7FC \uC774\uC81C <code>getAge</code> \uD568\uC218 \uC548\uC5D0\uC11C <code>age</code> \uBCC0\uC218\uB97C \uD638\uCD9C\uD558\uACE0 \uC120\uC5B8\uD558\uBA74 \uC5B4\uB5BB\uAC8C \uB418\uB294\uC9C0 \uC54C\uC544\uBCF4\uC790.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> age <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \uCC38\uC870 \uC5D0\uB7EC</span>
    <span class="token keyword">const</span> age <span class="token operator">=</span> <span class="token number">40</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><code>age</code> \uBCC0\uC218\uB97C \uCD9C\uB825\uD558\uC600\uC73C\uB2C8 20\uC774 \uD638\uCD9C\uB420 \uAC83\uCC98\uB7FC \uBCF4\uC774\uC9C0\uB9CC \uD574\uB2F9 \uCF54\uB4DC\uB294 \uCC38\uC870 \uC5D0\uB7EC\uAC00 \uBC1C\uC0DD\uD558\uAC8C \uB41C\uB2E4.</p><p>\uADF8 \uC774\uC720\uB294 \uBC14\uB85C <code>getAge</code> \uD568\uC218 \uC548\uC5D0\uC11C <code>age</code> \uBCC0\uC218\uB97C \uB2E4\uC2DC \uC120\uC5B8\uD558\uC5EC \uD638\uC774\uC2A4\uD305\uC774 \uBC1C\uC0DD\uB418\uC5C8\uAE30 \uB54C\uBB38\uC774\uB2E4.</p><p><strong>var</strong> \uBCC0\uC218\uB97C \uC0AC\uC6A9\uD560 \uB54C\uC640 \uB2E4\uB974\uAC8C \uBA3C\uC800 \uC5D0\uB7EC\uAC00 \uBC1C\uC0DD\uD558\uAC8C \uB418\uB2C8, Side Effect\uC744 \uC904\uC77C \uC218 \uC788\uB2E4.</p>`,26);function p(o,c){return e}var u=s(a,[["render",p]]);export{u as default};