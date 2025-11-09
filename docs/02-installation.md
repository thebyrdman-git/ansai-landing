# Installation Guide

[← Back to Get Started](get-started/) | [Next: Lightspeed →](18-lightspeed.md)

---

## Quick Installation

Get Ansai up and running in minutes with this streamlined installation guide.

---

## Prerequisites

Before installing Ansai, ensure you have:

- **Python 3.8+** installed
- **Ansible 2.9+** installed
- **Git** for cloning repositories
- **Cursor IDE** (recommended) or any text editor
- **SSH access** to target systems (if managing remote hosts)

### System Requirements

**Minimum:**
- 2 GB RAM
- 1 GB disk space
- Linux, macOS, or WSL2 on Windows

**Recommended:**
- 4 GB RAM
- 5 GB disk space
- Ubuntu 20.04+ or macOS 12+

---

## Installation Methods

### Method 1: Clone from GitHub (Recommended)

```bash
# Clone the repository
git clone https://github.com/ansai/framework.git
cd framework

# Set up Python virtual environment
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Install Ansible collections (if needed)
ansible-galaxy collection install -r requirements.yml

# Verify installation
./ansai --version
```

### Method 2: Install via pip (Coming Soon)

```bash
pip install ansai
ansai --version
```

---

## Configuration

### Basic Configuration

Create a basic configuration file:

```bash
# Create config directory
mkdir -p ~/.ansai

# Create basic config
cat > ~/.ansai/config.yml << EOF
# Ansai Configuration
ansible:
  inventory: inventory/hosts.yml
  vault_password_file: ~/.ansible/vault_pass.txt

settings:
  interactive_mode: true
  logging_level: INFO
EOF
```

### Configure Ansible Inventory

Create an inventory file:

```yaml
# inventory/hosts.yml
all:
  hosts:
    localhost:
      ansible_connection: local
  
  children:
    development:
      hosts:
        dev-server:
          ansible_host: 192.168.1.10
          ansible_user: admin
    
    production:
      hosts:
        prod-server:
          ansible_host: 10.0.0.10
          ansible_user: deploy
```

---

## Verification

### Test Your Installation

Run the verification workflow:

```bash
# Test Ansai CLI
./ansai --help

# Run a test playbook
ansible-playbook ansible/playbooks/test-connection.yml

# Verify connectivity
ansible all -m ping
```

### Expected Output

```
✓ Ansai CLI initialized
✓ Ansible version: 2.14.0
✓ Python version: 3.10.0
✓ All dependencies installed
✓ Configuration loaded successfully

localhost | SUCCESS => {
    "changed": false,
    "ping": "pong"
}
```

---

## Integration with Cursor IDE

### Install Ansai Extension

1. Open **Cursor IDE**
2. Go to **Extensions** (Ctrl+Shift+X)
3. Search for "**Ansai**"
4. Click **Install**
5. Reload Cursor

### Configure Extension

Add to your Cursor settings (`.cursor/settings.json`):

```json
{
  "ansai.enabled": true,
  "ansai.playbookDirectory": "./ansible/playbooks",
  "ansai.autoDetect": true,
  "ansai.showOutput": true
}
```

---

## Next Steps

Now that Ansai is installed, explore these resources:

1. **[Workflow Catalog](20-workflow-catalog.md)** - Browse available automation workflows
2. **[Core Concepts](core-concepts/)** - Understand Ansai's architecture
3. **[Ansible Lightspeed](18-lightspeed.md)** - AI-powered playbook generation
4. **[Developer Guide](developer-guide/)** - Build custom workflows

---

## Troubleshooting

### Common Issues

**Issue: `ansible: command not found`**
```bash
# Install Ansible
pip install ansible

# Or via package manager
sudo apt-get install ansible  # Ubuntu/Debian
brew install ansible           # macOS
```

**Issue: Permission denied errors**
```bash
# Ensure proper permissions
chmod +x ansai

# Or run with python
python ansai
```

**Issue: Module not found errors**
```bash
# Reinstall dependencies
pip install -r requirements.txt --force-reinstall
```

**Issue: SSH connection failures**
```bash
# Test SSH manually
ssh user@host

# Check SSH config
ansible all -m ping -vvv
```

---

## Getting Help

- **Documentation**: [docs.ansai.dev](https://docs.ansai.dev)
- **Community Forum**: [GitHub Discussions](https://github.com/thebyrdman-git/ansai-landing/discussions)
- **Bug Reports**: [GitHub Issues](https://github.com/thebyrdman-git/ansai-landing/issues)
- **Feature Requests**: [GitHub Discussions](https://github.com/thebyrdman-git/ansai-landing/discussions/categories/ideas)

---

[← Back to Get Started](get-started/) | [Next: Lightspeed →](18-lightspeed.md)

**Installation Guide** | [View All Documentation](index.md)

