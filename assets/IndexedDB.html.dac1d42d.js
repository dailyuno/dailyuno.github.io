import{c as n}from"./app.49c6a941.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h2 id="\u1103\u1173\u11AF\u110B\u1165\u1100\u1161\u1106\u1167" tabindex="-1"><a class="header-anchor" href="#\u1103\u1173\u11AF\u110B\u1165\u1100\u1161\u1106\u1167" aria-hidden="true">#</a> \uB4E4\uC5B4\uAC00\uBA70</h2><p>\uC6B0\uB9AC\uB294 LocalStorage\uC640 Cookie\uB97C \uC0AC\uC6A9\uD558\uC5EC \uBE0C\uB77C\uC6B0\uC800\uC758 \uB370\uC774\uD130\uB97C \uC800\uC7A5\uD560 \uC218 \uC788\uC73C\uB098, \uAC01\uAC01 \uC800\uC7A5\uD560 \uC218 \uC788\uB294 \uD55C\uACC4\uAC00 \uC874\uC7AC\uD55C\uB2E4. \uBB3C\uB860 LocalStorage\uB294 Cookie\uC5D0 \uBE44\uD574\uC11C \uC800\uC7A5\uD560 \uC218 \uC788\uB294 \uACF5\uAC04\uC758 \uD06C\uAE30\uB294 \uD558\uC9C0\uB9CC \uC5EC\uC804\uD788 \uC774\uBBF8\uC9C0\uC640 \uAC19\uC740 \uB370\uC774\uD130\uC758 \uC800\uC7A5\uC740 \uC5B4\uB835\uB2E4\uACE0 \uBD10\uC57C\uD55C\uB2E4.</p><p>\uC774 \uB54C \uC6B0\uB9AC\uB294 IndexedDB\uC758 \uC0AC\uC6A9\uC744 \uACE0\uB824\uD560 \uC218 \uC788\uB294\uB370, IndexedDB\uB294 \uC55E\uC11C \uC124\uBA85\uD55C \uC800\uC7A5 \uACF5\uAC04\uC758 \uBB38\uC81C\uB97C \uBCF4\uC644\uD558\uACE0 \uC0AC\uC6A9\uC790\uC758 \uBE0C\uB77C\uC6B0\uC800\uC5D0 \uB370\uC774\uD130\uB97C \uC601\uAD6C\uC801\uC73C\uB85C \uC800\uC7A5\uD560 \uC218 \uC788\uB2E4. IndexedDB\uB97C \uC0AC\uC6A9\uD558\uC5EC \uB124\uD2B8\uC6CC\uD06C \uC0C1\uD0DC\uC5D0 \uC0C1\uAD00\uC5C6\uC774 \uCFFC\uB9AC \uAE30\uB2A5\uC744 \uC774\uC6A9\uD560 \uC218 \uC788\uB294 \uC6F9 \uC5B4\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uB9CC\uB4E4 \uC218 \uC788\uAE30 \uB54C\uBB38\uC5D0, \uC6F9 \uC5B4\uD50C\uB9AC\uCF00\uC774\uC158\uC740 \uC628\uB77C\uC778\uACFC \uC624\uD504\uB77C\uC778 \uD658\uACBD\uC5D0\uC11C \uBAA8\uB450 \uB3D9\uC791\uD560 \uC218 \uC788\uB2E4.</p><h2 id="indexeddb-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#indexeddb-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> IndexedDB \uC0AC\uC6A9\uD558\uAE30</h2><p>\uBA3C\uC800 IndexedDB\uB294 \uAE30\uC874\uC5D0 \uC0AC\uC6A9\uD588\uB358 \uB2E4\uB978 \uC804\uC5ED \uAC1D\uCCB4\uC640\uB294 \uB2E4\uB974\uAC8C \uC0AC\uC6A9\uD558\uB294 \uBE0C\uB77C\uC6B0\uC800\uC5D0 \uB530\uB77C IndexedDB\uB97C \uBD80\uB974\uB294 \uC774\uB984\uC774 \uB2E4\uB974\uB2E4. \uB2E4\uD589\uD788\uB3C4 \uBE0C\uB77C\uC6B0\uC800\uB9C8\uB2E4 IndexedDB\uB97C \uC0AC\uC6A9\uD558\uB294 \uBC29\uBC95\uC774 \uB2E4\uB978 \uAC74 \uC544\uB2C8\uB2E4.</p><p>\uB2E4\uC74C\uACFC \uAC19\uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0 \uC601\uD5A5\uC744 \uBC1B\uC9C0 \uC54A\uACE0, \uBCC0\uC218/\uC0C1\uC218\uC5D0 \uAC12\uC744 \uC800\uC7A5\uD574\uC11C \uC0AC\uC6A9\uD560 \uC218 \uC788\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> indexedDB <span class="token operator">=</span>
  window<span class="token punctuation">.</span>indexedDB <span class="token operator">||</span> <span class="token comment">// \uC775\uC2A4, \uD06C\uB86C</span>
  window<span class="token punctuation">.</span>webkitIndexedDB <span class="token operator">||</span> <span class="token comment">// \uC0AC\uD30C\uB9AC</span>
  window<span class="token punctuation">.</span>mozIndexedDB <span class="token operator">||</span> <span class="token comment">// \uD30C\uC774\uC5B4\uD3ED\uC2A4</span>
  window<span class="token punctuation">.</span>msIndexedDB<span class="token punctuation">;</span> <span class="token comment">// \uC5E3\uC9C0</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\uC774\uB807\uAC8C \uC800\uC7A5\uD55C IndexedDB \uAC1D\uCCB4\uB294 <code>open</code> \uBA54\uC18C\uB4DC\uB97C \uD1B5\uD574 DB\uB97C \uC5F4 \uC218 \uC788\uB2E4. DB\uB97C \uC5F4\uAE30 \uC704\uD574\uC11C\uB294 <code>name</code>\uACFC <code>version</code> \uB450 \uAC1C\uC758 \uC778\uC790\uB97C \uC804\uB2EC\uD574\uC57C \uD55C\uB2E4.</p><p><code>name</code>\uC740 \uC77C\uBC18\uC801\uC73C\uB85C DB \uC0DD\uC131\uD560 \uB54C \uC774\uB984 \uC9C0\uC5B4\uC8FC\uB294 \uAC83\uACFC \uB3D9\uC77C\uD558\uAC8C, IndexedDB\uB3C4 \uC0AC\uC6A9\uD558\uAE30 \uC704\uD574\uC11C\uB294 \uC774\uB984\uC744 \uC124\uC815\uD574\uC57C \uD55C\uB2E4. \uB2E4\uB978 \uC5B4\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uC0AC\uC6A9\uD558\uB294 IndexedDB\uC640 \uC911\uBCF5\uB418\uC9C0 \uC54A\uB3C4\uB85D \uC8FC\uC758\uD574\uC57C \uD55C\uB2E4.</p><p><code>version</code>\uC740 \uD604\uC7AC \uC0AC\uC6A9\uD560 IndexedDB\uC758 \uBC84\uC804\uC744 \uC790\uC5F0\uC218\uB97C \uC9C0\uC815\uD558\uBA74 \uB41C\uB2E4. \uB118\uAE30\uC9C0 \uC54A\uC744 \uACBD\uC6B0, \uAE30\uBCF8 \uAC12 1\uB85C \uC801\uC6A9\uB41C\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">&quot;20180411db&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> version <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> req <span class="token operator">=</span> indexedDB<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> version<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="indexeddb-\u110B\u1175\u1107\u1166\u11AB\u1110\u1173" tabindex="-1"><a class="header-anchor" href="#indexeddb-\u110B\u1175\u1107\u1166\u11AB\u1110\u1173" aria-hidden="true">#</a> IndexedDB \uC774\uBCA4\uD2B8</h2><p>open \uBA54\uC18C\uB4DC\uB97C \uC0AC\uC6A9\uD558\uC5EC IndexedDB\uB97C \uC5F4 \uACBD\uC6B0, <code>IDBRequest</code> \uAC1D\uCCB4\uAC00 \uBC18\uD658\uB418\uBA70 \uB2E4\uC74C\uACFC \uAC19\uC740 \uC774\uBCA4\uD2B8\uB4E4\uC774 \uBC1C\uC0DD\uD55C\uB2E4.</p><h3 id="\u1109\u1165\u11BC\u1100\u1169\u11BC-success" tabindex="-1"><a class="header-anchor" href="#\u1109\u1165\u11BC\u1100\u1169\u11BC-success" aria-hidden="true">#</a> \uC131\uACF5 (success)</h3><p>\uC694\uCCAD\uD55C \uC774\uB984\uACFC \uBC84\uC804\uC73C\uB85C IndexedDB\uB97C \uC131\uACF5\uC801\uC73C\uB85C \uC5F4\uC5C8\uC744 \uB54C, \uC774\uBCA4\uD2B8\uAC00 \uBC1C\uC0DD\uD55C\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// indexedDB\uAC00 \uC815\uC0C1\uC801\uC73C\uB85C \uC5F4\uB838\uC744 \uACBD\uC6B0 \uC2E4\uD589\uB418\uB294 \uC774\uBCA4\uD2B8</span>
req<span class="token punctuation">.</span><span class="token function-variable function">onsuccess</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">ev</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  db <span class="token operator">=</span> ev<span class="token punctuation">.</span>target<span class="token punctuation">.</span>result<span class="token punctuation">;</span> <span class="token comment">// IDBDatabase \uAC1D\uCCB4</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="\u1109\u1175\u11AF\u1111\u1162-error" tabindex="-1"><a class="header-anchor" href="#\u1109\u1175\u11AF\u1111\u1162-error" aria-hidden="true">#</a> \uC2E4\uD328 (error)</h3><p>\uC694\uCCAD\uD55C \uC774\uB984\uC774 \uAC19\uACE0 \uBC84\uC804\uC774 \uB0AE\uC740 \uACBD\uC6B0\uC5D0 \uC5D0\uB7EC \uC774\uBCA4\uD2B8\uAC00 \uBC1C\uC0DD\uD55C\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// indexedDB\uAC00 \uC815\uC0C1\uC801\uC73C\uB85C \uC5F4\uB9AC\uC9C0 \uC54A\uC558\uC744 \uACBD\uC6B0 \uC2E4\uD589\uB418\uB294 \uC774\uBCA4\uD2B8</span>
req<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">ev</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="\u110B\u1165\u11B8\u1100\u1173\u1105\u1166\u110B\u1175\u1103\u1173-upgradeneeded" tabindex="-1"><a class="header-anchor" href="#\u110B\u1165\u11B8\u1100\u1173\u1105\u1166\u110B\u1175\u1103\u1173-upgradeneeded" aria-hidden="true">#</a> \uC5C5\uADF8\uB808\uC774\uB4DC (upgradeneeded)</h3><p>\uC694\uCCAD\uD55C \uC774\uB984\uC774 \uAC19\uACE0 \uBC84\uC804\uC774 \uAE30\uC874\uBCF4\uB2E4 \uB192\uC740 \uACBD\uC6B0\uC5D0 \uC774\uBCA4\uD2B8\uAC00 \uBC1C\uC0DD\uD55C\uB2E4. \uB2E4\uB9CC \uAE30\uC874 \uBC84\uC804 1\uC5D0\uC11C \uC2E0\uADDC \uBC84\uC804 1.1 \uC774\uB807\uAC8C \uBCC0\uACBD\uB420 \uACBD\uC6B0\uC5D0\uB294 \uBC1C\uC0DD\uD558\uC9C0 \uC54A\uB294\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// indexedDB\uC758 \uBC84\uC804\uC774 \uAE30\uC874\uBCF4\uB2E4 \uB354 \uB192\uC744\uACBD\uC6B0 \uC2E4\uD589\uB418\uB294 \uC774\uBCA4\uD2B8	(\uCD08\uAE30 \uC0DD\uC131 \uD639\uC740 \uBC84\uC804 \uC5C5\uADF8\uB808\uC774\uB4DC)</span>
req<span class="token punctuation">.</span><span class="token function-variable function">onupgradeneeded</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">ev</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  db <span class="token operator">=</span> ev<span class="token punctuation">.</span>target<span class="token punctuation">.</span>result<span class="token punctuation">;</span> <span class="token comment">// IDBDatabase \uAC1D\uCCB4</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="\u1100\u1162\u11A8\u110E\u1166-\u110C\u1165\u110C\u1161\u11BC\u1109\u1169-\u1106\u1161\u11AB\u1103\u1173\u11AF\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u1100\u1162\u11A8\u110E\u1166-\u110C\u1165\u110C\u1161\u11BC\u1109\u1169-\u1106\u1161\u11AB\u1103\u1173\u11AF\u1100\u1175" aria-hidden="true">#</a> \uAC1D\uCCB4 \uC800\uC7A5\uC18C \uB9CC\uB4E4\uAE30</h2><p>IndexedDB\uC5D0\uC11C \uC0AC\uC6A9\uD558\uAE30 \uC704\uD55C \uAC1D\uCCB4 \uC800\uC7A5\uC18C\uB294 <code>onupgradeneeded</code> \uC774\uBCA4\uD2B8 \uD578\uB4E4\uB9C1 \uD568\uC218\uC5D0\uC11C \uC0DD\uC131\uD574\uC57C \uD55C\uB2E4. <code>onsuccess</code> \uC774\uBCA4\uD2B8 \uD578\uB4E4\uB9C1 \uD568\uC218\uC5D0\uC11C \uB9CC\uB4E4 \uACBD\uC6B0, \uC5D0\uB7EC\uAC00 \uBC1C\uC0DD\uD55C\uB2E4.</p><p>\uB2E4\uC74C\uACFC \uAC19\uC774 <code>IDBDatabase</code> \uAC1D\uCCB4\uC758 <code>createObjectStore</code> \uBA54\uC18C\uB4DC\uB97C \uC0AC\uC6A9\uD574\uC11C \uD14C\uC774\uBE14\uC744 \uC0DD\uC131\uD560 \uC218 \uC788\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>req<span class="token punctuation">.</span><span class="token function-variable function">onupgradeneeded</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">ev</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  db <span class="token operator">=</span> ev<span class="token punctuation">.</span>target<span class="token punctuation">.</span>result<span class="token punctuation">;</span> <span class="token comment">// IDBDatabase \uAC1D\uCCB4</span>

  <span class="token comment">/*
   * \uAC1D\uCCB4 \uC800\uC7A5\uC18C \uC0DD\uC131
   * keyPath\uB85C \uAE30\uBCF8\uD0A4\uB97C \uC124\uC815\uD560 \uC218 \uC788\uB2E4.
   * autoIncrement\uB294 \uB370\uC774\uD130\uAC00 \uC0BD\uC77C \uB420 \uB54C\uB9C8\uB2E4 1\uC529 \uC99D\uAC00\uD574\uC8FC\uB294 \uC5ED\uD560 (\uC8FC\uB85C \uACE0\uC720 \uBC88\uD638 \uC0DD\uC131\uC5D0 \uC0AC\uC6A9\uD55C\uB2E4)
   */</span>
  db<span class="token punctuation">.</span><span class="token function">createObjectStore</span><span class="token punctuation">(</span><span class="token string">&quot;users&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>keyPath<span class="token operator">:</span> <span class="token string">&quot;idx&quot;</span><span class="token punctuation">,</span> autoIncrement<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\uB2E4\uB9CC \uAE30\uC874\uC5D0 \uD14C\uC774\uBE14\uC774 \uC874\uC7AC\uD558\uB294 \uACBD\uC6B0 \uC5D0\uB7EC\uAC00 \uBC1C\uC0DD\uD560 \uC218\uB3C4 \uC788\uB2E4. \uC5D0\uB7EC\uB97C \uBC29\uC9C0\uD558\uAE30 \uC704\uD574\uC11C\uB294 \uD14C\uC774\uBE14\uC744 \uC0AD\uC81C\uAC00 \uD544\uC694\uD560 \uC218\uB3C4 \uC788\uB294\uB370, \uB2E4\uC74C\uACFC \uAC19\uC774 \uD14C\uC774\uBE14\uC744 \uC0AD\uC81C\uD560 \uC218 \uC788\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>req<span class="token punctuation">.</span><span class="token function-variable function">onupgradeneeded</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">ev</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  db <span class="token operator">=</span> ev<span class="token punctuation">.</span>target<span class="token punctuation">.</span>result<span class="token punctuation">;</span> <span class="token comment">// IDBDatabase \uAC1D\uCCB4</span>

  <span class="token comment">// \uAE30\uC874 \uD14C\uC774\uBE14\uC774 \uC874\uC7AC\uD560\uACBD\uC6B0</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>db<span class="token punctuation">.</span>objectStoreNames<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">&quot;users&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \uD14C\uC774\uBE14 \uC0AD\uC81C \uCF54\uB4DC</span>
    db<span class="token punctuation">.</span><span class="token function">deleteObjectStore</span><span class="token punctuation">(</span><span class="token string">&quot;users&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="\u1110\u1173\u1105\u1162\u11AB\u110C\u1162\u11A8\u1109\u1167\u11AB" tabindex="-1"><a class="header-anchor" href="#\u1110\u1173\u1105\u1162\u11AB\u110C\u1162\u11A8\u1109\u1167\u11AB" aria-hidden="true">#</a> \uD2B8\uB79C\uC7AD\uC158</h2><p>\uB370\uC774\uD130\uB97C \uC81C\uC5B4\uD558\uAE30 \uC704\uD574\uC11C\uB294 \uBA3C\uC800 \uD2B8\uB79C\uC7AD\uC158(Transaction)\uC5D0 \uB300\uD574\uC11C \uC54C\uC544\uC57C \uD55C\uB2E4. IndexedDB\uC758 \uD2B8\uB79C\uC7AD\uC158\uC740 \uB2E4\uC74C\uACFC \uAC19\uC774 \uC815\uB9AC\uD560 \uC218 \uC788\uB2E4.</p><ul><li>DB\uC758 \uC0C1\uD0DC\uB97C \uBCC0\uACBD\uD558\uAE30 \uC704\uD574 \uC218\uD589\uD558\uB294 \uC791\uC5C5 \uB2E8\uC704</li><li>\uD2B8\uB79C\uC7AD\uC158\uC744 \uD1B5\uD574 \uC800\uC7A5\uC18C\uC5D0 \uC811\uADFC\uD560 \uC218 \uC788\uB2E4.</li><li>readonly, readwrite, versionchange \uC138 \uAC00\uC9C0 \uBAA8\uB4DC\uAC00 \uC874\uC7AC\uD55C\uB2E4.</li></ul><h3 id="\u1110\u1173\u1105\u1162\u11AB\u110C\u1162\u11A8\u1109\u1167\u11AB-\u1106\u1169\u1103\u1173" tabindex="-1"><a class="header-anchor" href="#\u1110\u1173\u1105\u1162\u11AB\u110C\u1162\u11A8\u1109\u1167\u11AB-\u1106\u1169\u1103\u1173" aria-hidden="true">#</a> \uD2B8\uB79C\uC7AD\uC158 \uBAA8\uB4DC</h3><h4 id="readonly" tabindex="-1"><a class="header-anchor" href="#readonly" aria-hidden="true">#</a> readonly</h4><ul><li>\uAC1D\uCCB4 \uC800\uC7A5\uC18C\uC758 \uB370\uC774\uD130\uB97C \uC77D\uC744 \uB54C</li></ul><h4 id="readwrite" tabindex="-1"><a class="header-anchor" href="#readwrite" aria-hidden="true">#</a> readwrite</h4><ul><li>\uAC1D\uCCB4 \uC800\uC7A5\uC18C\uC758 \uB370\uC774\uD130\uB97C \uC77D\uC744 \uB54C</li><li>\uAC1D\uCCB4 \uC800\uC7A5\uC18C\uC5D0 \uB370\uC774\uD130 \uCD94\uAC00/\uC218\uC815/\uC0AD\uC81C\uB4F1 \uBCC0\uACBD\uC744 \uD560 \uB54C</li><li>\uB370\uC774\uD130\uBCA0\uC774\uC2A4\uC758 \uC2A4\uD0A4\uB9C8\uB098 \uAD6C\uC870\uB97C \uBCC0\uACBD\uD560 \uB54C</li></ul><h4 id="versionchange" tabindex="-1"><a class="header-anchor" href="#versionchange" aria-hidden="true">#</a> versionchange</h4><ul><li>\uAC1D\uCCB4 \uC800\uC7A5\uC18C\uB97C \uB9CC\uB4E4 \uB54C</li><li>\uAC1D\uCCB4 \uC800\uC7A5\uC18C\uC5D0\uC11C \uC778\uB371\uC2A4\uB97C \uB9CC\uB4E4 \uAC70\uB098 \uC0AD\uC81C\uD560 \uB54C</li><li>\uB370\uC774\uD130\uBCA0\uC774\uC2A4\uC758 \uC2A4\uD0A4\uB9C8\uB098 \uAD6C\uC870\uB97C \uBCC0\uACBD\uD560 \uB54C</li></ul><h3 id="\u1110\u1173\u1105\u1162\u11AB\u110C\u1162\u11A8\u1109\u1167\u11AB-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u1110\u1173\u1105\u1162\u11AB\u110C\u1162\u11A8\u1109\u1167\u11AB-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> \uD2B8\uB79C\uC7AD\uC158 \uC0AC\uC6A9\uD558\uAE30</h3><p>\uC55E\uC11C \uC800\uC7A5\uD55C <code>IDBDatabase</code> \uAC1D\uCCB4\uC758 <code>transaction</code> \uBA54\uC18C\uB4DC\uB97C \uC0AC\uC6A9\uD574\uC11C \uAC1D\uCCB4 \uC800\uC7A5\uC18C\uC5D0 \uC811\uADFC\uD560 \uC218 \uC788\uB2E4.</p><p>\uB2E4\uC74C\uACFC \uAC19\uC774 \uBAA8\uB4DC\uB97C \uC9C0\uC815\uD558\uC9C0 \uC54A\uACE0, \uAC1D\uCCB4 \uC800\uC7A5\uC18C\uC5D0 \uC811\uADFC\uD558\uBA74 readonly \uBAA8\uB4DC\uB85C \uC5F4\uB9AC\uAC8C \uB41C\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>db<span class="token punctuation">.</span><span class="token function">transaction</span><span class="token punctuation">(</span><span class="token string">&quot;users&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// readonly</span>
db<span class="token punctuation">.</span><span class="token function">transaction</span><span class="token punctuation">(</span><span class="token string">&quot;users&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;readwrite&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// readwrite</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><code>transaction</code> \uBA54\uC18C\uB4DC\uB294 \uAC1D\uCCB4 \uC800\uC7A5\uC18C\uC5D0 \uC811\uADFC\uD560 \uC218 \uC788\uB2E4\uACE0 \uD588\uB294\uB370, \uC704 \uC608\uC81C\uCC98\uB7FC \uD55C \uAC1C\uC758 \uAC1D\uCCB4 \uC800\uC7A5\uC18C\uC5D0\uB9CC \uC811\uADFC\uD560 \uC218\uB3C4 \uC788\uACE0 \uC5EC\uB7EC \uAC1C\uC758 \uAC1D\uCCB4 \uC800\uC7A5\uC18C\uC5D0 \uC811\uADFC\uD560 \uC218\uB3C4 \uC788\uB2E4.</p><p>\uC5EC\uB7EC \uAC1C\uC758 \uAC1D\uCCB4 \uC800\uC7A5\uC18C\uC5D0 \uC811\uADFC\uD558\uAE30 \uC704\uD574\uC11C\uB294 \uBB38\uC790\uC5F4 \uD615\uC2DD\uC774 \uC544\uB2CC \uBC30\uC5F4 \uD615\uC2DD\uC73C\uB85C \uC778\uC790\uB97C \uB118\uAE30\uBA74 \uB41C\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>db<span class="token punctuation">.</span><span class="token function">transaction</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;users&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;boards&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="\u1100\u1162\u11A8\u110E\u1166-\u110C\u1165\u110C\u1161\u11BC\u1109\u1169" tabindex="-1"><a class="header-anchor" href="#\u1100\u1162\u11A8\u110E\u1166-\u110C\u1165\u110C\u1161\u11BC\u1109\u1169" aria-hidden="true">#</a> \uAC1D\uCCB4 \uC800\uC7A5\uC18C</h2><p>\uD2B8\uB79C\uC7AD\uC158\uC744 \uD1B5\uD574\uC11C \uAC1D\uCCB4 \uC800\uC7A5\uC18C\uC5D0 \uC811\uADFC\uD560 \uC218 \uC788\uB2E4\uACE0 \uD588\uB294\uB370, \uAC1D\uCCB4 \uC800\uC7A5\uC18C\uB294 DB\uC758 \uD14C\uC774\uBE14\uACFC \uC720\uC0AC\uD558\uB2E4\uACE0 \uBCFC \uC218 \uC788\uC9C0\uB9CC \uB2E4\uB978 \uC810\uB4E4\uC774 \uC874\uC7AC\uD55C\uB2E4. \uAC1D\uCCB4 \uC800\uC7A5\uC18C\uB97C \uB2E4\uC74C\uACFC \uAC19\uC774 \uC815\uB9AC\uD560 \uC218 \uC788\uB2E4.</p><ul><li>\uB370\uC774\uD130\uB97C Key-Value \uD615\uC2DD\uC73C\uB85C \uAC00\uC9C4\uB2E4.</li><li>\uAC01\uAC01\uC758 Value\uB294 \uC11C\uB85C \uB2E4\uB978 \uD615\uC2DD\uC744 \uAC00\uC9C8 \uC218 \uC788\uB2E4.</li><li>\uAC1D\uCCB4 \uC800\uC7A5\uC18C\uC758 \uC774\uB984\uC740 \uACE0\uC720\uD574\uC57C \uD55C\uB2E4.</li><li>\uB370\uC774\uD130\uB294 Key\uC5D0 \uB530\uB77C \uC624\uB984\uCC28\uC21C\uC73C\uB85C \uC815\uB82C\uB41C\uB2E4.</li></ul><h3 id="\u1100\u1162\u11A8\u110E\u1166-\u110C\u1165\u110C\u1161\u11BC\u1109\u1169-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u1100\u1162\u11A8\u110E\u1166-\u110C\u1165\u110C\u1161\u11BC\u1109\u1169-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> \uAC1D\uCCB4 \uC800\uC7A5\uC18C \uC0AC\uC6A9\uD558\uAE30</h3><p>\uC55E\uC11C \uC124\uBA85\uD55C \uAC83\uCC98\uB7FC IDBDatabase\uC758 <code>transaction</code> \uBA54\uC18C\uB4DC\uB97C \uC0AC\uC6A9\uD558\uBA74 IDBTransaction \uAC1D\uCCB4\uB97C \uBC18\uD658\uD55C\uB2E4. \uBC18\uD658 \uB41C IDBTransaction \uAC1D\uCCB4\uC758 <code>objectStore</code> \uBA54\uC18C\uB4DC\uB97C \uC0AC\uC6A9\uD558\uBA74 <code>IDBObjectStore</code> \uAC1D\uCCB4\uB97C \uBC18\uD658\uD55C\uB2E4.</p><p><code>objectSTore</code> \uBA54\uC18C\uB4DC\uC5D0\uB294 \uB370\uC774\uD130\uC5D0 \uC811\uADFC\uD560 \uAC1D\uCCB4 \uC800\uC7A5\uC18C\uC758 \uC774\uB984\uC744 \uC778\uC790\uB85C \uB118\uAE30\uBA74 \uB41C\uB2E4. \uC874\uC7AC\uD558\uC9C0 \uC54A\uB294 \uAC1D\uCCB4 \uC800\uC7A5\uC18C\uC758 \uC774\uB984\uC744 \uB118\uAE38 \uACBD\uC6B0, \uC624\uB958\uAC00 \uBC1C\uC0DD\uD558\uACE0 \uD2B8\uB79C\uC7AD\uC158\uACFC\uB294 \uB2E4\uB974\uAC8C \uC5EC\uB7EC \uAC1C\uC5D0\uB294 \uC811\uADFC\uD560 \uC218 \uC5C6\uB2E4.</p><p>\uB2E4\uC74C\uACFC \uAC19\uC774 \uC0AC\uC6A9\uD560 \uC218 \uC788\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> transaction <span class="token operator">=</span> db<span class="token punctuation">.</span><span class="token function">transaction</span><span class="token punctuation">(</span><span class="token string">&quot;users&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;readwrite&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> objectStore <span class="token operator">=</span> transaction<span class="token punctuation">.</span><span class="token function">objectStore</span><span class="token punctuation">(</span><span class="token string">&quot;users&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="\u1103\u1166\u110B\u1175\u1110\u1165-\u110C\u1166\u110B\u1165\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u1103\u1166\u110B\u1175\u1110\u1165-\u110C\u1166\u110B\u1165\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> \uB370\uC774\uD130 \uC81C\uC5B4\uD558\uAE30</h2><p>\uC774\uC81C \uD2B8\uB79C\uC7AD\uC158\uACFC \uAC1D\uCCB4 \uC800\uC7A5\uC18C\uB97C \uC0AC\uC6A9\uD558\uC5EC, \uB370\uC774\uD130\uB97C \uC81C\uC5B4\uD574\uBCF4\uC790. \uB2E4\uC74C\uACFC \uAC19\uC774 \uBCC0\uC218\uAC00 \uC120\uC5B8\uB418\uC5B4 \uC788\uB2E4\uACE0 \uAC00\uC815\uD558\uACE0, \uD574\uB2F9 \uCF54\uB4DC\uB97C \uC0DD\uB7B5\uD558\uACA0\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> transaction <span class="token operator">=</span> db<span class="token punctuation">.</span><span class="token function">transaction</span><span class="token punctuation">(</span><span class="token string">&quot;users&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;readwrite&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> objectStore <span class="token operator">=</span> transaction<span class="token punctuation">.</span><span class="token function">objectStore</span><span class="token punctuation">(</span><span class="token string">&quot;users&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\uADF8\uB9AC\uACE0 \uAC1D\uCCB4 \uC800\uC7A5\uC18C\uC758 \uBAA8\uB4E0 \uBA54\uC18C\uB4DC\uB97C \uC124\uBA85\uD558\uAE30 \uBCF4\uB2E4\uB294 \uC790\uC8FC \uC0AC\uC6A9\uD558\uB294 \uBA54\uC18C\uB4DC\uB9CC \uC77C\uBD80 \uC124\uBA85\uD558\uACA0\uB2E4.</p><h3 id="\u1103\u1166\u110B\u1175\u1110\u1165-\u110E\u116E\u1100\u1161" tabindex="-1"><a class="header-anchor" href="#\u1103\u1166\u110B\u1175\u1110\u1165-\u110E\u116E\u1100\u1161" aria-hidden="true">#</a> \uB370\uC774\uD130 \uCD94\uAC00</h3><p><code>add</code> \uBA54\uC18C\uB4DC\uB97C \uC0AC\uC6A9\uD574\uC11C, \uCD94\uAC00\uD558\uACE0 \uC2F6\uC740 \uB370\uC774\uD130\uB97C \uC6D0\uD558\uB294 \uD615\uD0DC\uB85C \uCD94\uAC00\uD560 \uC218 \uC788\uB2E4. \uC704\uC5D0\uC11C <code>key</code> \uAC12\uC740 <code>keyPath</code>\uB97C \uD1B5\uD574 idx\uB85C \uC124\uC815\uD558\uACE0 1\uC529 \uC99D\uAC00\uD558\uB3C4\uB85D <code>autoIncrement</code>\uB97C \uC124\uC815\uD558\uC600\uAE30 \uB54C\uBB38\uC5D0 \uC0DD\uB7B5\uD560 \uC218 \uC788\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>objectStore<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><code>keyPath</code>\uAC00 \uC124\uC815\uB418\uC9C0 \uC54A\uC740 \uACBD\uC6B0\uC5D0\uB294 \uB450 \uBC88\uC9F8 \uC778\uC790\uB97C \uD1B5\uD574 <code>key</code> \uAC12\uC744 \uC124\uC815\uD574\uC57C \uD55C\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>objectStore<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="\u1103\u1166\u110B\u1175\u1110\u1165-\u1109\u1161\u11A8\u110C\u1166" tabindex="-1"><a class="header-anchor" href="#\u1103\u1166\u110B\u1175\u1110\u1165-\u1109\u1161\u11A8\u110C\u1166" aria-hidden="true">#</a> \uB370\uC774\uD130 \uC0AD\uC81C</h3><p>\uB370\uC774\uD130\uAC00 \uAC00\uC9C0\uACE0 \uC788\uB294 \uACE0\uC720\uD55C key\uAC12\uC73C\uB85C \uC0AD\uC81C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>objectStore<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="\u1103\u1166\u110B\u1175\u1110\u1165-\u1109\u116E\u110C\u1165\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1103\u1166\u110B\u1175\u1110\u1165-\u1109\u116E\u110C\u1165\u11BC" aria-hidden="true">#</a> \uB370\uC774\uD130 \uC218\uC815</h3><p>\uD14C\uC774\uBE14 \uC0DD\uC131 \uC2DC \uC124\uC815\uD55C <code>keyPath</code> \uAC12\uC744 \uD1B5\uD574\uC11C, \uB370\uC774\uD130\uC758 \uAC12\uC744 \uC218\uC815\uD560 \uC218 \uC788\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>objectStore<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  idx<span class="token operator">:</span> nowIdx<span class="token punctuation">,</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><code>keyPath</code>\uAC00 \uC124\uC815\uB418\uC9C0 \uC54A\uC740 \uACBD\uC6B0\uC5D0\uB294 \uB450 \uBC88\uC9F8 \uC778\uC790\uC5D0 <code>key</code>\uB97C \uB118\uACA8\uC11C \uC218\uC815\uD574\uC57C \uD55C\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>objectStore<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="\u1103\u1166\u110B\u1175\u1110\u1165-\u110C\u1169\u1112\u116C" tabindex="-1"><a class="header-anchor" href="#\u1103\u1166\u110B\u1175\u1110\u1165-\u110C\u1169\u1112\u116C" aria-hidden="true">#</a> \uB370\uC774\uD130 \uC870\uD68C</h3><p>\uC6D0\uD558\uB294 \uB370\uC774\uD130\uC758 key \uAC12\uC744 \uD1B5\uD574\uC11C \uAC00\uC9C0\uACE0 \uC62C \uC218 \uC788\uB2E4. \uBE44\uB3D9\uAE30\uB85C \uC791\uB3D9\uD558\uAE30 \uB54C\uBB38\uC5D0 <code>success</code> \uC774\uBCA4\uD2B8 \uD578\uB4E4\uB9C1 \uD568\uC218\uC5D0\uC11C \uC870\uD68C\uD574\uC57C \uD55C\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> req <span class="token operator">=</span> objectStore<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>

req<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">ev</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span>

req<span class="token punctuation">.</span><span class="token function-variable function">onsuccess</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">ev</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  req<span class="token punctuation">.</span>result <span class="token comment">// \uB370\uC774\uD130</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="\u1103\u1166\u110B\u1175\u1110\u1165-\u110C\u1165\u11AB\u110E\u1166-\u110C\u1169\u1112\u116C" tabindex="-1"><a class="header-anchor" href="#\u1103\u1166\u110B\u1175\u1110\u1165-\u110C\u1165\u11AB\u110E\u1166-\u110C\u1169\u1112\u116C" aria-hidden="true">#</a> \uB370\uC774\uD130 \uC804\uCCB4 \uC870\uD68C</h3><p>key\uB97C \uBAA8\uB974\uB294 \uC0C1\uD0DC\uC5D0\uC11C \uB370\uC774\uD130\uB97C \uC804\uBD80 \uAC00\uC9C0\uACE0 \uC624\uAE30 \uC704\uD574\uC11C\uB294 \uC55E\uC11C \uCD94\uAC00/\uC218\uC815/\uC0AD\uC81C\uC640\uB294 \uB2E4\uB974\uAC8C <code>openCursor</code>\uB77C\uB294 \uBA54\uC18C\uB4DC\uC758 \uC0AC\uC6A9\uC774 \uD544\uC694\uD558\uB2E4. \uB2E4\uC74C\uACFC \uAC19\uC774 \uC0AC\uC6A9 \uAC00\uB2A5\uD558\uBA70, \uB2E4\uC74C \uAC12\uC744 \uC870\uD68C\uD558\uACE0 \uC2F6\uC744 \uACBD\uC6B0 <code>cursor.continue()</code>\uB97C \uC0AC\uC6A9\uD558\uBA74 \uB41C\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> transaction <span class="token operator">=</span> db<span class="token punctuation">.</span><span class="token function">transaction</span><span class="token punctuation">(</span>table<span class="token punctuation">,</span> <span class="token string">&quot;readwrite&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> objectStore <span class="token operator">=</span> transaction<span class="token punctuation">.</span><span class="token function">objectStore</span><span class="token punctuation">(</span>table<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> cur <span class="token operator">=</span> objectStore<span class="token punctuation">.</span><span class="token function">openCursor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

cur<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">ev</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span>

cur<span class="token punctuation">.</span><span class="token function-variable function">onsuccess</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">ev</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> cursor <span class="token operator">=</span> ev<span class="token punctuation">.</span>target<span class="token punctuation">.</span>result<span class="token punctuation">;</span>

  <span class="token comment">// \uB370\uC774\uD130\uAC00 \uC874\uC7AC\uD560 \uACBD\uC6B0</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>cursor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cursor<span class="token punctuation">.</span>value<span class="token punctuation">;</span> <span class="token comment">// \uD604\uC7AC \uB370\uC774\uD130\uC758 \uC815\uBCF4</span>

    <span class="token comment">// \uB2E4\uC74C \uB370\uC774\uD130\uB85C \uC774\uB3D9</span>
    cursor<span class="token punctuation">.</span><span class="token function">continue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div>`,76);function p(t,c){return e}var u=s(a,[["render",p]]);export{u as default};
