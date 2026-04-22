---
id: contact-extraction
title: Contact Extraction
sidebar_label: Email Extraction
description: Extract email addresses from websites and URLs in bulk with aiFetchly's powerful extraction tool.
---

# Email Extraction

aiFetchly's Email Extraction feature allows you to harvest email addresses from websites at scale. Extract contact information from individual URLs or leverage your existing search results for targeted email collection.

## Understanding Email Extraction

Email extraction works by:

1. **Visiting each URL** you provide
2. **Scanning page content** for email patterns
3. **Following internal links** (optional)
4. **Compiling all discovered emails** into a structured list
5. **Deduplicating** results automatically

:::info Use Cases

Email extraction is perfect for:
- Collecting emails from search results
- Building contact lists from industry directories
- Gathering contact info from member listings
- Extracting emails from resource pages

:::

## Creating an Extraction Task

### Step 1: Navigate to Email Extraction

1. Click **Email Extraction** in the left navigation menu
2. You'll see the extraction task list
3. Click **Create New Task** button

### Step 2: Choose URL Input Method

Select how you want to provide URLs for extraction:

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
3. Select the search task containing URLs you want to extract from
4. Click **Confirm**

**Benefits:**
- Seamless integration with search feature
- No manual URL entry needed
- Uses previously scraped URLs

### Step 3: Configure Extraction Settings

#### Page Length

- **Default**: 10 pages per URL
- **Range**: 1-1000 pages
- **Purpose**: How many pages deep to crawl each website

**Guidelines:**
- **Small sites**: 5-10 pages
- **Medium sites**: 10-50 pages
- **Large sites**: 50-100 pages
- **Very large sites**: 100+ pages (use with caution)

:::warning Pages vs. Time

Higher page length = longer extraction time. Start conservative and scale up.

:::

#### Concurrency

- **Default**: 1 concurrent process
- **Range**: 1-10 concurrent processes
- **Purpose**: How many URLs to process simultaneously

**Recommendations:**
- **Without proxies**: 1-3 concurrent
- **With proxies**: 3-10 concurrent
- **Start low** and increase gradually

#### Max Page Number

- **Default**: 100 pages
- **Range**: 0-1000 pages
- **Purpose**: Absolute maximum pages to process

**Use Case**: Prevent runaway extraction on very large sites.

#### Process Timeout

- **Default**: 10 minutes
- **Range**: 1-20 minutes
- **Purpose**: Maximum time per URL before timeout

**Adjust if:**
- Sites load slowly → Increase timeout
- Want faster failure → Decrease timeout

### Step 4: Display Options

#### Show in Browser

- **No** (default): Extraction runs invisibly (faster)
- **Yes**: Browser window visible (debugging mode)

**Recommendation**: Keep at "No" for production tasks.

### Step 5: Proxy Configuration (Optional)

Add proxies for large-scale extraction:

1. Toggle **Use Proxy**
2. Click **Choose Proxy**
3. Select one or more proxies
4. Click **Confirm**

:::tip When to Use Proxies

Use proxies when:
- Extracting from 50+ URLs
- Running multiple concurrent processes
- Previous tasks were blocked
- Extracting from the same domains repeatedly

:::

### Step 6: Create Task

Click **Submit** to create your extraction task. You can:
- **Save Only**: Save task without running
- **Run Now**: Start extraction immediately

## Managing Extraction Tasks

### View Task List

Navigate to **Email Extraction** to see all your tasks.

**Task List Columns:**

| Column | Description |
|--------|-------------|
| **ID** | Unique task identifier |
| **Type** | Manual Input or Search Results |
| **Status** | Pending, Processing, Complete, Error |
| **Record Time** | When task was created |
| **Actions** | View, Edit, Delete, Download Logs |

### Task Status

| Status | Description | Action |
|--------|-------------|--------|
| **Pending** | Task created but not started | Edit, Delete |
| **Processing** | Actively extracting emails | Monitor progress |
| **Complete** | Finished successfully | View results |
| **Error** | Failed with errors | View logs, Retry |

### Task Actions

- **View Results** (folder icon): See extracted emails
- **Edit** (pencil icon): Modify task settings (only pending/error tasks)
- **Delete** (trash icon): Remove task
- **Download Logs** (download icon): Get error logs (failed tasks only)

## Viewing Extracted Emails

### Step 1: Access Results

1. Go to **Email Extraction** task list
2. Find the completed task
3. Click **View Results**

### Step 2: Results Table

The results table displays:

| Column | Description |
|--------|-------------|
| **URL** | Source website |
| **Emails** | Extracted email addresses (expandable) |
| **Count** | Number of emails found |
| **Timestamp** | When extraction occurred |

### Step 3: Expand Details

Click on a row to expand and see:
- All emails found on that URL
- Email list can be copied
- View individual email addresses

### Step 4: Search and Filter

- **Search**: Filter by URL or email address
- **Pagination**: Navigate large result sets
- **Auto-refresh**: Results update every 10 seconds during processing

## Exporting Extracted Emails

### Export as CSV

1. Select results you want to export (or leave blank for all)
2. Click **Export** → **CSV**
3. File downloads with all extracted emails

**CSV Format:**
```csv
URL,Email,Timestamp
https://example.com,contact@example.com,2024-01-15 10:30:00
https://example.com,info@example.com,2024-01-15 10:30:00
```

### Use in Email Campaigns

Extracted emails integrate directly with email marketing:

1. **View Results** of extraction task
2. Click **Use in Campaign** button
3. Emails are automatically passed to email marketing workflow

For detailed instructions, see [Batch Email Sending](../ai-outreach/batch-email-sending).

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
- Best for: Targeted lists, high-value contacts

**Moderate** (Balance):
- Page length: 10-50
- Concurrency: 3-5
- Best for: General outreach campaigns

**Aggressive** (Quantity focus):
- Page length: 50-100+
- Concurrency: 5-10
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

The most powerful workflow combines search and extraction:

### Complete Workflow

1. **Run Search Task**:
   - Search for businesses in your target industry
   - Use AI keyword generation for comprehensive coverage

2. **Extract Emails**:
   - Create extraction task from search results
   - Extract emails from discovered URLs

3. **Quality Control**:
   - Review extracted emails
   - Filter by source quality
   - Remove duplicates

4. **Email Campaign**:
   - Import to email marketing
   - Create personalized templates
   - Launch campaign

## Advanced Techniques

### Technique 1: Deep Extraction

For comprehensive email collection:

1. **Set Page Length**: 50-100 pages
2. **Enable Proxies**: Use 3-5 proxies
3. **Moderate Concurrency**: 3-5
4. **Monitor Progress**: Check results regularly
5. **Stop Early**: If quality drops, adjust settings

### Technique 2: Pattern-Based Extraction

Target specific types of pages:

- **Contact pages**: URLs containing `/contact`
- **About pages**: URLs containing `/about`
- **Team pages**: URLs containing `/team`
- **Member directories**: Association websites

### Technique 3: Competitor Analysis

Extract emails from competitor websites:

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

When extracting emails, consider:

- **GDPR** (Europe): Strict regulations on email collection
- **CAN-SPAM** (USA): Requirements for commercial emails
- **CASL** (Canada): Consent requirements for electronic messages

:::warning Legal Disclaimer

Always ensure you have legal rights to extract and contact the email addresses. Consult legal counsel for guidance on applicable laws.

:::

### Best Practices

- **Public Sources Only**: Extract from publicly available information
- **Relevant Context**: Extract from businesses/contacts relevant to your offering
- **Respect Robots.txt**: Honor website exclusion standards
- **Provide Opt-Out**: Include unsubscribe options in emails
- **Value Proposition**: Offer something of value in your outreach

## Integration with Email Marketing

Once you've extracted emails:

1. **Review Results**: Quality check your extracted emails
2. **Export or Import**: Direct to email marketing or export as CSV
3. **Select Template**: Choose or create email template
4. **Personalize**: Use AI Email Writer for personalized content
5. **Launch Campaign**: Send targeted outreach

For detailed instructions on creating campaigns, see [Batch Email Sending](../ai-outreach/batch-email-sending).

## Next Steps

- [Set up the Knowledge Library](../ai-outreach/knowledge-library)
- [Create AI-powered email campaigns](../ai-outreach/ai-email-writer)
- [Learn about the AI Marketing Assistant](../ai-outreach/ai-marketing-assistant)

---

**Ready to extract emails?** Start with a small batch of URLs to test your settings, then scale up your extraction operations.
