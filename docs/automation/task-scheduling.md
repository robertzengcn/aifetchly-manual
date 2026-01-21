---
id: task-scheduling
title: Task Scheduling
sidebar_label: Task Scheduler
description: Automate your workflows with aiFetchly's powerful task scheduling system.
---

# Task Scheduling

aiFetchly's Task Scheduler allows you to automate your marketing workflows by running tasks automatically at specified times or in response to other tasks. Set up recurring searches, automated email campaigns, and complex multi-step workflows.

## Understanding Scheduling

The Task Scheduler supports three types of task triggers:

| Trigger Type | Description | Best For |
|-------------|-------------|----------|
| **Cron** | Time-based scheduling using cron expressions | Recurring tasks, daily/weekly/monthly jobs |
| **Dependency** | Triggered by completion of another task | Multi-step workflows, task chains |
| **Manual** | Execute only when manually triggered | On-demand tasks, testing |

:::info Automate Everything

From lead generation to email campaigns, scheduling automation saves time and ensures consistent execution of your marketing workflows.

:::

## Creating a Scheduled Task

### Step 1: Navigate to Scheduler

1. Click **Schedule** in the left navigation menu
2. Click **New Schedule** button

### Step 2: Basic Information

Enter the following required information:

#### Schedule Name

- **Purpose**: Identify the schedule in your list
- **Example**: "Daily Google Search", "Weekly Email Campaign"
- **Required**: Yes

#### Task Type

Select the type of task to schedule:

- **Search**: Search engine scraping tasks
- **Email Extract**: Email extraction tasks
- **Bulk Email**: Email marketing campaigns
- **Yellow Pages**: Directory scraping tasks
- **Video Download**: Video downloading tasks

#### Task ID

- **Purpose**: Link to the specific task instance
- **Selection**: Choose from existing tasks of the selected type
- **Required**: Yes

#### Description

- **Purpose**: Provide context about the schedule's purpose
- **Example**: "Daily search for new marketing agencies in target cities"
- **Optional**: Yes

### Step 3: Configure Trigger

#### Cron Scheduling (Time-Based)

**Enable Cron** and configure the schedule:

**Preset Options:**
- Every minute
- Every hour
- Daily (midnight)
- Weekly (Sunday midnight)
- Monthly (1st of month, midnight)
- Every 15 minutes
- Every 30 minutes
- Every 2 hours
- Every 6 hours
- Every 12 hours
- Weekdays 9 AM
- Weekends 10 AM

**Custom Cron Builder:**

| Field | Options | Description |
|-------|---------|-------------|
| **Minutes** | `*/5`, `*/15`, `*/30`, or specific minutes | Every 5/15/30 min or specific |
| **Hours** | `*/2`, `*/6`, `*/12`, or specific hours | Every 2/6/12 hours or specific |
| **Days** | `*/2` or specific days | Every 2 days or specific days |
| **Months** | `*/3`, `*/6`, or specific months | Every 3/6 months or specific |
| **Weekdays** | `1-5` (weekdays), `0,6` (weekends), or specific | Weekdays, weekends, or specific |

**Cron Expression Format:**
```
┌───────────── minute (0 - 59)
│ ┌───────────── hour (0 - 23)
│ │ ┌───────────── day of month (1 - 31)
│ │ │ ┌───────────── month (1 - 12)
│ │ │ │ ┌───────────── day of week (0 - 6) (Sunday to Saturday)
│ │ │ │ │
* * * * *
```

**Examples:**
```
0 9 * * 1-5      # Weekdays at 9:00 AM
*/30 * * * *     # Every 30 minutes
0 0 * * 1        # Every Monday at midnight
0 9,15 * * *     # Daily at 9:00 AM and 3:00 PM
0 0 1 * *        # 1st of every month at midnight
```

**Next Run Time:**
- System automatically calculates and displays the next execution time
- Helpful for verifying your cron expression

#### Dependency Scheduling (Task-Based)

**Enable Dependency** to trigger this task when another task completes.

**Configuration:**

1. **Parent Schedule**: Select the schedule that will trigger this task
2. **Dependency Condition**:
   - **On Success**: Run only if parent task succeeds
   - **On Completion**: Run after parent completes (success or failure)
   - **On Failure**: Run only if parent task fails

3. **Delay (minutes)**: Wait time after parent completes before running this task
   - `0` minutes: Run immediately
   - `5` minutes: Wait 5 minutes before starting
   - `60` minutes: Wait 1 hour before starting

**Use Cases:**
- **Email after Extraction**: Extract emails, then send campaign when complete
- **Analysis after Scraping**: Scrape data, then run AI analysis
- **Multi-stage Campaigns**: Initial outreach → Follow-up 1 → Follow-up 2

:::tip Dependency Chains

You can create multi-level dependency chains:
- Task A (Cron) → Task B (Dependency) → Task C (Dependency)

This creates powerful automated workflows.

:::

#### Manual Execution

**Enable Manual** to run tasks only when triggered:

- No automatic scheduling
- Execute on-demand via "Run Now" button
- Useful for testing or infrequent tasks

### Step 4: Active Status

Toggle the schedule as:
- **Active**: Schedule will run according to trigger settings
- **Inactive**: Schedule is disabled and won't run

### Step 5: Save Schedule

Click **Save** to create the schedule. You can:
- **Edit** the schedule later
- **Enable/Disable** as needed
- **Run Now** to test immediately

## Managing Scheduled Tasks

### View Schedule List

Navigate to **Schedule** to see all your scheduled tasks.

**Schedule Overview:**
- **Status Card**: Shows total, active, inactive, and paused schedules
- **Filters**: Search by name, status, task type, trigger type

### Schedule Table

The schedule list displays:

| Column | Description |
|--------|-------------|
| **Name** | Schedule name with task type indicator |
| **Status** | Active (green), Inactive (grey), Paused (yellow) |
| **Trigger Type** | Cron, Dependency, or Manual |
| **Schedule** | Cron expression or dependency description |
| **Next Run** | Next execution time with countdown |
| **Last Run** | Most recent execution with elapsed time |
| **Executions** | Success count / Failure count |
| **Actions** | Edit, Delete, Pause/Resume, Run Now |

### Schedule Actions

| Action | Description | When Available |
|--------|-------------|----------------|
| **Edit** | Modify schedule configuration | Always |
| **Delete** | Remove schedule | Always |
| **Enable** | Activate an inactive schedule | Inactive schedules |
| **Disable** | Deactivate a schedule | Active schedules |
| **Pause** | Temporarily halt execution | Active schedules |
| **Resume** | Restart paused schedule | Paused schedules |
| **Run Now** | Execute immediately | Always |

## Monitoring Execution

### View Execution History

1. Click **View Details** on a schedule
2. See the execution history table

**Execution Information:**

| Column | Description |
|--------|-------------|
| **Start Time** | When the execution started |
| **End Time** | When execution completed (or "Running...") |
| **Duration** | How long the execution took (or live counter) |
| **Status** | Success (green), Failed (red), Running (blue) |
| **Result** | Summary of execution results |
| **Error** | Error message (if execution failed) |
| **Actions** | View details, cancel running |

### Execution Statistics

The detail view shows:

- **Success Rate**: Percentage of successful executions
- **Average Duration**: Typical execution time
- **Total Executions**: Overall count and breakdown
- **Last Error**: Most recent failure message
- **Next Run**: Countdown to next execution

### Real-Time Monitoring

For running tasks:
- **Live Duration**: Counter shows elapsed time
- **Cancel Button**: Stop the execution if needed
- **Auto-Refresh**: Status updates every few seconds

## Common Scheduling Patterns

### Pattern 1: Daily Lead Generation

**Schedule**: Every weekday at 9:00 AM
```
Cron: 0 9 * * 1-5
Task: Search Engine Scraping
```

**Use Case**: Fresh leads every morning for your sales team.

### Pattern 2: Hourly Monitoring

**Schedule**: Every hour during business hours
```
Cron: 0 9-17 * * 1-5
Task: Search / Yellow Pages
```

**Use Case**: Monitor for new business listings during work hours.

### Pattern 3: Weekly Campaign

**Schedule**: Every Monday at 10:00 AM
```
Cron: 0 10 * * 1
Task: Bulk Email Sending
```

**Use Case**: Weekly email newsletter or outreach campaign.

### Pattern 4: Multi-Step Workflow

**Task A** (Cron): Daily at 9:00 AM - Search for leads
**Task B** (Dependency): After A succeeds - Extract emails
**Task C** (Dependency): After B succeeds (30 min delay) - Send emails

**Use Case**: Automated lead generation and outreach pipeline.

### Pattern 5: Maintenance Tasks

**Schedule**: Every Sunday at 3:00 AM
```
Cron: 0 3 * * 0
Task: Data cleanup or backup
```

**Use Case**: Routine maintenance during low-traffic periods.

## Best Practices

### 1. Schedule Design

**Avoid Overlapping:**
- Ensure tasks complete before next scheduled run
- Consider average execution time when setting frequency
- Use dependencies to sequence overlapping tasks

**Off-Peak Hours:**
- Schedule resource-intensive tasks during off-hours
- Avoid competing with user activity
- Consider time zones for global operations

**Buffer Time:**
- Add buffer between dependent tasks
- Account for variable execution times
- Prevent cascading delays

### 2. Error Handling

**Monitor Failures:**
- Check execution history regularly
- Investigate repeated failures
- Adjust schedules or tasks as needed

**Set Up Alerts:**
- Review schedules weekly
- Check for stuck or paused tasks
- Verify dependencies are firing correctly

**Graceful Degradation:**
- Use "On Completion" dependencies to continue chain even if one task fails
- Create alternative schedules for critical tasks
- Document escalation procedures

### 3. Resource Management

**Concurrent Tasks:**
- Avoid scheduling too many tasks simultaneously
- Consider system resources (CPU, memory, network)
- Stagger similar tasks to prevent conflicts

**Proxy Rotation:**
- Ensure sufficient proxies for concurrent scheduled tasks
- Distribute load across proxy pool
- Monitor proxy health for scheduled tasks

### 4. Testing

**Test Schedules:**
- Use "Run Now" to test before scheduling
- Verify with one-time execution first
- Check logs for any issues

**Validate Cron Expressions:**
- Use the "Next Run Time" preview to verify
- Test with shorter intervals first
- Confirm timezone settings are correct

**Test Dependencies:**
- Verify parent tasks complete successfully
- Test delay settings
- Ensure chains work as expected

### 5. Documentation

**Name Schedules Clearly:**
- Descriptive names with purpose and frequency
- Include task type and target
- Example: "Daily Google Search - Marketing Agencies"

**Use Descriptions:**
- Document purpose and expected outcomes
- Note dependencies and relationships
- Include any special considerations

**Label Task Purposes:**
- Tag or categorize related schedules
- Group by project or campaign
- Make identification easy

## Troubleshooting

### Schedule Not Running

**Possible causes:**
- Schedule is inactive or paused
- Cron expression misconfigured
- Scheduler service not running
- System time/timezone issues

**Solutions:**
1. Verify schedule status is "Active"
2. Check cron expression syntax
3. Confirm scheduler service is running
4. Verify system time and timezone settings
5. Check execution logs for errors

### Task Executing Too Frequently

**Possible causes:**
- Cron expression incorrect
- Multiple schedules for same task
- Misunderstood cron syntax

**Solutions:**
1. Review cron expression carefully
2. Check for duplicate schedules
3. Use "Next Run Time" preview to verify
4. Test with longer intervals first

### Dependencies Not Firing

**Possible causes:**
- Parent task not completing
- Wrong dependency condition
- Delay too long or too short

**Solutions:**
1. Check parent task execution history
2. Verify dependency condition matches desired behavior
3. Adjust delay settings
4. Check for circular dependencies

### Tasks Taking Too Long

**Possible causes:**
- Task configuration too aggressive
- System resources insufficient
- Network bottlenecks

**Solutions:**
1. Reduce task scope (pages, concurrency, etc.)
2. Schedule during off-peak hours
3. Increase interval between runs
4. Check system performance

### Execution History Not Showing

**Possible causes:**
- Task never executed
- History cleared
- Database issues

**Solutions:**
1. Run task manually to test
2. Check if task has ever executed
3. Verify database connectivity
4. Restart scheduler service if needed

## Advanced Workflows

### Workflow 1: Automated Lead Generation Pipeline

**Schedule 1**: Daily Search
```
Cron: 0 9 * * 1-5 (Weekdays 9 AM)
Task: Google Search for "marketing agencies [city]"
```

**Schedule 2**: Email Extraction (Dependency)
```
Trigger: After Schedule 1 succeeds
Delay: 0 minutes
Task: Extract emails from Schedule 1 results
```

**Schedule 3**: Email Campaign (Dependency)
```
Trigger: After Schedule 2 completes
Delay: 60 minutes (allow time for extraction)
Task: Send welcome email campaign
```

**Result**: Automated daily lead generation and outreach.

### Workflow 2: Weekly Maintenance

**Schedule 1**: Database Cleanup
```
Cron: 0 3 * * 0 (Sunday 3 AM)
Task: Remove old completed tasks
```

**Schedule 2**: Proxy Health Check (Dependency)
```
Trigger: After Schedule 1 completes
Task: Test all proxies and remove failed
```

**Schedule 3**: Report Generation (Dependency)
```
Trigger: After Schedule 2 completes
Task: Generate weekly usage report
```

**Result**: Automated weekly maintenance and reporting.

### Workflow 3: Multi-Regional Monitoring

**Schedule 1**: US East Monitoring
```
Cron: 0 */2 * * * (Every 2 hours)
Task: Search US East keywords
```

**Schedule 2**: US West Monitoring
```
Cron: 0 */2 * * * (Every 2 hours, offset)
Task: Search US West keywords
```

**Schedule 3**: Europe Monitoring
```
Cron: 0 */2 * * * (Every 2 hours, offset)
Task: Search European keywords
```

**Result**: Continuous global monitoring with staggered schedules.

## Integration with Other Features

The Task Scheduler integrates with:

- **[Search Engines](../lead-generation/search-engines)**: Schedule recurring searches
- **[Contact Extraction](../lead-generation/contact-extraction)**: Auto-extract after searches
- **[Yellow Pages](../lead-generation/yellow-pages)**: Regular directory scraping
- **[Batch Email Sending](../ai-outreach/batch-email-sending)**: Automated campaigns

## Next Steps

Now that you understand scheduling:

- [Configure system settings](../settings/system-settings)
- [Review the complete user manual](../getting-started/introduction)

---

**Ready to automate?** Start by scheduling a simple daily search task, then gradually build more complex automated workflows as you become familiar with the system.
