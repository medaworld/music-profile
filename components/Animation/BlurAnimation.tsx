import { useCallback, useEffect, useRef } from 'react';
import styled, { useTheme } from 'styled-components';

interface IShape {
  x: number;
  y: number;
  translateX: number;
  translateY: number;
  size: number;
  alpha: number;
  targetAlpha: number;
  dx: number;
  dy: number;
  magnetism: number;
  shapeForm: string;
  colorStyle: string;
}

interface ICanvasSize {
  w: number;
  h: number;
}

interface IMouse {
  x: number;
  y: number;
}

interface ISettings {
  quantity: number;
  staticity: number;
  ease: number;
}

interface IGradientColors {
  startColor: string;
  endColor: string;
}

class BlurAnimation {
  private canvas: HTMLCanvasElement | null;
  private canvasContainer: HTMLElement | null;
  private context: CanvasRenderingContext2D | null;
  private dpr: number;
  private settings: ISettings;
  private shapes: IShape[];
  private mouse: IMouse;
  private canvasSize: ICanvasSize;
  private ovalGradientColors: IGradientColors;
  public initCanvasBound: (event: UIEvent) => void;
  public onMouseMoveBound: (event: MouseEvent) => void;

  constructor(
    el: HTMLCanvasElement | null,
    { quantity = 15, staticity = 50, ease = 50 }: ISettings = {} as ISettings,
    gradientColors: IGradientColors = {
      startColor: 'rgba(255, 255, 255, 1)',
      endColor: 'rgba(255, 255, 255, 0)',
    }
  ) {
    this.canvas = el;
    this.canvasContainer = this.canvas?.parentElement || null;
    this.context = this.canvas?.getContext('2d') || null;
    this.dpr = window.devicePixelRatio || 1;
    this.settings = {
      quantity,
      staticity,
      ease,
    };
    this.shapes = [];
    this.mouse = {
      x: 0,
      y: 0,
    };
    this.canvasSize = {
      w: 0,
      h: 0,
    };
    this.ovalGradientColors = gradientColors;
    this.initCanvasBound = this.initCanvas.bind(this);
    this.onMouseMoveBound = this.onMouseMove.bind(this);

    if (this.canvas && this.context && this.canvasContainer) {
      this.init();
    }
  }

  private init() {
    this.initCanvas();
    this.animate();
    window.addEventListener('mousemove', this.onMouseMoveBound);
  }

  private initCanvas() {
    this.resizeCanvas();
    this.drawParticles();
  }

  private onMouseMove(event: MouseEvent) {
    const { clientX, clientY } = event;
    const rect = this.canvas?.getBoundingClientRect();
    if (rect) {
      const { w, h } = this.canvasSize;
      const x = clientX - rect.left - w / 2;
      const y = clientY - rect.top - h / 2;

      this.mouse.x = x;
      this.mouse.y = y;
    }
  }

  private resizeCanvas() {
    this.shapes.length = 0;
    this.canvasSize.w = this.canvasContainer?.offsetWidth || 0;
    this.canvasSize.h = this.canvasContainer?.offsetHeight || 0;
    if (!this.canvas || !this.context) return;

    this.canvas.width = this.canvasSize.w * this.dpr;
    this.canvas.height = this.canvasSize.h * this.dpr;
    this.canvas.style.width = this.canvasSize.w + 'px';
    this.canvas.style.height = this.canvasSize.h + 'px';

    this.context.scale(this.dpr, this.dpr);
  }

  private shapeParams(): IShape {
    const x = Math.floor(Math.random() * this.canvasSize.w);
    const y = Math.floor(Math.random() * this.canvasSize.h);
    const translateX = 0;
    const translateY = 0;
    const size = Math.floor(Math.random()) + 3;
    const alpha = 0;
    const targetAlpha = parseFloat((Math.random() * 0.6 + 0.1).toFixed(1));
    const dx = (Math.random() - 0.5) * 0.2;
    const dy = (Math.random() - 0.5) * 0.2;
    const magnetism = 0.1 + Math.random() * 4;
    const shapeForm = Math.random() < 0.6 ? 'oval' : 'oval';
    const colorStyle = Math.random() < 0.65 ? 'blue' : 'pink';

    return {
      x,
      y,
      translateX,
      translateY,
      size,
      alpha,
      targetAlpha,
      dx,
      dy,
      magnetism,
      shapeForm,
      colorStyle,
    };
  }

  private drawShape(shape: IShape, update = false) {
    if (!this.context) return;

    const { x, y, translateX, translateY, size, shapeForm, colorStyle } = shape;
    let gradient;
    if (shapeForm === 'oval') {
      gradient = this.context.createRadialGradient(x, y, 0, x, y, size);
      gradient.addColorStop(0, this.ovalGradientColors.startColor);
      gradient.addColorStop(1, this.ovalGradientColors.endColor);
    } else {
      gradient = this.context.createConicGradient(Math.PI, x, y);
      if (colorStyle === 'pink') {
        gradient.addColorStop(0, '#ff69b433');
        gradient.addColorStop(55 / 360, '#ff149333');
        gradient.addColorStop(120 / 360, '#ffb6c133');
        gradient.addColorStop(160 / 360, '#ff69b433');
      } else {
        gradient.addColorStop(0, '#16abff33');
        gradient.addColorStop(55 / 360, '#0885ff33');
        gradient.addColorStop(120 / 360, '#54d6ff33');
        gradient.addColorStop(160 / 360, '#0071ff33');
      }
      gradient.addColorStop(1, 'transparent');
    }
    this.context.translate(translateX, translateY);
    this.context.beginPath();
    switch (shapeForm) {
      case 'oval':
        this.context.ellipse(x, y, size, size, 0, 0, 2 * Math.PI);
        break;
      case 'rectangle':
        this.context.rect(x - size, y - size / 2, size * 2, size);
        break;
    }
    this.context.fillStyle = gradient;
    this.context.fill();
    this.context.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    if (!update) {
      this.shapes.push(shape);
    }
  }

  private clearContext() {
    this.context?.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h);
  }

  private drawParticles() {
    this.clearContext();

    for (let i = 0; i < this.settings.quantity; i++) {
      this.drawShape(this.shapeParams());
    }
  }

  private remapValue(
    value: number,
    start1: number,
    end1: number,
    start2: number,
    end2: number
  ): number {
    const remapped =
      ((value - start1) * (end2 - start2)) / (end1 - start1) + start2;
    return remapped > 0 ? remapped : 0;
  }

  private animate() {
    this.clearContext();
    this.shapes.forEach((shape, i) => {
      const edge = [
        shape.x + shape.translateX - shape.size,
        this.canvasSize.w - shape.x - shape.translateX - shape.size,
        shape.y + shape.translateY - shape.size,
        this.canvasSize.h - shape.y - shape.translateY - shape.size,
      ];
      const closestEdge = edge.reduce((a, b) => Math.min(a, b));
      const remapClosestEdgeStr = this.remapValue(
        closestEdge,
        0,
        20,
        0,
        1
      ).toFixed(2);
      const remapClosestEdge = Number(remapClosestEdgeStr);
      if (remapClosestEdge > 1) {
        shape.alpha += 0.02;
        if (shape.alpha > shape.targetAlpha) shape.alpha = shape.targetAlpha;
      } else {
        shape.alpha = shape.targetAlpha * Number(remapClosestEdge);
      }
      shape.x += shape.dx;
      shape.y += shape.dy;
      shape.translateX +=
        (this.mouse.x / (this.settings.staticity / shape.magnetism) -
          shape.translateX) /
        this.settings.ease;
      shape.translateY +=
        (this.mouse.y / (this.settings.staticity / shape.magnetism) -
          shape.translateY) /
        this.settings.ease;
      if (
        shape.x < -shape.size ||
        shape.x > this.canvasSize.w + shape.size ||
        shape.y < -shape.size ||
        shape.y > this.canvasSize.h + shape.size
      ) {
        this.shapes.splice(i, 1);
        const newshape = this.shapeParams();
        this.drawShape(newshape);
      } else {
        this.drawShape(shape, true);
      }
    });
    requestAnimationFrame(this.animate.bind(this));
  }

  public destroy() {
    window.removeEventListener('mousemove', this.onMouseMoveBound);
  }
}

const CanvasContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 0;
  background-color: #1a202c65;
  user-select: none;

  canvas {
    filter: blur(1px);
    -webkit-filter: blur(1px);
  }
`;

export default function BlurAnimationCanvas() {
  const theme = useTheme();
  let customGradientColors: any;
  customGradientColors = {
    startColor: '#fff',
    endColor: '#ffffff3b',
  };
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const initializeBlurAnimation = useCallback(() => {
    const instance = new BlurAnimation(
      canvasRef.current,
      undefined,
      customGradientColors
    );
    return () => {
      instance.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(initializeBlurAnimation, [initializeBlurAnimation]);

  return (
    <CanvasContainer>
      <canvas ref={canvasRef} data-particle-animation></canvas>
    </CanvasContainer>
  );
}
