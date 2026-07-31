'use client';
import React, {
  useCallback,
  useContext,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  forwardRef
} from 'react';
import {
  motion,
  AnimatePresence,
  MotionConfig,
  Transition,
  Variant,
} from 'motion/react';
import { cn } from '@/lib/utils';
import { XIcon, Plus } from 'lucide-react';
import styles from './LinearCard.module.css';

interface DialogContextType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  uniqueId: string;
  triggerRef: React.RefObject<HTMLDivElement>;
}

const DialogContext = React.createContext<DialogContextType | null>(null);

function useDialog() {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error('useDialog must be used within a DialogProvider');
  }
  return context;
}

type DialogProviderProps = {
  children: React.ReactNode;
  transition?: Transition;
};

function DialogProvider({ children, transition }: DialogProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const uniqueId = useId();
  const triggerRef = useRef<HTMLDivElement>(null);

  const contextValue = useMemo(
    () => ({ isOpen, setIsOpen, uniqueId, triggerRef }),
    [isOpen, uniqueId]
  );

  return (
    <DialogContext.Provider value={contextValue}>
      <MotionConfig transition={transition}>{children}</MotionConfig>
    </DialogContext.Provider>
  );
}

type DialogProps = {
  children: React.ReactNode;
  transition?: Transition;
};

export function Dialog({ children, transition }: DialogProps) {
  return (
    <DialogProvider>
      <MotionConfig transition={transition}>{children}</MotionConfig>
    </DialogProvider>
  );
}

type DialogTriggerProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  triggerRef?: React.RefObject<HTMLDivElement>;
};

export function DialogTrigger({
  children,
  className,
  style,
  triggerRef,
}: DialogTriggerProps) {
  const { setIsOpen, isOpen, uniqueId } = useDialog();

  const handleClick = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen, setIsOpen]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        setIsOpen(!isOpen);
      }
    },
    [isOpen, setIsOpen]
  );

  return (
    <motion.div
      ref={triggerRef}
      layoutId={`dialog-${uniqueId}`}
      className={cn('dialog-trigger', className)}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      style={{ position: 'relative', cursor: 'pointer', ...style }}
      role='button'
      aria-haspopup='dialog'
      aria-expanded={isOpen}
      aria-controls={`dialog-content-${uniqueId}`}
    >
      {children}
    </motion.div>
  );
}

type DialogContentProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export function DialogContent({ children, className, style }: DialogContentProps) {
  const { setIsOpen, isOpen, uniqueId, triggerRef } = useDialog();
  const containerRef = useRef<HTMLDivElement>(null);
  const [firstFocusableElement, setFirstFocusableElement] =
    useState<HTMLElement | null>(null);
  const [lastFocusableElement, setLastFocusableElement] =
    useState<HTMLElement | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
      if (event.key === 'Tab') {
        if (!firstFocusableElement || !lastFocusableElement) return;

        if (event.shiftKey) {
          if (document.activeElement === firstFocusableElement) {
            event.preventDefault();
            lastFocusableElement.focus();
          }
        } else {
          if (document.activeElement === lastFocusableElement) {
            event.preventDefault();
            firstFocusableElement.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [setIsOpen, firstFocusableElement, lastFocusableElement]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add(styles.overflowHidden);
      const focusableElements = containerRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusableElements && focusableElements.length > 0) {
        setFirstFocusableElement(focusableElements[0] as HTMLElement);
        setLastFocusableElement(
          focusableElements[focusableElements.length - 1] as HTMLElement
        );
        (focusableElements[0] as HTMLElement).focus();
      }
      if (containerRef.current) {
        containerRef.current.scrollTop = 0;
      }
    } else {
      document.body.classList.remove(styles.overflowHidden);
      triggerRef.current?.focus();
    }
  }, [isOpen, triggerRef]);

  return (
    <>
      <motion.div
        ref={containerRef}
        layoutId={`dialog-${uniqueId}`}
        className={cn('dialog-content', className)}
        style={{ overflow: 'hidden', ...style }}
        role='dialog'
        aria-modal='true'
        aria-labelledby={`dialog-title-${uniqueId}`}
        aria-describedby={`dialog-description-${uniqueId}`}
      >
        {children}
      </motion.div>
    </>
  );
}

type DialogContainerProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export function DialogContainer({ children, className }: DialogContainerProps) {
  const { isOpen, setIsOpen, uniqueId } = useDialog();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, [isOpen]);

  if (!mounted) return null;
  return (
    <AnimatePresence initial={false} mode='sync'>
      {isOpen && (
        <>
          <motion.div
            key={`backdrop-${uniqueId}`}
            className={styles.backdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
          <div className={cn(styles.dialogContainer, className)}>
            {children}
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

type DialogTitleProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export function DialogTitle({ children, className, style }: DialogTitleProps) {
  const { uniqueId } = useDialog();

  return (
    <motion.div
      layoutId={`dialog-title-container-${uniqueId}`}
      className={className}
      style={style}
      layout
    >
      {children}
    </motion.div>
  );
}

type DialogSubtitleProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export function DialogSubtitle({ children, className, style }: DialogSubtitleProps) {
  const { uniqueId } = useDialog();

  return (
    <motion.div
      layoutId={`dialog-subtitle-container-${uniqueId}`}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

type DialogDescriptionProps = {
  children: React.ReactNode;
  className?: string;
  disableLayoutAnimation?: boolean;
  variants?: {
    initial: Variant;
    animate: Variant;
    exit: Variant;
  };
};

export function DialogDescription({
  children,
  className,
  variants,
  disableLayoutAnimation,
}: DialogDescriptionProps) {
  const { uniqueId } = useDialog();

  return (
    <motion.div
      key={`dialog-description-${uniqueId}`}
      layoutId={
        disableLayoutAnimation
          ? undefined
          : `dialog-description-content-${uniqueId}`
      }
      variants={variants}
      className={className}
      initial='initial'
      animate='animate'
      exit='exit'
      id={`dialog-description-${uniqueId}`}
    >
      {children}
    </motion.div>
  );
}

type DialogImageProps = {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
};

export function DialogImage({ src, alt, className, style }: DialogImageProps) {
  const { uniqueId } = useDialog();

  return (
    <motion.img
      src={src}
      alt={alt}
      className={cn(className)}
      layoutId={`dialog-img-${uniqueId}`}
      style={style}
    />
  );
}

type DialogCloseProps = {
  children?: React.ReactNode;
  className?: string;
  variants?: {
    initial: Variant;
    animate: Variant;
    exit: Variant;
  };
};

export function DialogClose({ children, className, variants }: DialogCloseProps) {
  const { setIsOpen, uniqueId } = useDialog();

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  return (
    <motion.button
      onClick={handleClose}
      type='button'
      aria-label='Close dialog'
      key={`dialog-close-${uniqueId}`}
      className={cn(styles.closeBtn, className)}
      initial='initial'
      animate='animate'
      exit='exit'
      variants={variants}
    >
      {children || <XIcon size={24} />}
    </motion.button>
  );
}

export interface ComponentItem {
  id: string;
  url: { src: string };
  title: string;
  description: string;
  items: string[];
}

interface ComponentProps {
  items: ComponentItem[];
}

const LinearCard = forwardRef<HTMLDivElement, ComponentProps>(({ items }, ref) => {
  return (
    <div ref={ref} className={styles.container}>
      {items.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <Dialog
              transition={{
                type: 'spring',
                bounce: 0.05,
                duration: 0.5,
              }}
            >
              <DialogTrigger className={styles.trigger}>
                <DialogImage
                  src={item.url.src}
                  alt={item.title}
                  className={styles.triggerImage}
                />
                <div className={styles.triggerFooter}>
                  <div>
                    <DialogTitle className={styles.triggerTitle}>
                      {item.title}
                    </DialogTitle>
                  </div>
                  <button className={styles.triggerBtn} aria-hidden>
                    <Plus width={20} height={20} />
                  </button>
                </div>
              </DialogTrigger>
              <DialogContainer>
                <DialogContent>
                  <DialogImage
                    src={item.url.src}
                    alt={item.title}
                    className={styles.contentImage}
                  />
                  <div className={styles.contentBody}>
                    <DialogTitle className={styles.contentTitle}>
                      {item.title}
                    </DialogTitle>

                    <DialogDescription
                      disableLayoutAnimation
                      variants={{
                        initial: { opacity: 0, scale: 0.8, y: -40 },
                        animate: { opacity: 1, scale: 1, y: 0 },
                        exit: { opacity: 0, scale: 0.8, y: -50 },
                      }}
                      className={styles.contentDesc}
                    >
                      <p>{item.description}</p>
                      
                      {item.items && item.items.length > 0 && (
                        <ul style={{ marginTop: '1.5rem', listStyle: 'none', padding: 0 }}>
                          {item.items.map((li, idx) => (
                            <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: 'var(--color-text)' }}>
                              <svg width="14" height="14" fill="none" stroke="var(--color-accent)" strokeWidth="2.5" viewBox="0 0 24 24">
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                              {li}
                            </li>
                          ))}
                        </ul>
                      )}
                    </DialogDescription>
                  </div>
                  <DialogClose />
                </DialogContent>
              </DialogContainer>
            </Dialog>
          </React.Fragment>
        );
      })}
    </div>
  );
});

LinearCard.displayName = 'LinearCard';

export default LinearCard;
