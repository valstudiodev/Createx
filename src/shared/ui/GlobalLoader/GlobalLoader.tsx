import { useEffect, useState } from 'react';
import './globalLoader.scss';

export interface GlobalLoaderProps {
  isLoading: boolean;
  color?: string;
  size?: number;
  duration?: number;
  overlay?: boolean;
  className?: string;
  onComplete?: () => void;
}

function GlobalLoader({
  isLoading,
  color = '#FF3F3A',
  size = 120,
  duration = 3000,
  overlay = false,
  className = '',
  onComplete
}: GlobalLoaderProps): React.JSX.Element | null {
  const globalLoader = 'global-loader';

  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    if (!isLoading) {
      setProgress(0);
      return;
    }

    const startTime = Date.now();
    let animationFrameId = 0;
    let completed = false;

    const updateProgress = (): void => {
      const elapsed = Date.now() - startTime;

      const nextProgress = Math.min(
        100,
        (elapsed / duration) * 100
      );

      setProgress(nextProgress);

      if (nextProgress < 100) {
        animationFrameId = requestAnimationFrame(updateProgress);
      } else if (!completed) {
        completed = true;
        onComplete?.();
      }
    };

    animationFrameId = requestAnimationFrame(updateProgress);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isLoading, duration, onComplete]);

  if (!isLoading) return null;

  const combinedClasses = [
    globalLoader,
    overlay && `${globalLoader}--overlay`,
    className
  ].filter(Boolean).join(' ');

  const percentage = Math.floor(progress);

  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const strokeDashoffset =
    circumference * (1 - progress / 100);

  return (
    <div className={combinedClasses}>
      <div
        className={`${globalLoader}__content`}
        style={{
          width: size,
          height: size,
          '--loader-color': color
        } as React.CSSProperties}
        role="status"
        aria-label={`Loading: ${percentage}%`}
        aria-live="polite"
      >
        <svg
          className={`${globalLoader}__circle`}
          viewBox={`0 0 ${size} ${size}`}
          aria-hidden="true"
        >
          {/* Background circle */}
          <circle
            className={`${globalLoader}__track`}
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeWidth={strokeWidth}
          />

          {/* Progress circle */}
          <circle
            className={`${globalLoader}__bar`}
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
          />
        </svg>

        <span className={`${globalLoader}__percentage`}>
          {percentage}%
        </span>
      </div>
    </div>
  );
}

export default GlobalLoader;