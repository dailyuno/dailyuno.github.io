import{c as n}from"./app.49c6a941.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h2 id="\u1103\u1173\u11AF\u110B\u1165\u1100\u1161\u1106\u1167" tabindex="-1"><a class="header-anchor" href="#\u1103\u1173\u11AF\u110B\u1165\u1100\u1161\u1106\u1167" aria-hidden="true">#</a> \uB4E4\uC5B4\uAC00\uBA70</h2><p>\uD0C0\uC785\uC2A4\uD06C\uB9BD\uD2B8\uB294 \uD0C0\uC785\uC744 \uBA85\uC2DC\uD560 \uB54C \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 \uC720\uB2C8\uC628(|)\uACFC \uC778\uD130\uC139\uC158(&amp;)\uC744 \uC81C\uACF5\uD55C\uB2E4. \uAC01\uAC01\uC758 \uC5F0\uC0B0 \uD0A4\uC6CC\uB4DC\uB97C \uD1B5\uD574, \uCF54\uB4DC\uC758 \uC911\uBCF5\uC744 \uB9C9\uC744 \uC218 \uC788\uC73C\uBA70 \uBCF4\uB2E4 \uB098\uC740 \uCF54\uB4DC\uC758 \uC791\uC131\uC774 \uAC00\uB2A5\uD558\uB2E4.</p><h2 id="\u110B\u1172\u1102\u1175\u110B\u1169\u11AB-\u1110\u1161\u110B\u1175\u11B8-union-type" tabindex="-1"><a class="header-anchor" href="#\u110B\u1172\u1102\u1175\u110B\u1169\u11AB-\u1110\u1161\u110B\u1175\u11B8-union-type" aria-hidden="true">#</a> \uC720\uB2C8\uC628 \uD0C0\uC785 (Union Type)</h2><p>\uC720\uB2C8\uC628 \uD0C0\uC785\uC740 \uD5C8\uC6A9\uD558\uACE0\uC790 \uD558\uB294 \uD2B9\uC815 \uD0C0\uC785\uB4E4\uC744 \uBA85\uC2DC\uD558\uAE30 \uC704\uD574\uC11C \uC0AC\uC6A9\uB41C\uB2E4. <code>|</code>\uC744 \uC0AC\uC6A9\uD558\uC5EC, <code>A | B | C</code> \uB4F1\uC758 \uD615\uD0DC\uB85C \uD0C0\uC785\uC744 \uC5F0\uACB0\uD560 \uC218 \uC788\uB2E4.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">calc</span><span class="token punctuation">(</span>price<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\uC704 \uCF54\uB4DC\uB294 <code>price</code> \uC778\uC790\uC758 \uD0C0\uC785\uC774 \uBB38\uC790\uC5F4\uC774\uAC70\uB098 \uC22B\uC790\uB2E4\uB77C\uB294 OR \uC5F0\uC0B0\uC790\uC640 \uAC19\uC740 \uC758\uBBF8\uB97C \uAC00\uC9C4\uB2E4. <code>any</code> \uD0C0\uC785\uC744 \uC0AC\uC6A9\uD55C\uB2E4\uBA74 \uBB38\uC790\uC5F4\uACFC \uC22B\uC790 \uC774\uC678\uC758 \uD0C0\uC785\uC744 \uD5C8\uC6A9\uD558\uAC8C \uB418\uB294\uB370, \uC720\uB2C8\uC628\uC740 \uC6D0\uD558\uACE0\uC790 \uD558\uB294 \uD0C0\uC785\uB9CC \uD5C8\uC6A9\uD560 \uC218 \uC788\uC5B4\uC11C \uC720\uC6A9\uD558\uB2E4.</p><p>\uC720\uB2C8\uC628\uC744 \uAD6C\uC131\uD558\uB294 \uD0C0\uC785\uB4E4 \uC911 \uD558\uB098\uC77C \uD544\uC694\uB294 \uC5C6\uC73C\uBA70, \uB2E4\uC74C\uACFC \uAC19\uC774 \uC591\uCABD \uBAA8\uB450\uC5D0 \uC18D\uD558\uB294 \uAC83\uB3C4 \uAC00\uB2A5\uD558\uB2E4. \uB2E4\uB9CC \uAD6C\uC131\uD558\uB294 \uD0C0\uC785\uB4E4 \uC911 \uD558\uB098\uC758 \uC694\uAC74\uC740 \uB9CC\uC871\uD574\uC57C \uD558\uBA70, \uB9CC\uC871\uD558\uC9C0 \uBABB \uD560 \uACBD\uC6B0 \uB204\uB77D\uD588\uB2E4\uACE0 \uAC04\uC8FC\uD55C\uB2E4.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">User</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">Employee</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  department<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> userOrEmployee<span class="token operator">:</span> User <span class="token operator">|</span> Employee<span class="token punctuation">;</span>

<span class="token comment">// User</span>
userOrEmployee <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;\uD64D\uAE38\uB3D9&quot;</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// Employee</span>
userOrEmployee <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;\uAE40\uC758\uC655&quot;</span><span class="token punctuation">,</span>
  department<span class="token operator">:</span> <span class="token string">&quot;BE \uAC1C\uBC1C&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// User &amp; Employee</span>
userOrEmployee <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;\uAE40\uCCA0\uC218&quot;</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
  department<span class="token operator">:</span> <span class="token string">&quot;FE \uAC1C\uBC1C&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><h2 id="\u110B\u1175\u11AB\u1110\u1165\u1109\u1166\u11A8\u1109\u1167\u11AB-\u1110\u1161\u110B\u1175\u11B8-intersection-type" tabindex="-1"><a class="header-anchor" href="#\u110B\u1175\u11AB\u1110\u1165\u1109\u1166\u11A8\u1109\u1167\u11AB-\u1110\u1161\u110B\u1175\u11B8-intersection-type" aria-hidden="true">#</a> \uC778\uD130\uC139\uC158 \uD0C0\uC785 (Intersection Type)</h2><p>\uC778\uD130\uC139\uC158 \uD0C0\uC785\uC740 \uAD6C\uC131\uD558\uB294 \uD0C0\uC785\uB4E4\uC744 \uBAA8\uB450 \uB9CC\uC871\uD558\uB294 \uD0C0\uC785\uC744 \uC758\uBBF8\uD55C\uB2E4. <code>&amp;</code>\uC744 \uC0AC\uC6A9\uD558\uC5EC, <code>A &amp; B &amp; C</code>\uC758 \uD615\uD0DC\uB85C \uD0C0\uC785\uB4E4\uC744 \uC5F0\uACB0\uD560 \uC218 \uC788\uB2E4.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">User</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">Employee</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  department<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">EmployeeUser</span> <span class="token operator">=</span> User <span class="token operator">&amp;</span> Employee<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\uC704 \uCF54\uB4DC\uB294 <code>User</code>\uC640 <code>Employee</code> \uD0C0\uC785\uC758 \uAD6C\uC131 \uC694\uC18C\uB97C \uBAA8\uB450 \uB9CC\uC871\uD574\uC57C \uD55C\uB2E4\uACE0 \uC778\uD130\uC139\uC158 \uD0C0\uC785\uC73C\uB85C \uC815\uC758\uD55C \uD0C0\uC785 \uBCC0\uC218\uB2E4. \uD574\uB2F9 \uD0C0\uC785 \uBCC0\uC218\uB294 \uB2E4\uC74C\uACFC \uAC19\uC774 \uC0AC\uC6A9\uD560 \uC218 \uC788\uB2E4. \uAD6C\uC131\uD558\uB294 \uD0C0\uC785\uB4E4\uC758 \uC870\uAC74\uC744 \uBAA8\uB450 \uB9CC\uC871\uD574\uC57C \uD558\uBA70, \uB9CC\uC871\uD558\uC9C0 \uBABB \uD560 \uACBD\uC6B0\uAC00 \uC5D0\uB7EC\uAC00 \uBC1C\uC0DD\uD55C\uB2E4.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> employeeUser1<span class="token operator">:</span> EmployeeUser<span class="token punctuation">;</span>

employeeUser1 <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;\uAE40\uCCA0\uC218&quot;</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
  department<span class="token operator">:</span> <span class="token string">&quot;FE \uAC1C\uBC1C&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="\u110C\u116E\u110B\u1174\u110C\u1165\u11B7" tabindex="-1"><a class="header-anchor" href="#\u110C\u116E\u110B\u1174\u110C\u1165\u11B7" aria-hidden="true">#</a> \uC8FC\uC758\uC810</h2><p>\uC778\uD130\uC139\uC158 \uD0C0\uC785\uC758 \uACBD\uC6B0 \uD574\uB2F9 \uC0AC\uD56D\uC774 \uC5C6\uC73C\uB098 \uC720\uB2C8\uC628 \uD0C0\uC785\uC5D0\uC11C\uB294 \uC8FC\uC758\uD574\uC57C \uD560 \uC0AC\uD56D\uC774 \uC788\uB2E4. \uB2E4\uC74C\uACFC \uAC19\uC774 <code>User</code>\uC640 <code>Employee</code> \uD0C0\uC785\uC744 \uBAA8\uB450 \uBC1B\uB294 \uD568\uC218\uAC00 \uC788\uB2E4\uACE0 \uAC00\uC815\uD574\uBCF4\uC790.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">User</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">Employee</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  department<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">EmployeeOrUser</span> <span class="token operator">=</span> User <span class="token operator">|</span> Employee<span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">print</span><span class="token punctuation">(</span>user<span class="token operator">:</span> EmployeeOrUser<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> 
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Error</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\uD0C0\uC785\uC2A4\uD06C\uB9BD\uD2B8\uB294 <code>print</code> \uD568\uC218\uB97C \uD638\uCD9C\uD560 \uB54C, <code>User</code>\uC640 <code>Employee</code> \uD0C0\uC785 \uC911 \uC5B4\uB5A4 \uD0C0\uC785\uC774 \uC62C\uC9C0 \uC54C \uC218 \uC5C6\uB2E4. \uC989 \uC5B4\uB5A4 \uD0C0\uC785\uC774 \uC624\uB354\uB77C\uB3C4 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD558\uC9C0 \uC54A\uB3C4\uB85D \uD558\uB294\uB370, \uC774 \uACBD\uC6B0\uC5D0\uB294 \uBC94\uC704\uB97C \uD55C\uC815\uD558\uC9C0 \uC54A\uB294 \uC774\uC0C1 \uACF5\uD1B5\uB41C \uD504\uB85C\uD37C\uD2F0\uB9CC \uC0AC\uC6A9\uC774 \uAC00\uB2A5\uD558\uB2E4.</p><p>\uD2B9\uC815 \uD0C0\uC785\uC758 \uD504\uB85C\uD37C\uD2F0\uB97C \uC0AC\uC6A9\uD558\uAE30\uB97C \uC6D0\uD55C\uB2E4\uBA74 \uD568\uC218 \uB0B4\uBD80\uC5D0\uC11C \uD0C0\uC785 \uAC00\uB4DC\uB97C \uD1B5\uD574 \uD0C0\uC785 \uBC94\uC704\uB97C \uD55C\uC815\uD574\uC57C \uD55C\uB2E4\uB294 \uC810\uC744 \uC720\uC758\uD558\uAE38 \uBC14\uB780\uB2E4.</p>`,18);function e(t,o){return p}var r=s(a,[["render",e]]);export{r as default};
