---
id: contact-extraction
title: Contact Profile Insights
sidebar_label: Contact Profile Insights
description: Build contact profiles from websites and URLs in bulk with email discovery, optional AI enrichment, task controls, and exportable results.
---

# Contact Profile Insights

aiFetchly's Contact Profile Insights feature builds structured contact profiles from websites at scale. Use it to collect public emails from individual URLs or existing search results, and optionally enrich each profile with AI-detected phone numbers, addresses, and social links.

## Understanding Contact Profile Insights

Contact Profile Insights works by:

1. **Visiting each URL** you provide
2. **Scanning page content** for email patterns
3. **Following internal links** (optional)
4. **Selecting strong candidate pages** for optional AI enrichment
5. **Compiling discovered emails and enriched contact fields** into a structured list
6. **Deduplicating** results automatically

:::info Use Cases

Contact Profile Insights is perfect for:
- Collecting emails from search results
- Building contact lists from industry directories
- Gathering contact info from member listings
- Finding public contact channels from resource pages
- Enriching contact profiles with phone numbers, addresses, and social profiles

:::

## Creating a Profile Insight Task

### Step 1: Navigate to Contact Profile Insights

1. Click **Contact Profile Insights** in the left navigation menu
2. You'll see the profile insight task list
3. Click **Create New Task** button

### Step 2: Choose URL Input Method

Select how you want to provide URLs for analysis:

#### Method 1: Manual URL Input

**Best for**: Custom URL lists, specific websites

1. Select **Manual Input** from the source dropdown
2. Enter your URLs in the text area
3. **Format**: One URL per line

**Example:**
```
https://example.com
https://www.business-site.com/contact
https://another-site.com/about-us
```

**Validation:**
- URLs must start with `http://` or `https://`
- Invalid URLs will be flagged automatically
- Maximum URLs per task: 10,000

#### Method 2: From Search Results

**Best for**: Leveraging existing search campaigns

1. Select **Search Results** from the source dropdown
2. A table of your completed search tasks appears
3. Select the search task containing URLs you want to analyze
4. Click **Confirm**

**Benefits:**
- Seamless integration with search feature
- No manual URL entry needed
- Uses URLs collected by Market Insight Explorer

### Step 3: Configure Profile Insights Settings

#### Page Length

- **Default**: 10 pages per URL
- **Recommended range**: 1-1000 pages
- **Purpose**: How many pages to review on each website

**Guidelines:**
- **Small sites**: 5-10 pages
- **Medium sites**: 10-50 pages
- **Large sites**: 50-100 pages
- **Very large sites**: 100+ pages (use with caution)

:::warning Pages vs. Time

Higher page length = longer analysis time. Start conservative and scale up.

:::

#### Concurrency

- **Default**: 1 concurrent process
- **Purpose**: How many URLs to process simultaneously

**Recommendations:**
- **Without proxies**: 1-3 concurrent
- **With proxies**: 3-10 concurrent
- **Start low** and increase gradually

#### Max Page Number

- **Default**: 100 pages
- **Range**: 0-1000 pages
- **Purpose**: Absolute maximum pages to process

**Use Case**: Prevent overly long analysis on very large sites.

#### Process Timeout

- **Default**: 10 minutes
- **Range**: 1-20 minutes
- **Purpose**: Maximum time per URL before timeout

**Adjust if:**
- Sites load slowly → Increase timeout
- Want faster failure → Decrease timeout

### Step 4: Display Options

#### Show in Browser

- **No** (default): Profile Insights runs invisibly (faster)
- **Yes**: Browser window visible (debugging mode)

**Recommendation**: Keep at "No" for production tasks.

### Step 5: AI Enrichment (Optional)

When AI is enabled for your account, the task form shows **Enable AI Enrichment**.

- **Off**: Extracts emails only.
- **On**: Uses AI to enrich each result with phone number, address, and social links when those details can be found.

AI Enrichment is useful when you need fuller contact profiles for outreach or qualification. It may add processing time, and some rows may show **Skipped** or **Failed** if there is not enough useful page content or the AI enrichment request cannot complete.

### Step 6: Proxy Configuration (Optional)

Add proxies for large-scale profile insights:

1. Click **Choose Proxy**
2. Select one or more proxies
3. Confirm the selection
4. The selected proxies appear as chips in the proxy selector

:::tip When to Use Proxies

Use proxies when:
- Organizing from 50+ URLs
- Running multiple concurrent processes
- Previous tasks were blocked
- Organizing from the same domains repeatedly

:::

### Step 7: Create or Update Task

Click **Submit** to create a new profile insight task. New tasks are submitted to the backend process and the app returns you to the task list when the task starts.

When editing an existing task, the button changes to **Save**. Saving updates the task settings, including URL source, page depth, concurrency, timeout, proxies, browser visibility, and AI Enrichment.

## Managing Profile Insight Tasks

### View Task List

Navigate to **Contact Profile Insights** to see all your tasks.

**Task List Columns:**

| Column | Description |
|--------|-------------|
| **ID** | Unique task identifier |
| **Type** | Manual Input or Search Results |
| **Status** | Pending, Processing, Complete, Error |
| **Record Time** | When task was created |
| **Actions** | View, Stop, Start/Restart, Edit, Delete, Download Logs |

### Task Status

| Status | Description | Action |
|--------|-------------|--------|
| **Pending** | Task created but not started | Edit, Delete |
| **Processing** | Actively finding public contact channels | Stop task or monitor progress |
| **Complete** | Finished successfully | View results, edit settings, or restart |
| **Error** | Failed with errors | Download logs, edit settings, delete, or restart |

### Task Actions

- **View Results** (folder icon): See extracted emails
- **Stop** (stop icon): Stop a task that is currently processing
- **Start/Restart** (play icon): Start a task that is not currently processing
- **Edit** (pencil icon): Modify task settings
- **Delete** (trash icon): Remove pending or error tasks
- **Download Logs** (download icon): Get error logs (failed tasks only)

## Viewing Contact Profile Results

### Step 1: Access Results

1. Go to **Contact Profile Insights** task list
2. Find the completed task
3. Click **View Results**

### Step 2: Results Table

The results table displays:

| Column | Description |
|--------|-------------|
| **ID** | Unique result identifier |
| **URL** | Source website |
| **Record Time** | When the result was collected |
| **Phone** | AI-enriched phone number when available |
| **Address** | AI-enriched address when available |
| **Social Links** | AI-enriched social profile links when available |
| **AI Status** | Enrichment status: Not enriched, Processing, Completed, Failed, or Skipped |

### Step 3: Expand Details

Click on a row to expand and see:
- All emails found on that URL
- Email list can be copied
- Enriched phone, address, and social links when present

### Step 4: Search and Filter

- **Search**: Filter by URL or email address
- **Pagination**: Navigate large result sets
- **Export**: Download the task results as a CSV file

## Exporting Contact Profile Results

### Export as CSV

1. Open a task's result details
2. Click **Export**
3. aiFetchly exports the task results as a CSV file and returns the saved file path

**CSV Format:**
```csv
URL,Email,Phone,Address,Social Links,AI Status,Timestamp
https://example.com,contact@example.com,+1-555-0100,"123 Market St","https://linkedin.com/company/example",completed,2026-06-08 10:30:00
```

### Use in Email Campaigns

Extracted emails integrate directly with outreach campaign:

1. **View Results** of profile insight task
2. Export the task results or choose the task from the outreach campaign email-source selector
3. Use the collected emails and enriched profile fields for review and personalization

For detailed instructions, see [Outreach Campaign](./batch-email-sending).

## Best Practices

### 1. URL Source Strategy

**High-Quality Sources:**
- Industry directories
- Member listings
- Association websites
- Resource pages
- "Contact Us" pages

**Avoid:**
- Social media platforms (rarely have emails)
- News sites (low conversion)
- Very large portals (low quality)

### 2. Page Length Settings

**Conservative** (Quality focus):
- Page length: 5-10
- Concurrency: 1-3
- AI Enrichment: On for high-value targets
- Best for: Targeted lists, high-value contacts

**Moderate** (Balance):
- Page length: 10-50
- Concurrency: 3-5
- AI Enrichment: On when profile quality matters
- Best for: General outreach campaigns

**Aggressive** (Quantity focus):
- Page length: 50-100+
- Concurrency: 5-10
- AI Enrichment: Use selectively to manage processing time
- Best for: Market research, broad coverage

:::warning Quality vs. Quantity

Aggressive settings may extract more emails but lower quality. Focus on relevant sources for better campaign results.

:::

### 3. Proxy Usage

**Small Tasks** (< 100 URLs):
- Proxies not required
- Concurrency: 1-3

**Medium Tasks** (100-1000 URLs):
- Use 2-3 proxies
- Concurrency: 3-5

**Large Tasks** (1000+ URLs):
- Use 5+ proxies
- Concurrency: 5-10
- Rotate proxies regularly

### 4. Deduplication

aiFetchly automatically deduplicates emails within a task. For additional deduplication:

- Export results to CSV
- Use spreadsheet software or scripts
- Compare with existing contact lists
- Remove duplicates before campaigns

### 5. Email Verification

Extracted emails may not always be valid. Consider:

- **Manual review**: Spot-check email formats
- **Email verification tools**: Use third-party services
- **Test campaigns**: Send small batches first
- **Track bounces**: Remove undeliverable emails

## Integration with Search Results

The most powerful workflow combines search and profile insights:

### Complete Workflow

1. **Run Search Task**:
   - Search for businesses in your target industry
   - Use AI keyword generation for comprehensive coverage

2. **Open in Contact Profile Insights**:
   - Create profile insight task from search results
   - Open in Contact Profile Insights from discovered URLs

3. **Quality Control**:
   - Review extracted emails and enriched contact fields
   - Filter by source quality
   - Remove duplicates

4. **Outreach Campaign**:
   - Import to outreach campaign
   - Create personalized templates
   - Launch campaign

## Advanced Techniques

### Technique 1: Deep Profile Insights

For comprehensive email collection:

1. **Set Page Length**: 50-100 pages
2. **Enable Proxies**: Use 3-5 proxies
3. **Moderate Concurrency**: 3-5
4. **Monitor Progress**: Check results regularly
5. **Stop Early**: If quality drops, adjust settings

### Technique 2: Pattern-Based Profile Insights

Target specific types of pages:

- **Contact pages**: URLs containing `/contact`
- **About pages**: URLs containing `/about`
- **Team pages**: URLs containing `/team`
- **Member directories**: Association websites

### Technique 3: Competitor Analysis

Open in Contact Profile Insights from competitor websites:

1. **Identify competitors** in your niche
2. **Extract their contact emails**
3. **Analyze their partnerships** (link pages)
4. **Build partnership outreach list**

## Troubleshooting

### Task Status: "Error"

**Possible causes:**
- Invalid URLs
- Network connectivity issues
- All proxies failed
- Website blocking

**Solutions:**
1. Verify URL format (http:// or https://)
2. Check internet connection
3. Test proxy health
4. Reduce concurrency
5. Increase timeout settings

### No Emails Extracted

**Possible causes:**
- Websites don't have publicly visible emails
- Emails are in images/JavaScript (not extracted)
- Websites use contact forms instead of emails
- Page length too low

**Solutions:**
1. Increase page length setting
2. Manually verify websites have emails
3. Try different URL sources
4. Check if sites use contact forms

### AI Enrichment Not Available

**Possible causes:**
- AI is not enabled for your account
- The app could not load the current AI account status

**Solutions:**
1. Confirm AI features are enabled in your account or workspace
2. Reopen the task form after enabling AI
3. Run the task without AI Enrichment if you only need email addresses

### AI Status Shows Failed or Skipped

**Possible causes:**
- The page did not contain enough useful contact context
- The site blocked access to contact pages
- AI enrichment timed out or failed for that result

**Solutions:**
1. Expand the row and review the emails that were still extracted
2. Increase page depth for sites where contact pages are deeper
3. Reduce concurrency or use proxies if pages are being blocked
4. Restart the task after adjusting settings

### Slow Processing

**Possible causes:**
- High page length
- Many concurrent processes
- Slow websites
- Network latency

**Solutions:**
1. Reduce page length
2. Decrease concurrency
3. Increase timeout
4. Use faster proxies

### Duplicate Emails

**Possible causes:**
- Same email appears on multiple pages
- Multiple URLs from same domain

**Solutions:**
1. aiFetchly auto-deduplicates within tasks
2. Export and deduplicate across tasks
3. Use spreadsheet software or scripts
4. Use email verification tools

### Blocked by Websites

**Possible causes:**
- Too many concurrent requests
- No proxy rotation
- Aggressive settings

**Solutions:**
1. Reduce concurrency to 1-3
2. Use multiple proxies
3. Increase delays between requests
4. Respect website rate limits

## Legal and Ethical Considerations

### Compliance

When finding public contact channels, consider:

- **GDPR** (Europe): Strict regulations on email collection
- **CAN-SPAM** (USA): Requirements for commercial emails
- **CASL** (Canada): Consent requirements for electronic messages

:::warning Legal Disclaimer

Always ensure you have legal rights to extract and contact the email addresses. Consult legal counsel for guidance on applicable laws.

:::

### Best Practices

- **Public Sources Only**: Use publicly available information
- **Relevant Context**: Focus on businesses and contacts relevant to your offering
- **Respect Robots.txt**: Honor website exclusion standards
- **Provide Opt-Out**: Include unsubscribe options in emails
- **Value Proposition**: Offer something of value in your outreach

## Integration with Outreach Campaign

Once you've extracted emails:

1. **Review Results**: Quality check your extracted emails
2. **Review Enrichment**: Check phone, address, social links, and AI status when AI Enrichment was enabled
3. **Export or Import**: Choose the task in an outreach campaign or export as CSV
4. **Select Template**: Choose or create email template
5. **Personalize**: Use AI Email Writer for personalized content
6. **Launch Campaign**: Send targeted outreach

For detailed instructions on creating campaigns, see [Outreach Campaign](./batch-email-sending).

## Next Steps

- [Set up the Knowledge Library](../ai-outreach/knowledge-library)
- [Create AI-powered email campaigns](../ai-outreach/ai-email-writer)
- [Learn about the AI Marketing Assistant](../ai-outreach/ai-marketing-assistant)

---

**Ready to find public contact channels?** Start with a small batch of URLs to test your settings, then scale up your profile insights operations.
