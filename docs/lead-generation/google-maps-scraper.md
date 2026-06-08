---
id: local-business-finder
title: Local Business Finder
sidebar_label: Local Business Finder
description: Organize business information from Google Maps and Yandex Maps by keyword and location with aiFetchly's Local Business Finder.
---

# Local Business Finder

aiFetchly's Local Business Finder allows you to search local businesses by keyword and location using two data sources: **Google Maps** (global coverage) and **Yandex Maps** (ideal for Russian and CIS markets). Collect comprehensive business data including names, categories, ratings, reviews, addresses, phone numbers, and website URLs.

## Overview

The Local Business Finder provides a streamlined interface for organizing local business data:

1. **Choose a data source** — Google Maps or Yandex Maps
2. **Enter a keyword** (e.g., "dentist", "Italian restaurant")
3. **Enter a location** (e.g., "New York", "Moscow", "90210")
4. **Configure options** (max results, website inclusion, reviews, etc.)
5. **Start the search** and monitor real-time progress
6. **Export results** as CSV, JSON, or copy to clipboard

:::tip Choosing a Data Source

- **Google Maps** — Best for global markets and Western countries. Superior coverage worldwide.
- **Yandex Maps** — Essential for Russia, CIS countries (Kazakhstan, Belarus), and Turkey. Supports language and region customization.

For comprehensive coverage of a region, run searches on both data sources, then cross-reference and deduplicate the results.

:::

## Accessing the Local Business Finder

1. Click **Local Business Finder** in the left navigation menu
2. The page opens with two tabs: **Search** and **History**

## Running a Search

### Step 1: Choose Data Source

Select your preferred data source at the top of the search form:

| Feature | Google Maps | Yandex Maps |
|---------|-------------|-------------|
| **Best For** | Global markets, Western countries | Russia, CIS, Turkey |
| **Language Support** | Multi-language (auto) | Configurable language/region |
| **Business Coverage** | Best globally | Best in Russia/CIS |
| **Account Type** | Google Account | Yandex Account |

### Step 2: Enter Search Criteria

#### Business Keyword (Required)

Enter a business type or name to search for:

- **Examples**: `dentist`, `Italian restaurant`, `plumber`, `marketing agency`
- **Tip**: Use specific business types for more targeted results
- **Yandex Tip**: Keywords work best in the local language (e.g., use Russian keywords for Russian locations)

#### Location (Required)

Enter a city, address, or zip code:

- **Examples**: `New York`, `London`, `90210`, `Moscow`, `Saint Petersburg`, `Almaty, Kazakhstan`
- **Tip**: More specific locations yield more relevant results

### Step 3: Configure Search Options

#### Maximum Results

- **Range**: 1–50 results
- **Default**: 20 results
- Adjust the slider to control how many businesses to include

:::info Results Cap

The maximum number of results is capped at a safe limit to ensure reliable profile insights. The slider range of 1–50 is the user-configurable range.

:::

#### Include Website

- **Enabled** (default): Attempts to include the business website URL
- **Disabled**: Skips website lookup for faster results

#### Include Reviews

- **Disabled** (default): Returns only basic business data
- **Enabled**: Includes review data in results (increases processing time)

#### Show Browser

- **Disabled** (default): Browser runs in headless mode (faster)
- **Enabled**: Browser window is visible during information organization (useful for debugging)

:::warning Show Browser

Enabling this option will display the browser window on your screen during the search. This is intended for debugging only and may slow down the information organization process.

:::

### Step 4: Language and Region Settings (Yandex Maps Only)

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

### Step 5: Account and Proxy Settings (Optional)

#### Google Account / Yandex Account

Select an account to use its cookies for authenticated information organization:

- **Benefits**:
  - Higher success rate
  - Access to more detailed business information
  - Reduced risk of being blocked
- Google Maps only lists Google accounts; Yandex Maps only lists Yandex accounts

:::tip Adding Accounts

To add accounts, navigate to **Settings** and configure your social accounts. See [System Settings](../settings/system-settings) for details.

:::

#### Proxies

Select one or more proxies to rotate through during the search:

- **Benefits**:
  - Distributes requests across multiple IPs
  - Reduces detection risk
  - Essential for large-scale public information organization
- Select multiple proxies for automatic rotation per request

:::warning Proxy Recommendation

For Yandex Maps, using proxies located in the target region (e.g., Russian proxies for Moscow searches) significantly improves success rates.

:::

### Step 6: Start the Search

1. Click **Start Search** to begin
2. A progress bar appears showing real-time progress status
3. The search runs asynchronously — you can continue using other features
4. Up to **3 concurrent searches** can run simultaneously

:::info Concurrent Searches

You can run up to 3 searches at the same time. If you try to start a 4th, you'll be prompted to wait for one to finish.

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
| **Name** | Business name (clickable link to Maps if available) |
| **Category** | Business category (e.g., "Restaurant", "Dentist") |
| **Rating** | Star rating (with star icon) |
| **Reviews** | Number of reviews |
| **Address** | Full business address |
| **Phone** | Phone number |
| **Website** | Clickable link to the business website (truncated) |

:::tip Click on Business Names

Business names with a Maps link are clickable — they open the business listing in a new tab.

:::

### Search Results Header

The header displays:

- Total businesses found
- The search keyword used
- The location searched

### No Results

If no businesses are found, a message is displayed indicating no results for your search criteria. Try:

- Using broader keywords
- Using local language keywords (for Yandex Maps)
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
3. Filename includes the keyword and location (e.g., `maps-dentist-NewYork.csv`)

**CSV columns include:**
Name, Category, Rating, Review Count, Address, Phone, Website, Hours, Maps URL

### Export as JSON

1. Click **Export JSON** in the results header
2. A JSON file downloads with the full results data
3. Filename follows the same convention as CSV exports

## Search History

The **History** tab stores all your past searches.

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
- **Use local language for Yandex**: Russian keywords for Russian locations
  - ✅ `стоматолог` (dentist in Russian) for Moscow
  - ✅ `dentist` for English-speaking areas

### 2. Location Targeting

- **Use specific locations** for better results:
  - ✅ `Manhattan, New York`
  - ✅ `Moscow`
  - ✅ `90210`
  - ❌ `USA` or `Russia` (too broad)
- **Search multiple areas** to cover a wider region:
  - Run separate searches for each neighborhood or district

### 3. Max Results Setting

- **Quick test**: Set to 5–10 results to verify your search
- **Standard search**: 20 results (default)
- **Comprehensive**: 50 results for thorough coverage

### 4. Language and Region (Yandex Maps)

- **Set language to `ru`** for Russian-speaking regions
- **Set region to match the target country** for best results
- **Leave empty** if unsure — Yandex will use defaults based on location

### 5. Using Proxies

- **Single search**: Proxy not required
- **Multiple searches in sequence**: Use 1–2 proxies
- **Large-scale information organization**: Use 3+ proxies with rotation
- **Yandex Maps**: Use local proxies (Russian proxies for Russian searches)

### 6. Using Accounts

- **Google Account**: Recommended for searches returning 30+ results; essential for popular areas with many businesses
- **Yandex Account**: Recommended for all Yandex Maps searches; essential for Russian cities with many businesses
- Accounts with active usage provide better results

## Troubleshooting

### Search Failed

**Possible causes:**
- Network connectivity issues
- Maps service blocked the request
- Invalid keyword or location

**Solutions:**
1. Check your internet connection
2. Try a different keyword or location
3. Use an account for authenticated access
4. Enable proxies — preferably with IPs in the target region
5. Reduce the max results setting
6. (Yandex Maps) Try setting the correct language and region codes

### No Results Found

**Possible causes:**
- Keyword doesn't match any businesses in the area
- Location is too specific or too vague
- Wrong language or region setting (Yandex Maps)

**Solutions:**
1. Try broader keywords or keywords in the local language
2. Use a larger city or broader area
3. Verify the business type exists in the area manually on the Maps service
4. (Yandex Maps) Check your language and region settings

### Partial Results

**Possible causes:**
- Search was cancelled before completion
- Some business listings lacked required data
- Rate limiting occurred during information organization

**Solutions:**
1. Let the search complete fully
2. Run another search for the remaining area
3. Use proxies to avoid rate limits

## Integration with Other Features

Local Business Finder results can be used with:

- **[Contact Profile Insights](./contact-extraction)** — Open in Contact Profile Insights from business websites found in the results
- **[Directory Assistant](./yellow-pages)** — Cross-reference with directory listings for more comprehensive data
- **[AI Email Writer](../ai-outreach/ai-email-writer)** — Create personalized outreach emails using the collected business data
- **[Outreach Campaign](./batch-email-sending)** — Launch email campaigns using extracted contact information

## Next Steps

- [Set up contact profile insights](./contact-extraction)
- [Create AI-powered email campaigns](../ai-outreach/ai-email-writer)
