// app/articles/usefuls-git-cmd/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Useful Git Commands You Should Know",
  alternates: {
    canonical: '/articles/useful-git-cmd',
  },
};

export default function UsefulGitCmdPage() {
  return (
    <article className="prose prose-neutral dark:prose-invert max-w-none">
      <h1 className='text-xl font-semibold text-neutral-400 dark:text-white'>Useful Git Commands You Should Know</h1>
      
      <br />
      
      <p className='text-neutral-400'>A collection of essential Git commands to streamline your version control workflow.</p>
      
      <h2><strong>List all files (excluding node_modules and .next)</strong></h2>
      
      <p>Get a tree-like view of your project structure without the clutter:</p>
      
      <pre><code className="language-bash">find . -not -path "./node_modules*" -not -path "./.next*" -print | sed -e 's;[^/]*/;|____;g;s;____|; |;g'</code></pre>
      
      <br />

      <hr />
      
      <br />

      <h2><strong>Condensed commit history</strong></h2>
      
      <p>See your commit history in a compact one-line format:</p>
      
      <pre><code className="language-bash">git log --oneline</code></pre>
      
      <br />

      <hr />
      
      <br />
          
      <h2><strong>View all branches at a glance</strong></h2>
      
      <p>List both local and remote branches in one command:</p>
      
      <pre><code className="language-bash">git branch -a</code></pre>
      
      <br />

      <hr />
      
      <br />
      
      <h2><strong>Inspect recent changes</strong></h2>
      
      <p>See what files were modified in the last commit:</p>
      
      <pre><code className="language-bash">git show --name-only</code></pre>
      
      <br />

      <hr />
      
      <br />
      
      <h2><strong>Trace changes to a specific file</strong></h2>
      
      <p>Find all commits that affected a particular file:</p>
      
      <pre><code className="language-bash">git log -- filename</code></pre>
      
      <hr />
      
      <h2><strong>Search across your codebase</strong></h2>
      
      <p>Find text patterns in all tracked files:</p>
      
      <pre><code className="language-bash">git grep "pattern"</code></pre>
      
      <br />

      <hr />
      
      <br />
      
      <h2><strong>Quick status check</strong></h2>
      
      <p>See your current branch and changes at any time:</p>
      
      <pre><code className="language-bash">git status</code></pre>
      
      <br />

      <hr />
      
      <br />
      
      <h2><strong>Detailed recent activity</strong></h2>
      
      <p>View the last 5 commits with file change statistics:</p>
      
      <pre><code className="language-bash">git log -5 --stat</code></pre>
      <br />

      <hr />
      
      <br />
      
      <blockquote>
        <p>💡 <em>Pro-tip:</em> Add <code>--graph</code> to visualize branch history.</p>
      </blockquote>
    </article>
  );
}