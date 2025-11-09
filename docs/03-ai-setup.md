# AI Setup Guide

**Ansai = Ansible + AI**. To use Ansai's AI features, you need access to an LLM (Large Language Model).

Ansai is **provider-agnostic** - use any AI service you prefer!

---

## 🎯 Quick Start (Choose One)

### Option 1: 🆓 Groq (Recommended for Beginners)
**Best for:** Fast, free tier, cloud-based

```bash
# 1. Get free API key: https://console.groq.com
# 2. Set environment variable
export GROQ_API_KEY="gsk-..."

# 3. Test it
ansai ask "test connection"
```

**Pros:** ⚡ Very fast, 🆓 generous free tier, ☁️ cloud-based  
**Cons:** None for casual use!

---

### Option 2: 🌐 OpenAI (Best Quality)
**Best for:** Production use, best AI quality

```bash
# 1. Get API key: https://platform.openai.com/api-keys
# 2. Set environment variable
export OPENAI_API_KEY="sk-..."

# 3. Test it
ansai ask "test connection"
```

**Pros:** 🏆 Best quality, 🌍 most reliable  
**Cons:** 💰 Paid ($0.01-0.03 per request)

---

### Option 3: 🏠 Ollama (Privacy-First)
**Best for:** Privacy, no internet required, free

```bash
# 1. Install Ollama
curl -fsSL https://ollama.ai/install.sh | sh

# 2. Download a model (one time)
ollama pull llama3

# 3. Test it
ansai ask "test connection"
```

**Pros:** 🔒 100% private, 🆓 free, 📡 works offline  
**Cons:** Requires good hardware (8GB+ RAM), slower than cloud

---

### Option 4: 🧠 Anthropic Claude
**Best for:** Long conversations, detailed analysis

```bash
# 1. Get API key: https://console.anthropic.com
# 2. Set environment variable
export ANTHROPIC_API_KEY="sk-ant-..."
export ANSAI_AI_PROVIDER="anthropic"

# 3. Test it
ansai ask "test connection"
```

**Pros:** 🤖 Great reasoning, 📖 handles long context  
**Cons:** 💰 Paid

---

### Option 5: 🔧 LiteLLM (All Providers via One Interface)
**Best for:** Switching between providers, advanced users

```bash
# Install LiteLLM
pip install litellm[proxy]

# Start proxy (with your preferred provider)
export OPENAI_API_KEY="sk-..."  # or any other provider key
litellm --port 4000

# In another terminal
export ANSAI_AI_PROVIDER="litellm"
ansai ask "test connection"
```

**Pros:** 🔄 Use any provider, 💰 cost tracking, 🎯 load balancing  
**Cons:** Extra setup step

---

## 📋 All Supported Providers

| Provider | Cost | Setup Difficulty | Quality | Speed |
|----------|------|------------------|---------|-------|
| **Groq** | 🆓 Free tier | ⭐ Easy | ⭐⭐⭐⭐ | ⚡⚡⚡⚡⚡ |
| **Ollama** | 🆓 Free | ⭐⭐ Moderate | ⭐⭐⭐ | ⚡⚡⚡ |
| **OpenAI** | 💰 Paid | ⭐ Easy | ⭐⭐⭐⭐⭐ | ⚡⚡⚡⚡ |
| **Anthropic** | 💰 Paid | ⭐ Easy | ⭐⭐⭐⭐⭐ | ⚡⚡⚡⚡ |
| **Google Gemini** | 🆓/💰 Both | ⭐ Easy | ⭐⭐⭐⭐ | ⚡⚡⚡⚡ |
| **Together AI** | 💰 Paid | ⭐ Easy | ⭐⭐⭐⭐ | ⚡⚡⚡⚡ |
| **LiteLLM** | Varies | ⭐⭐⭐ Hard | Varies | Varies |

---

## 🎓 Detailed Setup Instructions

### Groq Setup (Free)

1. **Sign up for Groq:**
   - Visit: https://console.groq.com
   - Create free account
   - Generate API key

2. **Configure Ansai:**
   ```bash
   # Add to ~/.bashrc or ~/.zshrc
   export GROQ_API_KEY="gsk-your-key-here"
   export ANSAI_AI_PROVIDER="groq"
   
   # Or create config file
   mkdir -p ~/.ansai
   cat > ~/.ansai/config.yml << EOF
   ai:
     provider: groq
     api_key: gsk-your-key-here
     model: llama-3.1-70b-versatile
   EOF
   ```

3. **Test:**
   ```bash
   ansai ask "tell me a joke"
   ```

**Available Groq Models:**
- `llama-3.1-70b-versatile` (recommended)
- `llama-3.1-8b-instant` (faster)
- `mixtral-8x7b-32768` (good balance)

---

### OpenAI Setup

1. **Get API Key:**
   - Visit: https://platform.openai.com/api-keys
   - Create new secret key
   - Copy it (you won't see it again!)

2. **Configure Ansai:**
   ```bash
   export OPENAI_API_KEY="sk-your-key-here"
   
   # Optional: specify model
   export ANSAI_AI_MODEL="gpt-4"  # or gpt-3.5-turbo (cheaper)
   ```

3. **Test:**
   ```bash
   ansai ask "what can you help me with?"
   ```

**Cost Estimates (as of 2025):**
- GPT-4: ~$0.03 per request
- GPT-3.5-turbo: ~$0.002 per request
- Typical monthly usage: $5-20

---

### Ollama Setup (Local/Private)

1. **Install Ollama:**
   
   **Linux:**
   ```bash
   curl -fsSL https://ollama.ai/install.sh | sh
   ```
   
   **macOS:**
   ```bash
   brew install ollama
   ```
   
   **Windows:**
   Download from https://ollama.ai/download

2. **Download a model:**
   ```bash
   # Recommended for most users (4GB)
   ollama pull llama3
   
   # Smaller, faster (2GB)
   ollama pull llama3:8b
   
   # Larger, better quality (40GB)
   ollama pull llama3:70b
   ```

3. **Start Ollama (if not auto-started):**
   ```bash
   ollama serve
   ```

4. **Configure Ansai:**
   ```bash
   export ANSAI_AI_PROVIDER="ollama"
   export ANSAI_AI_MODEL="llama3"
   ```

5. **Test:**
   ```bash
   ansai ask "hello ollama"
   ```

**Hardware Requirements:**
- 8GB+ RAM for llama3:8b
- 16GB+ RAM for llama3
- 64GB+ RAM for llama3:70b

---

### Anthropic Claude Setup

1. **Get API Key:**
   - Visit: https://console.anthropic.com
   - Sign up for account
   - Generate API key

2. **Configure:**
   ```bash
   export ANTHROPIC_API_KEY="sk-ant-your-key-here"
   export ANSAI_AI_PROVIDER="anthropic"
   export ANSAI_AI_MODEL="claude-3-5-sonnet-20241022"
   ```

3. **Test:**
   ```bash
   ansai ask "introduce yourself"
   ```

---

### Google Gemini Setup

1. **Get API Key:**
   - Visit: https://makersuite.google.com/app/apikey
   - Create API key

2. **Configure:**
   ```bash
   export GOOGLE_API_KEY="your-key-here"
   export ANSAI_AI_PROVIDER="google"
   ```

3. **Test:**
   ```bash
   ansai ask "hello gemini"
   ```

---

## ⚙️ Configuration File

Instead of environment variables, create `~/.ansai/config.yml`:

```yaml
ai:
  # Provider: openai, anthropic, google, ollama, groq, together, litellm
  provider: groq
  
  # API key (or use environment variable)
  api_key: gsk-your-key-here
  
  # Model to use
  model: llama-3.1-70b-versatile
  
  # Optional: custom base URL
  # base_url: http://localhost:4000

# Other Ansai settings
automation:
  ansible_path: /path/to/ansible
  default_inventory: ~/.ansai/inventory.yml
```

---

## 🔒 Security Best Practices

### 1. **Never Commit API Keys**
```bash
# Add to .gitignore
echo ".env" >> .gitignore
echo "config.yml" >> .gitignore
```

### 2. **Use Environment Variables**
```bash
# Add to ~/.bashrc (Linux) or ~/.zshrc (macOS)
export OPENAI_API_KEY="sk-..."
export GROQ_API_KEY="gsk-..."
```

### 3. **Or Use a Secrets Manager**
```bash
# Example with pass (password manager)
export OPENAI_API_KEY=$(pass show openai/api-key)
```

### 4. **Rotate Keys Regularly**
- Regenerate API keys every 90 days
- Delete unused keys immediately

---

## 💰 Cost Management

### Free Options:
1. **Groq:** Generous free tier
2. **Ollama:** Completely free (self-hosted)
3. **Google Gemini:** Free tier available

### Paid Options Cost Comparison:
| Provider | ~Cost per 1000 requests | Free Tier |
|----------|-------------------------|-----------|
| OpenAI GPT-3.5 | $2 | $5 credit |
| OpenAI GPT-4 | $30 | $5 credit |
| Anthropic Claude | $15-25 | None |
| Groq | $0 | Very generous |

### Cost-Saving Tips:
1. **Start with Groq (free)** for testing
2. **Use Ollama locally** for privacy + no cost
3. **Switch to OpenAI** only for production
4. **Use GPT-3.5-turbo** instead of GPT-4 for simple tasks

---

## 🧪 Testing Your Setup

```bash
# Check if AI is available
ansai --version

# Simple test
ansai ask "are you working?"

# Test playbook generation
ansai generate "backup docker volumes"

# Test troubleshooting
ansai troubleshoot "container keeps restarting"

# Start interactive chat
ansai chat
```

---

## 🐛 Troubleshooting

### "No AI provider configured"
```bash
# Check your environment
env | grep -E "(OPENAI|GROQ|ANTHROPIC|OLLAMA)"

# Or check config file
cat ~/.ansai/config.yml
```

### "Connection refused"
- **Ollama:** Make sure `ollama serve` is running
- **LiteLLM:** Check proxy is running on port 4000

### "Invalid API key"
- Verify your API key is correct
- Check for extra spaces or quotes
- Regenerate key from provider dashboard

### "Rate limit exceeded"
- You've hit free tier limits
- Wait a few minutes or upgrade plan
- Switch to a different provider temporarily

---

## 🚀 Next Steps

Once your AI is configured:

1. **Try the AI commands:**
   - `ansai ask "backup my home assistant"`
   - `ansai chat` - start a conversation
   - `ansai generate "deploy nginx"` - create playbooks

2. **Explore use cases:**
   - [Home Automation](../get-started/)
   - [Finance Automation](../finance-automation/)
   - [Server Management](../server-management/)

3. **Join the community:**
   - [GitHub Discussions](https://github.com/thebyrdman-git/ansai-landing/discussions)
   - Share your setup!

---

## 📚 Additional Resources

- **LiteLLM Documentation:** https://docs.litellm.ai
- **Ollama Models:** https://ollama.ai/library
- **OpenAI Pricing:** https://openai.com/pricing
- **Groq Console:** https://console.groq.com

---

**Questions?** Ask in our [Community Forum](https://github.com/thebyrdman-git/ansai-landing/discussions)!

[← Back to Installation](02-installation.md) | [Next: Core Concepts →](core-concepts/)

