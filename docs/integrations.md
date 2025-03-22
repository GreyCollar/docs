---
sidebar_position: 3
description: Integrations Documents
---

# Integrations

## Google Integration

#### **1. Go to Google Cloud Console**

- Visit: [https://console.cloud.google.com](https://console.cloud.google.com)
- Sign in with your Google account.

---

#### **2. Create a Project**

- Click the project dropdown (top left) → "New Project"
- Give your project a **name** and optionally select an organization.
- Click **"Create"**

---

#### **3. Enable the Required API**

- Go to **APIs & Services > Library**
- Search for the API you want to use (e.g. "Google Drive API", "Gmail API", "Google Calendar API", "Google People API", etc.)
- Click the result → Click **Enable**

---

#### **4. Set Up OAuth 2.0 Consent Screen**

- Navigate to **APIs & Services > OAuth consent screen**
- Choose "External" (if for external users) or "Internal" (if limited to your domain)
- Fill in:
  - App name
  - User support email
  - Developer contact information
- Add scopes (APIs you’ll request access to)
- Add test users (for testing before verification)
- Save and continue

---

#### **5. Create OAuth 2.0 Credentials**

- Go to **APIs & Services > Credentials**
- Click **"Create Credentials" > "OAuth client ID"**
- Choose application type:
  - Web application (for web apps)
  - Android/iOS/Desktop, etc.
- Add **authorized redirect URIs** (e.g. `https://yourapp.com/auth/callback`)
- Click **Create**

👉 You'll get:

- **Client ID**
- **Client Secret**

---

#### **6. Implement the Integration in Your App**

Use the credentials in your frontend or backend, depending on the flow:

- **Frontend:** JavaScript client libraries (e.g., Google Sign-In)
- **Backend:** Use libraries like:
  - `google-auth-library` (Node.js)
  - `google-api-python-client` (Python)
  - `googleapis` (Node.js)
  - `google-api-php-client` (PHP)

---

#### **7. Use Access Tokens to Access APIs**

- Get access tokens using OAuth flow.
- Use tokens to make API calls on behalf of users.

## Zapier Integration

#### **1. Prerequisites**

- A Zapier account: [Sign up here](https://zapier.com/app/signup)
- A stable API (REST or GraphQL)
- Auth mechanism: API Key, OAuth2, or Session Auth
- Basic knowledge of JavaScript and APIs

#### **2. Steps to Build a Zapier Integration**

1. **Create a New Integration**

   - Go to Zapier Platform UI
   - Click “Create Integration”
   - Name your app and choose a logo

2. **Authentication Setup**

   - Choose one of the following:
     - API Key Auth
     - OAuth2 (for apps with user-based auth)
     - Session Auth (cookie/session based)
   - ➡️ Provide base URL and any necessary headers/params

3. **Define Triggers, Actions, Searches**

   - **Triggers**: Events in your app that start a Zap (e.g., New Order)
   - **Actions**: Tasks Zapier performs in your app (e.g., Create User)
   - **Searches**: Lookup data in your app (optional)
   - ➡️ Use the Zapier visual builder or CLI to define them
   - ➡️ Add sample data & test each step

4. **Add API Calls**

   - Each trigger/action/search requires:
     - Endpoint URL
     - HTTP method (GET, POST, etc.)
     - Input fields (what user provides)
     - Output fields (what the app returns)

5. **Test Your Integration**

   - Use Zapier's in-platform test tools
   - Check your API responses
   - Simulate Zaps to ensure your integration behaves as expected

6. **Share or Publish**
   - Use Private invite-only link to share with testers
   - Submit for Zapier public review if you want to publish your app
   - 📌 Zapier will review functionality, authentication, and UX

## Whatsapp Business Integration

### **1. Choose the Right WhatsApp Business Platform**

There are two main ways to integrate with WhatsApp:

#### a) **WhatsApp Business App (Simple Use)**

- Best for small businesses with low automation needs.
- Limited automation (Quick Replies, Labels, Broadcasts).
- No API access, manual usage via mobile or WhatsApp Web.

#### b) **WhatsApp Business API (Advanced Use)**

- Ideal for medium to large-scale businesses.
- Allows automation, integration with CRMs, chatbots, etc.
- Requires approval and a verified Facebook Business Account.
- Can be accessed via:
  - **Meta’s Cloud API** (recommended for most new users)
  - **Third-party providers** like Twilio, 360dialog, Vonage, etc.

---

### **2. Steps to Integrate with WhatsApp Business API**

#### **1. Set Up a Facebook Business Account**

- Go to [Facebook Business Manager](https://business.facebook.com/)
- Verify your business details.

#### **2. Apply for WhatsApp Business API**

- Use Meta’s [WhatsApp Business Platform](https://www.facebook.com/business/help/325365696252153)
- Or register through a **Business Solution Provider** (BSP)

#### **3. Create a WhatsApp Business Profile**

- Phone number (can’t be tied to a regular WhatsApp account)
- Display name, business category, description

#### **4. Choose an Integration Method**

- **Meta Cloud API** (free for developers, scalable)
- **Third-party BSPs** like Twilio or 360dialog (easier onboarding)

#### **5. Build Your Integration**

- Use the WhatsApp Cloud API endpoint
- Set up a Webhook URL to receive messages
- Authenticate via access tokens
- Send and receive messages using HTTP requests (REST API)

#### **6. Template Messages**

- Use approved message templates for outbound messages
- Useful for order confirmations, appointment reminders, etc.
