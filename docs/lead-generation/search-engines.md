---
id: search-engines
title: Search Engine Scraping
sidebar_label: Search Engines
description: Learn how to scrape search results from Google, Bing, Yandex, and Yahoo to generate leads.
---

# Search Engine Scraping

aiFetchly's multi-engine search scraping feature allows you to collect leads from multiple search engines simultaneously. Extract business information, URLs, and contact details from search results automatically.

## Supported Search Engines

| Engine | Best For | Account Required | Local Browser |
|--------|----------|------------------|---------------|
| **Google** | General searches, global reach | Recommended | Optional |
| **Bing** | Microsoft ecosystem, US market | Optional | Optional |
| **Yandex** | Russian market, Cyrillic content | Recommended | **Required** |
| **Yahoo** | General searches, news | Optional | Optional |

:::info Yandex Requirement

Yandex scraping requires **local browser integration** for proper operation. Enable this option when creating Yandex tasks.

:::

## Creating a Search Task

### Step 1: Navigate to Search

1. Click **Search** in the left navigation menu
2. You'll see the **Search Form** page

### Step 2: Basic Search Configuration

Enter the following required information:

#### Keywords

1. **Enter Your Keywords**: Type or paste your search keywords in the text area
   - One keyword per line
   - Use specific, targeted keywords for better results

2. **Generate Related Keywords** (Optional):
   - Click the **Generate Related Keywords** button
   - aiFetchly uses AI to generate related search terms
   - Expands your keyword list for broader coverage
   - Removes duplicates automatically

:::tip Keyword Strategy

Start with 5-10 seed keywords, then use AI generation to expand to 20-50 related keywords for comprehensive coverage.

:::

#### Search Engine

Select the search engine from the dropdown:
- Google (default)
- Bing
- Yandex
- Yahoo

#### Page Number

Specify which page to start scraping from:
- **Start at page 1** for fresh searches
- **Resume from page X** if continuing a previous task

#### Concurrent Quantity

Set the number of concurrent searches:
- **1** (default): Safest, slowest
- **3-5**: Moderate speed, good for most use cases
- **10+**: Fastest, requires more proxies

:::warning Concurrency Limits

Higher concurrency increases the risk of being blocked. Start with 1-3 and increase gradually.

:::

### Step 3: Advanced Options

#### Proxy Configuration

**Option A: Use Saved Proxies**

1. Click the **Choose Proxy** button
2. Select one or more proxies from your list
3. Click **Confirm** to add them to the task

**Option B: Manual Proxy Entry**

1. Toggle the proxy option
2. Enter proxy details manually:
   - Host/IP address
   - Port number
   - Username (if required)
   - Password (if required)

:::tip Proxy Best Practices

Use multiple proxies for high-concurrency tasks to distribute load and avoid blocks.

:::

#### Local Browser Integration

Enable local browser scraping for more human-like behavior:

1. Toggle **Local Browser** to enable
2. Select your Chrome browser from the list
3. **Required for**: Yandex scraping
4. **Recommended for**: Google at scale

**Benefits:**
- Lower detection rates
- Better success with anti-bot protections
- More consistent results

#### Search Account Usage

Use authenticated accounts for better success rates:

1. Toggle **Search Account** to enable
2. Click **Choose Account** to select saved credentials
3. Select accounts matching your search engine
4. Click **Confirm**

**Recommendations:**
- **Google**: Use accounts for large-scale scraping
- **Yandex**: Use accounts for better access
- **Bing/Yahoo**: Optional, less critical

### Step 4: Execute or Save

Choose one of the following options:

#### Save Only

- Creates the task without running it
- Useful for scheduling or batch task creation
- Task status: "Not Start"

#### Run Task

- Creates and executes the task immediately
- Status changes to "Processing"
- Results appear in real-time

## Managing Search Tasks

### View Task List

Navigate to **Search** → **Result List** to see all your search tasks.

**Task List Columns:**

| Column | Description |
|--------|-------------|
| **ID** | Unique task identifier |
| **Keywords** | Keywords used in the search |
| **Search Engine** | Engine used (Google, Bing, etc.) |
| **Status** | Not Start, Processing, Complete, Error |
| **Created** | Date and time created |
| **Actions** | Run, Edit, Delete, View Results |

### Task Actions

| Action | Description | When Available |
|--------|-------------|----------------|
| **Run** | Start a "Not Start" task | Task not started |
| **Retry** | Restart a failed task | Task has "Error" status |
| **Edit** | Modify task parameters | Any task |
| **Kill Process** | Stop a running task | Task is "Processing" |
| **View Results** | See detailed results | Task has results |
| **Download Logs** | Export error logs | Task has errors |

## Viewing Search Results

### Step 1: Open Results

1. Go to **Search** → **Result List**
2. Find your task
3. Click **View Results** to see detailed results

### Step 2: Results Table

The results table displays:

| Column | Description |
|--------|-------------|
| **ID** | Result identifier |
| **Title** | Page title from search result |
| **Link** | URL of the search result |
| **Keyword** | Keyword that generated this result |
| **Timestamp** | When the result was scraped |
| **AI Industry** | Industry classification (if analyzed) |
| **AI Match Score** | Lead quality score (if analyzed) |
| **Analysis Status** | Analysis completion status |

### Step 3: Interact with Results

**Individual Actions:**
- **Copy Link**: Copy URL to clipboard
- **Open Link**: Open URL in your browser

**Batch Actions:**
- Select multiple results using checkboxes
- **AI Analysis**: Analyze selected results for lead scoring
- **Extract Emails**: Extract email addresses from selected URLs
- **Export**: Download results as CSV

## AI Website Analysis

Enhance your search results with AI-powered analysis:

### Step 1: Select Results

1. Check the boxes next to results you want to analyze
2. Click the **AI Analysis** button

### Step 2: Configure Analysis

- **Industry Classification**: Categorize businesses by industry
- **Lead Scoring**: Rate lead quality (0-100)
- **Business Context**: Extract business information

### Step 3: Monitor Progress

- Progress bar shows completion status
- Results update in real-time
- AI Match Score indicates lead quality

### Step 4: Filter by Score

After analysis:
- Use the AI Match Score to prioritize leads
- Filter results by industry
- Focus on high-score leads for outreach

## Email Extraction from Search Results

Extract emails directly from your search results:

### Step 1: Select Results

1. Check boxes next to results containing URLs you want to extract emails from
2. Click **Extract Emails** button

### Step 2: Configure Extraction

The selected URLs are automatically passed to the [Email Extraction](./contact-extraction) feature.

### Step 3: View Extracted Emails

Navigate to the Email Extraction section to view collected emails.

## Exporting Search Results

### Export as CSV

1. Select results you want to export (or leave blank for all)
2. Click **Export** → **CSV**
3. Choose save location
4. File includes all columns from the results table

### Export Error Logs

If a task fails:

1. Go to **Search** → **Result List**
2. Find the failed task
3. Click **Download Logs**
4. Review logs to diagnose issues

## Best Practices

### 1. Start Small

- Begin with 5-10 keywords
- Use low concurrency (1-3)
- Monitor results before scaling up

### 2. Use Proxies

- Always use proxies for more than 10 pages
- Rotate proxies to distribute load
- Test proxies before running large tasks

### 3. Leverage AI Features

- Use keyword generation to expand coverage
- Run AI analysis to score leads
- Focus on high-score results for outreach

### 4. Engine-Specific Tips

**Google:**
- Use authenticated accounts
- Enable local browser for large tasks
- Respect rate limits (start with 1 concurrent)

**Bing:**
- More forgiving than Google
- Can use higher concurrency
- Good for US-focused searches

**Yandex:**
- **Must use local browser**
- Use accounts for better access
- Essential for Russian/Cyrillic content

**Yahoo:**
- Similar to Bing in tolerance
- Good for news and trends
- Less strict anti-scraping

### 5. Monitor Task Status

- Check task list regularly
- Review error logs for failures
- Adjust settings based on results

### 6. Organize Results

- Use descriptive task names
- Export results regularly
- Clean up old tasks

## Troubleshooting

### Task Status: "Error"

**Possible causes:**
- All proxies failed
- Network connectivity issues
- Search engine blocked requests

**Solutions:**
1. Check proxy health in Proxy section
2. Verify internet connection
3. Reduce concurrency
4. Enable local browser
5. Use authenticated accounts

### No Results Returned

**Possible causes:**
- Keywords too specific
- Search engine returned no results
- Pagination out of range

**Solutions:**
1. Try broader keywords
2. Start from page 1
3. Verify keywords work in manual search

### Slow Processing

**Possible causes:**
- High concurrency without enough proxies
- Local browser enabled (slower but safer)
- Network latency

**Solutions:**
1. Add more proxies
2. Reduce concurrency
3. Consider disabling local browser for speed (with caution)

### Captcha or Block Detected

**Solutions:**
1. Enable local browser integration
2. Use authenticated accounts
3. Add more proxies
4. Reduce request frequency
5. Take breaks between large tasks

## Advanced Workflows

### Workflow 1: Comprehensive Lead Generation

1. **Create search task** with broad keywords
2. **Generate related keywords** using AI
3. **Run with moderate concurrency** (3-5)
4. **AI analyze** all results
5. **Filter by match score** (focus on 70+)
6. **Extract emails** from high-score results
7. **Export** for email campaigns

### Workflow 2: Competitive Analysis

1. **Search competitor names** + industry keywords
2. **Use local browser** to avoid detection
3. **AI analyze** for industry classification
4. **Export** for market research

### Workflow 3: Local Business Discovery

1. **Search local keywords** (e.g., "plumbers in Chicago")
2. **Extract emails** from results
3. **Batch analyze** websites
4. **Create targeted outreach** campaigns

## Integration with Other Features

Search results integrate seamlessly with:

- **[Contact Extraction](./contact-extraction)** - Extract emails from URLs
- **[Yellow Pages](./yellow-pages)** - Cross-reference with directory listings
- **[AI Email Writer](../ai-outreach/ai-email-writer)** - Create personalized outreach
- **[Batch Email Sending](../ai-outreach/batch-email-sending)** - Launch campaigns

## Next Steps

- [Learn about Yellow Pages scraping](./yellow-pages)
- [Set up contact extraction](./contact-extraction)
- [Create AI-powered email campaigns](../ai-outreach/ai-email-writer)

---

**Ready to find leads?** Start with a small search task and scale up as you become familiar with the system.
