---
title: "AI-built Lovable apps left passports and 200,000 chats exposed"
excerpt: "German security firm Crissy Field was able to read the databases of 24,664 sites built with Lovable without a password; passport data and more than 200,000 chats were exposed."
hook: "No login, no password, data served"
fact: "24,664"
factLabel: "Lovable sites sending data without login"
category: "News"
---
A major security problem has surfaced on Lovable, the platform that promises to build apps without coding, simply by describing them to AI. German security firm Crissy Field, in an investigation carried out with the business daily Handelsblatt, revealed that it could read the databases of thousands of apps built with Lovable without logging in at all.

## What do the numbers say?

In the Common Crawl web archive, the researchers found 159,041 Lovable projects that appeared online between December 2025 and September 2026. Of these, 34,545 used the database service Supabase, and 24,664 sent database records when the page loaded, without requiring a user login. Additional read requests turned up email addresses in 10,560 tables across 7,403 sites. The firm notes that this is not a definitive leak rate, and that some addresses may be public contact details or test data.

Among the exposed data were more than 1,000 passport records from a service provider, more than 80,000 profiles and over 200,000 chat messages from a German lifestyle forum, tens of thousands of orders with payment information from events and restaurants, and valid ticket codes.

## Where did the problem come from?

There was no attack on Lovable or Supabase. The key Supabase sends to the browser is public by design; protection depends on row-level security rules in the database. When these rules are missing or loose, anyone who sees the key can read the tables. Lovable says it sees no flaw in its AI, that the issue is a well-known configuration matter across the industry, and points to its own security scanning tool. It is not known whether the data was misused.

## Why does it matter?

AI has opened app building to everyone, but it has not brought security automatically. Users who don't write code should have an expert check access permissions before collecting real customer data. You can read about one of the first security holes in computing history in our [first computer password](/yazi/ilk-bilgisayar-sifresi-ctss/) article.
