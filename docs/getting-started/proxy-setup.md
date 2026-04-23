---
id: proxy-setup
title: Proxy Setup
sidebar_label: Proxy Setup
description: Learn how to configure and manage proxies for safe and efficient web scraping in aiFetchly.
---

# Proxy Setup Guide

Using proxies is **optional** with aiFetchly. You can run search tasks without proxies, but adding proxies helps you:

- **Avoid IP blocks** from search engines and websites
- **Scrape at scale** by distributing requests across multiple IPs
- **Maintain anonymity** while collecting leads
- **Access geo-restricted content** from different regions

:::info Optional Feature

Proxies are not required to use aiFetchly. You can start scraping immediately without configuring proxies. Add proxies only if you need to avoid rate limiting or access geo-specific content.

:::

## Understanding Proxies

A proxy server acts as an intermediary between your computer and the websites you scrape. Instead of the website seeing your IP address, they see the proxy's IP address.

### Proxy Types Supported

aiFetchly supports three proxy protocols:

| Protocol | Description | Use Case |
|----------|-------------|----------|
| **HTTP** | Basic HTTP proxy | General web scraping, non-SSL sites |
| **HTTPS** | Secure HTTP proxy | Secure websites (HTTPS), recommended for most scraping |
| **SOCKS5** | Socket Secure 5 | Advanced users, supports more protocols, better performance |

:::tip Recommended Protocol

For most use cases, **HTTPS** proxies are recommended as they work with both HTTP and HTTPS websites.

:::

### Proxy Format

Each proxy requires the following information:

- **Host/IP** - The proxy server address (e.g., `192.168.1.1` or `proxy.example.com`)
- **Port** - The port number (e.g., `8080`, `3128`, `1080`)
- **Protocol** - http, https, or socks5
- **Username** (optional) - For authentication
- **Password** (optional) - For authentication

Example: `192.168.1.1:8080` with username `user1` and password `pass123`

## Adding Proxies Manually

### Step 1: Open Proxy Management

1. Launch aiFetchly
2. Navigate to **Proxy** in the left navigation menu
3. You'll see the proxy management page with a list of your proxies

### Step 2: Add a Single Proxy

1. Click the **Add Proxy** button (+ icon) in the top-right corner
2. Fill in the required fields:

   - **Host/IP**: Enter the proxy server address or IP
   - **Port**: Enter the port number
   - **Protocol**: Select from the dropdown (HTTP, HTTPS, or SOCKS5)
   - **Username**: (Optional) Enter if authentication is required
   - **Password**: (Optional) Enter if authentication is required

3. Click **Submit** to save the proxy

:::info Authentication

If your proxy provider requires authentication, you must enter the username and password. Unauthenticated proxies will fail when tested.

:::

### Step 3: Test the Proxy

After adding proxies, you should verify they work:

1. Optionally set **Check timeout** on the toolbar (1–60 seconds per proxy; default 10 seconds). This limit applies to both the connectivity test and the Google check.
2. Select the proxy or proxies you want to test (row checkboxes).
3. Click **Check Proxy**.
4. aiFetchly updates two kinds of results:

**Status (connectivity)** — whether the proxy can relay traffic (for example, a tunnel to a test endpoint):

- **Pass** — Basic proxy check succeeded.
- **Failure** — Basic check failed (wrong host/port, auth, or network).
- **Unknown** — Not tested yet.

**Google Pass** — whether the same proxy can reach **Google** without being blocked as automated traffic. After **Status** shows **Pass**, the app runs a separate check (headless browser to Google). That column can update a moment later:

- **Pass** — Google check succeeded; the IP is more likely to work for Google-backed scraping.
- **Fail** — Google blocked, challenged, or the check errored (common for datacenter IPs or overused proxies).
- **Not Checked** — No Google result yet (proxy never passed the basic check, or not checked since this feature was added).

If **Status** is **Failure**, **Google Pass** stays **Not Checked** (the Google step only runs when the basic check passes).

## Batch Importing Proxies

If you have multiple proxies, you can import them all at once using a CSV file.

### Step 1: Download Template

1. Go to **Proxy** in the navigation menu
2. Click **Batch Upload Proxy**
3. Click **Download Template** to get the CSV template

### Step 2: Prepare Your CSV File

The CSV template has the following structure:

```csv
host,port,protocols,user,pass
192.168.1.1,8080,http,username1,password1
192.168.1.2,3128,https,username2,password2
192.168.1.3,1080,socks5,username3,password3
192.168.1.4,8080,http,,
```

**CSV Format Guidelines:**

- **host** - Required: Proxy IP address or hostname
- **port** - Required: Port number
- **protocols** - Required: Must be "http", "https", or "socks5"
- **user** - Optional: Username (leave empty if no authentication)
- **pass** - Optional: Password (leave empty if no authentication)

:::tip CSV Formatting

- Your file can use the same column headers as the template (`host`, `port`, `protocols`, `user`, `pass`) or omit the header row if your columns are in that order
- Use commas to separate fields
- Leave user/pass fields empty if your proxy doesn't require authentication
- Save the file as `.csv` (comma-separated values)

:::

### Step 3: Import the CSV

1. Click **Batch Upload**
2. On **Upload File**, select your CSV (or use **Paste Text** for one proxy per line)
3. Parsed proxies appear in the preview table
4. Optional: click **Check Proxies** to run a **quick connectivity** test on the preview list (this is not the same as the full **Google Pass** check on saved proxies)
5. Click **Import proxy** (shown as **Import All** in some locales) to add them to your library
6. After import, open the main proxy list, select the new rows, and click **Check Proxy** to record **Status** and **Google Pass** for tasks that hit Google

To clean the main list after checks, use **remove failure proxy** (removes rows whose **Status** is **Failure**).

## Managing Your Proxy List

### Viewing Proxies

The proxy list shows all your proxies with the following information:

| Column | Description |
|--------|-------------|
| **ID** | Unique identifier |
| **Host** | Proxy server IP/hostname |
| **Port** | Proxy port |
| **Username** | Authentication username (if any) |
| **Password** | Authentication password (hidden by default; use **Columns** to show) |
| **Protocol** | HTTP, HTTPS, or SOCKS5 |
| **Status** | Basic check: Pass, Failure, or Unknown |
| **Check Time** | Last time the proxy was tested |
| **Google Pass** | Google-specific check: Pass, Fail, or Not Checked (see [Google Pass check](#google-pass-check)) |
| **Actions** | Edit or delete buttons |

Use the **Columns** control on the toolbar to show or hide columns (for example, password is off by default for safety).

### Editing Proxies

1. Find the proxy you want to modify in the list
2. Click the **Edit** button (pencil icon)
3. Modify the fields as needed
4. Click **Submit** to save changes

### Deleting Proxies

1. Find the proxy you want to remove
2. Click the **Delete** button (trash icon)
3. Confirm the deletion

### Bulk Operations

- **Check Proxy** — With one or more rows selected, runs the full check (**Status** plus **Google Pass** when the basic check passes). Nothing is checked until you select at least one proxy.
- **remove failure proxy** — Deletes every saved proxy whose **Status** is **Failure** in one action

## Using Proxies in Search Tasks

Once you've added and tested your proxies, you can use them in search and scraping tasks.

### Step 1: Create or Edit a Search Task

1. Navigate to **Search** → **Search Form**
2. Create a new search task or edit an existing one

### Step 2: Select Proxies

1. Find the **Proxy** section in the task configuration
2. Click the **Choose Proxy** button
3. A proxy selection dialog will appear showing all your proxies
4. Select one or more proxies from the list:
   - Prefer proxies with **Status** **Pass** and **Google Pass** **Pass** when your task uses Google or Google-heavy flows
   - You can select multiple proxies for load balancing

5. Click **Confirm** to add selected proxies to your task

### Step 3: Run Your Task

When you run the search task, aiFetchly will:

- Distribute requests across your selected proxies
- Automatically rotate through proxies
- Handle proxy failures gracefully
- Continue scraping even if some proxies fail

:::info Proxy Rotation

When using multiple proxies, aiFetchly automatically rotates through them to distribute the load and avoid rate limiting.

:::

## Proxy Health Monitoring

Regular health checks ensure your proxies are working properly.

### When checks run

- **Saved proxies:** Use **Check Proxy** after selecting rows. The list refreshes while checks run; when progress reaches 100%, results are up to date for **Status**; **Google Pass** may finish slightly later for proxies that passed the basic step.
- **Batch upload dialog:** **Check Proxies** only validates connectivity for the preview rows before import. Run **Check Proxy** on the main list after import for **Google Pass**.

### Health Check Timeout

On the **Proxy** page, set **Check timeout** (1–60 seconds, default **10**). The same value applies to the basic check and the Google browser check for saved proxies.

### Interpreting Status Results

| Status | Meaning | Action |
|--------|---------|--------|
| **Pass** (green) | Basic proxy check succeeded | Ready for general use; confirm **Google Pass** if you need Google |
| **Failure** (pink) | Proxy is not working | Remove or replace |
| **Unknown** (grey) | Not tested yet | Run health check |

## Google Pass check

**Google Pass** answers: “Through this proxy, can we load Google without obvious blocking?” It uses a headless browser session (similar to real browsing), which is stricter than a simple ping or HTTP tunnel test.

- **Pass** — Useful signal for Google-oriented scraping; not a guarantee for every Google surface or volume.
- **Fail** — Often datacenter IPs, recycled proxies, or IPs already flagged; try another proxy or provider.
- **Not Checked** — Run **Check Proxy** on saved proxies, or the proxy has not passed the basic check yet.

**Google Pass** can be **Fail** even when **Status** is **Pass**, because Google applies additional bot and abuse signals beyond generic connectivity.

## Best Practices

### 1. Use Reliable Proxy Providers

Invest in quality proxy services. Free proxies are often slow, unreliable, or already blocked by major websites.

### 2. Regular Health Checks

Test your proxies regularly, especially before running large scraping tasks.

### 3. Remove Failed Proxies

Keep your proxy list clean by removing failed proxies promptly.

### 4. Use Multiple Proxies

For large-scale scraping, use multiple proxies to:
- Distribute the load
- Reduce the risk of IP blocks
- Increase scraping speed

### 5. Match Proxy Location to Target

If scraping geo-specific content, use proxies from the same region as your target audience.

### 6. Monitor Proxy Performance

Keep track of which proxies perform best and prioritize them in your tasks.

### 7. Don't Overuse Single Proxies

Even working proxies can get blocked if overused. Rotate them regularly.

## Troubleshooting Proxy Issues

### All Proxies Show "Failure"

**Possible causes:**
- Network connectivity issues
- Incorrect proxy credentials
- Proxy provider service is down

**Solutions:**
- Check your internet connection
- Verify username/password with your proxy provider
- Contact your proxy provider

### Some Proxies Fail Intermittently

**Possible causes:**
- Proxy server is overloaded
- Unstable proxy service

**Solutions:**
- Remove unreliable proxies
- Use health check results to identify stable proxies
- Consider upgrading your proxy service

### Proxies Work in Tests but Fail During Scraping

**Possible causes:**
- Target website has stricter anti-scraping measures
- Proxy is rate-limited by the target
- **Status** is **Pass** but **Google Pass** is **Fail** while the task relies on Google

**Solutions:**
- Use more proxies to distribute requests
- Slow down request frequency
- Try different proxy providers
- For Google-heavy workflows, favor proxies with **Google Pass** **Pass**

### Can't Connect to Proxy

**Possible causes:**
- Firewall blocking proxy connection
- Incorrect proxy settings
- Proxy server is offline

**Solutions:**
- Check firewall settings
- Verify proxy host and port
- Test proxy in a browser or with curl

## Security Considerations

### Protect Your Proxy Credentials

- Treat proxy usernames and passwords like sensitive data
- Don't share proxy lists with unauthorized users
- Use secure methods to transfer proxy information

### Use HTTPS Proxies

HTTPS proxies encrypt traffic between you and the proxy server, providing better security.

### Rotate Proxies Regularly

Regularly change your proxy pool to maintain security and avoid detection.

## Next Steps

Now that you've configured your proxies:

- [Learn about search engine scraping](../lead-generation/search-engines)
- [Set up contact extraction](../lead-generation/contact-extraction)
- [Configure the Knowledge Library](../ai-outreach/knowledge-library)

---

**Need proxies?** Consider these popular proxy providers:
- Bright Data (formerly Luminati)
- Smartproxy
- Oxylabs
- Storm Proxies
- ProxyMesh

*Note: This is not an endorsement. Research and choose based on your specific needs.*
