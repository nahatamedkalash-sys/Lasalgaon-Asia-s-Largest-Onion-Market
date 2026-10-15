import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY_SUBSCRIBED = 'loc_newsletter_subscribed';
const STORAGE_KEY_DISMISSED_UNTIL = 'loc_newsletter_dismissed_until';
const DEFAULT_DISMISS_DAYS = 5;

interface UseNewsletterModalOptions {
  autoTriggerDelayMs?: number;
  scrollPercentageTrigger?: number;
  enableAutoTrigger?: boolean;
}

export function useNewsletterModal(options: UseNewsletterModalOptions = {}) {
  const {
    autoTriggerDelayMs = 6000,
    scrollPercentageTrigger = 35,
    enableAutoTrigger = true,
  } = options;

  const [isOpen, setIsOpen] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY_SUBSCRIBED) === 'true';
    } catch {
      return false;
    }
  });

  // Check if current user is suppressed from auto-popup
  const isSuppressed = useCallback(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY_SUBSCRIBED) === 'true') {
        return true;
      }
      const dismissedUntil = localStorage.getItem(STORAGE_KEY_DISMISSED_UNTIL);
      if (dismissedUntil && Date.now() < parseInt(dismissedUntil, 10)) {
        return true;
      }
    } catch {
      // storage unavailable
    }
    return false;
  }, []);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeModal = useCallback((options?: { temporary?: boolean; daysToDismiss?: number }) => {
    setIsOpen(false);
    const days = options?.daysToDismiss ?? DEFAULT_DISMISS_DAYS;
    try {
      const dismissUntilTimestamp = Date.now() + days * 24 * 60 * 60 * 1000;
      localStorage.setItem(STORAGE_KEY_DISMISSED_UNTIL, dismissUntilTimestamp.toString());
    } catch {
      // ignore
    }
  }, []);

  const markAsSubscribed = useCallback(() => {
    setIsSubscribed(true);
    try {
      localStorage.setItem(STORAGE_KEY_SUBSCRIBED, 'true');
      localStorage.removeItem(STORAGE_KEY_DISMISSED_UNTIL);
    } catch {
      // ignore
    }
  }, []);

  const resetPreferences = useCallback(() => {
    try {
      localStorage.removeItem(STORAGE_KEY_SUBSCRIBED);
      localStorage.removeItem(STORAGE_KEY_DISMISSED_UNTIL);
      setIsSubscribed(false);
    } catch {
      // ignore
    }
  }, []);

  // Timer-based auto trigger
  useEffect(() => {
    if (!enableAutoTrigger || isSuppressed()) return;

    let triggered = false;

    const timer = setTimeout(() => {
      if (!isSuppressed() && !triggered) {
        triggered = true;
        setIsOpen(true);
      }
    }, autoTriggerDelayMs);

    // Scroll-based auto trigger
    const handleScroll = () => {
      if (triggered || isSuppressed()) return;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) return;
      const scrollPercentage = (window.scrollY / scrollHeight) * 100;

      if (scrollPercentage >= scrollPercentageTrigger) {
        triggered = true;
        setIsOpen(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [enableAutoTrigger, isSuppressed, autoTriggerDelayMs, scrollPercentageTrigger]);

  return {
    isOpen,
    isSubscribed,
    openModal,
    closeModal,
    markAsSubscribed,
    resetPreferences,
  };
}
