# Recipe Prompting Pattern

The Recipe Prompting Pattern guides Large Language Models (LLMs) to complete partial plans by filling
in missing steps while maintaining your known sequence. This pattern works like giving a chef a recipe
with some ingredients listed—the AI fills in what's missing to create a complete, actionable plan.

## Examples

### I. Home Purchase Planning

**Prompt:**
```
I would like to purchase a house. I know that I need to perform steps make an offer and close on
the house. Provide a complete sequence of steps for me. Fill in any missing steps.
```

**Output:**
```
Here's the complete sequence of steps to purchase a house:

1. Get pre-approved for a mortgage - Meet with lenders to determine your budget and obtain a
   pre-approval letter
2. Find a real estate agent - Select an experienced buyer's agent to help you navigate the
   process
3. Determine your requirements - List must-haves, nice-to-haves, and deal-breakers for your new
   home
4. Search for properties - Tour homes that meet your criteria and budget
5. Make an offer - Submit a written offer with your proposed price and terms
6. Negotiate terms - Work with the seller to agree on price, contingencies, and closing date
7. Schedule a home inspection - Hire a professional inspector to identify any issues with the
   property
8. Request repairs or renegotiate - Address any issues found during inspection
9. Secure financing - Finalize your mortgage application and lock in your interest rate
10. Obtain homeowner's insurance - Purchase a policy required by your lender
11. Conduct a final walkthrough - Verify the property condition before closing
12. Close on the house - Sign all documents, transfer funds, and receive the keys to your new
    home
```

### II. Road Trip Planning

**Prompt:**
```
I would like to drive to NYC from Nashville. I know that I want to go through Asheville, NC on
the way and that I don't want to drive more than 300 miles per day. Provide a complete sequence
of steps for me. Fill in any missing steps.
```

**Output:**
```
Here's your complete road trip itinerary from Nashville to NYC via Asheville:

Pre-Trip Planning:
1. Plan your route - Nashville → Asheville (275 miles) → Roanoke, VA (190 miles) → Washington,
   DC (240 miles) → NYC (225 miles)
2. Book accommodations - Reserve hotels in Asheville, Roanoke, and Washington DC
3. Check your vehicle - Verify tire pressure, oil level, and fluid levels
4. Download offline maps - Ensure navigation works without cell service
5. Pack emergency supplies - Include first aid kit, phone charger, snacks, and water

Day 1: Nashville to Asheville (275 miles)
6. Depart Nashville - Leave early morning to avoid traffic
7. Stop for lunch - Break around Knoxville, TN (halfway point)
8. Arrive in Asheville - Check into hotel and explore downtown

Day 2: Asheville to Roanoke (190 miles)
9. Explore Asheville morning - Visit local attractions if time permits
10. Drive to Roanoke - Short drive allows for scenic stops along Blue Ridge Parkway
11. Arrive in Roanoke - Check in and rest

Day 3: Roanoke to Washington DC (240 miles)
12. Depart Roanoke - Head northeast through Virginia
13. Stop for lunch and stretch - Take a break around Charlottesville
14. Arrive in Washington DC - Navigate rush hour traffic if needed

Day 4: Washington DC to NYC (225 miles)
15. Depart Washington DC - Leave early to avoid DC traffic
16. Plan for tolls - Have cash or E-ZPass ready for turnpikes
17. Arrive in NYC - Navigate to your final destination or parking garage
```

### III. Software Deployment Process

**Prompt:**
```
I would like to deploy my web application to production. I know that I need to perform steps run
tests and update DNS records. Provide a complete sequence of steps for me. Fill in any missing
steps. Identify any unnecessary steps.
```

**Output:**
```
Here's the complete deployment sequence:

Pre-Deployment:
1. Complete code review - Ensure all changes are reviewed and approved
2. Merge to main branch - Integrate your feature branch into the production branch
3. Run tests - Execute unit tests, integration tests, and end-to-end tests
4. Run security scans - Check for vulnerabilities in dependencies and code
5. Build the application - Create production-ready build artifacts
6. Backup current production - Create a snapshot of database and current deployment

Staging Deployment:
7. Deploy to staging environment - Test the deployment process in a production-like environment
8. Run smoke tests - Verify critical functionality works in staging
9. Perform load testing - Ensure the application can handle expected traffic

Production Deployment:
10. Enable maintenance mode (optional) - Display a maintenance page during deployment
11. Deploy to production - Push the new version to production servers
12. Run database migrations - Apply any schema changes (if applicable)
13. Verify health checks - Confirm all services are running and responding
14. Run post-deployment tests - Execute critical path tests in production
15. Monitor logs and metrics - Watch for errors or performance issues
16. Disable maintenance mode - Restore user access to the application

Post-Deployment:
17. Monitor application performance - Watch dashboards for 24-48 hours
18. Notify stakeholders - Inform team and users of successful deployment

Regarding DNS Records:
Note: Updating DNS records is typically unnecessary unless you're changing hosting providers,
moving to a new IP address, or modifying your domain configuration. If your infrastructure hasn't
changed, you can skip this step.
```

## Related Patterns

- [Meta Language Creation Pattern](meta_language_prompt_pattern.md)

## Further Reading 🔗

- [A Prompt Pattern Catalog to Enhance Prompt Engineering with ChatGPT](https://arxiv.org/abs/2302.11382)
