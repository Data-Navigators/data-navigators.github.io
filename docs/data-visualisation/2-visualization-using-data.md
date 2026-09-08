---
sidebar_position: 2
title: From Business Problem to Analytical Solution
---

# From Business Problem to Analytical Solution

In real analytics projects, stakeholders rarely approach an analyst with a perfectly defined analytical question.

Instead, they may say:

> "Sales aren't doing very well."

> "Customers seem unhappy."

> "Our support team is overwhelmed."

> "Profit has fallen even though revenue increased."

These are **business problems**.

They describe a concern, but they do not tell the analyst exactly what analysis to perform.

One of the most important skills of a data analyst is therefore the ability to translate a business discussion into something that can be investigated using data.

---

# Do Not Start With the Dashboard

When a stakeholder explains a problem, it can be tempting to immediately start creating charts.

Instead, use a structured process.

A useful analytical workflow is:

**Business Problem  
→ Business Decision  
→ Analytical Questions  
→ Data Required  
→ Metrics and Dimensions  
→ Analysis  
→ Visualisation  
→ Insight  
→ Recommendation  
→ Action**

Each step helps ensure that the final analysis is relevant to the business problem.

---

# Step 1: Understand the Business Problem

Start by understanding what the stakeholder is concerned about.

Consider the following example.

The Head of Customer Support says:

> "Our team seems to be struggling to keep up with incoming tickets. Customers are waiting longer for their issues to be resolved. I need to understand what is happening."

The analyst might summarise the business problem as:

> **Customer support performance may be deteriorating because the team is struggling to keep up with incoming demand.**

Notice that we have not yet discussed charts or dashboards.

We are first trying to understand the problem.

---

# Step 2: Identify the Decision

Next ask:

> **What decision might the stakeholder make using this analysis?**

This is important because different decisions require different information.

For the support example, management may be trying to decide:

> **Should we increase support capacity, improve the support process, or address a particular product or issue that is generating additional tickets?**

Now the purpose of the analysis is clearer.

---

# Step 3: Translate the Problem Into Analytical Questions

A broad business problem cannot usually be answered with a single calculation.

The analyst should break it into smaller questions that can be investigated using data.

A useful approach is to ask:

- What happened?
- When did it happen?
- Where did it happen?
- Who or what is affected?
- Why might it be happening?
- What should we investigate further?

---

## Example: Customer Support

### What happened?

- Are more tickets being received?
- Are fewer tickets being resolved?
- Is the backlog increasing?
- Are customers waiting longer?
- Is service performance deteriorating?

### When?

- When did the change begin?
- Was it sudden or gradual?
- Does it happen during particular periods?

### Where?

- Which support teams are affected?
- Which ticket categories are affected?
- Which products are generating the most demand?

### Who or what?

- Are high-priority tickets affected?
- Are certain customers or products affected more than others?

### Why might it be happening?

- Has incoming demand increased?
- Has processing capacity decreased?
- Are certain issues taking longer to resolve?
- Is one product generating an unusual number of tickets?

These questions transform an unclear business concern into specific areas that can be investigated.

---

# Step 4: Identify the Data Required

Once the analytical questions are defined, determine what information is required to answer them.

For the customer support scenario, the analyst may need:

| Data Field | Why It Is Useful |
|---|---|
| Ticket ID | Identify and count tickets |
| Created Date | Understand when tickets arrive |
| Resolved Date | Understand when tickets are completed |
| Status | Identify open and resolved tickets |
| Category | Understand the type of problem |
| Product | Identify products generating demand |
| Priority | Understand the importance of the ticket |
| Support Team | Compare team performance |
| Resolution Time | Measure how long tickets take |
| SLA Target | Determine whether service targets are met |
| Customer Satisfaction | Understand customer experience |

Not every available field needs to be used.

The analyst should focus on the data that helps answer the analytical questions.

---

# Step 5: Define Metrics

A metric is a quantitative measure used to evaluate a business outcome or process.

For example, support management may care about:

| Metric | Business Meaning |
|---|---|
| Tickets Received | Amount of incoming demand |
| Tickets Resolved | Amount of completed work |
| Current Backlog | Amount of unresolved work |
| Resolution Rate | Proportion of tickets resolved |
| Average Resolution Time | How long customers wait for resolution |
| SLA Compliance | Whether service targets are being met |
| Customer Satisfaction | How customers rate the service |

Metrics connect the raw data to the business problem.

For example:

**Business concern**

> Customers are waiting too long.

**Possible metric**

> Average Resolution Time

---

# Step 6: Define Dimensions

Metrics often become more useful when they are broken down into different groups.

These groups are called **dimensions**.

For the support example, possible dimensions include:

- month,
- category,
- product,
- priority,
- support team,
- location.

For example:

> **Metric:** Average Resolution Time

could be analysed by:

> **Dimension:** Support Team

This helps answer:

> Which support teams have the longest resolution times?

Another example:

> **Metric:** SLA Compliance

by:

> **Dimension:** Ticket Category

helps answer:

> Which types of tickets are most likely to miss their service targets?

---

# Metrics and Dimensions Work Together

A useful way to think about them is:

**Metric = What are we measuring?**

**Dimension = How do we want to break it down?**

Examples:

| Metric | Dimension | Question Answered |
|---|---|---|
| Revenue | Month | How is revenue changing over time? |
| Profit | Product | Which products generate the most profit? |
| Tickets | Category | Which issues generate the most tickets? |
| Resolution Time | Team | Which teams take longer to resolve tickets? |
| Customer Satisfaction | Region | Which regions have lower customer satisfaction? |

---

# Step 7: Decide What Analysis Is Required

Different questions require different types of analysis.

---

## Descriptive Analysis

Descriptive analysis answers:

> **What happened?**

Examples:

- How much revenue did we generate?
- How many tickets were received?
- What was the average resolution time?
- Did customer satisfaction increase or decrease?

Descriptive analysis helps us understand the current or historical situation.

---

## Diagnostic Analysis

Diagnostic analysis asks:

> **Why might it have happened?**

Examples:

- Which products contributed most to the decline in profit?
- Which ticket categories caused the increase in support demand?
- Which customer segments have the highest churn?
- Which teams experienced the largest increase in resolution time?

This normally involves breaking the data into smaller groups and comparing them.

---

## Predictive Analysis

Predictive analysis asks:

> **What may happen next?**

Examples:

- How many tickets may arrive next month?
- Which customers are likely to churn?
- What might future demand look like?

Predictive analysis may require statistical modelling or machine learning.

It is not the main focus of this visualisation module, but it is useful to understand how it fits into the analytical process.

---

## Prescriptive Thinking

Prescriptive thinking asks:

> **What should we do?**

For example:

> Should management hire additional support staff?

The data alone may not directly provide the answer.

The analyst combines:

- analytical evidence,
- business knowledge,
- operational constraints, and
- stakeholder context

to recommend an appropriate next action.

---

# Step 8: Analyse Before You Visualise

Once the questions, data, metrics and dimensions are defined, the analyst can begin investigating the data.

The purpose of the analysis is to identify:

- changes,
- differences,
- patterns,
- relationships,
- unusual observations,
- areas requiring further investigation.

Only after understanding what needs to be investigated should the analyst decide how the result should be visualised.

We will learn how to choose appropriate charts in the next section.

---

# Step 9: Identify the Insight

A number or observation is not automatically an insight.

Consider:

> August received 202 support tickets.

This is an observation.

Now consider:

> August recorded the largest gap between tickets received and resolved, suggesting that incoming demand significantly exceeded the team's processing capacity during the month.

The second statement explains why the observation matters.

A useful insight answers:

> **So what?**

---

# Step 10: Connect the Insight to the Decision

The final analysis should connect back to the original business decision.

For example:

### Business Problem

Support appears to be struggling to keep up with demand.

### Analysis

Ticket volume and resolution performance are investigated.

### Insight

Most of the increase in unresolved tickets comes from one product category.

### Decision

Management needs to decide whether more staff are required.

### Recommendation

Investigate and address the product issue before increasing permanent support staffing.

The analysis has now become useful to the business.

---

# Worked Example

Consider this stakeholder statement:

> "Revenue increased this year, but our profit is lower. I don't understand why."

How should the analyst approach this?

---

## Business Problem

Profitability has deteriorated despite revenue growth.

---

## Business Decision

Management may need to decide whether to:

- change pricing,
- reduce discounting,
- manage costs,
- change the product mix,
- focus on more profitable customers or markets.

---

## Analytical Questions

Possible questions include:

1. Which products contributed to revenue growth?
2. Which products have lower profit margins?
3. Have costs increased?
4. Have discounts increased?
5. Which regions are less profitable?
6. Which customer groups generate high revenue but low profit?
7. When did profitability begin to decline?

---

## Data Required

Possible data includes:

- sales date,
- product,
- customer,
- region,
- revenue,
- quantity,
- discount,
- unit cost,
- total cost,
- profit.

---

## Metrics

Possible metrics include:

- Revenue,
- Profit,
- Profit Margin,
- Average Discount,
- Cost,
- Quantity Sold.

---

## Dimensions

Possible dimensions include:

- Month,
- Product,
- Customer,
- Region,
- Sales Channel.

---

## Analysis

The analyst can compare profitability across these different dimensions and investigate where the decline is concentrated.

Only after understanding the analytical questions should the analyst decide how to present the results visually.

---

# A Practical Analytics Planning Template

Before creating a dashboard, complete the following:

| Area | Question |
|---|---|
| Business Problem | What problem are we trying to understand? |
| Decision | What decision might be made? |
| Audience | Who needs the analysis? |
| Analytical Questions | What questions must we answer? |
| Data | What information is required? |
| Metrics | What should we measure? |
| Dimensions | How should we break down the measures? |
| Analysis | What comparisons or investigations are needed? |
| Insight | What does the analysis tell us? |
| Recommendation | What should happen next? |

---

# Activity

A stakeholder tells you:

> "Our customer retention seems worse this year. Can you tell me what is happening?"

Before creating any visualisation, answer the following:

1. What is the business problem?
2. What decision may need to be made?
3. What analytical questions would you investigate?
4. What data would you need?
5. What metrics would you calculate?
6. Which dimensions might be useful?
7. What additional business information might you ask the stakeholder for?

There may be more than one correct answer.

The purpose of the activity is to practise translating business language into analytical thinking.

---

# Key Takeaways

Do not move directly from:

**Business Problem → Dashboard**

Instead use:

**Business Problem  
→ Decision  
→ Analytical Questions  
→ Data  
→ Metrics and Dimensions  
→ Analysis  
→ Insight  
→ Recommendation  
→ Action**

This ensures that the visualisation is created for a reason.

In the next section, we will learn how to choose an appropriate chart based on the analytical question we are trying to answer.
