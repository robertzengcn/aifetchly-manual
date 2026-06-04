---
id: yellow-pages
title: Yellow Pages Information Organization
sidebar_label: Yellow Pages
description: Organize business information from Yellow Pages, Yelp, and other online directories worldwide.
---

# Yellow Pages Information Organization

aiFetchly's Yellow Pages information organization feature allows you to extract comprehensive business information from multiple online directories. Collect leads from local business listings with detailed contact information, ratings, reviews, and more. Powered by AI support, you can enhance information organization accuracy and generate related keywords automatically.

## Supported Directories

| Directory | Region | Language | Rate Limit | Features |
|-----------|--------|----------|------------|----------|
| **YellowPages.com** | USA | English | 100 req/hour | Business details, ratings, reviews, hours |
| **Yelp.com** | USA | English | 60 req/hour | Reviews, ratings, photos, detailed profile insights |
| **YellowPages.ca** | Canada | English | 100 req/hour | Canadian business directory, address parsing |
| **YellowPages.com.sg** | Singapore | English | 100 req/hour | Singapore business listings |
| **192.com** | UK | English | 100 req/hour | UK-specific business directory |
| **11880.com** | Germany | German | 100 req/hour | German directory, cookie consent handling |
| **Gelbeseiten.de** | Germany | German | 100 req/hour | German Yellow Pages, shadow root handling |
| **PagesJaunes.fr** | France | French | 100 req/hour | French Yellow Pages, location required |
| **PagineGialle.it** | Italy | Italian | 100 req/hour | Italian Yellow Pages, cookie consent |
| **iTownPage** | Japan | Japanese | 60 req/hour | Japanese directory, dialog handling |
| **uSonar Yellow Page** | Japan | Japanese | 60 req/hour | Japanese business listings |
| **KoreaLocalPages** | South Korea | Korean | 60 req/hour | Korean local business directory |

:::tip Rate Limits

Each directory has specific rate limits. aiFetchly automatically manages request delays to comply with these limits.

:::

:::info Platform Information

When creating a task, select a platform from the dropdown. As you select each platform, you'll see a sidebar showing:
- Country/Language support
- Rate limits
- Authentication requirements
- Whether location is required

:::

## Creating a Directory Assistant Task

### Step 1: Navigate to Yellow Pages

1. Click **Directory Assistant** in the left navigation menu
2. You'll see the Directory Assistant task list
3. Click **Create New Task** button

### Step 2: Basic Information

Enter the following required information:

#### Task Name

- Give your task a descriptive name
- Example: "Restaurants in Chicago" or "Plumbers in Miami"

#### Platform Selection

Select the directory you want to scrape from the dropdown:

**Americas:**
- YellowPages.com (USA)
- Yelp.com (USA)
- YellowPages.ca (Canada)

**Europe:**
- 192.com (UK)
- 11880.com (Germany)
- Gelbeseiten.de (Germany)
- PagesJaunes.fr (France) — location required
- PagineGialle.it (Italy)

**Asia-Pacific:**
- YellowPages.com.sg (Singapore)
- iTownPage (Japan)
- uSonar Yellow Page (Japan)
- KoreaLocalPages (South Korea)

#### Keywords

Enter your search keywords:
- **Format**: Comma-separated or one per line
- **Examples**: `restaurant, plumber, dentist, marketing agency`
- **Tip**: Use specific business types or categories for better results

**AI Query Keywords** (Optional):
- Click the **AI Query Keywords** button (purple, robot icon) inside the keywords field
- aiFetchly uses AI to generate related search terms based on your existing keywords
- Generated keywords are combined with your originals, duplicates removed automatically
- If no keywords are entered, AI generates suggestions from a default seed term

#### Location

Enter the geographic location for your search:
- **Examples**: `New York, NY`, `Los Angeles, CA`, `Miami, Florida`
- **Format**: City, State or City, Region
- **Required**: For most platforms

### Step 3: Performance Settings

Configure how the information organization task runs:

#### Max Pages

- **Range**: 1-100 pages
- **Default**: 10 pages
- **Recommendation**: Start with 10-20 pages for testing

**What this means:**
- Each page typically contains 20-30 business listings
- 10 pages = 200-300 potential leads
- More pages = longer processing time

#### Concurrency

- **Range**: 1-10 concurrent requests
- **Default**: 2 concurrent requests
- **Higher values**: Faster but higher risk of being blocked

:::warning Concurrency Guidelines

- Start with 1-3 concurrent requests
- Increase gradually if using proxies
- Respect platform rate limits

:::

#### Delay Between Requests

- **Range**: 0-10,000 milliseconds
- **Default**: 2000ms (2 seconds)
- **Purpose**: Prevents rate limiting and blocking

**Recommended delays:**
- **Yelp.com**: 3000ms (stricter rate limits)
- **Japanese platforms** (iTownPage, uSonar): 2500ms
- **Korean platforms** (KoreaLocalPages): 2500ms
- **All others**: 2000ms

### Step 4: Browser Configuration

#### Headless Mode

- **Enabled** (default): Browser runs invisibly (faster, recommended)
- **Disabled**: Browser window visible (useful for debugging)

**Recommendation**: Keep headless mode enabled for production tasks.

#### AI Support

Toggle **AI Support** to enable AI-powered information organization assistance:

- When enabled, AI helps improve information organization accuracy and handle edge cases
- Enabled by default if your account has AI features enabled
- Look for the purple robot icon next to the toggle

#### Local Browser

Toggle **Use Local Browser** to use your local Chrome or Firefox installation for information organization:

1. Toggle **Local Browser** to enable
2. Select **Chrome** or **Firefox** from the dropdown
3. **Benefits**: Lower detection rates, better success with anti-bot protections

### Step 5: Optional Features

#### Account Selection

Some platforms support authenticated information organization:

1. Toggle **Use Account** if available
2. Select an account from your saved accounts
3. Benefits:
   - Higher success rate
   - Access to member-only content
   - Reduced risk of blocking

#### Proxy Configuration

Add proxies for large-scale public information organization:

1. Toggle **Use Proxy**
2. Click **Choose Proxy**
3. Select one or more proxies from your list
4. Click **Confirm**

:::tip When to Use Proxies

Use proxies when:
- Information Organization more than 50 pages
- Running concurrent tasks
- Previous tasks were blocked

:::

### Step 6: Scheduling (Optional)

#### One-Time Scheduling

Set a specific date and time for the task to run:
- Click **Schedule**
- Select date and time
- Task runs automatically at scheduled time

#### Recurring Scheduling

Set up automated recurring tasks:

**Preset Options:**
- Every 15 minutes
- Every 30 minutes
- Every hour
- Every 2 hours
- Every 6 hours
- Every 12 hours
- Daily
- Weekly
- Monthly

**Custom Scheduling:**
- Use cron expressions for advanced scheduling
- Example: `0 9 * * 1-5` (9 AM Monday-Friday)

**Schedule Preview:**
- Shows next run time
- Displays configuration summary

### Step 7: Create Task

Click one of the action buttons in the sidebar:

- **Create & Start Task** (primary button): Creates the task and starts execution immediately
- **Create Task Only**: Saves the task without running it — status will be "Pending"

:::tip Task Preview

As you fill in the form, the **Task Preview** sidebar shows a live summary of your configuration including task name, platform, keywords count, location, max pages, concurrency, headless mode, and local browser selection. Review this before creating the task.

:::

### Editing a Task

To modify an existing task:

1. Go to **Directory Assistant** task list
2. Click the **Edit** (pencil) icon on the task
3. Modify the configuration in the form
4. Click **Update Task** to save changes

## Managing Directory Assistant Tasks

### View Task List

Navigate to **Directory Assistant** to see all your tasks.

**Task List Overview:**
- **Real-time Statistics**: Total, running, pending, completed, failed tasks with success rate
- **Auto-refresh**: Updates every 5 seconds; toggle on/off with the refresh button
- **Smart Pause**: Auto-refresh pauses automatically when you switch browser tabs and resumes when you return

### Filtering and Search

Use the filter bar to narrow down tasks:

| Filter | Description |
|--------|-------------|
| **Search** | Search by task name or platform |
| **Status** | Filter by Pending, Running, Completed, Failed, Paused |
| **Platform** | Filter by directory platform |
| **Priority** | Filter by High, Medium, Low priority |

Active filters are displayed as removable chips below the filter bar. Click **Clear Filters** to reset all filters.

### Task Status

| Status | Description | Action |
|--------|-------------|--------|
| **Pending** | Task created but not started | Start, Edit, Delete |
| **Running** | Task is currently processing | Pause, Stop, View Progress |
| **Paused** | Temporarily suspended | Resume, Stop |
| **Completed** | Finished successfully | View Results, Delete |
| **Failed** | Ended with errors | View Logs, Retry, Delete |

### Task Actions

| Action | Description |
|--------|-------------|
| **Start** | Begin task execution |
| **Stop** | Terminate running task |
| **Pause** | Temporarily suspend task |
| **Resume** | Continue paused task |
| **Edit** | Modify task configuration |
| **Delete** | Remove task from system |
| **View Results** | See extracted business data |

### Cloudflare Protection Alert

If a task encounters Cloudflare protection, aiFetchly displays a warning notification at the top of the task list. This alert indicates that the target directory has activated anti-bot measures. To resolve this, try enabling local browser, using authenticated accounts, or adding proxies.

### Bulk Operations

- **Start Multiple**: Select and start multiple paused/failed tasks
- **Stop Tasks**: Stop multiple running tasks
- **Delete Tasks**: Remove multiple completed/failed tasks

## Viewing Results

### Step 1: Access Results

1. Go to **Directory Assistant** task list
2. Find the completed task
3. Click **View Results** to open the results page

### Step 2: Task Summary Card

The results page shows a **Task Summary Card** at the top with:
- **Platform**: Which directory was scraped
- **Total Results**: Number of businesses extracted
- **Status**: Current task status (color-coded)
- **Created Time**: When the task was created
- **Keywords**: Displayed as chips for easy review
- **Location**: The geographic area searched

### Step 4: Results Table

The results table displays comprehensive business information:

| Column | Description |
|--------|-------------|
| **Business Name** | Name of the business |
| **Categories** | Business categories (visual chips) |
| **Email** | Email address with copy button |
| **Phone** | Phone number with copy button |
| **Website** | Clickable link to website |
| **Address** | Full address with map icon |
| **Ratings** | Star rating with review count |
| **Description** | Business description |
| **Hours** | Business hours (if available) |
| **Year Established** | Year business was founded |
| **Employee Count** | Number of employees |
| **Scraped At** | Timestamp of data profile insights |

### Step 5: Interact with Results

**Individual Actions:**
- **Copy Email**: Copy email address to clipboard
- **Copy Phone**: Copy phone number to clipboard
- **Open Website**: Open business website in new tab
- **View Details**: See full business record in modal

**Search & Filter:**
- **Search**: Filter by business name, email, phone, website, or address
- **Category Filter**: Filter results by business categories
- **Pagination**: Navigate through large result sets

## Exporting Results

### Export as CSV

1. Click **Export** button in the results view
2. File downloads automatically in CSV format
3. Filename includes task ID and date

**Exported Data Includes:**
- Business name and categories
- Contact details (email, phone, website)
- Address and location
- Ratings and reviews
- Business hours
- Additional metadata

## Best Practices

### 1. Keyword Strategy

- **Be Specific**: Use specific business types instead of generic terms
  - ❌ "services"
  - ✅ "marketing agency" or "plumbing services"

- **Use Synonyms**: Try different terms for the same business type
  - "restaurant" and "eatery"
  - "plumber" and "plumbing service"

### 2. Location Targeting

- **Be Precise**: Use "City, State" format
  - ✅ "Chicago, IL"
  - ✅ "Los Angeles, CA"
  - ❌ "Chicago" (might return ambiguous results)

- **Start Broad, Then Narrow**:
  1. Search in a large city (thousands of results)
  2. Export results
  3. Search in specific neighborhoods

### 3. Performance Optimization

**For Small Tasks** (< 100 pages):
- Concurrency: 1-3
- Delay: 2000ms
- No proxy needed

**For Medium Tasks** (100-500 pages):
- Concurrency: 3-5
- Delay: 2000ms
- Use 2-3 proxies

**For Large Tasks** (500+ pages):
- Concurrency: 5-10
- Delay: 2000ms
- Use 5+ proxies
- Consider splitting into multiple tasks

### 4. Avoiding Blocks

1. **Respect Rate Limits**: Don't exceed recommended concurrency
2. **Use Delays**: Keep request delays at 2000ms or higher
3. **Rotate Proxies**: Distribute requests across multiple IPs
4. **Use Accounts**: Authenticated information organization has higher limits
5. **Take Breaks**: Don't run large tasks continuously
6. **Enable AI Support**: AI can help handle anti-bot protections
7. **Use Local Browser**: Real browser fingerprint reduces detection risk

### 5. Data Quality

- **Verify Results**: Spot-check extracted data for accuracy
- **Filter Categories**: Use category filters to remove irrelevant results
- **Cross-Reference**: Combine data from multiple platforms
- **Regular Updates**: Business information changes, refresh data regularly

## Platform-Specific Tips

### YellowPages.com (USA)

**Strengths:**
- Comprehensive business listings
- Accurate contact information
- Good coverage across all states

**Tips:**
- Use city + state for best results
- Includes business hours and services
- Good for B2C businesses

### Yelp.com (USA)

**Strengths:**
- Rich review data
- Photos and detailed descriptions
- User-generated content

**Tips:**
- Stricter rate limits (use 3000ms delay)
- Great for service businesses
- Review data helps qualify leads

### YellowPages.ca (Canada)

**Strengths:**
- Canada-specific listings
- Canadian business verification

**Tips:**
- Essential for Canadian market
- Use "City, Province" format

### YellowPages.com.sg (Singapore)

**Strengths:**
- Singapore business directory
- Comprehensive local listings

**Tips:**
- Use city or district names for location
- Good for Southeast Asian market research

### 192.com (UK)

**Strengths:**
- UK-specific business and people directory
- Good coverage across United Kingdom

**Tips:**
- Use UK city and postcode format
- Good for UK B2B outreach

### 11880.com (Germany)

**Strengths:**
- German business directory
- Handles cookie consent automatically

**Tips:**
- Use German city names for best results
- Good for DACH market research

### Gelbeseiten.de (Germany)

**Strengths:**
- German Yellow Pages
- Comprehensive business listings in Germany
- Handles complex cookie consent dialogs

**Tips:**
- Use German keywords for best results
- Essential for German market

### PagesJaunes.fr (France)

**Strengths:**
- French Yellow Pages
- Phone number reveal feature
- Comprehensive French business listings

**Tips:**
- **Location is required** for this platform
- Use French city names and postal codes
- Good for French market outreach

### PagineGialle.it (Italy)

**Strengths:**
- Italian Yellow Pages
- Comprehensive Italian business directory
- Handles cookie consent automatically

**Tips:**
- Use Italian city names for location
- Good for Italian market research

### iTownPage (Japan)

**Strengths:**
- Japanese business directory
- Handles dialog popups automatically
- Japanese cookie consent management

**Tips:**
- Use Japanese keywords for best results
- Essential for Japanese local business discovery
- Use 2500ms delay (60 req/hour rate limit)

### uSonar Yellow Page (Japan)

**Strengths:**
- Alternative Japanese business directory
- Good for cross-referencing with iTownPage

**Tips:**
- Use alongside iTownPage for broader coverage
- Use 2500ms delay

### KoreaLocalPages (South Korea)

**Strengths:**
- Korean local business directory
- Good for Korean market entry research

**Tips:**
- Use Korean keywords for best results
- Use 2500ms delay (60 req/hour rate limit)
- Good for discovering Korean businesses

## Integration with Outreach Campaign

Extracted business emails can be used directly in email campaigns:

1. **Export Results** from Directory Assistant task
2. **Navigate to Outreach Campaign** → **Send Outreach Campaigns**
3. **Import CSV** with extracted emails
4. **Create Template** for your outreach
5. **Launch Campaign**

For detailed instructions, see [Outreach Campaign](./batch-email-sending).

## Troubleshooting

### Task Status: "Failed"

**Possible causes:**
- All proxies failed
- Network connectivity issues
- Platform blocked requests
- Invalid keywords or location

**Solutions:**
1. Check proxy health
2. Verify internet connection
3. Reduce concurrency and increase delay
4. Try different keywords/location
5. Enable account authentication
6. Enable AI Support for smarter error handling
7. Use Local Browser to bypass anti-bot protections

### No Results Returned

**Possible causes:**
- Keywords too specific
- Location has no matching businesses
- Platform returned no results

**Solutions:**
1. Try broader keywords
2. Verify location spelling
3. Check if businesses exist on the platform manually
4. Try nearby locations

### Slow Processing

**Possible causes:**
- High max pages setting
- Conservative delay settings
- Platform rate limits

**Solutions:**
1. Reduce max pages
2. Slightly reduce delay (with caution)
3. Increase concurrency (if using proxies)

### Incomplete Data

**Possible causes:**
- Business listings missing information
- Platform layout changes

**Solutions:**
1. Some businesses naturally lack certain data
2. Cross-reference with other platforms
3. Report platform issues to support

## Advanced Workflows

### Workflow 1: Local Business Outreach

1. **Search** for businesses in your target location
2. **Filter** by category and ratings
3. **Export** high-quality leads
4. **Import** to outreach campaign
5. **Create personalized campaign** using AI Email Writer

### Workflow 2: Competitive Analysis

1. **Scrape competitors** in multiple locations
2. **Analyze ratings and reviews**
3. **Identify service gaps**
4. **Target underserved areas**

### Workflow 3: Market Research

1. **Extract** all businesses in an industry
2. **Analyze** distribution and patterns
3. **Identify** market opportunities
4. **Plan** expansion strategy

## Comparison: Market Insight Explorer vs. Yellow Pages

| Feature | Market Insight Explorer | Yellow Pages |
|---------|---------------|--------------|
| **Best For** | Finding websites, general research | Local businesses, verified listings |
| **Data Quality** | Varies | Structured, verified |
| **Contact Info** | Requires profile insights | Pre-extracted emails/phones |
| **Geographic Targeting** | Keyword-based | Location-based |
| **Ratings/Reviews** | Sometimes | Always (Yelp) |
| **Business Hours** | Rarely | Commonly |

:::tip Use Both Strategies

Combine both approaches:
1. Use **Market Insight Explorer** to find industry-specific websites
2. Use **Directory Assistant** to find local businesses
3. Cross-reference for comprehensive coverage

:::

## Next Steps

- [Learn about contact profile insights](./contact-extraction)
- [Set up AI-powered email campaigns](../ai-outreach/ai-email-writer)
- [Configure task scheduling](../automation/task-scheduling)

---

**Ready to find local businesses?** Start with a small task to familiarize yourself with the process, then scale up your operations.
