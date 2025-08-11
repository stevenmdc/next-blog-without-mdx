// app/lib/analytics.ts
import { AnalyticsBrowser } from '@segment/analytics-next';

let analytics: AnalyticsBrowser | null = null;
let isInitialized = false;

// Types pour une meilleure sécurité
export interface EventProperties {
  [key: string]: string | number | boolean | null | undefined;
}

export interface UserTraits {
  email?: string;
  name?: string;
  plan?: string;
  [key: string]: string | number | boolean | null | undefined;
}

export interface PageProperties {
  title?: string;
  url?: string;
  path?: string;
  referrer?: string;
  [key: string]: string | number | boolean | null | undefined;
}

export function initAnalytics(writeKey: string): Promise<AnalyticsBrowser> {
  return new Promise((resolve, reject) => {
    if (analytics && isInitialized) {
      resolve(analytics);
      return;
    }

    // Vérifier l'environnement et la clé
    if (!writeKey) {
      console.warn('Analytics: Write key manquante');
      reject(new Error('Write key manquante'));
      return;
    }

    // Ne pas initialiser en mode développement ou SSR
    if (typeof window === 'undefined') {
      reject(new Error('Analytics: Ne peut pas être initialisé côté serveur'));
      return;
    }

    if (process.env.NODE_ENV === 'development' && !process.env.NEXT_PUBLIC_ANALYTICS_DEBUG) {
      console.log('Analytics: Désactivé en développement');
      reject(new Error('Analytics désactivé en développement'));
      return;
    }

    try {
      analytics = AnalyticsBrowser.load(
        { writeKey },
        {
          // Configuration optionnelle
          integrations: {
            // Désactiver certaines intégrations si nécessaire
            // 'Google Analytics': false
          }
        }
      );

      analytics.ready(() => {
        isInitialized = true;
        console.log('Analytics: Initialisé avec succès');
        resolve(analytics!);
      });

    } catch (error) {
      console.error('Analytics: Erreur d\'initialisation', error);
      reject(error);
    }
  });
}

export function trackEvent(event: string, properties: EventProperties = {}): void {
  if (!analytics || !isInitialized) {
    console.warn(`Analytics: Event "${event}" non envoyé - analytics non initialisé`);
    return;
  }

  if (!event) {
    console.warn('Analytics: Nom d\'événement requis');
    return;
  }

  try {
    analytics.track(event, {
      ...properties,
      timestamp: new Date().toISOString(),
      // Ajouter des propriétés contextuelles
      page_url: typeof window !== 'undefined' ? window.location.href : undefined,
      user_agent: typeof navigator !== 'undefined' ? navigator.userAgent : undefined,
    });

    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Event:', { event, properties });
    }
  } catch (error) {
    console.error('Analytics: Erreur lors du track', error);
  }
}

export function identifyUser(userId: string, traits: UserTraits = {}): void {
  if (!analytics || !isInitialized) {
    console.warn('Analytics: Identify non envoyé - analytics non initialisé');
    return;
  }

  if (!userId) {
    console.warn('Analytics: User ID requis');
    return;
  }

  try {
    analytics.identify(userId, {
      ...traits,
      identified_at: new Date().toISOString(),
    });

    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Identify:', { userId, traits });
    }
  } catch (error) {
    console.error('Analytics: Erreur lors de l\'identify', error);
  }
}

export function pageView(name?: string, properties: PageProperties = {}): void {
  if (!analytics || !isInitialized) {
    console.warn('Analytics: Page view non envoyée - analytics non initialisé');
    return;
  }

  try {
    const pageProperties = {
      ...properties,
      timestamp: new Date().toISOString(),
      // Propriétés automatiques
      ...(typeof window !== 'undefined' && {
        title: document.title,
        url: window.location.href,
        path: window.location.pathname,
        referrer: document.referrer || undefined,
      }),
    };

    analytics.page(name, pageProperties);

    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Page:', { name, properties: pageProperties });
    }
  } catch (error) {
    console.error('Analytics: Erreur lors du page view', error);
  }
}

// Fonctions utilitaires supplémentaires
export function resetAnalytics(): void {
  if (analytics) {
    try {
      analytics.reset();
      console.log('Analytics: Session reset');
    } catch (error) {
      console.error('Analytics: Erreur lors du reset', error);
    }
  }
}

export function getAnalyticsInstance(): AnalyticsBrowser | null {
  return analytics;
}

export function isAnalyticsReady(): boolean {
  return analytics !== null && isInitialized;
}

// Hook personnalisé pour React
export function useAnalytics() {
  return {
    trackEvent,
    identifyUser,
    pageView,
    resetAnalytics,
    isReady: isAnalyticsReady(),
  };
}