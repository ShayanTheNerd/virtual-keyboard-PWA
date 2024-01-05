<h1>Virtual Keyboard PWA</h1>

<blockquote>
   <p>
      An elegant virtual keyboard web app with typing animation and keypress sound effect.
   </p>
</blockquote>

<figure>
   <img src="https://github.com/ShayanTheNerd/virtual-keyboard-PWA/blob/main/og-img.webp" alt="Virtual Keyboard PWA preview" />
</figure>

<h2>Overview</h2>
<h3>The challenge</h3>
<p>Users should be able to:</p>
<ul>
   <li>Receive a firendly warning if they're previweing website on a non-desktop device</li>
   <li>Have the theme match up with their system preference and toggle it manually</li>
   <li>Hear a keyboard keypress sound effect as they type, and also switch it off if they wish</li>
   <li>Install the website as a progressive web app (PWA) and use it offline</li>
</ul>

<h3>Links</h3>
<ul>
   <li>
      <a href="https://shayanthenerd.github.io/virtual-keyboard-PWA">Project homepage</a>
   </li>
   <li>
      <a href="https://github.com/ShayanTheNerd/virtual-keyboard-PWA">GitHub repository</a>
   </li>
   <li>
      <a href="https://github.com/ShayanTheNerd/virtual-keyboard-PWA/issues">Issues</a>
   </li>
   <li>
      <a href="https://github.com/ShayanTheNerd/virtual-keyboard-PWA/pulls">Pull requests</a>
   </li>
   <li>
      <a href="https://github.com/ShayanTheNerd?tab=repositories">My other projects</a>
   </li>
</ul>

<h2>My process</h2>
<h3>Built with:</h3>
<ul>
   <li>Semantic HTML</li>
   <li>
      <a href="https://tailwindcss.com">Tailwind CSS</a> - Styling
   </li>
   <li>Vanilla JavaScript</li>
</ul>

<h3>I learned:</h3>
<ul>
   <li>How PWAs work and how to implement one</li>
   <li>How to detect caps lock state and react to it</li>
   <li>How to simulate virtual typing by manipulating the text inside a text box</li>
   <li>How to dynamically generate HTML fragments while also handling exceptions</li>
   <li>How to handle theme switching (manually/automatically) and detecting user's preference</li>
</ul>

<h2>Development setup</h2>
<p>1. First, you need to clone the project:</p>

```sh
git clone https://github.com/ShayanTheNerd/virtual-keyboard-PWA.git
```

<p>
   Alternatively, you can copy the source of the project directly to your local environment using <a href="https://github.com/Rich-Harris/degit">Degit</a>:
</p>

```sh
pnpm i -g degit

degit https://github.com/ShayanTheNerd/virtual-keyboard-PWA new-project-folder
```

<p>2. Then, install required packages:</p>

```sh
pnpm i
```

<p>3. Finally, run the <code>dev</code> script to start the dev server:</p>

```sh
pnpm run dev
```

<p>Now, you can preview the project on a local server of your choice. I recommend using the <a href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer">Live Server Extension</a>.</p>

<h2>Deployment and production</h2>
<p>Before deploying the project or creating a new pull request, run the following commands and make sure there are no errors:</p>

```sh
pnpm run format

pnpm run build
```

<h2>Style Guide</h2>
<p>If you want to develop this project, please stick to these rules:</p>
<ul>
   <li>Follow the current architecture, coding paradigm, and project folder structure.</li>
   <li>Follow the current character case principals for ids, classes, variables, file and folder names, etc.</li>
   <li>Code based on the current libraries, frameworks, and packages included in the project.</li>
   <li>For styling, utilize Tailwind's features as much as possible, but also make sure to use <a href="https://getbem.com">BEM</a> methodology for naming custom CSS classes.</li>
   <li>In case you need to access an HTML element in JavaScript by a class name, prefix the class name with <code>js-</code>. For example, <code>js-submit-btn</code>.</li>
   <li>Add Git commit messages considering <a href="https://conventional-emoji-commits.site/quick-summary/summary">Conventional Commits</a>.</li>
</ul>

<h2>Contribution</h2>
<p>Your contribution is always welcome, please follow these steps:</p>
<ol>
   <li>
      <a href="https://github.com/ShayanTheNerd/virtual-keyboard-PWA/fork">Fork the project</a>.
   </li>
   <li>Create your feature branch: <code>git checkout -b feature/branch-name</code>.</li>
   <li>Make sure to follow instructions in the <a href="https://github.com/ShayanTheNerd/virtual-keyboard-PWA#style-guide">style guide</a> section.</li>
   <li>Stage all changes you made: <code>git add -A</code>.</li>
   <li>Commit all staged changes with a descriptive commit message: <code>git commit -m '✨ feat: add foo bar baz'</code>.</li>
   <li>Push everything to your feature branch: <code>git push origin feature/branch-name</code>.</li>
   <li>Create a new Pull Request.</li>
</ol>

<h2>License</h2>
<p>
   This project is licensed under <a href="https://github.com/ShayanTheNerd/virtual-keyboard-PWA/blob/main/LICENSE.md">MIT license</a>. You're free to use it, but a link to this page and mentioning the author's name is mandatory. Created by <a href="https://shayan-zamani.me">Shayan Zamani</a>.
</p>

<br />

<a href="https://github.com/ShayanTheNerd/virtual-keyboard-PWA#virtual-keyboard-PWA">back to top ⬆️</a>
