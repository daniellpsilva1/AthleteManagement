# Environment Configuration

This document outlines the environment configuration for the Tennis Player Management application.

## Required Environment Variables

The application requires the following environment variables to be set:

| Variable | Description | Required In |
|----------|-------------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | The URL of your Supabase project | Development, Production |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | The anonymous key for your Supabase project | Development, Production |
| `NODE_ENV` | The environment the application is running in (development, production, etc.) | Development, Production |

## Environment Files

The project uses several environment files for different purposes:

- `.env.example` - Example file showing all required variables
- `.env.development` - Template for development environment variables
- `.env.production` - Template for production environment variables
- `.env.local` - Local overrides (not tracked in git)

## Setting Up Your Environment

### Local Development

1. Copy `.env.development` to `.env.local`
2. Fill in your actual Supabase credentials in `.env.local`
3. Run the development server with `npm run dev`

### Production Deployment

For production deployments (like Vercel), set the environment variables in your deployment platform's dashboard:

1. Go to your Vercel project settings
2. Navigate to the "Environment Variables" section
3. Add all required variables with their production values
4. Re-deploy your application to apply the changes

## Environment Validation

The application validates environment variables at build time and runtime:

- During build: Warnings will be shown for missing variables
- During runtime: The application will throw an error if required variables are missing

You can find the validation logic in `lib/env.ts`.

## Adding New Environment Variables

To add new environment variables to the project:

1. Add the variable to `.env.example`, `.env.development` and `.env.production`
2. Add the variable to the schema in `lib/env.ts`
3. Update this documentation

## Security Considerations

- Never commit actual production credentials to version control
- Use different Supabase projects for development and production
- Regularly rotate your Supabase keys for security
- Use Vercel's environment variable encryption for sensitive values 