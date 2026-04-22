---
id: yellow-pages
title: Yellow Pages Scraping
sidebar_label: Yellow Pages
description: Extract business information from Yellow Pages, Yelp, and other online directories.
---

# Yellow Pages Scraping

aiFetchly's Yellow Pages scraping feature allows you to extract comprehensive business information from multiple online directories. Collect leads from local business listings with detailed contact information, ratings, reviews, and more.

## Supported Directories

| Directory | Region | Rate Limit | Features |
|-----------|--------|------------|----------|
| **YellowPages.com** | USA | 100 req/hour | Business details, ratings, reviews, hours |
| **Yelp.com** | USA | 60 req/hour | Reviews, ratings, photos, detailed extraction |
| **YellowPages.ca** | Canada | Varies | Canada-specific business directory |

:::tip Rate Limits

Each directory has specific rate limits. aiFetchly automatically manages request delays to comply with these limits.

:::

## Creating a Yellow Pages Task

### Step 1: Navigate to Yellow Pages

1. Click **Yellow Pages** in the left navigation menu
2. You'll see the Yellow Pages task list
3. Click **Create New Task** button

### Step 2: Basic Information

Enter the following required information:

#### Task Name

- Give your task a descriptive name
- Example: "Restaurants in Chicago" or "Plumbers in Miami"

#### Platform Selection

Select the directory you want to scrape from the dropdown:
- YellowPages.com (USA)
- Yelp.com (USA)
- YellowPages.ca (Canada)

:::info Platform Information

As you select each platform, you'll see a sidebar showing:
- Country/Language support
- Rate limits
- Authentication requirements
- Whether location is required

:::

#### Keywords

Enter your search keywords:
- **Format**: Comma-separated or one per line
- **Examples**: `restaurant, plumber, dentist, marketing agency`
- **Tip**: Use specific business types or categories for better results

#### Location

Enter the geographic location for your search:
- **Examples**: `New York, NY`, `Los Angeles, CA`, `Miami, Florida`
- **Format**: City, State or City, Region
- **Required**: For most platforms

### Step 3: Performance Settings

Configure how the scraping task runs:

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
- **Yelp**: 3000ms (stricter rate limits)
- **YellowPages.com**: 2000ms
- **YellowPages.ca**: 2000ms

### Step 4: Browser Configuration

#### Headless Mode

- **Enabled** (default): Browser runs invisibly (faster, recommended)
- **Disabled**: Browser window visible (useful for debugging)

**Recommendation**: Keep headless mode enabled for production tasks.

### Step 5: Optional Features

#### Account Selection

Some platforms support authenticated scraping:

1. Toggle **Use Account** if available
2. Select an account from your saved accounts
3. Benefits:
   - Higher success rate
   - Access to member-only content
   - Reduced risk of blocking

#### Proxy Configuration

Add proxies for large-scale scraping:

1. Toggle **Use Proxy**
2. Click **Choose Proxy**
3. Select one or more proxies from your list
4. Click **Confirm**

:::tip When to Use Proxies

Use proxies when:
- Scraping more than 50 pages
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

Click **Create Task** to save your configuration. You can:
- **Run Now**: Start the task immediately
- **Schedule**: Set for later execution

## Managing Yellow Pages Tasks

### View Task List

Navigate to **Yellow Pages** to see all your tasks.

**Task List Overview:**
- **Real-time Statistics**: Total, running, pending, completed, failed tasks
- **Success Rate**: Calculated percentage of successful tasks
- **Auto-refresh**: Updates every 5 seconds

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

### Bulk Operations

- **Start Multiple**: Select and start multiple paused/failed tasks
- **Stop Tasks**: Stop multiple running tasks
- **Delete Tasks**: Remove multiple completed/failed tasks

## Viewing Results

### Step 1: Access Results

1. Go to **Yellow Pages** task list
2. Find the completed task
3. Click **View Results**

### Step 2: Results Table

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
| **Scraped At** | Timestamp of data extraction |

### Step 3: Interact with Results

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
2. Choose CSV format
3. File downloads automatically
4. Filename includes task ID and date

**Exported Data Includes:**
- Business name and categories
- Contact details (email, phone, website)
- Address and location
- Ratings and reviews
- Business hours
- Additional metadata

### Export as JSON

For programmatic processing:
1. Click **Export** → **JSON**
2. Use for integration with other tools
3. Parse with your own applications

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
4. **Use Accounts**: Authenticated scraping has higher limits
5. **Take Breaks**: Don't run large tasks continuously

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
- French language support
- Canadian business verification

**Tips:**
- Essential for Canadian market
- Use "City, Province" format
- Both English and French results

## Integration with Email Marketing

Extracted business emails can be used directly in email campaigns:

1. **Export Results** from Yellow Pages task
2. **Navigate to Email Marketing** → **Send Bulk Emails**
3. **Import CSV** with extracted emails
4. **Create Template** for your outreach
5. **Launch Campaign**

For detailed instructions, see [Batch Email Sending](../ai-outreach/batch-email-sending).

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
4. **Import** to email marketing
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

## Comparison: Search Engines vs. Yellow Pages

| Feature | Search Engines | Yellow Pages |
|---------|---------------|--------------|
| **Best For** | Finding websites, general research | Local businesses, verified listings |
| **Data Quality** | Varies | Structured, verified |
| **Contact Info** | Requires extraction | Pre-extracted emails/phones |
| **Geographic Targeting** | Keyword-based | Location-based |
| **Ratings/Reviews** | Sometimes | Always (Yelp) |
| **Business Hours** | Rarely | Commonly |

:::tip Use Both Strategies

Combine both approaches:
1. Use **Search Engines** to find industry-specific websites
2. Use **Yellow Pages** to find local businesses
3. Cross-reference for comprehensive coverage

:::

## Next Steps

- [Learn about email extraction](./contact-extraction)
- [Set up AI-powered email campaigns](../ai-outreach/ai-email-writer)
- [Configure task scheduling](../automation/task-scheduling)

---

**Ready to find local businesses?** Start with a small task to familiarize yourself with the process, then scale up your operations.
