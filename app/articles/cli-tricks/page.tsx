import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "5 Tiny CLI Tricks You (Probably) Didn't Know",
  alternates: {
    canonical: '/articles/cli-tricks',
  },
};

export default function CliTricksPage() {
  return (
    <article className="prose prose-neutral dark:prose-invert max-w-none">
      <h1>5 Tiny CLI Tricks You (Probably) Didn't Know</h1>
      
      <br />
      
      <p>A lightning-round of command-line nuggets to level-up your dev workflow.</p>
      
      <h2><strong><code>history | grep</code> + <code>fzf</code> = instant recall</strong></h2>
      
      <p>Fish out that elusive command you ran last Tuesday:</p>
      
      <pre><code className="language-bash">history | grep docker | fzf</code></pre>
      
      <p>Hit <strong>Enter</strong> and it pastes right back to your prompt like magic.</p>
      
      <hr />
      
      <h2><strong>Reverse-search a Git log by file <em>content</em></strong></h2>
      
      <p>Combine <code>git log</code> with <code>-S</code> (search diff) to find when a string first appeared:</p>
      
      <pre><code className="language-bash">git log -S"resizeObserver" --oneline -- src/components/Layout.tsx</code></pre>
      
      <hr />
      
      <h2><strong>JSON-pretty print … with zero dependencies</strong></h2>
      
      <p>Mac & Linux already ship with <code>python3</code>:</p>
      
      <pre><code className="language-bash">cat response.json | python3 -m json.tool | less</code></pre>
      
      <hr />
      
      <h2><strong>One-liner port-forwarding for quick demos</strong></h2>
      
      <p>Need to expose <code>localhost:3000</code>? Use SSH—no ngrok token needed.</p>
      
      <pre><code className="language-bash">ssh -R 80:localhost:3000 ssh.localhost.run</code></pre>
      
      <p>Now share the generated URL on Slack and watch eyebrows rise.</p>
      
      <hr />
      
      <h2><strong>Measure <em>anything</em> with <code>time</code> + subshell</strong></h2>
      
      <p>How long does your linter actually take?</p>
      
      <pre><code className="language-bash">time (npm run lint &gt; /dev/null)</code></pre>
      
      <blockquote>
        <p>💡 <em>Pro-tip:</em> wrap this in a <code>pre-push</code> hook so slow commands get caught early.</p>
      </blockquote>
    </article>
  );
}