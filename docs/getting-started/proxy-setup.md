---
id: proxy-setup
title: Proxy Setup
sidebar_label: Proxy Setup
description: Learn how to configure and manage proxies for safe and efficient web scraping in aiFetchly.
---

# Proxy Setup Guide

Using proxies is essential for safe and efficient web scraping with aiFetchly. Proxies help you:

- **Avoid IP blocks** from search engines and websites
- **Scrape at scale** by distributing requests across multiple IPs
- **Maintain anonymity** while collecting leads
- **Access geo-restricted content** from different regions

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

1. Select the proxy(s) you want to test
2. Click the **Check Proxy** button
3. aiFetchly will test each proxy and update the status:
   - ✅ **Pass** (green) - Proxy is working correctly
   - ❌ **Failure** (pink) - Proxy is not working
   - ⚪ **Unknown** (grey) - Proxy hasn't been tested yet

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

- Don't include headers in your import file (only data rows)
- Use commas to separate fields
- Leave user/pass fields empty if your proxy doesn't require authentication
- Save the file as `.csv` (comma-separated values)

:::

### Step 3: Import the CSV

1. Click **Batch Upload Proxy**
2. Click the file upload area or drag and drop your CSV file
3. The proxies will be displayed in a table
4. Click **Check Proxy** to validate all imported proxies
5. Click **Save to My Proxy** to add valid proxies to your account
6. Click **Remove fail Proxy** to delete any proxies that failed the health check

## Managing Your Proxy List

### Viewing Proxies

The proxy list shows all your proxies with the following information:

| Column | Description |
|--------|-------------|
| **ID** | Unique identifier |
| **Host** | Proxy server IP/hostname |
| **Username** | Authentication username (if any) |
| **Password** | Authentication password (masked) |
| **Protocol** | HTTP, HTTPS, or SOCKS5 |
| **Status** | Pass, Failure, or Unknown |
| **Check Time** | Last time the proxy was tested |
| **Actions** | Edit or delete buttons |

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

- **Check All Proxies** - Test all proxies in your list simultaneously
- **Remove Failed Proxies** - Delete all proxies with "Failure" status at once

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
   - Only proxies with "Pass" status are recommended
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

### Automatic Health Checks

- Proxies are tested when you click **Check Proxy** or **Check All**
- Check results update the status column
- Check time is recorded for each proxy

### Health Check Timeout

By default, proxy tests timeout after **10 seconds**. This can be adjusted in system settings if needed.

### Interpreting Status Results

| Status | Meaning | Action |
|--------|---------|--------|
| **Pass** (green) | Proxy is working | Ready to use |
| **Failure** (pink) | Proxy is not working | Remove or replace |
| **Unknown** (grey) | Not tested yet | Run health check |

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

**Solutions:**
- Use more proxies to distribute requests
- Slow down request frequency
- Try different proxy providers

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
