# Cloudflare Access Setup Guide

How to deploy the training portal to a subdomain and protect it with Cloudflare Access (Zero Trust login).

**Time to complete:** ~20–30 minutes  
**Cost:** Free for up to 50 users on the Cloudflare Zero Trust free plan  
**Result:** `training.yourdomain.com` requires a login before anyone can view any page

---

## What Cloudflare Access does

Cloudflare Access sits in front of your site at the DNS/CDN level. Before a visitor reaches any page, they hit a Cloudflare-hosted login screen. You choose the login method — the simplest is email OTP (a one-time code sent to the visitor's email). You can also use Google, GitHub, or Microsoft.

Only people whose email addresses (or email domain) you approve can log in. Everyone else gets a denial page. No auth code to write, no session management, no passwords to store.

---

## Part 1: Deploy the training portal to Cloudflare Pages

### Step 1 — Push to GitHub

Create a new GitHub repository and push the `training-portal/` folder contents to it. The `index.html` should be at the root of the repo.

```
training-portal/   ← this becomes the repo root
  index.html
  css/
  js/
  docs/
  ...
```

### Step 2 — Create a Cloudflare Pages project

1. Log in to the [Cloudflare dashboard](https://dash.cloudflare.com)
2. Go to **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
3. Select the GitHub repo you just pushed
4. Build settings:
   - **Framework preset:** None
   - **Build command:** *(leave blank)*
   - **Build output directory:** `/` (or leave blank)
5. Click **Save and Deploy**

Cloudflare Pages will deploy your site and give you a URL like `your-project.pages.dev`.

### Step 3 — Connect a custom subdomain

1. In Cloudflare Pages → your project → **Custom domains**
2. Add `training.yourdomain.com`
3. Cloudflare auto-creates a CNAME record if your domain's nameservers are already on Cloudflare

If your domain is not on Cloudflare, add a CNAME record manually in your DNS provider:
```
Type:  CNAME
Name:  training
Value: your-project.pages.dev
```

HTTPS is handled automatically by Cloudflare.

---

## Part 2: Enable Cloudflare Access

### Step 4 — Open Zero Trust

1. In the Cloudflare dashboard, click **Zero Trust** in the left sidebar (or go to `one.dash.cloudflare.com`)
2. If this is your first time, complete the brief Zero Trust setup wizard
3. Choose the **Free** plan (includes up to 50 users)

### Step 5 — Create an Access Application

1. Go to **Access** → **Applications** → **Add an application**
2. Choose **Self-hosted**
3. Fill in:
   - **Application name:** `NexSite Training Portal`
   - **Session duration:** `24 hours` (how long a login lasts before re-auth is required)
   - **Application domain:** `training.yourdomain.com`
   - Leave the path blank to protect the entire subdomain

### Step 6 — Create an Access Policy

On the next screen, create a policy:

- **Policy name:** `Approved Employees`
- **Action:** Allow
- **Rules:**

Choose one of these rule types depending on your preference:

**Option A — Allow specific email addresses** (most secure, one by one):
```
Selector: Emails
Value:    jane@example.com, john@example.com
```

**Option B — Allow any email at your domain** (easiest if you use G Suite or similar):
```
Selector: Email domain
Value:    nexsite.studio
```
This lets anyone with a `@nexsite.studio` email log in.

**Option C — Allow a list you maintain** (good for adding/removing users):
```
Selector: Emails from a list
```
Create a list under Access → Lists, then reference it here.

Click **Save** to create the policy, then **Save application** to finish.

### Step 7 — Set the login method

1. Go to **Settings** → **Authentication**
2. Under **Login methods**, click **Add new**
3. Choose **One-time PIN (OTP)** — this is the simplest. Users enter their email and receive a 6-digit code.
4. Optionally also add **Google** if your trainees have Google accounts

---

## Part 3: Test it

1. Open `training.yourdomain.com` in an incognito window
2. You should be redirected to a Cloudflare login page (not your site)
3. Enter an approved email address and submit
4. You receive a one-time code by email
5. Enter the code — you are now on the training portal

If it redirects you directly to the site without a login prompt, give DNS a few minutes to propagate and try again.

---

## Managing Users

### Adding a new trainee

- **If using email list:** Go to **Access** → **Applications** → your app → **Policies** → edit the policy → add their email address
- **If using a list:** Go to **Access** → **Lists** → edit the list → add their email
- **If using email domain:** No action needed — anyone at the domain can log in

### Removing access

- Remove their email from the policy or list
- Optionally revoke any active sessions: **Access** → **Active Sessions** → search for their email → revoke

### Inviting someone

There is no formal invite flow in Access. Just:
1. Add their email to the policy
2. Share the URL `training.yourdomain.com` with them
3. They follow the login flow on their first visit

---

## Important Notes

### Progress is device-local

Quiz results and checklist state are saved in `localStorage` in the browser. This means:
- Progress is per-device, per-browser — not per Cloudflare user
- If a trainee clears their browser storage, progress resets
- If you want true per-user progress tracking across devices, that requires a backend (Workers + KV or D1) — this can be scoped as a future upgrade

### Access does not protect content in iframes

If the training portal embeds content from other domains (e.g., YouTube videos), Access does not gate those external URLs — only your subdomain. This is expected behavior.

### Cloudflare Access login page branding

You can customize the Access login page (logo, background color, company name) under **Settings** → **Custom Pages** in the Zero Trust dashboard.

---

## Cost Summary

| What | Cost |
|------|------|
| Cloudflare Pages hosting | Free |
| Cloudflare Zero Trust free plan | Free (up to 50 users) |
| Custom domain (if you already own it) | $0 extra |
| Cloudflare Access for 51–100 users | $7/user/month (Zero Trust Teams) |

For a training portal with under 50 trainees at a time, the total cost is **$0**.
