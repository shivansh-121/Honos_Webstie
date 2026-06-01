import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };

export function clipReveal(
  element: HTMLElement | string,
  trigger?: HTMLElement | string
) {
  return gsap.fromTo(
    element,
    { clipPath: 'inset(0 100% 0 0)' },
    {
      clipPath: 'inset(0 0% 0 0)',
      duration: 1.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: trigger ?? element,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    }
  );
}

export function fadeUp(
  elements: gsap.TweenTarget,
  options?: { stagger?: number; trigger?: gsap.DOMTarget }
) {
  const trigger =
    options?.trigger ??
    (typeof elements === 'string' ? elements : (elements as Element));

  return gsap.fromTo(
    elements,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 0.9,
      stagger: options?.stagger ?? 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    }
  );
}

export function countUp(
  element: HTMLElement,
  target: number,
  suffix = '',
  decimals = 0
) {
  const obj = { val: 0 };
  return gsap.to(obj, {
    val: target,
    duration: 2,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
    onUpdate: () => {
      const v =
        decimals > 0
          ? obj.val.toFixed(decimals)
          : Math.round(obj.val).toString();
      element.textContent = `${v}${suffix}`;
    },
  });
}

export function parallaxLayer(
  element: HTMLElement | string,
  speed: number,
  trigger: string | Element
) {
  return gsap.to(element, {
    y: () => speed * 100,
    ease: 'none',
    scrollTrigger: {
      trigger,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  });
}
