# Git-as-Code Philosophy

> **Infrastructure-as-Code for Version Control Operations**

Git-as-Code is a core principle of the Ansai methodology where all version control operations are managed through Ansible workflows, ensuring repeatability, auditability, and security.

---

## What is Git-as-Code?

**Git-as-Code** extends the Infrastructure-as-Code philosophy to version control operations. Instead of running manual `git` commands, all operations flow through Ansible workflows that:

- ✅ **Automate** - No manual git commands
- ✅ **Audit** - Every operation is logged
- ✅ **Secure** - Credentials never in repositories
- ✅ **Repeat** - Same process every time
- ✅ **Document** - Self-documenting workflows

---

## Core Principles

### 1. All Git Operations Are Workflows

Every git operation is an Ansible playbook:

```yaml
# workflows/git-commit-push.yml
- name: Git Commit and Push
  hosts: localhost
  tasks:
    - name: Add changes
      ansible.builtin.command:
        cmd: git add .
        
    - name: Commit changes
      ansible.builtin.command:
        cmd: git commit -m "{{ commit_message }}"
        
    - name: Push to GitHub
      ansible.builtin.command:
        cmd: git push origin {{ branch }}
```

### 2. Credentials from Environment

Never hardcode credentials. Always use environment variables or Ansible Vault:

```yaml
vars:
  github_token: "{{ vault_github_token | default(lookup('env', 'GITHUB_TOKEN')) }}"
```

### 3. Automatic SSH ↔ HTTPS Conversion

Workflows automatically convert between SSH and HTTPS for token-based authentication:

```yaml
- name: Convert SSH remote to HTTPS with token
  ansible.builtin.command:
    cmd: "git remote set-url origin https://{{ github_token }}@github.com/user/repo.git"
    
- name: Restore SSH remote URL
  ansible.builtin.command:
    cmd: "git remote set-url origin git@github.com:user/repo.git"
```

### 4. User-Friendly Wrappers

Provide simple scripts that call Ansible workflows:

```bash
#!/usr/bin/env bash
# bin/ansai-git-push

export GITHUB_TOKEN="${GITHUB_TOKEN}"
ansible-playbook workflows/git-push.yml \
  -e repo_path=$(pwd) \
  -e branch=$(git branch --show-current)
```

---

## Benefits

### Repeatability

Every git operation is identical:

```bash
# Same command, same result, every time
./bin/ansai-git-push
```

### Auditability

All operations are logged through Ansible:

```
TASK [Push to GitHub] **************************************************
changed: [localhost]

PLAY RECAP *************************************************************
localhost: ok=5 changed=2
```

### Security

- ✅ No credentials in git
- ✅ Token from environment
- ✅ Automatic URL conversion
- ✅ Secure remote restoration

### Consistency

Same process across all projects:

```bash
cd /home/user/repos/project1
./bin/ansai-git-push

cd /home/user/repos/project2
./bin/ansai-git-push
```

---

## Implementation

### Basic Git Workflows

#### 1. Git Push Workflow

```yaml
---
# workflows/git-push.yml
- name: Git Push Workflow
  hosts: localhost
  connection: local
  vars:
    github_token: "{{ vault_github_token | default(lookup('env', 'GITHUB_TOKEN')) }}"
    repo_path: "{{ repo_path | mandatory }}"
    branch: "{{ branch | default('main') }}"
    
  tasks:
    - name: Get remote URL
      ansible.builtin.command:
        cmd: git remote get-url origin
        chdir: "{{ repo_path }}"
      register: remote_url
      
    - name: Check if remote uses SSH
      ansible.builtin.set_fact:
        is_ssh: "{{ remote_url.stdout.startswith('git@') }}"
        
    - name: Store original remote URL
      ansible.builtin.set_fact:
        original_remote: "{{ remote_url.stdout }}"
      when: is_ssh
      
    - name: Convert SSH remote to HTTPS with token
      ansible.builtin.command:
        cmd: "git remote set-url origin https://{{ github_token }}@github.com/{{ remote_url.stdout.split(':')[1] }}"
        chdir: "{{ repo_path }}"
      when: is_ssh
      
    - name: Push to GitHub
      ansible.builtin.command:
        cmd: "git push origin {{ branch }}"
        chdir: "{{ repo_path }}"
      environment:
        GIT_TERMINAL_PROMPT: "0"
        
    - name: Restore SSH remote URL
      ansible.builtin.command:
        cmd: "git remote set-url origin {{ original_remote }}"
        chdir: "{{ repo_path }}"
      when: is_ssh
```

#### 2. Git Commit and Push Workflow

```yaml
---
# workflows/git-commit-push.yml
- name: Git Commit and Push Workflow
  hosts: localhost
  connection: local
  vars:
    github_token: "{{ vault_github_token | default(lookup('env', 'GITHUB_TOKEN')) }}"
    repo_path: "{{ repo_path | mandatory }}"
    commit_message: "{{ commit_message | mandatory }}"
    branch: "{{ branch | default('main') }}"
    
  tasks:
    - name: Check for changes
      ansible.builtin.command:
        cmd: git status --porcelain
        chdir: "{{ repo_path }}"
      register: git_status
      changed_when: false
      
    - name: Add all changes
      ansible.builtin.command:
        cmd: git add -A
        chdir: "{{ repo_path }}"
      when: git_status.stdout != ""
      
    - name: Commit changes
      ansible.builtin.command:
        cmd: "git commit -m '{{ commit_message }}'"
        chdir: "{{ repo_path }}"
      when: git_status.stdout != ""
      
    - name: Include push workflow
      ansible.builtin.include_tasks: git-push.yml
      when: git_status.stdout != ""
```

### User-Friendly Wrappers

#### Push Script

```bash
#!/usr/bin/env bash
# bin/ansai-git-push
# User-friendly wrapper for git push operations

set -euo pipefail

REPO_PATH="${1:-$(pwd)}"
BRANCH="${2:-$(git -C "$REPO_PATH" rev-parse --abbrev-ref HEAD)}"

if [ -z "${GITHUB_TOKEN:-}" ]; then
    echo "❌ Error: GITHUB_TOKEN environment variable not set"
    exit 1
fi

ANSAI_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

ansible-playbook "$ANSAI_ROOT/workflows/git-push.yml" \
    -e "repo_path=$REPO_PATH" \
    -e "branch=$BRANCH"
```

#### Commit and Push Script

```bash
#!/usr/bin/env bash
# bin/ansai-git-commit-push
# User-friendly wrapper for commit and push operations

set -euo pipefail

REPO_PATH="${1:-$(pwd)}"
COMMIT_MESSAGE="${2:-Automated commit via Ansai}"
BRANCH="${3:-$(git -C "$REPO_PATH" rev-parse --abbrev-ref HEAD)}"

if [ -z "${GITHUB_TOKEN:-}" ]; then
    echo "❌ Error: GITHUB_TOKEN environment variable not set"
    exit 1
fi

ANSAI_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

ansible-playbook "$ANSAI_ROOT/workflows/git-commit-push.yml" \
    -e "repo_path=$REPO_PATH" \
    -e "commit_message=$COMMIT_MESSAGE" \
    -e "branch=$BRANCH"
```

---

## Usage Examples

### Basic Push

```bash
cd /home/user/repos/my-project
export GITHUB_TOKEN="ghp_..."
./bin/ansai-git-push
```

### Commit and Push

```bash
cd /home/user/repos/my-project
export GITHUB_TOKEN="ghp_..."
./bin/ansai-git-commit-push . "Update documentation"
```

### Using Workflows Directly

```bash
ansible-playbook workflows/git-push.yml \
  -e repo_path=/home/user/repos/my-project \
  -e branch=main
```

### Force Push (Safe)

```bash
ansible-playbook workflows/git-push.yml \
  -e repo_path=/home/user/repos/my-project \
  -e branch=main \
  -e force_push=true  # Uses --force-with-lease
```

---

## Integration with CI/CD

Git-as-Code integrates seamlessly with the Grand CI/CD Pipeline:

```yaml
# workflows/grand-cicd-pipeline.yml
- name: Stage 6 - Git Commit & Push
  block:
    - name: Commit and push changes
      ansible.builtin.include_tasks: git-commit-push.yml
      vars:
        repo_path: "{{ project_path }}"
        commit_message: "Automated deployment via Grand CI/CD Pipeline"
        branch: main
      when: auto_commit
```

---

## Security Best Practices

### 1. Never Commit Credentials

```yaml
# ❌ BAD
- name: Push to GitHub
  ansible.builtin.command:
    cmd: git push https://ghp_token123@github.com/user/repo.git

# ✅ GOOD
- name: Push to GitHub
  ansible.builtin.command:
    cmd: git push origin main
  environment:
    GITHUB_TOKEN: "{{ github_token }}"
```

### 2. Use Ansible Vault for Tokens

```yaml
# group_vars/all/vault.yml (encrypted)
vault_github_token: "ghp_..."

# workflows/git-push.yml
vars:
  github_token: "{{ vault_github_token | default(lookup('env', 'GITHUB_TOKEN')) }}"
```

### 3. Restore Original Remote URLs

```yaml
- name: Store original remote
  ansible.builtin.set_fact:
    original_remote: "{{ remote_url.stdout }}"

# ... operations ...

- name: Restore SSH remote URL
  ansible.builtin.command:
    cmd: "git remote set-url origin {{ original_remote }}"
  always:  # Always restore, even on failure
```

### 4. Use GIT_TERMINAL_PROMPT

```yaml
- name: Push to GitHub
  ansible.builtin.command:
    cmd: git push origin main
  environment:
    GIT_TERMINAL_PROMPT: "0"  # Prevent password prompts
```

---

## Advanced Patterns

### Multi-Repository Operations

```yaml
---
# workflows/sync-all-repos.yml
- name: Sync All Repositories
  hosts: localhost
  vars:
    repos:
      - /home/user/repos/project1
      - /home/user/repos/project2
      - /home/user/repos/project3
      
  tasks:
    - name: Sync each repository
      ansible.builtin.include_tasks: git-push.yml
      vars:
        repo_path: "{{ item }}"
        branch: main
      loop: "{{ repos }}"
```

### Automated Tagging

```yaml
- name: Create release tag
  ansible.builtin.command:
    cmd: "git tag -a v{{ version }} -m 'Release {{ version }}'"
    chdir: "{{ repo_path }}"
    
- name: Push tags
  ansible.builtin.command:
    cmd: git push origin --tags
    chdir: "{{ repo_path }}"
```

### Branch Management

```yaml
- name: Create feature branch
  ansible.builtin.command:
    cmd: "git checkout -b feature/{{ feature_name }}"
    chdir: "{{ repo_path }}"
    
- name: Push feature branch
  ansible.builtin.include_tasks: git-push.yml
  vars:
    branch: "feature/{{ feature_name }}"
```

---

## Comparison: Traditional vs Git-as-Code

### Traditional Approach

```bash
# Manual commands, no audit trail
cd /home/user/repos/my-project
git add .
git commit -m "Update feature"
git push origin main

# Credentials in command history
git push https://token@github.com/user/repo.git

# Inconsistent across projects
cd /home/user/repos/another-project
git add .
git commit -m "Fix bug"  # Different message format
git push
```

### Git-as-Code Approach

```bash
# Automated, audited, consistent
cd /home/user/repos/my-project
export GITHUB_TOKEN="ghp_..."
./bin/ansai-git-push

# Same process for all projects
cd /home/user/repos/another-project
./bin/ansai-git-push

# Full audit trail in Ansible output
# Credentials never in history
# Consistent process every time
```

---

## Project Organization

Every project organized with Git-as-Code includes:

```
my-project/
├── workflows/
│   ├── git-commit-push.yml
│   └── git-push.yml
├── bin/
│   ├── ansai-git-push
│   └── ansai-git-force-push
├── docs/
│   └── GIT_WORKFLOWS.md
└── README.md
```

---

## Real-World Example: PassGo Infrastructure

The PassGo infrastructure repository demonstrates Git-as-Code in action:

```bash
# Organize project as git-as-code repository
ansible-playbook workflows/organize-project-repo.yml \
  -e project_name=passgo \
  -e source_path=/home/user/ansai/passgo \
  -e github_repo_name=passgo-private \
  -e "project_description=PassGo financial tracking application"

# Result: Clean repository with git infrastructure
/home/user/repos/passgo/
├── workflows/
│   ├── git-commit-push.yml
│   ├── git-push.yml
│   └── passgo-deploy.yml
├── bin/
│   ├── ansai-git-push
│   └── ansai-git-force-push
└── src/
    └── (application code)

# Usage
cd /home/user/repos/passgo
export GITHUB_TOKEN="ghp_..."
./bin/ansai-git-push
```

---

## Benefits Summary

| Aspect | Traditional Git | Git-as-Code |
|--------|----------------|-------------|
| **Repeatability** | Manual, varies | Automated, consistent |
| **Auditability** | Command history | Ansible logs |
| **Security** | Credentials in history | Environment variables |
| **Documentation** | External | Self-documenting |
| **Consistency** | Varies by user | Same for everyone |
| **Error Handling** | Manual | Automated |
| **Credential Management** | Manual | Ansible Vault |
| **Multi-Repo** | Tedious | Automated |

---

## Getting Started

### 1. Set Up Git Infrastructure

```bash
# Add git workflows to your project
cp workflows/git-*.yml /path/to/your/project/workflows/
cp bin/ansai-git-* /path/to/your/project/bin/
chmod +x /path/to/your/project/bin/ansai-git-*
```

### 2. Configure GitHub Token

```bash
# Set environment variable
export GITHUB_TOKEN="ghp_your_token_here"

# Or use Ansible Vault
ansible-vault create group_vars/all/vault.yml
# Add: vault_github_token: "ghp_your_token_here"
```

### 3. Use Git-as-Code

```bash
cd /path/to/your/project
./bin/ansai-git-push
```

---

## Learn More

- [Grand CI/CD Architecture](GRAND_CICD_ARCHITECTURE.md)
- [Infrastructure-as-Code](core-concepts/)
- [Workflow Catalog](20-workflow-catalog.md)
- [Security Best Practices](administration/)

---

**Git-as-Code** is a core principle of the Ansai methodology, ensuring all version control operations are automated, audited, and secure.

---

**Powered by**: Ansai - https://ansai.dev  
**Documentation Version**: 1.0  
**Last Updated**: November 2025

