import React from "react";

const gitCommands = [
    {
        description: "List all files except node_modules and .next (tree-like)",
        command: `find . -not -path "./node_modules*" -not -path "./.next*" -print | sed -e 's;[^/]*/;|____;g;s;____|; |;g'`,
    },
    {
        description: "Show commit history (one line per commit)",
        command: "git log --oneline",
    },
    {
        description: "Show branches (local and remote)",
        command: "git branch -a",
    },
    {
        description: "Show files changed in last commit",
        command: "git show --name-only",
    },
    {
        description: "Find commits that changed a specific file",
        command: "git log -- <filename>",
    },
    {
        description: "Search for a string in all tracked files",
        command: "git grep <pattern>",
    },
    {
        description: "Show current status",
        command: "git status",
    },
    {
        description: "Show last 5 commits with stats",
        command: "git log -5 --stat",
    },
];

export default function UsefulGitCmdPage() {
    return (
        <main className="max-w-2xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">Useful Git Commands</h1>
            <ul className="space-y-6">
                {gitCommands.map((cmd, idx) => (
                    <li key={idx} className="border rounded p-4 bg-gray-50">
                        <div className="font-semibold mb-2">{cmd.description}</div>
                        <pre className="bg-gray-200 p-2 rounded text-sm overflow-x-auto">{cmd.command}</pre>
                    </li>
                ))}
            </ul>
        </main>
    );
}