function App() {
  return (
    <div>
      <h1>Global CSS Test Page</h1>
      <p>Use this page to preview and test all global CSS styles.</p>

      <hr />

      {/* ── Typography ── */}
      <section>
        <h2>Typography</h2>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>

        <p>Paragraph — Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>

        <blockquote>Blockquote — The quick brown fox jumps over the lazy dog. This is a blockquote element used to represent quoted content from another source.</blockquote>

        <p>This paragraph contains <strong>strong (bold)</strong>, <em>emphasised (italic)</em>, <u>underlined</u>, <s>strikethrough</s>, <mark>highlighted (mark)</mark>, <small>small text</small>, <sub>subscript</sub>, <sup>superscript</sup>, <del>deleted</del>, <ins>inserted</ins>, and <abbr title="abbreviation">abbr</abbr> text.</p>

        <p>This is <code>inline code</code> within a sentence, and here is <kbd>Ctrl + C</kbd> keyboard input and a <samp>sample output</samp>.</p>

        <address>Address: 123 Example Street, City, Country</address>
      </section>

      <hr />

      {/* ── Links ── */}
      <section>
        <h2>Links</h2>
        <p><a href="#">Standard link</a></p>
        <p><a href="#">Visited link</a></p>
        <p><a href="#">Internal link</a></p>
      </section>

      <hr />

      {/* ── Lists ── */}
      <section>
        <h2>Lists</h2>

        <h3>Unordered list</h3>
        <ul>
          <li>List item one</li>
          <li>List item two
            <ul>
              <li>Nested item 2.1</li>
              <li>Nested item 2.2</li>
            </ul>
          </li>
          <li>List item three</li>
        </ul>

        <h3>Ordered list</h3>
        <ol>
          <li>First item</li>
          <li>Second item
            <ol>
              <li>Sub-item 2.1</li>
              <li>Sub-item 2.2</li>
            </ol>
          </li>
          <li>Third item</li>
        </ol>

        <h3>Definition list</h3>
        <dl>
          <dt>Term one</dt>
          <dd>Definition description for term one.</dd>
          <dt>Term two</dt>
          <dd>Definition description for term two with more detail to demonstrate the layout.</dd>
        </dl>
      </section>

      <hr />

      {/* ── Tables ── */}
      <section>
        <h2>Tables</h2>

        <table>
          <caption>Table caption — Monthly savings</caption>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Role</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Alice</td>
              <td>29</td>
              <td>Designer</td>
              <td>$85,000</td>
            </tr>
            <tr>
              <td>Bob</td>
              <td>34</td>
              <td>Developer</td>
              <td>$95,000</td>
            </tr>
            <tr>
              <td>Charlie</td>
              <td>27</td>
              <td>Manager</td>
              <td>$105,000</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3}>Total</td>
              <td>$285,000</td>
            </tr>
          </tfoot>
        </table>
      </section>

      <hr />

      {/* ── Forms ── */}
      <section>
        <h2>Forms</h2>

        <form onSubmit={(e) => e.preventDefault()}>
          <fieldset>
            <legend>Form legend / fieldset</legend>

            <div>
              <label htmlFor="text-input">Text input:</label><br />
              <input type="text" id="text-input" placeholder="Placeholder text" />
            </div>

            <div>
              <label htmlFor="email-input">Email:</label><br />
              <input type="email" id="email-input" placeholder="email@example.com" />
            </div>

            <div>
              <label htmlFor="pw-input">Password:</label><br />
              <input type="password" id="pw-input" placeholder="••••••••" />
            </div>

            <div>
              <label htmlFor="search-input">Search:</label><br />
              <input type="search" id="search-input" placeholder="Search..." />
            </div>

            <div>
              <label htmlFor="url-input">URL:</label><br />
              <input type="url" id="url-input" placeholder="https://example.com" />
            </div>

            <div>
              <label htmlFor="tel-input">Telephone:</label><br />
              <input type="tel" id="tel-input" placeholder="+1-555-555-5555" />
            </div>

            <div>
              <label htmlFor="num-input">Number:</label><br />
              <input type="number" id="num-input" min={0} max={100} defaultValue={50} />
            </div>

            <div>
              <label htmlFor="range-input">Range:</label><br />
              <input type="range" id="range-input" min={0} max={100} defaultValue={50} />
            </div>

            <div>
              <label htmlFor="date-input">Date:</label><br />
              <input type="date" id="date-input" />
            </div>

            <div>
              <label htmlFor="time-input">Time:</label><br />
              <input type="time" id="time-input" />
            </div>

            <div>
              <label htmlFor="color-input">Color:</label><br />
              <input type="color" id="color-input" defaultValue="#aa3bff" />
            </div>

            <div>
              <label htmlFor="file-input">File:</label><br />
              <input type="file" id="file-input" />
            </div>

            <div>
              <label>Checkboxes:</label><br />
              <label><input type="checkbox" defaultChecked /> Option A</label><br />
              <label><input type="checkbox" /> Option B</label><br />
              <label><input type="checkbox" disabled /> Option C (disabled)</label>
            </div>

            <div>
              <label>Radio buttons:</label><br />
              <label><input type="radio" name="radio" defaultChecked /> Yes</label><br />
              <label><input type="radio" name="radio" /> No</label>
            </div>

            <div>
              <label htmlFor="select-input">Select dropdown:</label><br />
              <select id="select-input">
                <optgroup label="Group 1">
                  <option>Option one</option>
                  <option>Option two</option>
                </optgroup>
                <optgroup label="Group 2">
                  <option>Option three</option>
                  <option>Option four</option>
                </optgroup>
              </select>
            </div>

            <div>
              <label htmlFor="multi-select">Multi-select:</label><br />
              <select id="multi-select" multiple size={4}>
                <option>Item A</option>
                <option>Item B</option>
                <option>Item C</option>
                <option>Item D</option>
              </select>
            </div>

            <div>
              <label htmlFor="textarea-input">Textarea:</label><br />
              <textarea id="textarea-input" rows={4} placeholder="Multi-line text input" defaultValue={"Line 1\nLine 2\nLine 3"} />
            </div>

            <div>
              <button type="submit">Submit button</button>&nbsp;
              <button type="button">Regular button</button>&nbsp;
              <button type="reset">Reset button</button>&nbsp;
              <button type="button" disabled>Disabled button</button>
            </div>
          </fieldset>
        </form>
      </section>

      <hr />

      {/* ── Images & Media ── */}
      <section>
        <h2>Images &amp; Media</h2>

        <h3>Standard image</h3>
        <img
          src="https://placehold.co/600x400/aa3bff/white?text=Sample+Image"
          alt="Sample placeholder"
        />

        <h3>Figure with figcaption</h3>
        <figure>
          <img
            src="https://placehold.co/400x250/c084fc/white?text=Figure+Image"
            alt="Figure example"
          />
          <figcaption>Figcaption — Descriptive caption for the figure above.</figcaption>
        </figure>

        <h3>Picture element</h3>
        <picture>
          <source srcSet="https://placehold.co/800x200/aa3bff/white?text=Picture+Source" media="(min-width: 800px)" />
          <img src="https://placehold.co/400x200/c084fc/white?text=Picture+Fallback" alt="Picture fallback" />
        </picture>

        <h3>SVG inline</h3>
        <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" stroke="var(--accent)" strokeWidth="4" fill="var(--accent-bg)" />
          <text x="50" y="55" textAnchor="middle" fill="var(--text-h)" fontSize="14">SVG</text>
        </svg>
      </section>

      <hr />

      {/* ── Code ── */}
      <section>
        <h2>Code blocks</h2>

        <h3>Inline code</h3>
        <p>Use the <code>&lt;code&gt;</code> tag for inline code like <code>const x = 42;</code>.</p>

        <h3>Pre-formatted block</h3>
        <pre>{`function hello() {
  console.log("Hello, world!");
  return 42;
}`}</pre>

        <h3>Pre with code</h3>
        <pre><code>{`const cssThemes = ["light", "dark", "custom"];
cssThemes.forEach(theme => {
  document.body.className = theme;
});`}</code></pre>
      </section>

      <hr />

      {/* ── Details / Summary ── */}
      <section>
        <h2>Interactive elements</h2>

        <details>
          <summary>Click to expand (details/summary)</summary>
          <p>This content is hidden behind the summary. It can be used for collapsible sections, FAQs, and more.</p>
          <ul>
            <li>Revealed item 1</li>
            <li>Revealed item 2</li>
          </ul>
        </details>

        <details open>
          <summary>Already expanded</summary>
          <p>This details element starts open by default.</p>
        </details>

        <h3>Progress &amp; meter</h3>
        <div>
          <label>Progress bar:</label><br />
          <progress value={70} max={100}>70%</progress>
        </div>
        <div>
          <label>Meter:</label><br />
          <meter value={0.6} min={0} max={1} low={0.3} high={0.8} optimum={0.5}>60%</meter>
        </div>

        <h3>Dialog (not shown — requires user interaction)</h3>
        <p><code>&lt;dialog&gt;</code> element is available but not rendered here as it needs a trigger.</p>
      </section>

      <hr />

      {/* ── Misc text semantics ── */}
      <section>
        <h2>Text-level semantics &amp; phrasing</h2>

        <p><b>b</b> — <b>bold</b> (stylistic offset)</p>
        <p><i>i</i> — <i>italic</i> (alternate voice)</p>
        <p><u>u</u> — <u>unarticulated annotation</u></p>
        <p><s>s</s> — <s>inaccurate text</s></p>
        <p><small>small</small> — <small>side comments / fine print</small></p>
        <p><sub>sub</sub> — H<sub>2</sub>O (subscript)</p>
        <p><sup>sup</sup> — E=mc<sup>2</sup> (superscript)</p>
        <p><mark>mark</mark> — <mark>highlighted text</mark></p>
        <p><del>del</del> — <del>deleted text</del></p>
        <p><ins>ins</ins> — <ins>inserted text</ins></p>
        <p><code>code</code> — <code>inline code fragment</code></p>
        <p><kbd>kbd</kbd> — <kbd>keyboard input</kbd></p>
        <p><samp>samp</samp> — <samp>sample output</samp></p>
        <p><var>var</var> — <var>variable name</var></p>
        <p><abbr title="Cascading Style Sheets">abbr</abbr> — <abbr title="Cascading Style Sheets">CSS</abbr></p>
        <p><dfn>dfn</dfn> — <dfn>defining instance</dfn></p>
        <p><cite>cite</cite> — <cite>cited work title</cite></p>
        <p><q>q</q> — <q>inline quotation</q></p>
        <p><time>time</time> — <time dateTime="2026-06-05">June 5, 2026</time></p>
        <p><data value="1">data</data> — <data value="42">forty-two</data></p>
        <p><address>address</address> — contact info (block-level)</p>
        <p><bdi>bdi</bdi> — <bdi>isolated bidirectional text</bdi></p>
        <p><bdo dir="rtl">bdo</bdo> — <bdo dir="rtl">right-to-left</bdo></p>
        <p><ruby>
          漢<rt>kan</rt>字<rt>ji</rt>
        </ruby> — ruby annotation</p>
      </section>

      <hr />

      {/* ── Iframe ── */}
      <section>
        <h2>Iframe</h2>
        <iframe
          srcDoc="<p>This is an inline iframe with sample content.</p>"
          title="Sample iframe"
        />
      </section>

      <hr />

      {/* ── Horizontal rules ── */}
      <section>
        <h2>Horizontal rule</h2>
        <p>Above this line is an hr element.</p>
        <hr />
        <p>Below this line is an hr element.</p>
      </section>
    </div>
  )
}

export default App
