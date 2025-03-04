/**
 * This module handles environment variable validation to ensure
 * all required variables are set before the application runs.
 */

// Define the type for environment variable schema entries
type EnvConfig = {
  required: boolean;
  development: boolean;
  production: boolean;
  default?: string;
};

// Define environment variable schema
const envSchema: Record<string, EnvConfig> = {
  // Supabase configuration
  NEXT_PUBLIC_SUPABASE_URL: {
    required: true,
    development: true,
    production: true,
  },
  NEXT_PUBLIC_SUPABASE_ANON_KEY: {
    required: true,
    development: true,
    production: true,
  },
  // Environment configuration
  NODE_ENV: {
    required: true,
    development: true,
    production: true,
    default: 'development',
  },
};

type EnvSchemaKey = keyof typeof envSchema;

/**
 * Validates environment variables based on the defined schema
 * and throws errors for missing required variables.
 */
export function validateEnv(): void {
  const missingVars: string[] = [];
  const currentEnv = process.env.NODE_ENV || 'development';
  
  Object.entries(envSchema).forEach(([key, config]) => {
    // Skip if not required for current environment
    if (currentEnv === 'development' && config.development === false) return;
    if (currentEnv === 'production' && config.production === false) return;
    
    // Check if environment variable is set
    if (config.required && !process.env[key]) {
      // If a default value exists, set it
      if (config.default) {
        process.env[key] = config.default;
      } else {
        missingVars.push(key);
      }
    }
  });

  if (missingVars.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missingVars.join(
        ', '
      )}. Please check your .env file or environment configuration.`
    );
  }
}

/**
 * Gets an environment variable with type safety
 */
export function getEnv(key: EnvSchemaKey): string {
  validateEnv();
  return process.env[key] || envSchema[key].default || '';
}

/**
 * Returns all validated environment variables in a type-safe object
 */
export function getAllEnvs() {
  validateEnv();
  
  const env: Record<string, string> = {};
  
  (Object.keys(envSchema) as EnvSchemaKey[]).forEach((key) => {
    env[key] = getEnv(key);
  });
  
  return env;
} 