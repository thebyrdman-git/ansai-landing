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

### Method 1: Install via pip (Recommended)

```bash
# Install from PyPI
pip install ansai

# Verify installation
ansai --version

# See available commands
ansai --help
```

### Method 2: Install from Source

```bash
# Clone the repository
git clone https://github.com/thebyrdman-git/ansai-landing.git
cd ansai-landing

# Install in development mode
pip install -e .

# Verify installation
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

Verify Ansai is working correctly:

```bash
# Check version
ansai --version

# See available commands
ansai --help

# List available workflows
ansai list

# Test Ansible connectivity
ansible all -m ping
```

### Expected Output

```
$ ansai --version
ansai, version 1.0.0

$ ansai list
📋 Available Ansai workflows:

  🚀 deploy        - Deploy applications
  💾 backup        - Backup systems
  🔧 configure     - Configure services
  🏥 health-check  - System health check

📚 See full catalog: https://docs.ansai.dev/20-workflow-catalog/

$ ansible all -m ping
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

