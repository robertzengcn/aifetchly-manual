---
id: google-maps-scraper
title: Google Maps Scraper
sidebar_label: Google Maps
description: Extract business information from Google Maps by keyword and location with aiFetchly's Google Maps Scraper.
---

# Google Maps Scraper

aiFetchly's Google Maps Scraper allows you to search Google Maps for local businesses by keyword and location. Collect comprehensive business data including names, categories, ratings, reviews, addresses, phone numbers, and website URLs — all from Google Maps search results.

## Overview

The Google Maps Scraper provides a streamlined interface for extracting local business data:

1. **Enter a keyword** (e.g., "dentist", "Italian restaurant")
2. **Enter a location** (e.g., "New York", "London", "90210")
3. **Configure options** (max results, website inclusion, reviews, etc.)
4. **Start the search** and monitor real-time progress
5. **Export results** as CSV or JSON

:::tip Best For

The Google Maps Scraper is ideal for finding local businesses with structured data including verified addresses, phone numbers, ratings, and business hours — information that's more reliable than general web search results.

:::

## Accessing the Google Maps Scraper

1. Click **Google Maps** in the left navigation menu
2. The scraper opens with two tabs: **Search** and **History**

## Running a Search

### Step 1: Enter Search Criteria

#### Business Keyword (Required)

Enter a business type or name to search for:

- **Examples**: `dentist`, `Italian restaurant`, `plumber`, `marketing agency`
- **Tip**: Use specific business types for more targeted results

#### Location (Required)

Enter a city, address, or zip code:

- **Examples**: `New York`, `London`, `90210`, `Paris, France`
- **Tip**: More specific locations yield more relevant results

### Step 2: Configure Search Options

#### Maximum Results

- **Range**: 1–50 results
- **Default**: 20 results
- Adjust the slider to control how many businesses to extract

#### Include Website

- **Enabled** (default): Attempts to extract the business website URL
- **Disabled**: Skips website extraction for faster results

#### Include Reviews

- **Disabled** (default): Returns only basic business data
- **Enabled**: Includes review data in results (increases processing time)

#### Show Browser

- **Disabled** (default): Browser runs in headless mode (faster)
- **Enabled**: Browser window is visible during scraping (useful for debugging)

:::warning Show Browser

Enabling this option will display the browser window on your screen during the search. This is intended for debugging only and may slow down the scraping process.

:::

### Step 3: Account and Proxy Settings (Optional)

#### Google Account

Select a Google account to use its cookies for authenticated scraping:

- **Benefits**:
  - Higher success rate
  - Access to more detailed business information
  - Reduced risk of being blocked
- Only Google accounts are listed in the dropdown

:::tip Adding Accounts

To add Google accounts, navigate to **Settings** and configure your social accounts. See [System Settings](../settings/system-settings) for details.

:::

#### Proxies

Select one or more proxies to rotate through during the search:

- **Benefits**:
  - Distributes requests across multiple IPs
  - Reduces detection risk
  - Essential for large-scale scraping
- Select multiple proxies for automatic rotation per request

### Step 4: Start the Search

1. Click **Start Search** to begin
2. A progress bar appears showing real-time scraping status
3. The search runs asynchronously — you can continue using other features
4. Up to **3 concurrent searches** can run simultaneously

:::info Concurrent Searches

You can run up to 3 Google Maps searches at the same time. If you try to start a 4th, you'll be prompted to wait for one to finish.

:::

### Cancelling a Search

If a search is taking too long or you want to stop it:

- Click the **Cancel** button that appears while a search is running
- Partial results collected before cancellation are preserved

## Viewing Results

Once a search completes, results are displayed in a data table.

### Results Table

| Column | Description |
|--------|-------------|
| **Name** | Business name (clickable link to Google Maps if available) |
| **Category** | Business category (e.g., "Restaurant", "Dentist") |
| **Rating** | Star rating (with star icon) |
| **Reviews** | Number of reviews |
| **Address** | Full business address |
| **Phone** | Phone number |
| **Website** | Clickable link to the business website (truncated) |

:::tip Click on Business Names

Business names with a Google Maps link are clickable — they open the business listing on Google Maps in a new tab.

:::

### Search Results Header

The header displays:

- Total businesses found
- The search keyword used
- The location searched

### No Results

If no businesses are found, a message is displayed indicating no results for your search criteria. Try:

- Using broader keywords
- Expanding the location area
- Increasing the maximum results setting

## Exporting Results

### Export as CSV

1. Click **Export CSV** in the results header
2. A CSV file downloads automatically
3. Filename includes the keyword and location (e.g., `google-maps-dentist-NewYork.csv`)

**CSV columns include:**
Name, Category, Rating, Review Count, Address, Phone, Website, Hours, Maps URL

### Export as JSON

1. Click **Export JSON** in the results header
2. A JSON file downloads with the full results data
3. Filename follows the same convention as CSV exports

## Search History

The **History** tab stores all your past Google Maps searches.

### Viewing History

1. Click the **History** tab
2. A table displays all previous searches

| Column | Description |
|--------|-------------|
| **Query** | The search keyword used |
| **Location** | The location searched |
| **Results** | Total number of businesses found |
| **Date** | When the search was performed |
| **Actions** | View or Delete |

### History Actions

- **View** (eye icon): Loads the historical results into the Search tab
- **Delete** (trash icon): Permanently removes the search record

### Refreshing History

- Click the **Refresh** button to reload the history list
- History is automatically loaded when you click the History tab

## Best Practices

### 1. Keyword Strategy

- **Be specific**: Use precise business types
  - ✅ `Italian restaurant`
  - ❌ `food`
- **Try variations**: Search multiple terms for comprehensive coverage
  - `dentist` and `dental clinic`
  - `plumber` and `plumbing service`

### 2. Location Targeting

- **Use specific locations** for better results:
  - ✅ `Manhattan, New York`
  - ✅ `90210`
  - ❌ `USA`
- **Search multiple areas** to cover a wider region:
  - Run separate searches for each neighborhood or district

### 3. Max Results Setting

- **Quick test**: Set to 5–10 results to verify your search
- **Standard search**: 20 results (default)
- **Comprehensive**: 50 results for thorough coverage

### 4. Using Proxies

- **Single search**: Proxy not required
- **Multiple searches in sequence**: Use 1–2 proxies
- **Large-scale scraping**: Use 3+ proxies with rotation

### 5. Using Google Accounts

- **Recommended** for searches returning 30+ results
- **Essential** when scraping popular areas with many businesses
- Accounts with active Google Maps usage provide better results

## Troubleshooting

### Search Failed

**Possible causes:**
- Network connectivity issues
- Google Maps blocked the request
- Invalid keyword or location

**Solutions:**
1. Check your internet connection
2. Try a different keyword or location
3. Use a Google account for authenticated access
4. Enable proxies for IP rotation
5. Reduce the max results setting

### No Results Found

**Possible causes:**
- Keyword doesn't match any businesses in the area
- Location is too specific or too vague
- Google Maps returned empty results

**Solutions:**
1. Try broader keywords (e.g., `restaurant` instead of `Italian restaurant`)
2. Use a larger city or broader area
3. Verify the business type exists in the area manually on Google Maps

### Partial Results

**Possible causes:**
- Search was cancelled before completion
- Some business listings lacked required data
- Rate limiting occurred during scraping

**Solutions:**
1. Let the search complete fully
2. Run another search for the remaining area
3. Use proxies to avoid rate limits

## Integration with Other Features

Google Maps Scraper results can be used with:

- **[Contact Extraction](./contact-extraction)** — Extract emails from business websites found in the results
- **[Yellow Pages](./yellow-pages)** — Cross-reference with directory listings for more comprehensive data
- **[AI Email Writer](../ai-outreach/ai-email-writer)** — Create personalized outreach emails using the collected business data
- **[Batch Email Sending](./batch-email-sending)** — Launch email campaigns using extracted contact information

## Next Steps

- [Learn about Yandex Maps Scraper](./yandex-maps-scraper)
- [Set up email extraction](./contact-extraction)
- [Create AI-powered email campaigns](../ai-outreach/ai-email-writer)
