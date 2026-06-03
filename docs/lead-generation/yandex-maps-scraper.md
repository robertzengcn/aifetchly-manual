---
id: yandex-maps-scraper
title: Yandex Maps Scraper
sidebar_label: Yandex Maps
description: Extract business information from Yandex Maps by keyword and location with aiFetchly's Yandex Maps Scraper — ideal for Russian and CIS markets.
---

# Yandex Maps Scraper

aiFetchly's Yandex Maps Scraper allows you to search Yandex Maps for local businesses by keyword and location. It is the ideal tool for collecting business data from Russian and CIS markets, with support for language and region customization.

## Overview

The Yandex Maps Scraper provides comprehensive local business data extraction:

1. **Enter a keyword** (e.g., "dentist", "restaurant")
2. **Enter a location** (e.g., "Moscow", "Saint Petersburg", "Russia")
3. **Configure options** (language, region, max results, etc.)
4. **Start the search** and monitor real-time progress
5. **Export results** as CSV, JSON, or copy to clipboard

:::tip Best For

The Yandex Maps Scraper is essential for businesses targeting the Russian market and CIS countries. Yandex Maps has superior coverage of local businesses in Russia, Kazakhstan, Belarus, Turkey, and other regions where Yandex operates.

:::

## Accessing the Yandex Maps Scraper

1. Click **Yandex Maps** in the left navigation menu
2. The scraper opens with two tabs: **Search** and **History**

## Running a Search

### Step 1: Enter Search Criteria

#### Business Keyword (Required)

Enter a business type or name to search for:

- **Examples**: `dentist`, `restaurant`, `plumber`, `marketing agency`
- **Tip**: Keywords work best in the local language (e.g., use Russian keywords for Russian locations)

#### Location (Required)

Enter a city or region to search in:

- **Examples**: `Moscow`, `Saint Petersburg`, `Russia`, `Almaty, Kazakhstan`
- **Tip**: More specific locations yield more relevant results

### Step 2: Configure Search Options

#### Maximum Results

- **Range**: 1–50 results
- **Default**: 20 results
- Adjust the slider to control how many businesses to extract

:::info Results Cap

The maximum number of results is capped at a safe limit to ensure reliable extraction. The slider range of 1–50 is the user-configurable range.

:::

#### Include Website

- **Enabled** (default): Attempts to extract the business website URL
- **Disabled**: Skips website extraction for faster results

#### Include Reviews

- **Disabled** (default): Returns only basic business data
- **Enabled**: Includes review data in results (increases processing time)

#### Show Browser

- **Disabled** (default): Browser runs in headless mode (faster)
- **Enabled**: Browser window is visible during scraping (useful for debugging)

### Step 3: Language and Region Settings (Optional)

These settings are specific to Yandex Maps and help customize your search context.

#### Language

- Set the Yandex Maps UI language code
- **Examples**: `ru` (Russian), `en` (English), `tr` (Turkish)
- Leave empty to use the default language
- **Tip**: Use the local language for better search results in that region

#### Region

- Set the region code for search context
- **Examples**: `ru` (Russia), `kz` (Kazakhstan), `by` (Belarus)
- Leave empty to use the default region
- **Tip**: Setting the correct region improves result accuracy

### Step 4: Account and Proxy Settings (Optional)

#### Yandex Account

Select a Yandex account to use its cookies for authenticated scraping:

- **Benefits**:
  - Higher success rate
  - Access to more detailed business information
  - Reduced risk of being blocked
- Only Yandex accounts are listed in the dropdown

:::tip Adding Accounts

To add Yandex accounts, navigate to **Settings** and configure your social accounts. See [System Settings](../settings/system-settings) for details.

:::

#### Proxies

Select one or more proxies to rotate through during the search:

- **Benefits**:
  - Distributes requests across multiple IPs
  - Reduces detection risk
  - Essential for large-scale scraping
- Select multiple proxies for automatic rotation per request

:::warning Proxy Recommendation

For Yandex Maps scraping, using proxies located in the target region (e.g., Russian proxies for Moscow searches) significantly improves success rates.

:::

### Step 5: Start the Search

1. Click **Start Search** to begin
2. A circular progress indicator and progress bar appear
3. Real-time status text shows the current scraping stage
4. A counter displays progress (e.g., "5 / 20 businesses")
5. Up to **3 concurrent searches** can run simultaneously

:::info Concurrent Searches

You can run up to 3 Yandex Maps searches at the same time. If you try to start a 4th, you'll be prompted to wait for one to finish.

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
| **Name** | Business name (clickable link to Yandex Maps if available) |
| **Category** | Business category (e.g., "Restaurant", "Dentist") |
| **Rating** | Star rating (with star icon) |
| **Reviews** | Number of reviews |
| **Address** | Full business address |
| **Phone** | Phone number |
| **Website** | Clickable link to the business website (truncated) |

:::tip Click on Business Names

Business names with a Yandex Maps link are clickable — they open the business listing on Yandex Maps in a new tab.

:::

### Search Results Header

The header displays:

- Total businesses found
- The search keyword used
- The location searched

### No Results

If no businesses are found, a message is displayed indicating no results for your search criteria. Try:

- Using broader keywords
- Using local language keywords
- Expanding the location area
- Increasing the maximum results setting

## Exporting Results

### Copy All

1. Click **Copy All** in the results header
2. All results are copied to your clipboard as JSON
3. Paste into any text editor or spreadsheet

### Export as CSV

1. Click **Export CSV** in the results header
2. A CSV file downloads automatically
3. Filename includes the keyword and location (e.g., `yandex-maps-dentist-Moscow.csv`)

**CSV columns include:**
Name, Category, Rating, Review Count, Address, Phone, Website, Hours, Maps URL

### Export as JSON

1. Click **Export JSON** in the results header
2. A JSON file downloads with the full results data
3. Filename follows the same convention as CSV exports

## Search History

The **History** tab stores all your past Yandex Maps searches.

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

- **Use local language**: Russian keywords for Russian locations
  - ✅ `стоматолог` (dentist in Russian) for Moscow
  - ✅ `dentist` for English-speaking areas
- **Be specific**: Use precise business types
- **Try variations**: Search multiple terms for comprehensive coverage

### 2. Location Targeting

- **Use specific locations** for better results:
  - ✅ `Moscow`
  - ✅ `Saint Petersburg`
  - ✅ `Kazan, Russia`
  - ❌ `Russia` (too broad)
- **Search multiple areas** to cover a wider region

### 3. Language and Region

- **Set language to `ru`** for Russian-speaking regions
- **Set region to match the target country** for best results
- **Leave empty** if unsure — Yandex will use defaults based on location

### 4. Using Proxies

- **Use local proxies** (Russian proxies for Russian searches)
- **Single search**: Proxy not required
- **Multiple searches**: Use 1–2 proxies
- **Large-scale scraping**: Use 3+ proxies with rotation

### 5. Using Yandex Accounts

- **Recommended** for all Yandex Maps scraping
- **Essential** when scraping Russian cities with many businesses
- Accounts with active Yandex usage provide better results

## Comparison: Google Maps vs. Yandex Maps

| Feature | Google Maps Scraper | Yandex Maps Scraper |
|---------|-------------------|-------------------|
| **Best For** | Global markets, Western countries | Russia, CIS, Turkey |
| **Language Support** | Multi-language (auto) | Configurable language/region |
| **Business Coverage** | Best globally | Best in Russia/CIS |
| **Account Type** | Google Account | Yandex Account |
| **Export Formats** | CSV, JSON | CSV, JSON, Copy All |
| **Progress Tracking** | Progress bar | Circular progress + status text |

:::tip Use Both Scrapers

For comprehensive coverage of a region, run searches on both Google Maps and Yandex Maps, then cross-reference and deduplicate the results.

:::

## Troubleshooting

### Search Failed

**Possible causes:**
- Network connectivity issues
- Yandex Maps blocked the request
- Invalid keyword or location

**Solutions:**
1. Check your internet connection
2. Try a different keyword or location
3. Use a Yandex account for authenticated access
4. Enable proxies — preferably with IPs in the target region
5. Reduce the max results setting
6. Try setting the correct language and region codes

### No Results Found

**Possible causes:**
- Keyword doesn't match any businesses in the area
- Location is too specific or too vague
- Wrong language or region setting

**Solutions:**
1. Try broader keywords or keywords in the local language
2. Use a larger city or broader area
3. Verify the business type exists in the area on Yandex Maps
4. Check your language and region settings

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

Yandex Maps Scraper results can be used with:

- **[Contact Extraction](./contact-extraction)** — Extract emails from business websites found in the results
- **[Google Maps Scraper](./google-maps-scraper)** — Cross-reference with Google Maps for broader coverage
- **[Yellow Pages](./yellow-pages)** — Cross-reference with directory listings
- **[AI Email Writer](../ai-outreach/ai-email-writer)** — Create personalized outreach emails using the collected business data
- **[Batch Email Sending](./batch-email-sending)** — Launch email campaigns using extracted contact information

## Next Steps

- [Learn about Google Maps Scraper](./google-maps-scraper)
- [Set up email extraction](./contact-extraction)
- [Create AI-powered email campaigns](../ai-outreach/ai-email-writer)
