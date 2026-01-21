---
id: batch-email-sending
title: Batch Email Sending
sidebar_label: Batch Email Sending
description: Send personalized email campaigns at scale using SMTP integration with aiFetchly.
---

# Batch Email Sending

aiFetchly's Batch Email Sending feature allows you to launch personalized email campaigns at scale. Import emails from your extraction tasks, use AI-generated templates, and send via your own SMTP server for complete control over your outreach.

## Overview

The batch email sending process consists of **4 steps**:

1. **Choose Email Source** - Select where your emails come from
2. **Choose Email Template** - Select or create your message template
3. **Choose Email Filter** (Optional) - Apply filters to your email list
4. **Choose Email Service** - Configure SMTP and send

:::info Prerequisites

Before sending campaigns, ensure you have:
- [Configured an SMTP service](#configuring-email-services)
- [Created email templates](./ai-email-writer)
- [Extracted or imported email lists](../lead-generation/contact-extraction)

:::

## Configuring Email Services

Before sending emails, you must configure at least one SMTP service.

### What is SMTP?

**SMTP** (Simple Mail Transfer Protocol) is the standard for sending emails. aiFetchly uses SMTP to send emails through your own email server or email service provider.

### Step 1: Navigate to Email Services

1. Click **Email Marketing** in the left navigation menu
2. Select **Email Services** from the submenu
3. Click **Add New Service**

### Step 2: SMTP Configuration

Enter the following SMTP details:

#### Service Name

- **Purpose**: Identify this SMTP configuration
- **Example**: "Gmail SMTP", "SendGrid", "AWS SES"
- **Required**: Yes

#### From Email

- **Purpose**: Email address that emails will be sent from
- **Example**: `outreach@yourcompany.com`
- **Required**: Yes

:::tip Sender Reputation

Use a dedicated email address for outreach. Avoid using personal email addresses for bulk sending.

:::

#### Password

- **Purpose**: Email account password or application-specific password
- **Required**: Yes
- **Security**: Password is stored securely

**Show/Hide Toggle**: Click the eye icon to show/hide the password.

#### Host

- **Purpose**: SMTP server hostname
- **Examples**:
  - Gmail: `smtp.gmail.com`
  - SendGrid: `smtp.sendgrid.net`
  - AWS SES: `email-smtp.us-east-1.amazonaws.com`
- **Required**: Yes

#### Port

- **Purpose**: SMTP server port
- **Common Ports**:
  - **587**: Submission (STARTTLS) - Recommended
  - **465**: SMTPS (SSL/TLS)
  - **25**: SMTP (not recommended, often blocked)
- **Required**: Yes

#### SSL/TLS

- **Toggle**: Enable secure connection
- **Recommended**: Always keep enabled
- **Purpose**: Encrypts email transmission

### Step 3: Test Configuration

Before saving, test your SMTP settings:

1. **Click "Test Connection"**
2. **Enter test details**:
   - **Receiver**: Test email address
   - **Title**: Test subject line
   - **Content**: Test email body
3. **Click "Send Test Email"**
4. **Check your inbox** for the test email

:::important Test Before Sending

Always test your SMTP configuration before using it in campaigns. This prevents failed sends and wasted resources.

:::

### Step 4: Save Service

1. If test successful, click **Save**
2. Service appears in your email services list
3. Ready to use in campaigns

### Common SMTP Providers

| Provider | Host | Port | Notes |
|----------|------|------|-------|
| **Gmail** | `smtp.gmail.com` | 587 | Use App Password, not regular password |
| **Outlook** | `smtp.office365.com` | 587 | May require App Password |
| **SendGrid** | `smtp.sendgrid.net` | 587 | API key as password |
| **Mailgun** | `smtp.mailgun.org` | 587 | Use SMTP credentials |
| **AWS SES** | Region-specific | 587 | Requires SMTP credentials |
| **Postmark** | `smtp.postmarkapp.com` | 587 | API key as password |

:::warning Gmail and Outlook

Gmail and Outlook require **App Passwords** for third-party SMTP access. You cannot use your regular password.

1. Enable 2-factor authentication
2. Generate an App Password
3. Use the App Password in aiFetchly

:::

## Sending Batch Emails

### Step 1: Choose Email Source

1. **Navigate** to **Email Marketing** → **Send Bulk Emails**
2. **Select Email Source Type** from the dropdown:
   - **Email Task**: Emails from extraction tasks
   - **Manual Input**: Upload email list manually
   - **Search Results**: Use search task results

#### Using Email Tasks (Recommended)

1. Select **Email Task** from dropdown
2. **Choose extraction task** from the list
3. **Preview** the email list
4. **Option**: Enable "Avoid Duplicates" to skip already-contacted emails

#### Using Manual Input

1. Select **Manual Input** from dropdown
2. **Enter emails** in the text area
3. **Format**: One email per line, or CSV format
4. **Click "Parse"** to process the list

### Step 2: Choose Email Template

1. **Select one or more templates** from your template list
2. **Preview** the template content
3. **Variables** will be automatically populated:
   - `{$receiver_email}`: Recipient's email address
   - `{$url}`: Source URL (if available)
   - `{$description}`: Description or context
   - `{$sender}`: Sender name from SMTP config
   - `{$send_time}`: Timestamp

:::tip Multiple Templates

You can select multiple templates to A/B test different messaging. The system will rotate through templates across recipients.

:::

### Step 3: Choose Email Filter (Optional)

Apply filters to your email list:

1. **Select filter type** from dropdown
2. **Configure filter rules**
3. **Preview filtered results**
4. **See count** of filtered emails

**Common Filters:**
- Remove duplicate emails
- Filter by domain
- Filter by industry/category
- Exclude previous recipients

:::info Filter Status

Email filters are currently a placeholder feature in this version. Duplicate prevention is available in Step 1.

:::

### Step 4: Choose Email Service

1. **Select SMTP service** from your configured services
2. **Review campaign summary**:
   - Email count
   - Selected template(s)
   - SMTP service
   - Estimated send time

3. **Click "Send Campaign"** to start sending

### Campaign Execution

After launching:

- **Real-time Progress**: Track sending progress
- **Success/Fail Counts**: See successful vs. failed sends
- **Error Logs**: View details for failed emails
- **Pause/Resume**: Control campaign execution

## Monitoring Campaigns

### Campaign List

Navigate to **Email Marketing** → **Campaigns** to see all campaigns.

**Campaign Information:**
- Campaign name
- Email count
- Template used
- SMTP service
- Status (Pending, Sending, Completed, Failed)
- Sent/Failed counts
- Start and end times

### Campaign Actions

| Action | Description |
|--------|-------------|
| **View Details** | See individual email status |
| **Pause** | Pause running campaign |
| **Resume** | Continue paused campaign |
| **Stop** | Terminate campaign |
| **Download Logs** | Export campaign results |
| **Delete** | Remove campaign record |

### Email Status

Individual emails can have these statuses:

| Status | Description |
|--------|-------------|
| **Pending** | Queued to send |
| **Sent** | Successfully delivered |
| **Failed** | Could not be delivered |
| **Bounced** | Rejected by recipient server |
| **Opened** | Recipient opened email |
| **Clicked** | Recipient clicked link |

## Best Practices

### 1. SMTP Configuration

**Use Dedicated IPs:**
- For high-volume sending, use dedicated IP addresses
- Build sender reputation gradually
- Monitor deliverability metrics

**Warm Up New Accounts:**
- Start with 20-50 emails per day
- Gradually increase over 2-4 weeks
- Monitor bounce and spam rates

**Multiple Services:**
- Configure 2-3 SMTP services
- Rotate between services to distribute load
- Prevent rate limiting by single provider

### 2. Email List Quality

**Clean Your Lists:**
- Remove bounced emails
- Suppress unsubscribes and complaints
- Verify emails before sending

**Segment Your Audience:**
- Group by industry, company size, or interest
- Create targeted campaigns for each segment
- Improve relevance and engagement

**Avoid Duplicates:**
- Enable "Avoid Duplicates" option
- Suppression lists for previous recipients
- Regular list maintenance

### 3. Template Optimization

**Personalize Content:**
- Use variables extensively
- Mention recipient-specific details
- Reference their website or work

**Keep It Concise:**
- 100-200 words ideal
- Clear subject lines
- Single call-to-action

**Mobile-Friendly:**
- Short paragraphs
- Clear formatting
- Test on mobile devices

### 4. Timing and Frequency

**Best Send Times:**
- Tuesday, Wednesday, Thursday: 10 AM - 2 PM
- Avoid Monday mornings and weekends
- Test times for your specific audience

**Sending Frequency:**
- Don't send to same recipient within 30 days
- Space out campaigns appropriately
- Monitor unsubscribe rates

**Rate Limiting:**
- Respect SMTP provider limits
- Start slow: 10-20 emails per minute
- Monitor for blocks or bounces

### 5. Compliance

**Include Required Elements:**
- Physical mailing address
- Clear unsubscribe mechanism
- Accurate header information
- Your identity in the email

**Follow Regulations:**
- **CAN-SPAM** (USA): Commercial email requirements
- **GDPR** (EU): Consent and data protection
- **CASL** (Canada): Consent requirements

:::warning Legal Compliance

Ensure your email campaigns comply with applicable laws in your recipients' jurisdictions. Consult legal counsel for guidance.

:::

## Troubleshooting

### SMTP Connection Failed

**Possible causes:**
- Incorrect SMTP settings
- Firewall blocking connection
- Authentication issues

**Solutions:**
1. Verify host, port, and credentials
2. Test with telnet: `telnet smtp.host.com port`
3. Check firewall/antivirus settings
4. Try different port (587 vs 465)
5. Verify App Password for Gmail/Outlook

### High Bounce Rate

**Possible causes:**
- Invalid email addresses
- Sender reputation issues
- Spam filter triggers

**Solutions:**
1. Verify email list quality
2. Check sender reputation (MXToolbox)
3. Improve email content
4. Warm up email account
5. Use different SMTP service

### Emails Going to Spam

**Possible causes:**
- Poor sender reputation
- Spammy content
- Missing authentication

**Solutions:**
1. Set up SPF, DKIM, and DMARC
2. Improve email content quality
3. Avoid spam trigger words
4. Include physical address and unsubscribe
5. Warm up sending domain

### Rate Limiting

**Possible causes:**
- Sending too fast
- SMTP provider limits exceeded

**Solutions:**
1. Reduce sending speed (emails per minute)
2. Configure multiple SMTP services
3. Check provider rate limits
4. Upgrade SMTP plan if needed

### Templates Not Personalizing

**Possible causes:**
- Variables not matching data
- Missing data in email list

**Solutions:**
1. Verify variable names match exactly
2. Check email list has required fields
3. Test with preview before sending
4. Use generic content as fallback

## Campaign Metrics to Track

### Deliverability

- **Sent Rate**: Emails successfully sent / Total emails
- **Bounce Rate**: Bounced emails / Sent emails
- **Delivery Rate**: Delivered emails / Sent emails

### Engagement

- **Open Rate**: Opens / Delivered
- **Click-Through Rate**: Clicks / Opens
- **Conversion Rate**: Conversions / Clicks

### Sender Reputation

- **Complaint Rate**: Spam complaints / Delivered
- **Unsubscribe Rate**: Unsubscribes / Delivered
- **Spam Trap Hits**: Emails to spam traps

:::tip Benchmark Metrics

Industry averages:
- Open Rate: 15-25%
- Click-Through Rate: 2-5%
- Bounce Rate: < 2%
- Complaint Rate: < 0.1%

:::

## Advanced Workflows

### Workflow 1: Drip Campaign

Set up automated multi-touch campaigns:

1. **Day 1**: Initial outreach email
2. **Day 3**: Follow-up if no response
3. **Day 7**: Final follow-up with value add
4. **Day 14**: Break-up email

Use the [Scheduler](../automation/task-scheduling) to automate.

### Workflow 2: A/B Testing

Test different approaches:

1. **Create 2-3 template variations**
2. **Split email list** into segments
3. **Send different templates** to each segment
4. **Measure results** (open rate, response rate)
5. **Use winner** for future campaigns

### Workflow 3: Segmented Campaigns

Target specific audiences:

1. **Extract emails** by industry or location
2. **Create tailored templates** for each segment
3. **Send targeted campaigns** to each segment
4. **Analyze results** by segment
5. **Optimize messaging** based on response

## Integration with Lead Generation

The complete email outreach workflow:

1. **[Search Engines](../lead-generation/search-engines)**: Find target websites
2. **[Contact Extraction](../lead-generation/contact-extraction)**: Harvest emails
3. **[AI Email Writer](./ai-email-writer)**: Create personalized templates
4. **[Knowledge Library](./knowledge-library)**: Provide context for AI
5. **Batch Email Sending**: Launch campaigns

## Next Steps

- [Set up the AI Marketing Assistant](./ai-marketing-assistant) for strategy
- [Configure task scheduling](../automation/task-scheduling) for automation
- [Review system settings](../settings/system-settings)

---

**Ready to send campaigns?** Start with a small test batch (20-50 emails) to verify everything works, then scale up your outreach operations.
