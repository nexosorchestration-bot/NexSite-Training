window.PORTAL_CONFIG = {

  org: {
    name:    "NexSite Studio",
    tagline: "Internal Training Portal",
    version: "2.0"
  },

  nav: [
    { id: "index",        label: "Dashboard",      icon: "⬛", href: "index.html" },
    { id: "standards",    label: "Standards",      icon: "📋", href: "standards.html" },
    { id: "workflows",    label: "Workflows",      icon: "⚙",  href: "workflows.html" },
    { id: "editing",      label: "Editing",        icon: "✏",  href: "editing.html" },
    { id: "booking",      label: "Booking Setup",  icon: "📅", href: "booking.html" },
    { id: "deployment",   label: "Deployment",     icon: "▲",  href: "deployment.html" },
    { id: "maintenance",  label: "Maintenance",    icon: "◆",  href: "maintenance.html" },
    { id: "troubleshoot", label: "Troubleshoot",   icon: "◎",  href: "troubleshooting.html" },
    { id: "comms",        label: "Client Comms",   icon: "✉",  href: "comms.html" },
    { id: "policies",     label: "Policies",       icon: "▣",  href: "policies.html" },
    { id: "glossary",     label: "Glossary",       icon: "≡",  href: "glossary.html" },
    { id: "emergency",    label: "Emergency",      icon: "⚠",  href: "emergency.html" }
  ],

  // ─── Standards ────────────────────────────────────────────────────────────────

  standards: [
    {
      id: "client-communication",
      title: "Client Communication",
      category: "Client Relations",
      summary: "How to communicate professionally with clients at every stage.",
      content: [
        {
          heading: "Response Time",
          body: "Respond to all client messages within one business day. For urgent requests, respond same day when possible. Never leave a message unread for more than 24 hours without at least an acknowledgement."
        },
        {
          heading: "Project Updates",
          body: "Send an unsolicited update at least once per week during active builds. Clients should never have to ask where things stand. Use clear language — avoid jargon unless the client has demonstrated technical familiarity."
        },
        {
          heading: "Scope Conversations",
          body: "If a client request falls outside the agreed scope, do not begin work before confirming. Say: 'That's something I can look at — let me check if it's covered under the current scope or if it would be a quick add-on.' Never silently absorb scope creep."
        },
        {
          heading: "Delivering Work",
          body: "When delivering a site or milestone, send a short summary of what was completed, the staging or live link, and any action items the client needs to complete. Give them a clear deadline for feedback."
        }
      ]
    },
    {
      id: "scope-management",
      title: "Scope Management",
      category: "Project Management",
      summary: "How to define, protect, and communicate project scope.",
      content: [
        {
          heading: "Scope Before Build",
          body: "Before starting any build, confirm what is and is not included in writing. Use the scope boundaries doc from the relevant package. If it is not in writing, it is not in scope."
        },
        {
          heading: "The Scope Creep Rule",
          body: "Any feature, page, revision, or request not covered in the original scope agreement is a potential add-on. Small items under 30 minutes can be a goodwill gesture once per project. Anything larger needs a conversation and approval before work begins."
        },
        {
          heading: "Change Orders",
          body: "For any out-of-scope work, create a short written change order that includes: description of the addition, estimated time, additional cost (or 'no charge' if waiving), and client approval. Keep these in the project folder."
        },
        {
          heading: "Booking Sites Specifically",
          body: "The default booking package does not include custom backends, login systems, or payment processing. These must be explicitly scoped as add-ons. See the Policies section for exact language."
        }
      ]
    },
    {
      id: "design-standards",
      title: "Design Standards",
      category: "Design",
      summary: "Visual and UX standards for all NexSite Studio deliverables.",
      content: [
        {
          heading: "Mobile First",
          body: "Every site must be tested on a real mobile device before delivery. Not just browser devtools — a physical phone. Check the booking flow, form submission, and navigation on the smallest screen the client's audience is likely to use."
        },
        {
          heading: "Typography",
          body: "Default to system fonts unless the client's brand requires a custom typeface. If using a web font, load only the weights you use. Never load a full font family when you are using two weights."
        },
        {
          heading: "Color Accessibility",
          body: "All text on colored backgrounds must meet WCAG AA contrast ratio (4.5:1 for normal text, 3:1 for large text). Use a contrast checker before finalizing brand color pairings."
        },
        {
          heading: "Image Optimization",
          body: "All images must be compressed before deployment. Hero images should be under 300KB. Team photos under 100KB each. Use WebP where possible. Never deliver a site with unoptimized assets."
        },
        {
          heading: "No Lorem Ipsum in Delivery",
          body: "Placeholder text must be replaced before any client-facing delivery — staging or production. If client content is missing, use clearly marked placeholder copy that says [CLIENT TO PROVIDE], not lorem ipsum."
        }
      ]
    },
    {
      id: "code-standards",
      title: "Code Standards",
      category: "Development",
      summary: "HTML, CSS, and JS standards for all NexSite Studio builds.",
      content: [
        {
          heading: "Config-First",
          body: "All client-specific data belongs in a config file, not scattered through HTML. For the booking template this means site-config.js. No hardcoded business names in navigation or page content."
        },
        {
          heading: "No Inline Styles",
          body: "CSS belongs in stylesheets, not inline style attributes, unless it is dynamically set by JavaScript. Inline styles make maintenance difficult and create specificity problems."
        },
        {
          heading: "Semantic HTML",
          body: "Use the correct HTML element for the job: nav for navigation, main for main content, header/footer for their respective sections, button for actions, a for navigation. Do not use divs for everything."
        },
        {
          heading: "Comments",
          body: "Do not add comments that describe what the code obviously does. Only comment on non-obvious constraints, workarounds for specific bugs, or hidden business rules. Section markers are fine for long CSS files."
        },
        {
          heading: "Validate Before Delivery",
          body: "Run HTML through the W3C validator and check the browser console for errors before any delivery. Zero console errors and zero validation errors is the baseline."
        }
      ]
    },
    {
      id: "file-delivery",
      title: "File & Delivery Standards",
      category: "Operations",
      summary: "How to name files, organize projects, and hand off work.",
      content: [
        {
          heading: "File Naming",
          body: "Use lowercase with hyphens for all file and folder names: client-name/, hero-image.jpg, site-config.js. No spaces, no camelCase in file names, no underscores for web assets."
        },
        {
          heading: "Project Folders",
          body: "Each client project lives in its own folder. Inside: the site files, an assets/ subfolder, a docs/ subfolder for the intake form and scope doc, and a NOTES.md for anything important about the client or project."
        },
        {
          heading: "Handoff Checklist",
          body: "Before marking a project delivered, run through the pre-launch checklist. The checklist is not optional. If something on the checklist cannot be completed, document why and get client sign-off."
        },
        {
          heading: "Client Credentials",
          body: "Never store client passwords or API keys in project files. Use a secure password manager and share credentials through a secure channel. Never send passwords in plain text over email."
        }
      ]
    }
  ],

  // ─── Package Workflows ────────────────────────────────────────────────────────

  workflows: [
    {
      id: "local-starter",
      title: "Local Starter",
      category: "Starter Package — $299 setup + $49/mo",
      summary: "End-to-end workflow for the Local Starter package. Up to 3 pages, contact form, mobile-optimized.",
      content: [
        {
          heading: "Intake",
          body: "Run the client intake questionnaire. Collect: business name, address, phone, email, hours, 3–5 services or products, logo (or note it needs to be designed), 1–3 photos, and preferred domain. Do not start scoping until you have all of this."
        },
        {
          heading: "Scope",
          body: "Confirm in writing: up to 3 pages, contact form, mobile-optimized, no booking integration, no e-commerce. Send the scope boundaries doc and get written approval before writing a single line of code."
        },
        {
          heading: "Build",
          body: "Use a base template — never build from a blank file. Fill all config fields before writing any custom HTML. Test locally with a live server. Do not open HTML files with file:// during development."
        },
        {
          heading: "Review",
          body: "Send a staging link with a numbered list of what to check. Give the client 5 business days to respond. Limit to 2 revision rounds — scope the third as a paid add-on."
        },
        {
          heading: "Launch",
          body: "Run the pre-launch checklist. Connect to Cloudflare Pages, set the custom domain, confirm HTTPS is active. Test the form on production — not just staging. Send the delivery message."
        },
        {
          heading: "Maintenance Handoff",
          body: "Confirm the client understands the monthly maintenance scope. Set up recurring payment. Document any client-specific quirks in NOTES.md before the project folder is archived."
        }
      ]
    },
    {
      id: "growth",
      title: "Growth",
      category: "Growth Package — $449 setup + $79/mo",
      summary: "End-to-end workflow for the Growth package. Up to 5–6 pages, gallery, basic SEO.",
      content: [
        {
          heading: "Intake",
          body: "Same as Local Starter, plus: collect team member info if showing staff, at least 2–3 testimonials, and specific CTAs or goals for the site (bookings, calls, form leads). More pages means more content — don't start without it."
        },
        {
          heading: "Scope",
          body: "Up to 5–6 pages, contact form, gallery or portfolio section, basic SEO meta tags. Confirm explicitly: no booking platform integration, no e-commerce, no custom backend. Those are Booking or Enterprise."
        },
        {
          heading: "Build",
          body: "Same approach as Local Starter. Extra pages should be lightweight extensions of the base template, not separate templates. Keep all content in the config file — never hardcode client info in HTML."
        },
        {
          heading: "Review and Launch",
          body: "Same process as Local Starter. With more pages, allow one extra business day for client review. The full pre-launch checklist still applies to every page."
        },
        {
          heading: "Maintenance",
          body: "Same scope as Local Starter. Note in NOTES.md which pages are most likely to need content updates (usually services and team pages) so you can find them quickly for future requests."
        }
      ]
    },
    {
      id: "booking",
      title: "Booking",
      category: "Booking Package — $599 setup + $99/mo",
      summary: "End-to-end workflow for the Booking package. Booking-ready site connected to the client's existing provider.",
      content: [
        {
          heading: "Intake",
          body: "Collect everything from the Growth intake, plus: which booking provider the client uses (Calendly, Square Appointments, Acuity, etc.), their main booking URL, each service with name/price/duration, and team members who offer each service."
        },
        {
          heading: "Scope",
          body: "Explicitly confirm before starting: booking platform integration is link and embed only. No custom scheduling logic, no live availability sync, no customer account system, no payment processing beyond the client's existing provider. Send the booking scope-boundaries doc."
        },
        {
          heading: "Build",
          body: "Use the booking site template. Fill site-config.js completely before touching any HTML — business info, all services with correct IDs, all team members with IDs that match service offeredBy fields, booking mode, and main booking URL."
        },
        {
          heading: "Test",
          body: "Run through the full booking flow on desktop and a real mobile device before sending the staging link. Click every booking link. Submit the request form. Check console for zero errors."
        },
        {
          heading: "Launch",
          body: "Same pre-launch checklist as other packages. The booking flow is the most critical thing to verify on production — test it yourself before sending the delivery message. Confirm the client's booking provider is connected and working."
        }
      ]
    },
    {
      id: "enterprise",
      title: "Enterprise",
      category: "Enterprise Package — $800+ custom scope",
      summary: "Workflow for Enterprise projects. Scope is defined per engagement — never assume.",
      content: [
        {
          heading: "Pre-Engagement",
          body: "Enterprise projects require a scoping call before any quote is confirmed. Do not start work based on a price alone. Scope must be documented and approved in writing before work begins."
        },
        {
          heading: "Scope",
          body: "Enterprise scope is defined per project. Common additions: custom backend features, employee login, advanced payment flows, multi-location support, API integrations. Each is a separate line item — never bundled. Be explicit about what each line item includes and excludes."
        },
        {
          heading: "Payment",
          body: "Enterprise requires a deposit — typically 50% — before work begins. Do not start builds without confirmed payment. For projects over $1,000, use milestone payments tied to deliverables."
        },
        {
          heading: "Build",
          body: "Enterprise builds may not follow standard templates. Document any custom architecture decisions in NOTES.md. Keep a running change log in the project folder. If the scope changes during the build, write a change order before continuing."
        },
        {
          heading: "Delivery",
          body: "Enterprise delivery requires a handoff call, written client sign-off, and a documented support period — typically 30 days post-launch for bug fixes only. New features after launch are billed separately."
        }
      ]
    }
  ],

  // ─── Editing Guides ───────────────────────────────────────────────────────────

  editing: [
    {
      id: "text-content",
      title: "Editing Text Content",
      category: "Content",
      summary: "How to safely update copy, headings, and body text on any NexSite Studio site.",
      content: [
        {
          heading: "Config-driven sites",
          body: "For any site using a config file (site-config.js, portal-config.js), text content lives in that file — not in the HTML. Change the config, never the HTML directly. The HTML is a template; the config is the content."
        },
        {
          heading: "Plain HTML sites",
          body: "Open the relevant .html file. Use Ctrl+F to find the text. Edit the content between the tags. Do not change HTML structure, class names, or attribute values — only the text content inside elements."
        },
        {
          heading: "Validate after editing",
          body: "After any text change, open the page in a browser locally. Confirm the change appears correctly with no broken layout, no missing content, and no console errors before pushing."
        }
      ]
    },
    {
      id: "images",
      title: "Swapping Images",
      category: "Assets",
      summary: "How to replace images without breaking paths or bloating the repo.",
      content: [
        {
          heading: "Same filename when possible",
          body: "Replace images with files of the same name when possible — this avoids updating any src references in HTML or config. Drop the new file into the same location in assets/ and push."
        },
        {
          heading: "Different filename",
          body: "If the new image has a different filename, find all references to the old filename across HTML, CSS, and config files. Use grep to catch every instance. Update them all before pushing — a partial update will leave broken images on some pages."
        },
        {
          heading: "Optimize before upload",
          body: "Run images through Squoosh (squoosh.app) or a similar tool before adding them to the project. Hero images under 300KB, profile photos under 100KB. Never commit an unoptimized image from a client's phone or email attachment."
        },
        {
          heading: "File path case sensitivity",
          body: "Cloudflare Pages runs on Linux, which is case-sensitive. hero-image.jpg and Hero-Image.jpg are different files. Always use lowercase filenames and match the case exactly in your src paths."
        }
      ]
    },
    {
      id: "payment-links",
      title: "Updating Payment Links",
      category: "E-commerce",
      summary: "How to safely update Stripe payment links when packages or prices change.",
      content: [
        {
          heading: "Finding payment links",
          body: "Stripe payment links are set in the config file or directly in the HTML. Search the repo for stripe.com/b/pay to find all instances. Do not update them by memory — always find every occurrence."
        },
        {
          heading: "Updating safely",
          body: "Copy the new Stripe link exactly from the Stripe dashboard. Do a find-all replace rather than manual one-by-one — if a link appears in multiple places and you miss one, clients will land on the wrong checkout page."
        },
        {
          heading: "Test after updating",
          body: "Click every payment link on every page after updating. Confirm the Stripe checkout page loads for the correct product and price. Do not push until you have verified this manually."
        }
      ]
    },
    {
      id: "form-destination",
      title: "Changing Form Destinations",
      category: "Forms",
      summary: "How to update where form submissions are sent when email addresses change.",
      content: [
        {
          heading: "EmailJS vs FormSubmit",
          body: "NexSite Studio uses two form handlers. EmailJS is used for flows that need an auto-reply (quote forms, questionnaires). FormSubmit is used for simpler contact forms. Check which one the site uses before editing."
        },
        {
          heading: "Updating EmailJS",
          body: "EmailJS keys live in the script that calls emailjs.send(). Update the service ID, template ID, and public key in the relevant JS file or script block. Test by submitting the form — verify both the admin notification and the auto-reply arrive correctly."
        },
        {
          heading: "Updating FormSubmit",
          body: "The FormSubmit destination is the email address in the form's action attribute: action=\"https://formsubmit.co/ajax/EMAIL\". Update the address. Important: FormSubmit requires activation — the first submission to a new email triggers a confirmation that must be clicked before submissions will deliver."
        }
      ]
    },
    {
      id: "pushing-changes",
      title: "Pushing Changes to Production",
      category: "Deployment",
      summary: "How to get local edits live on a Cloudflare Pages site.",
      content: [
        {
          heading: "Commit and push",
          body: "Stage only the files you changed. Write a clear, specific commit message. Push to main. Cloudflare Pages detects the push and redeploys automatically — this takes 30–90 seconds for a static site."
        },
        {
          heading: "Confirm the deployment",
          body: "Go to the Cloudflare Pages dashboard, find the project, and watch the build log. When the deployment shows as Success, visit the live URL and hard-refresh (Ctrl+Shift+R) to confirm the change is live."
        },
        {
          heading: "If the change doesn't appear",
          body: "Cloudflare caches aggressively. If the deployment succeeded but you still see old content, purge the Cloudflare cache from the dashboard under Caching → Configuration → Purge Everything, then hard-refresh. This is almost always the fix."
        },
        {
          heading: "Never force-push to main on a live site",
          body: "If you need to undo a bad change, use git revert rather than git reset --hard. Revert creates a new commit that undoes the previous one — this is safe to push. Reset rewrites history, which can cause problems on shared repos."
        }
      ]
    }
  ],

  // ─── Booking Site Setup ───────────────────────────────────────────────────────

  bookingSetup: [
    {
      id: "copy-template",
      title: "Copy the Template",
      category: "Setup",
      summary: "Start from the booking template — never from a blank file.",
      content: [
        {
          heading: "Copy, don't create",
          body: "Copy the booking-template/ directory to the new client project folder. Rename the folder to the client name using lowercase-hyphenated format (e.g., river-salon/, apex-auto/). Never build a booking site from a blank HTML file — you will reinvent work that's already done."
        },
        {
          heading: "Project folder structure",
          body: "Inside the new project folder, create: assets/ for images, docs/ for the intake form and scope doc, and NOTES.md for anything important. Add the client's intake form and scope document to docs/ before writing any code."
        },
        {
          heading: "Initialize git",
          body: "Initialize a git repo in the new project folder immediately. Create the GitHub repo, add the remote, and make the first commit before any real work starts. This ensures nothing is lost and gives you a rollback point."
        }
      ]
    },
    {
      id: "fill-config",
      title: "Fill site-config.js",
      category: "Configuration",
      summary: "Complete the config file before touching any HTML.",
      content: [
        {
          heading: "Config first, always",
          body: "Do not touch any HTML until site-config.js is completely filled. Every field — business name, address, phone, email, hours, social links — should come from the intake form and be populated before the first browser preview."
        },
        {
          heading: "Services array",
          body: "Each service needs a unique id (lowercase-hyphenated), name, category, description, price, duration, bookingUrl, and an offeredBy array of team member IDs. If a service is offered by all staff, include all team IDs or use an empty array — check the template docs for which behavior is default."
        },
        {
          heading: "Team array",
          body: "Each team member needs a unique id that matches the offeredBy values on services. Include name, role, bio, photo path, and their individual booking URL if different from the main URL. IDs must match exactly — a mismatch will cause the staff filter to silently fail."
        },
        {
          heading: "Hours and extras",
          body: "Fill hours, testimonials, FAQs, and social links from the intake form. These are easy to miss when focused on services and team — go through the config top to bottom at least once to confirm no field is left blank or at its placeholder value."
        }
      ]
    },
    {
      id: "booking-mode",
      title: "Set Booking Mode",
      category: "Configuration",
      summary: "Choose and configure the booking experience for the client.",
      content: [
        {
          heading: "Use hybrid as the default",
          body: "The hybrid booking mode gives visitors four paths: book by service, book by staff, embedded widget, and request form. Use hybrid unless the client has a specific reason to restrict it. Most clients benefit from giving visitors options."
        },
        {
          heading: "Main booking URL",
          body: "The bookingUrl field in the config is the fallback link when no more specific URL is available. Paste the client's main booking page URL here and test it. If it 404s or redirects to a login page, stop and clarify with the client."
        },
        {
          heading: "Embedded widget",
          body: "If the client uses Calendly or a provider that offers an embed script, paste that script in the config's embedScript field. The booking page will inject it. Test the embed — some providers block embedding outside their domain by default and require a settings change on the client's account."
        },
        {
          heading: "Request form fallback",
          body: "The request form is always available in hybrid mode as a fallback. Make sure the form's destination email is set correctly in the form handler (EmailJS or FormSubmit) and test a real submission before sending the staging link."
        }
      ]
    },
    {
      id: "test-before-review",
      title: "Test Before Review",
      category: "QA",
      summary: "What to test before sending the staging link to the client.",
      content: [
        {
          heading: "Use a live server, not file://",
          body: "Open the site with VS Code Live Server or run python3 -m http.server in the project folder. Never open HTML files directly with file:// — config-driven rendering scripts load external files and will fail silently on the file:// protocol."
        },
        {
          heading: "What to check",
          body: "Click every booking link and confirm it opens the correct provider page. Submit the request form with a real email address and verify the submission arrives. Navigate every page. Check that all services and team members appear with correct information."
        },
        {
          heading: "Console must be clean",
          body: "Open browser devtools and confirm zero errors in the console. Warnings are acceptable. Errors are not. A site with console errors is not ready for client review."
        },
        {
          heading: "Real device before delivery",
          body: "Before sending the staging link, test on a real mobile phone — not browser devtools. The booking flow, nav, and form must all work on a small screen. Devtools mobile emulation does not catch everything."
        }
      ]
    }
  ],

  // ─── Deployment ───────────────────────────────────────────────────────────────

  deployment: [
    {
      id: "github-setup",
      title: "Push to GitHub",
      category: "Version Control",
      summary: "Repo setup and pushing a client site to GitHub before connecting to Cloudflare.",
      content: [
        {
          heading: "One repo per client",
          body: "Each client site lives in its own GitHub repo. Create the repo before the first push. Make it private unless the client specifically requests otherwise. Use the client name as the repo name in lowercase-hyphenated format."
        },
        {
          heading: ".gitignore",
          body: "Add a .gitignore before the first commit. At minimum exclude: .DS_Store, node_modules/, .env, and any file that might contain credentials. For static sites this is straightforward — there is usually little to ignore."
        },
        {
          heading: "Commit messages",
          body: "Write clear commit messages that describe what changed and why, not just 'update' or 'fix'. Future-you reading git log two months from now will be grateful. 'Update booking URLs for River Salon rebrand' is useful. 'Changes' is not."
        },
        {
          heading: "Never force-push to main on live sites",
          body: "If you need to undo a change on a live site, use git revert. It creates a new commit that undoes the previous one — safe to push without disrupting history. Reserve git reset --hard for local development only."
        }
      ]
    },
    {
      id: "cloudflare-pages",
      title: "Connect to Cloudflare Pages",
      category: "Hosting",
      summary: "How to deploy a static site to Cloudflare Pages and get it live.",
      content: [
        {
          heading: "Create the Pages project",
          body: "In the Cloudflare dashboard: Pages → Create a project → Connect to Git. Authorize GitHub and select the client's repo. For a static HTML site, leave the build command blank and set the output directory to / (root). Click Save and Deploy."
        },
        {
          heading: "First deploy",
          body: "Cloudflare triggers a deploy automatically on connection. Watch the build log — it should complete in under 60 seconds for a static site. The site will be live at a *.pages.dev URL immediately after success."
        },
        {
          heading: "Test on .pages.dev first",
          body: "Visit the .pages.dev URL and run through the full site — forms, navigation, booking links, mobile. Do not set the custom domain until the site is fully tested at this URL. It's much easier to troubleshoot before DNS is involved."
        },
        {
          heading: "Automatic deploys on push",
          body: "After the initial setup, every push to main will trigger a new deployment automatically. No manual steps needed. This is the core of the workflow — edit locally, commit, push, and the site updates within 90 seconds."
        }
      ]
    },
    {
      id: "custom-domain",
      title: "Custom Domain Setup",
      category: "DNS",
      summary: "How to point a client's domain to the Cloudflare Pages project.",
      content: [
        {
          heading: "Add the domain in Pages",
          body: "In the Pages project → Custom domains → Add a domain. Enter the client's domain (e.g., riverhairsalon.com). If the domain's DNS is already managed on Cloudflare, the CNAME record is added automatically. If not, Cloudflare will give you the exact DNS record to add at the registrar."
        },
        {
          heading: "DNS propagation",
          body: "DNS changes take 5–60 minutes to propagate in most cases, up to 48 hours in rare situations. Once propagation is complete, HTTPS activates automatically via Cloudflare's universal SSL — you do not need to install or manage a certificate."
        },
        {
          heading: "www vs non-www",
          body: "Decide which is canonical (usually non-www for small business sites) and set a redirect for the other. In Cloudflare's DNS settings, add both records and use a Page Rule or Redirect Rule to forward www to non-www (or vice versa). Test both in a browser."
        },
        {
          heading: "Verify before delivery",
          body: "Visit the custom domain over HTTPS and confirm the site loads correctly. Check the browser's padlock icon to confirm the certificate is valid. Run through the full site on the live custom domain before sending the client the delivery message."
        }
      ]
    },
    {
      id: "cloudflare-access",
      title: "Cloudflare Access",
      category: "Security",
      summary: "How to protect a private site (like this training portal) with Cloudflare Access.",
      content: [
        {
          heading: "What it does",
          body: "Cloudflare Access puts an authentication gate in front of a Pages project. Visitors must authenticate before they can see the site. This is how learn.nexsitestudio.org is protected — no login code lives in the site itself."
        },
        {
          heading: "Setup path",
          body: "In the Cloudflare Zero Trust dashboard → Access → Applications → Add an application → Self-hosted. Set the domain to the subdomain you want to protect. Configure the identity provider — email OTP is the simplest option and requires no external identity service."
        },
        {
          heading: "Policies",
          body: "After creating the application, add a policy that allows access only to specific email addresses. This means you can add team members and contractors by email without managing passwords. Removing access is instant — just remove the email from the policy."
        },
        {
          heading: "See the setup doc",
          body: "A step-by-step walkthrough is in docs/cloudflare-access-setup.md in this repo. Follow that doc rather than the Cloudflare UI alone — the order of steps matters and some settings are easy to miss."
        }
      ]
    }
  ],

  // ─── Maintenance ─────────────────────────────────────────────────────────────

  maintenance: [
    {
      id: "scope",
      title: "What Maintenance Includes",
      category: "Scope",
      summary: "The exact boundaries of what monthly maintenance covers.",
      content: [
        {
          heading: "Covered tasks",
          body: "Monthly maintenance covers: content updates (text, images, hours, pricing), link checks, form handler verification, and minor copy changes. These are tasks that keep the existing site accurate and functional — not tasks that change or expand the site."
        },
        {
          heading: "Small update definition",
          body: "A small update is any change that takes less than 30 minutes end-to-end including testing and pushing to production. Examples: text edits, image swaps, adding a testimonial, updating a phone number, fixing a broken link, correcting hours."
        },
        {
          heading: "Not covered",
          body: "New pages, design changes, layout alterations, integrating a new third-party tool, rebranding, adding staff with new photography, changing the booking provider. These are project tasks and are billed separately even if the client frames them as 'small changes.'"
        },
        {
          heading: "Response time",
          body: "Acknowledge maintenance requests within one business day. Complete small updates within 3 business days. Urgent items — broken forms, wrong hours, incorrect phone numbers — get same-day or next-day turnaround."
        }
      ]
    },
    {
      id: "processing",
      title: "Processing a Maintenance Request",
      category: "Process",
      summary: "Step-by-step for handling a client maintenance request correctly.",
      content: [
        {
          heading: "Acknowledge first",
          body: "When a client sends a maintenance request, reply to confirm you received it and give them an expected completion time before starting work. Never silently start and complete the task without communication — clients need to know you received the request."
        },
        {
          heading: "Scope check",
          body: "Before starting, confirm the request falls within maintenance scope. If it is a clear small update, proceed. If it is borderline, use your judgment for the first occurrence and note it internally. If it keeps happening, address the scope pattern in the next check-in."
        },
        {
          heading: "Make the change",
          body: "Make the edit, test locally, push to production, confirm the deployment succeeded and the change is live. Do not push and assume — verify on the live URL before closing out the request."
        },
        {
          heading: "Follow up",
          body: "Send the client a short message: what you changed, the live URL to verify, and any action items for them. Do not just push and go quiet. This follow-up is what separates a professional maintenance relationship from an invisible service."
        }
      ]
    },
    {
      id: "monthly-checkin",
      title: "Monthly Check-In",
      category: "Client Relations",
      summary: "How to run proactive monthly check-ins that reduce churn.",
      content: [
        {
          heading: "Send it even if nothing happened",
          body: "Once a month, send clients a brief update even if no maintenance was requested. Clients who hear nothing wonder what they're paying for. Monthly check-ins make the maintenance plan feel active and valuable."
        },
        {
          heading: "What to include",
          body: "Keep it to 3–4 sentences: any changes made that month, a note that everything is running correctly, and a prompt for any upcoming changes they want to get ahead of. You can also mention if anything on the site looks dated and might be worth updating."
        },
        {
          heading: "Use the Client Comms template",
          body: "There is a monthly check-in template in the Client Comms section. Use it — it's faster than writing from scratch and ensures you don't forget to include the right info."
        }
      ]
    },
    {
      id: "escalation",
      title: "When to Escalate to a Project",
      category: "Scope",
      summary: "How to recognize when a maintenance request has grown beyond maintenance scope.",
      content: [
        {
          heading: "The 30-minute rule",
          body: "If a maintenance request will take more than 30 minutes, stop. Scope it as a project task and send the client a brief description and cost before starting. Do not absorb large requests into maintenance — this devalues your time and sets a bad precedent."
        },
        {
          heading: "Examples that always escalate",
          body: "Adding a new page. Redesigning a section. Integrating a new form or tool. Changing the booking provider. Adding staff with new photos. Updating brand colors across the site. Rewriting copy for an entire page. These are projects regardless of how the client frames them."
        },
        {
          heading: "How to frame the escalation",
          body: "Use the out-of-scope response template from the Client Comms section. The key is to say yes to the work while being clear that it's outside the current scope — never just say no without offering a path forward."
        }
      ]
    }
  ],

  // ─── Troubleshooting ─────────────────────────────────────────────────────────

  troubleshooting: [
    {
      id: "form-not-sending",
      symptom: "Form submits but nothing arrives",
      cause: "Wrong EmailJS keys, FormSubmit not activated, or the form is hitting an error silently.",
      fix: [
        "Open the browser console and submit the form — look for any JavaScript error on submit.",
        "For EmailJS: verify the service ID, template ID, and public key in the script match the EmailJS dashboard exactly.",
        "For FormSubmit: confirm the destination email has been activated. The first submission to a new email sends a confirmation link that must be clicked — if that link was never clicked, submissions are silently discarded.",
        "Test with a real email address. Some spam filters reject common test addresses.",
        "If you recently changed the destination email, re-test the activation flow from scratch."
      ]
    },
    {
      id: "site-not-updating",
      symptom: "Pushed to GitHub but live site still shows old content",
      cause: "Cloudflare Pages build didn't run, failed silently, or the cache is serving old files.",
      fix: [
        "Go to the Cloudflare Pages dashboard → find the project → Deployments tab.",
        "Check the latest deployment status. If it shows Failed, click it to read the build log — it will tell you exactly what broke.",
        "If the deployment succeeded but content is old, go to Caching → Configuration → Purge Everything in the Cloudflare dashboard.",
        "Hard-refresh the browser with Ctrl+Shift+R (or Cmd+Shift+R on Mac) after purging.",
        "If the deployment never triggered, check that the repo is still connected under Pages → Settings → Builds & deployments."
      ]
    },
    {
      id: "mobile-nav-broken",
      symptom: "Hamburger menu button does nothing on mobile",
      cause: "The JS file that controls the nav toggle is not loaded on the page, or a JS error is preventing the listener from attaching.",
      fix: [
        "Open browser devtools on the mobile viewport and check the console for JavaScript errors.",
        "Confirm the correct script file (script.js or the portal JS file) is loaded before </body> on the affected page.",
        "Check that the toggle button's ID in the HTML matches the ID the script looks for (usually menu-toggle).",
        "Confirm the sidebar element has the correct ID the script references (usually sidebar).",
        "Test in a private/incognito window to rule out a cached bad version of the script."
      ]
    },
    {
      id: "images-not-loading",
      symptom: "Images appear as broken on the live site",
      cause: "Wrong file path, filename case mismatch, or the image file was not committed to the repo.",
      fix: [
        "Check the browser console — it will show a 404 for the missing image with the exact path it tried to load.",
        "Confirm the image file was committed to git. Run git status to check for untracked files, and git log to verify the file was included in a past commit.",
        "Cloudflare Pages runs on Linux, which is case-sensitive. hero.jpg and Hero.jpg are different files. Check that the src path case matches the actual filename exactly.",
        "If the path looks correct, check that the file is in the right directory relative to the HTML file referencing it."
      ]
    },
    {
      id: "404-on-pages",
      symptom: "A page URL returns 404 on the live site",
      cause: "The HTML file does not exist at the path the URL expects, or a redirect is needed.",
      fix: [
        "Confirm the HTML file exists in the repo with a name that exactly matches the URL path (e.g., /about → about.html).",
        "NexSite Studio builds use file-based routing — every URL must correspond to an actual .html file. There is no router generating pages dynamically.",
        "Check that the file was committed and is in the correct directory. Run git log --oneline -- path/to/file.html to confirm.",
        "If the URL was recently changed (e.g., from /services.html to /our-services.html), add a Cloudflare Pages redirect rule under the project's Settings → Redirects."
      ]
    },
    {
      id: "emails-to-spam",
      symptom: "Form submissions arrive but land in the client's spam folder",
      cause: "Sending domain not verified, or the form handler's sending IP is flagged by the client's email provider.",
      fix: [
        "For EmailJS: add a custom sender domain in the EmailJS dashboard and follow the instructions to add the required DNS records (SPF, DKIM). This is the most reliable fix.",
        "Ask the client to whitelist the sending address (typically noreply@emailjs.com or your custom domain) in their email provider.",
        "For FormSubmit: the sending domain is managed by FormSubmit and cannot be customized on the free tier. If spam delivery is persistent, consider switching to EmailJS with a custom sender domain.",
        "Check that the form's reply-to field is set to the client's actual email — this helps with threading and whitelist matching."
      ]
    }
  ],

  // ─── Client Comms Templates ───────────────────────────────────────────────────

  comms: [
    {
      id: "first-response",
      title: "First Response to Inquiry",
      when: "When a potential client reaches out through the contact form or email for the first time.",
      template: "Hi [NAME],\n\nThanks for reaching out — I'd love to learn more about what you're working on.\n\nI build websites for small businesses, focused on clean, mobile-ready sites that are easy to maintain long-term. Packages start at $299 for a basic site and go up based on what you need.\n\nThe quickest way to get started is to fill out my short intake form — it takes about 5 minutes and gives me everything I need to send you a clear quote:\n[QUESTIONNAIRE LINK]\n\nLet me know if you have questions in the meantime.\n\nCaleb Collins\nNexSite Studio\ncaleb.collins@nexsitestudio.org"
    },
    {
      id: "intake-confirmation",
      title: "Intake Confirmation",
      when: "After a client submits the intake questionnaire.",
      template: "Hi [NAME],\n\nGot your questionnaire — thanks for the detail.\n\nI'll review everything and put together a scope summary and quote for you within 1–2 business days.\n\nIf anything changes or you thought of something you forgot to mention, just reply here.\n\nCaleb\nNexSite Studio"
    },
    {
      id: "scope-confirmation",
      title: "Scope Confirmation",
      when: "When sending the scope document for client approval before starting a build.",
      template: "Hi [NAME],\n\nAttached is the scope document for your project. It outlines what's included in the build, what falls outside the current scope, the timeline, and the payment terms.\n\nPlease read through it and reply with any questions. When you're ready to move forward, just reply with 'Looks good' or let me know if anything needs adjusting.\n\nOnce I have your approval, I'll send the invoice and we can lock in a start date.\n\nCaleb\nNexSite Studio"
    },
    {
      id: "weekly-update",
      title: "Weekly Build Update",
      when: "Once per week during an active build, even if there's nothing major to report.",
      template: "Hi [NAME],\n\nQuick update on your site:\n\n[WHAT WAS DONE THIS WEEK — 2–3 sentences. E.g.: Built out the home page and services section. Still waiting on the team photos — once those come in I can finish the About page.]\n\n[WHAT'S NEXT — E.g.: Next up is the contact form and booking page. On track for [DATE] review.]\n\n[IF WAITING ON CLIENT — Could you send [THING] by [DATE] so I can keep things moving?]\n\nLet me know if you have questions.\n\nCaleb"
    },
    {
      id: "delivery",
      title: "Site Delivery",
      when: "When delivering a completed site or major milestone for client review.",
      template: "Hi [NAME],\n\nYour site is ready for review:\n\n[STAGING or LIVE URL]\n\nHere's what's included in this delivery:\n• [Item 1]\n• [Item 2]\n• [Item 3]\n\nPlease review on both desktop and your phone. Specifically:\n1. Confirm all your business info is correct (hours, address, phone, email).\n2. Try submitting the contact form — you should get a confirmation email.\n3. Let me know if any text, images, or services need to be updated.\n\nI need your feedback by [DATE — 5 business days]. After that I have [NUMBER] revision rounds included in the scope.\n\nCaleb"
    },
    {
      id: "out-of-scope",
      title: "Out-of-Scope Response",
      when: "When a client requests something that falls outside the agreed project scope.",
      template: "Hi [NAME],\n\nThanks for sending this — [BRIEF DESCRIPTION OF REQUEST] is definitely something I can help with.\n\nIt does fall outside what's covered in the current project scope, so I'd need to put together a quick add-on quote before starting. It would likely be [ESTIMATE — e.g., 'around 2 hours of work' or '$X']. Want me to send a short change order?\n\nJust let me know and I'll get it over to you.\n\nCaleb"
    },
    {
      id: "maintenance-ack",
      title: "Maintenance Request Acknowledgement",
      when: "When a client on a maintenance plan sends in a request.",
      template: "Hi [NAME],\n\nGot it — I'll take care of [REQUEST] within [TIMEFRAME, e.g., the next 2 business days]. I'll follow up once it's live.\n\nCaleb"
    },
    {
      id: "monthly-checkin",
      title: "Monthly Check-In",
      when: "Sent once a month to all active maintenance clients, even if nothing was requested.",
      template: "Hi [NAME],\n\nMonthly check-in for your site at [URL].\n\n[WHAT HAPPENED THIS MONTH — or: No changes were requested this month — everything is running correctly.]\n\nAnything you'd like to update before next month? Even small things are worth mentioning — hours, team changes, new services, seasonal pricing.\n\nCaleb\nNexSite Studio"
    }
  ],

  // ─── Policies ─────────────────────────────────────────────────────────────────

  policies: [
    {
      id: "package-scope",
      title: "Package Scope Boundaries",
      category: "Scope",
      summary: "Exact boundaries for what each package includes and excludes.",
      content: [
        {
          heading: "Local Starter — $299 setup + $49/mo",
          body: "Up to 3 pages. Contact form (EmailJS or FormSubmit). Mobile-optimized layout. Domain and hosting setup via Cloudflare Pages. Does not include: booking platform integration, e-commerce, custom backend, more than 3 pages, or design work beyond the base template."
        },
        {
          heading: "Growth — $449 setup + $79/mo",
          body: "Up to 5–6 pages. Contact form. Gallery or portfolio section. Basic SEO meta tags (title, description, Open Graph). Does not include: booking platform integration, e-commerce, custom backend, login systems, or anything requiring a server."
        },
        {
          heading: "Booking — $599 setup + $99/mo",
          body: "All Growth features plus booking-ready pages: service listings, staff profiles, and booking links or embeds connected to the client's existing booking provider. Does not include: custom scheduling logic, live availability sync via API, customer account creation, payment processing beyond the client's booking provider, or any custom backend."
        },
        {
          heading: "Enterprise — $800+ custom",
          body: "Custom scope only. Defined per project after a scoping call. May include custom backend features, employee login, API integrations, multi-location support, or advanced payment flows — each as an explicit line item with its own cost. Requires a 50% deposit before work begins."
        }
      ]
    },
    {
      id: "small-update",
      title: "Small Update Definition",
      category: "Maintenance",
      summary: "The official definition of what counts as a small update under a maintenance plan.",
      content: [
        {
          heading: "What counts",
          body: "A small update is any change that takes less than 30 minutes end-to-end — including testing and pushing to production. Text edits, image swaps, adding a testimonial, updating hours, fixing a broken link, correcting a phone number or email address."
        },
        {
          heading: "What does not count",
          body: "Adding a new page. Redesigning a section. Changing the site's color scheme or layout. Integrating a new tool or service. Adding staff to a booking site. Rewriting copy for an entire page. Updating the booking provider. Any change that takes more than 30 minutes."
        },
        {
          heading: "The goodwill rule",
          body: "Out-of-scope requests under 30 minutes may be handled as a one-time goodwill gesture — once per project or maintenance cycle. Document it internally as a goodwill exception. Do not repeat without addressing the scope, or it becomes an expectation."
        }
      ]
    },
    {
      id: "change-orders",
      title: "Change Order Process",
      category: "Project Management",
      summary: "How to handle and document any work outside the agreed scope.",
      content: [
        {
          heading: "When required",
          body: "Any work outside the agreed scope requires a change order before work begins. This includes explicit client requests and scope expansion you discover during the build. The rule is simple: if it wasn't in the original scope doc, it needs a change order."
        },
        {
          heading: "What goes in a change order",
          body: "Keep it brief: description of the work (2–3 sentences), estimated time, additional cost (or 'no charge' if waiving as a goodwill gesture), and a line requesting client approval. It does not need to be a formal document — an email with these four points is sufficient."
        },
        {
          heading: "Getting approval",
          body: "Do not begin out-of-scope work until the client replies in writing. 'Sounds good' in an email is a valid approval. Store the approval thread in the project's docs/ folder. If the client asks you to 'just start' without approving, reply with the change order again and wait."
        },
        {
          heading: "Tracking",
          body: "Keep a running list of change orders in NOTES.md for each project. At project close, this list documents any scope changes that happened and gives you a reference if there are disputes later."
        }
      ]
    },
    {
      id: "refund-cancellation",
      title: "Refund and Cancellation",
      category: "Payments",
      summary: "The cancellation and refund policy for all NexSite Studio services.",
      content: [
        {
          heading: "Setup fees",
          body: "Setup fees are non-refundable once work has begun. Work is considered begun after the scope is approved and the first invoice is paid. If a client cancels before any work starts, a full refund may be issued at your discretion. If they cancel mid-project, bill for the percentage of the project completed."
        },
        {
          heading: "Monthly maintenance plans",
          body: "Maintenance plans are month-to-month with no long-term contracts. Clients can cancel with 30 days notice. No refunds for the current billing month. After cancellation, maintenance access ends at the end of the paid period."
        },
        {
          heading: "Disputes",
          body: "If a client disputes a charge, review the scope document and delivery record before responding. Communicate in writing. Most disputes are scope misunderstandings — refer back to the written scope confirmation. If the scope doc supports the client's position, acknowledge it and address it fairly. If it supports yours, calmly explain why."
        }
      ]
    }
  ],

  // ─── Glossary ─────────────────────────────────────────────────────────────────

  glossary: [
    { term: "Booking Mode",       definition: "A configuration setting in the booking site template that controls which booking options are shown to visitors. The default is hybrid, which shows all four paths: by service, by staff, embedded widget, and request form." },
    { term: "Change Order",       definition: "A short written record of out-of-scope work, its estimated cost, and client approval. Required before starting any work not covered in the original scope document." },
    { term: "Cloudflare Access",  definition: "A Cloudflare Zero Trust product that adds an authentication gate to a web application. Used to protect private sites — like this training portal — without adding login code to the site itself." },
    { term: "Cloudflare Pages",   definition: "Cloudflare's static site hosting platform. Deploys automatically on every git push to the connected GitHub repo. Provides HTTPS, global CDN, and custom domain support for free." },
    { term: "CNAME",              definition: "A DNS record that maps one domain name to another. Used to point a client's custom domain to the Cloudflare Pages project URL." },
    { term: "Config-driven",      definition: "A site architecture where all client-specific content — text, colors, services, team members — lives in a single configuration file rather than scattered through HTML. Allows the same template to serve many clients." },
    { term: "data-slot",          definition: "An HTML attribute used by render.js in the booking template to mark where config values should be injected. JavaScript finds all elements with a matching data-slot name and updates their text or href from the config." },
    { term: "EmailJS",            definition: "A JavaScript library that sends emails directly from the browser using a configured email service provider. Used for forms that require auto-reply emails, such as quote forms and the client questionnaire." },
    { term: "FormSubmit",         definition: "A free, no-backend form handling service. HTML forms post to a FormSubmit URL and submissions are forwarded to the configured email address. Requires activation via a confirmation email on first use." },
    { term: "Goodwill Gesture",   definition: "An out-of-scope request handled without charge as a one-time exception — typically for tasks under 30 minutes. Allowed once per project or maintenance cycle. Must be documented internally so it does not become a precedent." },
    { term: "Intake",             definition: "The process of collecting all information from a new client before starting a project. Done via the client intake questionnaire. No build should start without a completed intake." },
    { term: "Live Server",        definition: "A local development tool that serves project files over HTTP (not file://). Required for config-driven sites. VS Code has a Live Server extension. Alternatively run python3 -m http.server in the project folder." },
    { term: "offeredBy",          definition: "A field in the booking template's service config. An array of team member IDs who offer that service. Used to filter staff on the booking page — only team members in offeredBy are shown when that service is selected." },
    { term: "Scope Creep",        definition: "When a project gradually expands beyond its agreed boundaries through incremental client requests. Managed by the change order process and the 30-minute small update rule." },
    { term: "Small Update",       definition: "Any change to a live site that takes under 30 minutes end-to-end — including testing and pushing to production. Covered under monthly maintenance plans. Anything over 30 minutes is a project task." },
    { term: "Static Site",        definition: "A website made of plain HTML, CSS, and JavaScript files. No server-side code, no database. Fast, cheap to host, and simple to deploy. All NexSite Studio sites are static unless a client's Enterprise scope requires otherwise." },
    { term: "HTTPS",              definition: "Encrypted web traffic via TLS. Cloudflare activates HTTPS automatically for all Pages projects via universal SSL. Never deliver a client site over plain HTTP." }
  ],

  // ─── Emergency Recovery ───────────────────────────────────────────────────────

  emergency: [
    {
      id: "site-down",
      title: "Site is Completely Down",
      severity: "critical",
      steps: [
        "Check cloudflarestatus.com — if Cloudflare is having a global incident, you cannot fix it from your end. Note the incident and notify the client.",
        "Go to Cloudflare Pages dashboard → find the project → Deployments tab. Check the latest deployment status.",
        "If the last deployment failed, click it and read the build log. The error will be specific — a missing file, a bad path, a syntax error in a config file.",
        "If the deployment succeeded but the site is unreachable, check the custom domain's DNS settings in Cloudflare. Confirm the CNAME record is present and correct.",
        "If DNS looks correct, try the .pages.dev URL directly. If that loads, the issue is with the custom domain, not the site itself.",
        "Check if the domain registration has expired. Look up the domain at the registrar (documented in the project's NOTES.md). Renewal is the only fix for an expired domain.",
        "Notify the client as soon as you understand the cause — even before you've fixed it. Silence during a downtime is worse than a clear status update."
      ]
    },
    {
      id: "wrong-content",
      title: "Wrong Content Went Live",
      severity: "high",
      steps: [
        "Check git log to confirm what changed in the last push. Run: git log --oneline -5",
        "If the bad content is something you can fix in under 5 minutes, fix it and push immediately.",
        "If the bad content is complex to fix quickly, use git revert: run git revert HEAD, then push. This creates a new commit that undoes the last one without rewriting history.",
        "Confirm the revert deployed successfully — watch the Cloudflare Pages build log.",
        "Visit the live site and verify the bad content is gone before notifying the client.",
        "Do NOT use git reset --hard on a live site's main branch. Use git revert."
      ]
    },
    {
      id: "form-stopped",
      title: "Form Stopped Working",
      severity: "high",
      steps: [
        "Open the live site and submit a test form. Open browser devtools → Console tab. Look for any JavaScript errors that appear on submit.",
        "Check the last few git commits for any recent changes to the form or its scripts: git log --oneline -10",
        "For EmailJS: log in to the EmailJS dashboard and confirm the email service is still active. Check that the service ID, template ID, and public key in the code still match the dashboard.",
        "For FormSubmit: the destination email activation can expire or get flagged. Try re-submitting and clicking the re-confirmation email that FormSubmit sends.",
        "Test on a different device and browser to rule out a local cache or extension issue.",
        "If nothing is obviously wrong, check if the client's email provider has started spam-filtering the submissions — ask the client to check their spam folder."
      ]
    },
    {
      id: "build-failed",
      title: "Cloudflare Pages Build Failed",
      severity: "medium",
      steps: [
        "Go to Cloudflare Pages dashboard → project → Deployments. Click the failed deployment to open its build log.",
        "Read the log carefully — it will name the exact file and line that caused the failure. Common causes: a missing file referenced in the config, a syntax error in a JS or JSON file, or a file that was deleted but still referenced.",
        "Fix the issue locally. Open the browser console and confirm no errors before pushing the fix.",
        "Push the fix to main and watch the new deployment. If it succeeds, verify the live site looks correct.",
        "If the cause is unclear from the log, check git status and git diff to see if there are any unexpected changes in the working directory."
      ]
    },
    {
      id: "domain-expired",
      title: "Domain Expired",
      severity: "critical",
      steps: [
        "Find the domain registrar — it should be documented in the project's NOTES.md. If not, run a WHOIS lookup on the domain.",
        "Log in to the registrar and renew the domain immediately. Most registrars allow renewal within a grace period of 30–40 days after expiration even if the domain shows as 'expired.'",
        "If the domain shows as available for new registration, do not immediately purchase it as a new registration. Contact the registrar first — there may be a redemption period where the original owner can reclaim it (usually 30 days after the grace period).",
        "After renewal, DNS records typically restore within 1–2 hours. HTTPS will reactivate automatically via Cloudflare once DNS resolves.",
        "To prevent this in the future: document renewal dates in NOTES.md and enable auto-renew on the registrar account."
      ]
    }
  ],

  // ─── Checklists ───────────────────────────────────────────────────────────────

  checklists: [
    {
      id: "new-client-onboarding",
      title: "New Client Onboarding",
      description: "Complete these steps when starting a new client relationship.",
      category: "Client Relations",
      items: [
        { id: "nc1",  text: "Send and receive signed service agreement" },
        { id: "nc2",  text: "Collect deposit or first payment if required" },
        { id: "nc3",  text: "Complete the client intake questionnaire" },
        { id: "nc4",  text: "Confirm domain name or hosting preferences" },
        { id: "nc5",  text: "Clarify booking provider they use or want to use" },
        { id: "nc6",  text: "Confirm scope in writing and send scope boundaries doc" },
        { id: "nc7",  text: "Set expected delivery timeline and milestone dates" },
        { id: "nc8",  text: "Create project folder with intake form, scope doc, and NOTES.md" },
        { id: "nc9",  text: "Establish preferred communication channel (email, etc.)" }
      ]
    },
    {
      id: "booking-site-build",
      title: "Booking Site Build",
      description: "Complete each step when building a booking site from the template.",
      category: "Development",
      items: [
        { id: "bs1",  text: "Copy booking-template/ to new project folder" },
        { id: "bs2",  text: "Fill in all business fields in site-config.js" },
        { id: "bs3",  text: "Add services array with correct IDs, categories, and booking URLs" },
        { id: "bs4",  text: "Add team array with IDs that match service offeredBy fields" },
        { id: "bs5",  text: "Add hours, testimonials, FAQs, and social links" },
        { id: "bs6",  text: "Set booking mode and paste main booking URL" },
        { id: "bs7",  text: "Drop in logo, hero image, and team photos" },
        { id: "bs8",  text: "Set brand primaryColor and accentColor" },
        { id: "bs9",  text: "Test locally with a live server (not file://)" },
        { id: "bs10", text: "Test mobile navigation and booking flow on a real device" },
        { id: "bs11", text: "Check browser console for zero errors" },
        { id: "bs12", text: "Verify all booking links open correctly" },
        { id: "bs13", text: "Test request form submission end-to-end" },
        { id: "bs14", text: "Replace all placeholder text and images" },
        { id: "bs15", text: "Set meta description and Open Graph tags for each page" }
      ]
    },
    {
      id: "pre-launch",
      title: "Pre-Launch",
      description: "Final checks before delivering a live site to a client.",
      category: "Deployment",
      items: [
        { id: "pl1",  text: "Confirm domain is connected and HTTPS is active" },
        { id: "pl2",  text: "Test form handler on production (not just staging)" },
        { id: "pl3",  text: "Confirm client received form submission notification email" },
        { id: "pl4",  text: "Verify all policy links are visible before booking CTAs" },
        { id: "pl5",  text: "Test the full booking flow end-to-end on a real mobile device" },
        { id: "pl6",  text: "Confirm footer year, business name, and contact details are correct" },
        { id: "pl7",  text: "Check page load speed — hero images optimized, no uncompressed assets" },
        { id: "pl8",  text: "Zero errors in browser console on every page" },
        { id: "pl9",  text: "Get written client approval before marking project complete" },
        { id: "pl10", text: "Send client delivery message with live URL and action items" }
      ]
    },
    {
      id: "training-completion",
      title: "Training Completion",
      description: "Mark each training module complete to track your onboarding progress.",
      category: "Onboarding",
      items: [
        { id: "tr1",  text: "Read: Client Communication standards" },
        { id: "tr2",  text: "Read: Scope Management standards" },
        { id: "tr3",  text: "Read: Design Standards" },
        { id: "tr4",  text: "Read: Code Standards" },
        { id: "tr5",  text: "Read: File & Delivery Standards" },
        { id: "tr6",  text: "Read: All four package workflows" },
        { id: "tr7",  text: "Read: Booking site setup guide" },
        { id: "tr8",  text: "Read: Deployment guide" },
        { id: "tr9",  text: "Read: Maintenance scope and process" },
        { id: "tr10", text: "Read: All Policies" },
        { id: "tr11", text: "Complete: Booking Template Basics quiz (75%+)" },
        { id: "tr12", text: "Complete: Scope & Client Relations quiz (75%+)" },
        { id: "tr13", text: "Walk through: Booking template locally on a real site" },
        { id: "tr14", text: "Complete: New Client Onboarding checklist (dry run)" }
      ]
    }
  ],

  // ─── Quizzes ──────────────────────────────────────────────────────────────────

  quizzes: [
    {
      id: "booking-template-basics",
      title: "Booking Template Basics",
      description: "Test your understanding of the booking site template structure and configuration.",
      category: "Templates",
      passingScore: 75,
      questions: [
        {
          id: "q1",
          text: "Where does all client-specific data live in the booking template?",
          options: ["Directly in the HTML files", "In js/site-config.js", "In a database", "In a .env file"],
          correct: 1,
          explanation: "All client content — business info, services, team, hours — lives in js/site-config.js. The HTML files should never need editing for a standard client build."
        },
        {
          id: "q2",
          text: "What is the recommended booking mode for most clients?",
          options: ["embedded-widget", "request-form", "hybrid", "external-link"],
          correct: 2,
          explanation: "hybrid is the recommended default. It gives clients all four options (by service, by staff, embedded widget, and request form) so visitors can choose the path that works for them."
        },
        {
          id: "q3",
          text: "What does the offeredBy field on a service object do?",
          options: [
            "Sets the booking provider name",
            "Lists which staff members offer that service, used by the staff filter on the booking page",
            "Controls which pages the service appears on",
            "Sets the display order of the service card"
          ],
          correct: 1,
          explanation: "offeredBy is an array of team member IDs. When a visitor selects that service on the booking page, only staff members whose ID is in offeredBy are shown."
        },
        {
          id: "q4",
          text: "What does a data-slot attribute on an HTML element tell render.js to do?",
          options: [
            "Hide the element until config is loaded",
            "Replace the element's text or href with the matching value from SITE_CONFIG",
            "Create a new component inside the element",
            "Mark the element as a required field"
          ],
          correct: 1,
          explanation: "data-slot attributes are simple text/href injection points. render.js finds all elements with a given slot name and updates their textContent (or href for links) from the config."
        },
        {
          id: "q5",
          text: "Which script must always be loaded FIRST on any page that uses the template?",
          options: ["render.js", "filters.js", "site-config.js", "booking.js"],
          correct: 2,
          explanation: "site-config.js must load first because it defines window.SITE_CONFIG. render.js and the other modules read from that global on load — if it doesn't exist yet, they will fail silently."
        },
        {
          id: "q6",
          text: "The client wants a live availability calendar synced from their booking provider. Is this in scope for the default booking package?",
          options: [
            "Yes, render.js handles this automatically",
            "Yes, if they use Calendly or Square",
            "No — live availability sync is a custom add-on",
            "Yes, using the embedded widget mode"
          ],
          correct: 2,
          explanation: "Live availability sync requires API access, auth/token management, and a backend or serverless function. This is explicitly out of scope for the default booking package and must be scoped as a custom add-on."
        },
        {
          id: "q7",
          text: "Why should you never open a config-driven site with the file:// protocol during development?",
          options: [
            "It's slower than a live server",
            "Scripts that load external files fail silently on the file:// protocol",
            "Cloudflare Pages requires HTTP to test",
            "The browser blocks JavaScript on file:// pages"
          ],
          correct: 1,
          explanation: "Config-driven sites load external JS files (like site-config.js). Browsers restrict cross-origin file loads on file://, so the config never loads and the site renders broken — often with no error message."
        },
        {
          id: "q8",
          text: "You need to add a services grid to a page that doesn't have one. What is the minimum HTML needed?",
          options: [
            "<div data-slot='services'></div>",
            "<div class='services-grid' id='services-grid'></div>",
            "<services-grid></services-grid>",
            "<div data-render='services'></div>"
          ],
          correct: 1,
          explanation: "render.js looks for id='services-grid' to know where to inject service cards. The class is for styling. Both are needed — the ID for JS targeting, the class for CSS."
        }
      ]
    },
    {
      id: "scope-and-client-relations",
      title: "Scope & Client Relations",
      description: "Test your knowledge of NexSite Studio's scope management and client communication standards.",
      category: "Standards",
      passingScore: 75,
      questions: [
        {
          id: "q1",
          text: "A client asks you to add a customer login system to their booking site during the build. What do you do?",
          options: [
            "Add it — it's a small feature",
            "Add it and mention it at delivery",
            "Let them know it's outside the current scope and offer to price it as an add-on",
            "Tell them it's impossible"
          ],
          correct: 2,
          explanation: "A customer login system is explicitly outside the default booking package. The correct response is to acknowledge the request, clarify it is out of scope, and offer to price a change order before doing any work."
        },
        {
          id: "q2",
          text: "How often should you send a client update during an active build, even if there's nothing major to report?",
          options: ["Only when a milestone is complete", "Every day", "At least once per week", "Only when the client asks"],
          correct: 2,
          explanation: "Clients should never have to ask where things stand. Sending at least one update per week — even a short check-in — prevents anxiety and builds trust."
        },
        {
          id: "q3",
          text: "A client sends a small request (estimated 20 minutes) that is not in the original scope. What should you do?",
          options: [
            "Refuse and explain scope",
            "Complete it, document it as a one-time goodwill gesture, and note it internally",
            "Bill them for it immediately",
            "Ask them to submit a formal change request first"
          ],
          correct: 1,
          explanation: "Small out-of-scope items (under 30 min) can be done as a goodwill gesture — once per project. Document it internally so it doesn't become a precedent. Anything larger requires a change order."
        },
        {
          id: "q4",
          text: "Which phrase is safe to use when describing a booking site to a potential client?",
          options: [
            "Custom booking platform with automated staff dashboards",
            "Live scheduling system with real-time availability",
            "Booking-ready website with service pages, staff profiles, and booking links",
            "Full appointment management system"
          ],
          correct: 2,
          explanation: "The safe phrase positions the product correctly: a website that connects to a booking platform, not a custom scheduling system. This protects NexSite Studio from accidentally selling a much larger project."
        }
      ]
    }
  ],

  // ─── Templates (internal reference) ──────────────────────────────────────────

  templates: [
    {
      id: "booking-site",
      name: "Booking Site Template",
      version: "1.0",
      description: "Full booking-ready website for service businesses. Config-driven, static, Cloudflare Pages ready.",
      tags: ["Salon", "Service Business", "Booking", "Static"],
      path: "../booking-template/index.html",
      docsPath: "../booking-template/docs/guide.html",
      status: "stable"
    }
  ]

};
