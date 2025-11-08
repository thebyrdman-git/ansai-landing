# Intelligence Layer Patterns - Extracted from JPMC Case 04293185

## Overview
This document captures the intelligence patterns demonstrated during analysis of JPMC case 04293185. These patterns form the foundation for AI-augmented case management in Taminator.

---

## Pattern 1: Email Thread Analysis

### Input
Raw email thread (plain text or structured email data)

### Intelligence Extraction
```
1. Case Identification
   - Extract case number from email body
   - Detect case number patterns: "case# 04293185", "case 04293185", etc.
   
2. Customer Identification
   - Email domain → Customer name mapping
   - Cross-reference with account database
   - Extract organizational context from signatures
   
3. Contact Extraction
   - Parse email signatures for names, titles, contact info
   - Identify organizational hierarchy (VP, Manager, etc.)
   - Build contact relationship map
   
4. Issue Classification
   - Analyze language patterns to determine issue type
   - Keywords: "subscription renewal" → Licensing
   - Keywords: "error", "failure", "not working" → Technical
   - Keywords: "how to", "process", "steps" → Guidance
   
5. Urgency Detection
   - Deadline extraction: "expires Dec 31, 2025"
   - Calculate time remaining
   - Detect urgency indicators: "cannot afford", "critical", "production"
   
6. Stakeholder Analysis
   - Identify decision makers (VP/Director level)
   - Identify technical contacts
   - Identify distribution lists
```

### Output Structure
```yaml
case:
  number: "04293185"
  detected_from: "email_body"
  confidence: "high"

customer:
  name: "JP Morgan Chase"
  account_number: "334224"
  detected_from: "email_domain"
  confidence: "high"

contacts:
  - name: "Ganesh Kasthurirangan"
    title: "VP/Senior Manager of Software Engineering"
    email: "ganesh.kasthurirangan@jpmchase.com"
    phone: "614.209-2237"
    role: "decision_maker"
    organization: "IP Foundational Services - Network Services"
    
  - name: "Kedar Dixit"
    email: "kedar.dixit@jpmchase.com"
    role: "technical_contact"
    
issue:
  type: "licensing"
  subtype: "subscription_renewal"
  product: "Ansible Automation Platform"
  application: "NEAT"
  confidence: "high"
  
urgency:
  level: "high"
  deadline: "2025-12-31"
  days_remaining: 62
  indicators:
    - "cannot afford any outages"
    - "customer impacts"
    - "VP-level escalation"
    
recommended_action:
  primary: "escalate_to_licensing"
  reasoning: "Subscription renewal is licensing issue, not technical"
  contacts: ["James McCormick"]
```

---

## Pattern 2: Context Building

### Input
- Email analysis output
- Existing customer data (if any)
- Case history

### Intelligence Process
```
1. Customer Profile Generation
   - Aggregate all known information about customer
   - Identify knowledge gaps
   - Build contact directory
   - Map organizational structure
   
2. Application Documentation
   - Extract application details from context
   - Document technical architecture (when available)
   - Track subscription/license information
   - Identify criticality and business impact
   
3. Relationship Mapping
   - Customer → Applications → Products
   - Cases → Issues → Resolutions
   - Contacts → Roles → Responsibilities
   
4. Knowledge Gap Identification
   - What do we know? (high confidence)
   - What can we infer? (medium confidence)
   - What don't we know? (needs discovery)
```

### Output Structure
```
customer-work/jpmc/
├── jpmc-customer-profile.md       # Aggregated customer information
├── jpmc-neat-application.md       # Application-specific details
├── jpmc-contact-directory.md      # Contact relationships
└── jpmc-engagement-history.md     # Timeline of interactions
```

---

## Pattern 3: Issue Classification

### Decision Tree
```
1. Analyze issue description and keywords
   
2. Primary Classification:
   ├─ Licensing/Subscription
   │  ├─ Renewal
   │  ├─ Allocation
   │  ├─ Entitlement questions
   │  └─ Action: Route to licensing team
   │
   ├─ Technical
   │  ├─ Service failure
   │  ├─ Configuration issue
   │  ├─ Performance problem
   │  └─ Action: Technical troubleshooting
   │
   ├─ Guidance
   │  ├─ How-to questions
   │  ├─ Best practices
   │  ├─ Architecture design
   │  └─ Action: Provide documentation/consultation
   │
   └─ Strategic
      ├─ Upgrade planning
      ├─ Expansion
      ├─ ROI/business case
      └─ Action: TAM engagement, solution architect
      
3. Confidence Scoring:
   - High: Clear keywords, explicit statement
   - Medium: Inferred from context
   - Low: Ambiguous, needs clarification
```

### JPMC Case Example
```
Input: "How can we leverage the required licenses for NEAT from the 
        overall JPMC AAP subscriptions for license renewal?"

Analysis:
- Keywords: "licenses", "subscriptions", "renewal"
- No technical error messages
- No "how to configure" language
- Asking about process, not troubleshooting

Classification: Licensing/Subscription → Renewal
Confidence: High
Recommended Action: Escalate to licensing team
```

---

## Pattern 4: Risk Assessment

### Factors to Evaluate
```
1. Timeline Risk
   - Days until deadline
   - Complexity of resolution
   - Dependencies on external teams
   
   Scoring:
   - High: < 30 days, complex issue
   - Medium: 30-90 days, moderate complexity
   - Low: > 90 days, straightforward
   
2. Business Impact Risk
   - Production vs. non-production
   - Criticality statements ("cannot afford outages")
   - Escalation level (VP vs. individual contributor)
   
   Scoring:
   - High: Production, explicit criticality, executive escalation
   - Medium: Production, no explicit urgency
   - Low: Non-production, routine inquiry
   
3. Technical Complexity Risk
   - Known issue vs. novel problem
   - Clear resolution path vs. investigation needed
   - Single component vs. multi-system
   
   Scoring:
   - High: Novel, investigation needed, multi-system
   - Medium: Known issue, standard troubleshooting
   - Low: Known issue, documented resolution
```

### JPMC Case Scoring
```
Timeline Risk: HIGH
- 62 days to deadline
- Procurement/approval process unknown
- Enterprise subscription allocation (complex)

Business Impact Risk: HIGH
- Production application
- "Cannot afford outages" (explicit)
- VP-level escalation

Technical Complexity Risk: LOW
- Not a technical issue (licensing)
- Clear escalation path
- No troubleshooting required

Overall Risk: HIGH (due to timeline + business impact)
Priority: Immediate attention required
```

---

## Pattern 5: Action Recommendation

### Decision Logic
```
1. Based on Issue Classification:
   - Licensing → Escalate to licensing team
   - Technical → Begin troubleshooting workflow
   - Guidance → Provide documentation/consultation
   - Strategic → Schedule TAM engagement
   
2. Based on Risk Assessment:
   - High Risk → Immediate action, escalate
   - Medium Risk → Standard workflow, monitor
   - Low Risk → Queue for processing
   
3. Based on Customer Tier:
   - Strategic → Priority handling, proactive communication
   - Standard → Normal SLA
   
4. Based on Knowledge Gaps:
   - Sufficient info → Proceed with action
   - Missing critical info → Request clarification first
```

### JPMC Case Recommendation
```
Recommended Actions:
1. ✅ Escalate to licensing team (James McCormick)
   Reasoning: Licensing issue, not technical
   
2. ✅ Loop in account executive
   Reasoning: Enterprise subscription, procurement timeline
   
3. ✅ Monitor case until resolution
   Reasoning: High risk, tight timeline
   
4. ⏳ Schedule post-renewal check-in
   Reasoning: Opportunity for deeper technical engagement
   
5. ⏳ Gather technical architecture details
   Reasoning: Fill knowledge gaps for future support
```

---

## Pattern 6: Relationship Mapping

### Entity Relationship Graph
```
Customer (JPMC)
├── Applications
│   └── NEAT
│       ├── Team: IP Foundational Services - Network Services
│       ├── Owner: Ganesh Kasthurirangan (VP)
│       ├── Platform: Ansible Automation Platform
│       └── Subscription: Expires 2025-12-31
│
├── Contacts
│   ├── Ganesh Kasthurirangan (VP, Decision Maker)
│   ├── Kedar Dixit (Technical Contact)
│   ├── Bruce (Stakeholder)
│   └── neat_admins@jpmchase.com (Distribution List)
│
├── Cases
│   └── 04293185
│       ├── Type: Licensing/Subscription Renewal
│       ├── Opened: 2025-10-28
│       ├── Status: Escalated to licensing
│       └── Deadline: 2025-12-31
│
└── Red Hat Team
    ├── TAM: Jimmy Byrd
    ├── Licensing: James McCormick
    └── Account Team: TBD
```

### Insights from Relationships
```
1. NEAT is owned by VP-level → High organizational importance
2. Network Services team → Likely mature automation practice
3. Enterprise AAP subscription → Other applications may exist
4. Distribution list (neat_admins) → Team-based management
5. VP escalation → Business-critical application
```

---

## Pattern 7: Knowledge Gap Identification

### Categorization
```
1. High Confidence (Extracted from email)
   - Application name: NEAT
   - Issue type: Subscription renewal
   - Deadline: Dec 31, 2025
   - Contacts: Ganesh, Kedar, Bruce
   
2. Medium Confidence (Inferred from context)
   - Enterprise AAP subscription exists
   - Multiple environments (prod + non-prod)
   - Network automation use case
   - Mature automation team
   
3. Low Confidence (Needs Discovery)
   - AAP version in use
   - Number of managed nodes
   - Other AAP applications at JPMC
   - Total subscription size
   - Account executive relationship
```

### Discovery Plan
```
Immediate (Needed for case resolution):
- Total JPMC AAP subscription entitlements
- NEAT license requirements (node count)
- Procurement/approval process timeline

Short Term (Helpful for ongoing support):
- AAP version and architecture
- Integration points
- Other AAP applications
- Account team relationships

Long Term (Strategic engagement):
- Automation maturity assessment
- Expansion opportunities
- Training/enablement needs
- Upgrade planning
```

---

## Implementation Roadmap for Taminator

### Phase 1: Email Analysis (Foundation)
```python
def analyze_email_thread(email_text):
    """
    Extract structured intelligence from email thread.
    
    Returns:
        CaseIntelligence object with:
        - case_number
        - customer_info
        - contacts
        - issue_classification
        - urgency_assessment
        - recommended_actions
    """
    pass
```

### Phase 2: Context Building (Enrichment)
```python
def build_customer_context(case_intelligence, existing_data):
    """
    Generate or update customer profile and application docs.
    
    Returns:
        CustomerContext object with:
        - customer_profile
        - application_details
        - contact_directory
        - knowledge_gaps
    """
    pass
```

### Phase 3: Risk Assessment (Prioritization)
```python
def assess_case_risk(case_intelligence):
    """
    Calculate risk score and priority.
    
    Returns:
        RiskAssessment object with:
        - timeline_risk
        - business_impact_risk
        - technical_complexity_risk
        - overall_priority
    """
    pass
```

### Phase 4: Action Recommendation (Automation)
```python
def recommend_actions(case_intelligence, risk_assessment):
    """
    Generate recommended next steps.
    
    Returns:
        ActionPlan object with:
        - immediate_actions
        - short_term_actions
        - long_term_actions
        - escalation_targets
    """
    pass
```

### Phase 5: Relationship Mapping (Insights)
```python
def map_relationships(customer_context, case_history):
    """
    Build entity relationship graph.
    
    Returns:
        RelationshipGraph object with:
        - customer_to_applications
        - applications_to_products
        - contacts_to_roles
        - cases_to_issues
    """
    pass
```

---

## Data Structures

### CaseIntelligence
```python
@dataclass
class CaseIntelligence:
    case_number: str
    customer: CustomerInfo
    contacts: List[Contact]
    issue: IssueClassification
    urgency: UrgencyAssessment
    recommended_actions: List[Action]
    confidence_scores: Dict[str, float]
    source: str  # "email", "case_system", "manual"
```

### CustomerInfo
```python
@dataclass
class CustomerInfo:
    name: str
    account_number: str
    tier: str  # "strategic", "standard"
    industry: str
    detected_from: str
    confidence: float
```

### IssueClassification
```python
@dataclass
class IssueClassification:
    primary_type: str  # "licensing", "technical", "guidance", "strategic"
    subtype: str
    product: str
    application: Optional[str]
    confidence: float
    reasoning: str
```

### UrgencyAssessment
```python
@dataclass
class UrgencyAssessment:
    level: str  # "high", "medium", "low"
    deadline: Optional[datetime]
    days_remaining: Optional[int]
    indicators: List[str]
    score: float
```

---

## Success Metrics

### Accuracy Metrics
- Case number extraction accuracy: Target 95%+
- Customer identification accuracy: Target 90%+
- Issue classification accuracy: Target 85%+
- Contact extraction accuracy: Target 80%+

### Efficiency Metrics
- Time to initial analysis: < 30 seconds
- Time to context building: < 2 minutes
- Manual data entry reduction: 70%+
- Knowledge gap identification: 100% of cases

### Quality Metrics
- Recommended action accuracy: 80%+
- Risk assessment alignment with actual priority: 85%+
- Customer satisfaction with AI-assisted workflow: 4.5/5+

---

**Last Updated**: October 29, 2025  
**Source Case**: JPMC 04293185  
**Status**: Foundation patterns extracted, ready for implementation

