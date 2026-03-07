# Azure Deployment Guide: Next.js Frontend (Static Web Apps)

This guide details the process for deploying the `music_streaming_service_frontend` to **Azure Static Web Apps (SWA)**. This is the recommended approach for Next.js applications, as it provides high performance via a global CDN and managed serverless support for SSR.

## Why Static Web Apps?

- **SSR Support:** Handles Next.js Server-Side Rendering automatically.
- **Global CDN:** Assets are served from the edge for maximum speed.
- **Separate Quota:** Does not share the CPU quota of your .NET backend App Service Plan.
- **Cost Effective:** Highly generous free tier.

## Deployment Process (Manual via CLI)

Azure Static Web Apps are best deployed using the **SWA CLI**.

### 1. Prerequisites
Install the SWA CLI globally:
```bash
npm install -g @azure/static-web-apps-cli
```

### 2. Build the Application
From the `music_streaming_service_frontend` directory:
```bash
npm run build
```

### 3. Deploy to Azure
You will need the **Deployment Token** from Terraform (output: `static_web_app_api_token`).

```bash
swa deploy ./ --env production --deployment-token <YOUR_DEPLOYMENT_TOKEN>
```

---

## Alternative: GitHub Actions (Recommended)

For automated deployments, connect your GitHub repository to the Static Web App in the Azure Portal. Azure will automatically generate a workflow file that builds and deploys your app whenever you push to the `main` branch.

## Configuration

### Backend API URL
Static Web Apps can proxy requests to your backend. Ensure your frontend code uses the absolute URL of your .NET API (e.g., `https://app-api-music-xxxx.azurewebsites.net`) or configure a `staticwebapp.config.json` for routing.

### Troubleshooting
- **404 on Refresh:** If using client-side routing, ensure you have a navigation fallback configured in `staticwebapp.config.json`.
- **SSR Failures:** Ensure you are not using Node.js features that are incompatible with the serverless environment.
