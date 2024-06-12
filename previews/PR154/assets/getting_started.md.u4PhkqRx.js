import{_ as s,c as a,o as e,a3 as i}from"./chunks/framework.5wL6qQiB.js";const g=JSON.parse('{"title":"Getting started","description":"","frontmatter":{},"headers":[],"relativePath":"getting_started.md","filePath":"getting_started.md","lastUpdated":null}'),t={name:"getting_started.md"},n=i(`<h1 id="Getting-started" tabindex="-1">Getting started <a class="header-anchor" href="#Getting-started" aria-label="Permalink to &quot;Getting started {#Getting-started}&quot;">​</a></h1><h2 id="Simple-method" tabindex="-1">Simple method <a class="header-anchor" href="#Simple-method" aria-label="Permalink to &quot;Simple method {#Simple-method}&quot;">​</a></h2><p>You can simply add <code>using DocumenterVitepress</code> to your <code>make.jl</code> file, and replace <code>format = HTML(...)</code> in <code>makedocs</code> with:</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">makedocs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    format </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> MarkdownVitepress</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        repo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&lt;url_to_your_repo&gt;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    )</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>and that should be it!</p><p>The section <a href="/DocumenterVitepress.jl/previews/PR154/getting_started#Advanced-method">Advanced method</a> describes how to get more control over your Vitepress build.</p><h3 id="Developing-docs-locally" tabindex="-1">Developing docs locally <a class="header-anchor" href="#Developing-docs-locally" aria-label="Permalink to &quot;Developing docs locally {#Developing-docs-locally}&quot;">​</a></h3><p>In order to develop docs locally, you can add the <code>clean=false</code> parameter to <code>makedocs</code>, and call <code>DocumenterVitepress.dev_docs(&quot;/path/to/docs/build&quot;)</code> in some other REPL. This works with LiveServer.jl based approaches as well. Note that the <code>dev_docs</code> call cannot be in the file that LiveServer is watching</p><h2 id="Advanced-method" tabindex="-1">Advanced method <a class="header-anchor" href="#Advanced-method" aria-label="Permalink to &quot;Advanced method {#Advanced-method}&quot;">​</a></h2><p>If you want to customize your Vitepress build, including CSS etc., you will want to add the necessary Vitepress files to your <code>docs/src/.vitepress</code> folder.</p><p>As a tutorial, we will go through and explain the folder and files structure used to generate this website. You could use this as a template for your project&#39;s documentation.</p><div class="tip custom-block"><p class="custom-block-title">Quick start</p><p>In general, you can copy the <code>template</code> folder to your <code>docs</code> folder and the <code>.github/Documenter.yml</code> action file from <a href="https://github.com/LuxDL/DocumenterVitepress.jl" target="_blank" rel="noreferrer">DocumenterVitepress.jl</a> to your repo, and be pretty much good to go and edit docs as usual!</p></div><p>Since we&#39;re concerned only with documentation, we&#39;ll specifically look at the <code>docs</code> folder of your Julia project or package here.</p><p>For more information on how to structure this, see the <a href="https://documenter.juliadocs.org/stable/man/guide/" target="_blank" rel="noreferrer">Documenter.jl guide</a>! In this quick start, we will focus solely on how to set up DocumenterVitepress assuming you already have some basic docs (even just an <code>index.md</code> will do).</p><h2 id="Project-structure" tabindex="-1">Project structure <a class="header-anchor" href="#Project-structure" aria-label="Permalink to &quot;Project structure {#Project-structure}&quot;">​</a></h2><p>In order to start as quickly as possible, we recommend you copy the <code>Project.toml</code>, <code>make.jl</code>, <code>package.json</code>, and <code>src</code> folders to your own documentation.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>DocumenterVitepress/docs</span></span>
<span class="line"><span>├── Project.toml</span></span>
<span class="line"><span>├── make.jl</span></span>
<span class="line"><span>├── package-lock.json</span></span>
<span class="line"><span>├── package.json</span></span>
<span class="line"><span>└── src</span></span>
<span class="line"><span>    ├── getting_started.md</span></span>
<span class="line"><span>    ├── index.md</span></span>
<span class="line"><span>    └── assets</span></span>
<span class="line"><span>        └── favicon.ico</span></span>
<span class="line"><span>        └── logo_dark.png</span></span>
<span class="line"><span>    └── .vitepress</span></span>
<span class="line"><span>        ├── config.mts</span></span>
<span class="line"><span>        └── theme</span></span>
<span class="line"><span>            └── index.ts</span></span>
<span class="line"><span>            └── style.css</span></span></code></pre></div><p>You can ignore the rest of the files which are actually in <code>DocumenterVitepress/docs/src</code> for now - those show how to use advanced APIs, like</p><h2 id="VitePress-Installation" tabindex="-1">VitePress Installation <a class="header-anchor" href="#VitePress-Installation" aria-label="Permalink to &quot;VitePress Installation {#VitePress-Installation}&quot;">​</a></h2><p>Start at the <code>docs</code> level:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $</span></span></code></pre></div><h3 id="Prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#Prerequisites" aria-label="Permalink to &quot;Prerequisites {#Prerequisites}&quot;">​</a></h3><p>DocumenterVitepress.jl is completely self-contained and installs all of its dependencies (including its own isolated version of <code>npm</code>) automatically.</p><p>However, to view your documentation live when developing locally, you will need to install <code>npm</code> and instantiate the</p><p>VitePress can be used on its own, or be installed into an existing project. In both cases, you can install it with:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-XaS3c" id="tab-_lrmVd5" checked><label for="tab-_lrmVd5">npm</label><input type="radio" name="group-XaS3c" id="tab-OFUnjj8"><label for="tab-OFUnjj8">pnpm</label><input type="radio" name="group-XaS3c" id="tab-b4e_SIn"><label for="tab-b4e_SIn">yarn</label><input type="radio" name="group-XaS3c" id="tab-VkggyIP"><label for="tab-VkggyIP">bun</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bun</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress</span></span></code></pre></div></div></div><h2 id="Build-new-docs-from-docs/src" tabindex="-1">Build new docs from docs/src <a class="header-anchor" href="#Build-new-docs-from-docs/src" aria-label="Permalink to &quot;Build new docs from docs/src {#Build-new-docs-from-docs/src}&quot;">​</a></h2><p>To start working on your docs do the following steps:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $</span></span></code></pre></div><p>Then, in <code>docs</code> start a julia session and activate a new environment.</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">julia</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">julia</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pkg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">activate</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span></span></code></pre></div><p>Add packages as necessary. Here, we will need</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pkg</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> add DocumenterVitepress, Documenter</span></span></code></pre></div><p>These packages will be used in the <code>make.jl</code> file.</p><h2 id="Setting-up-the-Folder-Structure" tabindex="-1">Setting up the Folder Structure <a class="header-anchor" href="#Setting-up-the-Folder-Structure" aria-label="Permalink to &quot;Setting up the Folder Structure {#Setting-up-the-Folder-Structure}&quot;">​</a></h2><p>The files for this page in the <code>docs</code> folder have the following structure:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docs/</span></span>
<span class="line"><span>├── Project.toml</span></span>
<span class="line"><span>├── make.jl</span></span>
<span class="line"><span>├── package-lock.json</span></span>
<span class="line"><span>├── package.json</span></span>
<span class="line"><span>└── src</span></span>
<span class="line"><span>    ├── getting_started.md</span></span>
<span class="line"><span>    ├── index.md</span></span>
<span class="line"><span>    └── assets</span></span>
<span class="line"><span>        └── favicon.ico</span></span>
<span class="line"><span>        └── logo_dark.png</span></span>
<span class="line"><span>    └── .vitepress</span></span>
<span class="line"><span>        ├── config.mts</span></span>
<span class="line"><span>        └── theme</span></span>
<span class="line"><span>            └── index.ts</span></span>
<span class="line"><span>            └── style.css</span></span></code></pre></div><p>Then, run <code>docs/make.jl</code>, and in another terminal in the <code>docs</code> directory, run:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs:dev</span></span></code></pre></div><p>This will deploy your documentation locally on a webserver. See <a href="https://vitepress.dev/guide/getting-started#up-and-running" target="_blank" rel="noreferrer">here</a> to know more.</p>`,40),l=[n];function p(o,d,c,r,h,k){return e(),a("div",null,l)}const m=s(t,[["render",p]]);export{g as __pageData,m as default};
